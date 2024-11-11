const mongoose = require('mongoose')

const colors = {
  cyan: '\x1b[36m',
  red: '\x1b[31m',
  reset: '\x1b[0m',
}

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(
      `${colors.cyan}MongoDB Connected: ${conn.connection.host}${colors.reset}`
    )
  } catch (error) {
    console.log(`${colors.red}Error: ${error.message}${colors.reset}`)
    process.exit(1)
  }
}

module.exports = connectDB
