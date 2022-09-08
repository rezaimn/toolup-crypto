import { stringToArrayBuffer, base64ToHex } from '../../helpers';

export interface IDeriveSecretKeyArgs {
    secret: string;
    accountId: string;
    version: string;
}

export async function deriveSecretKey({
    secret,
    accountId,
    version,
}: IDeriveSecretKeyArgs): Promise<string> {
    const inputMaterialKey = await crypto.subtle.importKey(
        'raw',
        new TextEncoder().encode(secret),
        'HKDF',
        false,
        ['deriveKey', 'deriveBits']
    );

    const hkdfOnSecret = await window.crypto.subtle.deriveKey(
        {
            name: 'HKDF',
            info: stringToArrayBuffer(version),
            hash: 'SHA-256',
            salt: stringToArrayBuffer(accountId),
        } as any,
        inputMaterialKey,
        {
            name: 'AES-CTR',
            length: 256,
        },
        true,
        ['encrypt', 'decrypt']
    );

    const hkdfOnSecretResult = await crypto.subtle.exportKey(
        'jwk',
        hkdfOnSecret
    );

    return base64ToHex(hkdfOnSecretResult.k as string);
}
