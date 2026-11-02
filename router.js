import { Router } from "express";
import RealtyController from "./RealtyController.js";

const router = new Router()

router.get("/realts" , RealtyController.getRealts)
router.post("/addrealty" , RealtyController.addRealty)
router.patch("/realty/:id", RealtyController.patchRealty)
router.put("/realty/:id", RealtyController.putRealty)
router.delete("/deleterealty/:id", RealtyController.deleteRealty)

export default router;