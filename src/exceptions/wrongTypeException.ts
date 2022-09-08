export class WrongTypeException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'Wrong Type Exception';
    }
}
