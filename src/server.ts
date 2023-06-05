import mongoose from 'mongoose'
import config from './config'
import app from './app'
import { logger, errorlogger } from './shared/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`Database is connected Successfully`)

    app.listen(config.port, () => {
      logger.info(`Application app listening on port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error(`Failled to connect database`, err)
  }
}
bootstrap()
