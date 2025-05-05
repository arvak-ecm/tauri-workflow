const express = require('express')
const fs = require('fs')
const path = require('path')
const cors = require('cors')

const port = 3000
const lockPath = path.resolve('.server.lock')

;(async () => {
  // Guardar PID
  fs.writeFileSync(lockPath, String(process.pid))

  const app = express()
  app.use(cors({ origin: 'http://localhost:1420' }))

  app.get('/ping', (_, res) => res.json({ message: 'pong' }))
  app.get('/status', (_, res) => res.json({ running: true }))
  app.get('/pid', (_, res) => res.json({ pid: process.pid }))

  app.post('/shutdown', (req, res) => {
    res.send('🛑 shutting down...')
    server.close(() => process.exit(0))
  })

  const server = app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port} (PID ${process.pid})`)
  })

  const shutdown = () => {
    console.log('\n🛑 Shutting down...')
    if (fs.existsSync(lockPath)) fs.unlinkSync(lockPath)
    server.close(() => process.exit(0))
  }

  process.on('SIGINT', shutdown)
  process.on('SIGTERM', shutdown)
})()
