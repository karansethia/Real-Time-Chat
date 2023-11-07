const { OpenAI } = require('openai');
require('dotenv').config()

const connectAi = async(prompt) => {
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  })

const response = await client.chat.completions.create(
 { model:"gpt-3.5-turbo",
  messages:[
    {role: "user",
    content:prompt}
  ]}
)
  return response.choices[0].message.content;
}

module.exports = connectAi