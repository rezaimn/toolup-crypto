import { BASE_64 } from '../../constants/regex';
import { isNumber, isString } from '../../helpers';
import { deriveMuk, IDeriveMUKArgs } from './deriveMUK';

describe('deriveMuk', () => {
    const props: IDeriveMUKArgs = {
        email: 'mohsen.n@agileful.com',
        iterations: 100_000,
        password: '12345mohsen',
        salt: 'jFCIHQrMcfcV3y9PRzy23A==',
        accountId: 'W5S8VR',
        secret: '54KCLWJMARG9W98GADD7AW3KG5',
        version: 'A3',
    };

    it('Should work correctly', async () => {
        const result = await deriveMuk(props);
        const expected = 'og4tJN8XYa0tFB/siKnvOtiF3174M/voS2dnSm0tw4U=';
        expect(result).toBe(expected);
    });

    it('Should return a base64 value', async () => {
        const result = await deriveMuk(props);
        expect(result).toMatch(BASE_64);
    });
});

describe('deriveMuk exceptions', () => {
    const props: any = {
        email: 'mohsen.n@agileful.com',
        iterations: 100_000,
        password: '12345mohsen',
        salt: 'jFCIHQrMcfcV3y9PRzy23A==',
        accountId: 'W5S8VR',
        secret: '54KCLWJMARG9W98GADD7AW3KG5',
        version: 'A3',
    };

    it('Should throw exception for string fields correctly', async () => {
        for (let [key, value] of Object.entries(props)) {
            if (isString(value)) {
                const args = Object.assign({}, props, { [`${key}`]: true });

                try {
                    await deriveMuk(args);
                } catch (error) {
                    expect(error).toBeInstanceOf(TypeError);
                    expect(error).toHaveProperty(
                        'message',
                        `${key} must be string`
                    );
                }
            }
        }
    });

    it('Should throw exception for number fields correctly', async () => {
        for (let [key, value] of Object.entries(props)) {
            if (isNumber(value)) {
                const args = Object.assign({}, props, { [`${key}`]: true });

                try {
                    await deriveMuk(args);
                } catch (error) {
                    expect(error).toBeInstanceOf(TypeError);
                    expect(error).toHaveProperty(
                        'message',
                        `${key} must be number`
                    );
                }
            }
        }
    });
});
