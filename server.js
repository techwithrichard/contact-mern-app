const express = require("express")
const dotenv = require("dotenv").config()
const contactRouter = require("./routes/contactRoutes")
const errorHandler = require("./middleware/errorHandler")
const connectDB = require("./config/dbConnection")

connectDB();
const app = express()

// app.get('/api/contacts', (req, res)=>{
//     res.status(200).json({"message":"Get all contacts"})
// })
app.use(express.json({}))
app.use(errorHandler)
app.use("/api/contacts", contactRouter)

const port = process.env.PORT || 5001
app.listen(port, ()=>{
    console.log(`App running in port ${port}`)
})