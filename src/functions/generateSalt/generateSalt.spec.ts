import { generateSalt } from './generateSalt';
import { BASE_64 } from '../../constants/regex';

describe('generateSalt()', () => {
    it('Should generate a 22 char salt', () => {
        const salt = generateSalt();
        expect(salt.length).toBe(22);
    });

    it('Should generate a 14 char salt', () => {
        const salt = generateSalt(10);
        expect(salt.length).toBe(14);
        expect(typeof salt).toBe('string');
    });

    it('Should generate a base64 salt', () => {
        const salt = generateSalt();
        expect(salt.concat('==')).toMatch(BASE_64);
    });

    it('Should salt must not be undefined', () => {
        const salt = generateSalt();
        expect(salt).not.toBe(undefined);
    });

    it('Should generate a string salt', () => {
        const salt = generateSalt();
        expect(typeof salt).toBe('string');
    });
});
