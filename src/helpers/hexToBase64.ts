export function hexToBase64(s: string) {
    return Buffer.from(s, 'hex').toString('base64');
}
