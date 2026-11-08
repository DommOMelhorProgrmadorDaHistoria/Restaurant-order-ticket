import pool from "../database/db";
    import type { Request, Response } from "express";
    import type { itens } from "../types/itens";
        import { validarItem } from "../validators/itemValidator";
        import { validarCategoria } from "../validators/categoriaValidator";
        import { validarValor } from "../validators/valorValidator";


export async function buscarItem(req: Request, res: Response){
    const resultado = await pool.query("SELECT * FROM itens ORDER BY id_item")
    return res.json(resultado.rows)
}
export async function buscarItemPorId(req: Request, res: Response){
try{
    const {id} = req.params

    const select_itens = await pool.query("SELECT * FROM ITENS WHERE id_item = $1",[id])

    if (select_itens.rows.length === 0){
        return res.status(404).json({mensagem: "item não encontrado"})
    }
    if (!select_itens){
        return res.status(404).json({mensagem: "item não encontrado ou não existe"})
    }
        return res.json(select_itens.rows[0])

}catch(error){
    return res.status(500).json({mensagem: "houve um erro interno no servidor"})
}

}
export async function criarItem(req: Request, res: Response){
    const {nome_item,categoria_item,valor_item}: itens = req.body

    if (!validarItem(nome_item)){
    return res.status(400).json({mensagem: `campo nome_item inválido, tente novamente`})}
    
    if (!validarCategoria(categoria_item)){
        return res.status(400).json({mensagem: "campo categoria_item inválido"})
    }
    if(!validarValor(valor_item)){
        return res.status(400).json({mensagem: "campo valor_item inválido"})
    }
    
    const resultado =  await pool.query("INSERT INTO itens (nome_item,categoria_item,valor_item)             VALUES ($1,$2,$3) RETURNING *",[nome_item,categoria_item,valor_item])

    return res.json(resultado.rows[0])

}