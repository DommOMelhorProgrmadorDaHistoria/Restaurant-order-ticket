import pool from "../database/db";
export async function buscarPedido(req: Request, res: Response){
try{
    const resultado = await pool.query("SELECT * FROM pedidos")
 }catch(error){}
}
