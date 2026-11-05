import {Router} from "express"
import { buscarItem, buscarItemPorId, criarItem } from "../controllers/itemController"
const rotaItens = Router()

rotaItens.get('/',buscarItem)
rotaItens.get('/:id',buscarItemPorId)
rotaItens.post("/",criarItem)
export default rotaItens
