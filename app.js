const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');
const connect = require('./utils/connectDb');
const connectAi = require('./utils/connectAi');
const Chat = require('./models/chat')
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', socket => {
  console.log(socket.id);
  socket.on("prompt-input",async(input)=>{
    console.log(input);
    //openai response and save to mongodb here
    await Chat.create({role: "customer", message: input})
    const response = await connectAi(input);
    io.emit("openai-response",response)
    await Chat.create({role:"assistant", message: response})
    // const replyMsg = input + " this is reply";
  })
})


app.use(express.static(path.join(__dirname,'public')));

app.post('/',(req,res)=> {
  return res.sendFile('index.html')
})

const port = process.env.PORT || 3300
const startServer = async() => {
  try {
    await connect(process.env.MONGO_URI);
    server.listen(port,()=>{
      console.log(`server running on ${port}---------------------`);
    })
  } catch (error) {
    console.log(error);
  }
}

startServer()


