export class UUIDLengthException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'UUID length Exception';
    }
}
