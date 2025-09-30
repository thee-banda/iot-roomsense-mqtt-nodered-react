import express from 'express'
import mongoose from 'mongoose'
import mqtt from 'mqtt'
import dotenv from 'dotenv'
import cors from 'cors'

// โหลด .env
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Route ทดสอบ
app.get('/', (_req, res) => {
  res.send('IoT Backend API is running...')
})

// ===== MongoDB Connect =====
if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch((err) => console.error('❌ MongoDB error:', err))
}

// ===== MQTT Connect =====
if (process.env.MQTT_URL) {
  const client = mqtt.connect(process.env.MQTT_URL)

  client.on('connect', () => {
    console.log('✅ MQTT connected')
    client.subscribe('roomsense/+/telemetry')
  })

  client.on('message', (topic, message) => {
    console.log(`📩 [${topic}] ${message.toString()}`)
  })
}

// ===== Start Server =====
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`)
})
