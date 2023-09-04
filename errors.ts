
/**
 * Clase Base de nuestros errores.
 * Clase que se usará como base y parte común
 * de los errores de nuestro backend.
 */
export class BaseException extends Error {
    status: number;
    name: string;

    constructor(status: number, name: string, message: string) {
        super(message);
        this.status = status;
        this.name = name;
    }
}

/**
 * Error NotFoundException.
 * Este error es un error especifico que extiende
 * de nuestro BaseException.
 */
export class NotFoundException extends BaseException {
    constructor(message: string = "Not found") {
        super(404, "NOT_FOUND", message);
    }
}

