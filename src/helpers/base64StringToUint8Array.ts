import { isString } from './isString';

export function base64StringToUint8Array(s: string) {
    if (!isString(s)) {
        throw new Error('Provided base64 must be string');
    }

    let asciiString = atob(s);
    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
}
