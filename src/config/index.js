require('dotenv').config() // load .env file

module.exports = {
  port: process.env.PORT,
  app: process.env.APP,
  env: process.env.NODE_ENV,
  secret: process.env.APP_SECRET,
  hostname: process.env.HOSTNAME,
  openFoodFactsUri: process.env.OPEN_FOOD_FACTS,
  mongo: {
    uri: process.env.MONGOURI,
    testURI: process.env.MONGOTESTURI
  }
}
