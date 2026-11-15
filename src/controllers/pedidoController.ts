import pool from "../database/db";
import type { Request, Response } from "express";
export async function buscarPedido(req: Request, res: Response){
try{
    const resultado = await pool.query(`
  SELECT 
   nome_item,
   categoria_item,
   valor_item,
   itens_pedido.quantidade_item,
   pedidos.numero_pedido,
   (itens.valor_item * itens_pedido.quantidade_item) AS subtotal
   FROM itens

INNER JOIN itens_pedido
ON itens.id_item = itens_pedido.id_item

INNER JOIN pedidos
ON pedidos.id_pedido = itens_pedido.id_pedido`)



    return res.status(200).json(resultado.rows)
 }catch(error){

 }
}
