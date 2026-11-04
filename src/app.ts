import "dotenv/config"
import express from "express"
import rotaItens from "./routes/itens.routes"
const app = express()
app.use(express.json())

app.use('/itens',rotaItens)

export default app
