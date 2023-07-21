import express from "express"
import {router}from "./routes"


const app=express()
const cors=require('cors')

const PORT=3000
app.use(express.json())
app.use(cors())
app.use(router)
app.listen(PORT,()=>console.log("Server running "+PORT))
