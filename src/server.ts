import express from "express"
import {router}from "./routes"


const app=express()
const cors=require('cors')

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors({
  origin: '*'
}));
app.use(router)

app.get('/a', (req, res) => {
    res.send('Olá! Bem-vindo à raiz da aplicação!');
  });

app.listen(PORT,()=>console.log("Server running "+PORT))

