import { isNumber } from './isNumber';

export function randomBytes(length: number) {
    if (!isNumber(length)) {
        throw new Error('Provided length must be a finite number!');
    }

    const bytes = new Uint8Array(length);
    crypto.getRandomValues(bytes);
    return bytes;
}
