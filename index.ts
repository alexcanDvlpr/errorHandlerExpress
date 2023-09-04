import express, { NextFunction, Request, Response } from "express";
import router from "./routes";
import cors from "cors";
import helmet from "helmet";
import { BaseException } from "./errors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api", router);

/**
 * Middleware para la gestion de errores.
 * Diferencia con otros middleware es que añadimos `err` a los params
 * de la función del middleware.
 */
app.use(function (err: unknown, req: Request, res: Response, next: NextFunction) {
    if (err instanceof BaseException) {
        return res.status(err.status).send({
            type: err.name,
            message: err.message
        });
    }

    return res.status(500).send({ type: "INTERNAL", message: "INTERNAL_SERVER_ERROR" })
});

app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});