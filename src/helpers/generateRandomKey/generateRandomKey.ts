export interface IGenerateSecretKeyInput {
    (length: number, wishlist?: string): string;
}

export const generateRandomKey: IGenerateSecretKeyInput = (
    length = 0,
    wishlist = ''
) => {
    return Array.from(global.crypto.getRandomValues(new Uint32Array(length)))
        .map(x => wishlist[x % wishlist.length])
        .join('');
};
