import {
    base64StringToUint8Array,
    stringToArrayBuffer,
    base64ToHex,
} from '../../helpers';

export interface IDerivePasswordKeyArgs {
    email: string;
    salt: string;
    password: string;
    iterations: number;
}

export async function derivePasswordKey({
    email,
    salt,
    password,
    iterations,
}: IDerivePasswordKeyArgs): Promise<string> {
    /*
     */
    const emailInputMaterialKey = await crypto.subtle.importKey(
        'raw',
        base64StringToUint8Array(salt),
        'HKDF',
        false,
        ['deriveKey', 'deriveBits']
    );

    const hkdfOnEmail = await window.crypto.subtle.deriveKey(
        {
            name: 'HKDF',
            info: stringToArrayBuffer('PBES2g-HS256'),
            hash: 'SHA-256',
            salt: stringToArrayBuffer(email),
        } as any,
        emailInputMaterialKey,
        {
            name: 'AES-CTR',

            length: 256,
        },
        true,
        ['encrypt', 'decrypt']
    );

    const hkdfOnEmailResult = await crypto.subtle.exportKey('raw', hkdfOnEmail);

    const passwordInputMaterialKey = await crypto.subtle.importKey(
        'raw',
        stringToArrayBuffer(password),
        'PBKDF2',
        false,
        ['deriveKey', 'deriveBits']
    );

    const pbkdfOnPassword = await window.crypto.subtle.deriveKey(
        {
            name: 'PBKDF2',
            hash: 'SHA-256',
            salt: hkdfOnEmailResult,
            iterations,
        },
        passwordInputMaterialKey,
        {
            name: 'AES-CBC',
            length: 256,
        },
        true,
        ['encrypt', 'decrypt']
    );

    const pbkdfOnPasswordResult = await crypto.subtle.exportKey(
        'jwk',
        pbkdfOnPassword
    );

    return base64ToHex(pbkdfOnPasswordResult.k as string);
}
