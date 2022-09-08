export function stringToArrayBuffer(s: string): Uint8Array {
    const e = new TextEncoder();
    return e.encode(s);
}
