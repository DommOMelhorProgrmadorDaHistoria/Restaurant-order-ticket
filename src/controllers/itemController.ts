import pool from "../database/db";
import type { Request, Response } from "express";
import type { itens } from "../types/itens";


export async function buscarItem(req: Request, res: Response){
    const resultado = await pool.query("SELECT * FROM itens ORDER BY id_itens")
    return res.json(resultado.rows)
}
export async function buscarItemPorId(req: Request, res: Response){
    const {id} = req.params
    const resultado = await pool.query("SELECT * FROM ITENS WHERE id_item = $1",[id])

    return res.json(resultado.rows[0])
}
export async function criarItem(req: Request, res: Response){
    const {nome_item,categoria_item,valor_item}: itens = req.body
    const resultado = await pool.query("INSERT INTO itens (nome_item,categoria_item,valor_item) VALUES ($1,$2,$3) RETURNING *",[nome_item,categoria_item,valor_item])
    return res.json(resultado.rows[0])
}