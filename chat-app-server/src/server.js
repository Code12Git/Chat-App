const express = require('express')
const cors = require('cors')
const fromEnv = require('./utils/fromenv')
const app = express()
const logger = require('./utils/logger')
const connectDB = require('./config/connection')
const port = fromEnv('PORT') || 3000;
connectDB()
app.use(cors())


app.listen(port, () => {
    logger.info(`Server running on port ${port}`)
})