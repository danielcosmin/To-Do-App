const {log} = require("console")

const express = require("express")
const app = express()
const mongoose = require('mongoose')

// configuring dotenv
const env = require('dotenv')
env.config()
const MONGODB_URI = process.env.MONGODB_LINK
const PORT = process.env.PORT



app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

// setting up template engine
app.set("view engine", "ejs")


// Routes
const toDoRoutes = require('./routes/todo')
app.use(toDoRoutes)


// Connecting to database
mongoose.set('useFindAndModify', false) // to fix deprecation warnings
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    log('MongoDB database is connected')
  )
  .catch(err => {
      log(err)
  })


// server
app.listen(PORT, () => console.log("Server Up and running on port : " + PORT))
