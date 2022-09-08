import { derivePasswordKey, IDerivePasswordKeyArgs } from './derivePasswordKey';

describe('derivePasswordKey', () => {
    it('Should return the result correctly', async () => {
        const props: IDerivePasswordKeyArgs = {
            email: 'mohsen.n@agileful.com',
            iterations: 100_000,
            password: '12345mohsen',
            salt: 'jFCIHQrMcfcV3y9PRzy23A==',
        };

        const result = await derivePasswordKey(props);

        const expected =
            'b4fbe8b66c43bee3e95f794a075719ac3c9275238d5777ce845d25334b436051';

        expect(result).toBe(expected);
    });
});
