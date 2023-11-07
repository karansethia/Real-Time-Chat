const submitBtn = document.getElementById('submitBtn');
const list = document.getElementById('chat');
const promptField = document.getElementById("promptinput");
const socket = io();
let room;
socket.on("connect",()=>{
  console.log(socket.id);
})
//socket events
socket.on("openai-response",(replyTxt) => {
  console.log(replyTxt);
  //openai response recieved here
  const listItem = document.createElement('li');
  listItem.classList.add('chatText')
  const msgTxt = document.createTextNode(replyTxt);
  listItem.appendChild(msgTxt);
  listItem.classList.add('responsemsg')
  list.appendChild(listItem);
  list.scrollTop = list.scrollHeight;
})

//button event listener
submitBtn.addEventListener('click',(e)=> {
  e.preventDefault();
  const promptInput = promptField.value;
  console.log(promptInput);
    socket.emit("prompt-input",promptInput, room);

  const listItem = document.createElement('li');
  listItem.classList.add('chatText');
  listItem.classList.add('promptmsg');
  const msgTxt = document.createTextNode(promptInput);
  listItem.appendChild(msgTxt);
  list.appendChild(listItem);
  promptField.value = ''
})