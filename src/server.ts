import "dotenv/config"
import app from "./app";

console.log("server funcionando")
const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
    console.log("rodando servidor na porta", {PORT})
})