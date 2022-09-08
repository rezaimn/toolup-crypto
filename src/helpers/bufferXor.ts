export function bufferXor(a: any, b: any) {
    var length = Math.max(a.length, b.length);
    var buffer = Buffer.allocUnsafe(length);

    for (var i = 0; i < length; ++i) {
        buffer[i] = a[i] ^ b[i];
    }

    return buffer;
}
