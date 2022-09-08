import { deriveSecretKey, IDeriveSecretKeyArgs } from './deriveSecretKey';

describe('deriveSecretKey', () => {
    it('Should work correctly', async () => {
        const props: IDeriveSecretKeyArgs = {
            accountId: 'W5S8VR',
            secret: '54KCLWJMARG9W98GADD7AW3KG5',
            version: 'A3',
        };

        const result = await deriveSecretKey(props);
        const expected = `16f5c592b354df4ec44b66a68ffef696e417aa7d75648c26cf3a4279266ea3d4`;

        expect(result).toBe(expected);
    });
});
