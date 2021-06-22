import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";


const router = Router()

const cuc = new CreateUserController()


router.post("/users",  cuc.handle)

export {router}