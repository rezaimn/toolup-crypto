export class NullInputException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'Null Input Exception';
    }
}
