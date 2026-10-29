import dotenv from "dotenv"
import "dotenv/config"
dotenv.config({ path: "../../.env" })
import express from "express"
const app = express()


const PORT = Number(process.env.PORT) || 3000


app.listen(PORT, ()=> {
    console.log("rodando servidor na porta", {PORT})
})
export default app