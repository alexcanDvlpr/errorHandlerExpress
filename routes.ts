import { Request, Response, Router } from "express";
import { NotFoundException } from "./errors";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    throw new NotFoundException("Ha fallado");
    return res.status(200).send({ message: "Hello There!" })
});


export default router;