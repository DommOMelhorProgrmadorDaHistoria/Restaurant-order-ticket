import dotenv from "dotenv"
dotenv.config({path: "../../../.env"})

import { Pool } from "pg"

dotenv.config({path: "../../.env"})

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error("A variável de ambiente DATABASE_URL não foi definida!")
}

const pool = new Pool({
    connectionString
})

export default pool
