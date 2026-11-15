import { Router } from "express";
import { buscarPedido } from "../controllers/pedidoController";

const rotaPedidos = Router()

rotaPedidos.get('',buscarPedido)

export default rotaPedidos