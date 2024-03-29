import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import fs from 'fs'
import cors from 'cors'

const app = express()
const PORT = 5000

app.use(express.json())
app.use(cors())

app.listen(PORT,()=>console.log(`Server is listing on ${PORT}`))