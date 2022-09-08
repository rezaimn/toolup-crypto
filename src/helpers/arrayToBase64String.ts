export function arrayToBase64String(a: Uint8Array) {
    if (!Array.isArray) {
        throw new Error('Provided argument is not an array');
    }
    return btoa(String.fromCharCode(...a));
}
