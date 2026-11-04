import pool from "../database/db";
import type { Request, Response } from "express";
import  express from "express";
import type { itens } from "../types/itens";


export async function buscarItem(req: Request, res: Response){
    const resultado = await pool.query("SELECT * FROM itens ORDER BY id")
    return res.json(resultado.rows)
}
export async function buscarItemPorId(req: Request, res: Response){
    const {id} = req.params
    const resultado = await pool.query("SELECT * FROM ITENS WHERE ID = $1",[id])

    return res.json(resultado.rows[0])
}
export async function criarItem(req: Request, res: Response){
    const {nome,categoria,valor}: itens  = req.body
    const resultado = await pool.query("INSERT INTO itens (nome,categoria,valor) VALUES ($1,$2,$3) RETURNING *",[nome,categoria,valor])
    return res.json(resultado.rows[0])
}