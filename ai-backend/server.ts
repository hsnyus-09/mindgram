
import express from 'express'
import OpenAI from 'openai'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

app.post('/api/generate', async (req, res) => {
  const { prompt } = req.body
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4.1',
      messages: [{ role: 'user', content: prompt }]
    })
    res.json({ result: completion.choices[0].message.content })
  } catch (error: any) {
    res.status(500).json({ error: error.toString() })
  }
})

app.listen(3001)
