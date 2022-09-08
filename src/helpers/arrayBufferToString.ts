export function arrayBufferToString(a: Uint8Array) {
    if (!Array.isArray) {
        throw new Error('Provided argument is not an array');
    }
    return String.fromCharCode(...a);
}
