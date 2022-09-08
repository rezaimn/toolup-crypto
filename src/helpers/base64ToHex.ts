export function base64ToHex(s: string) {
    return Buffer.from(s, 'base64').toString('hex');
}
