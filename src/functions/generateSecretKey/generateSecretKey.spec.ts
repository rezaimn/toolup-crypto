import { generateSecretKey } from './generateSecretKey';

describe('generateSecretKey()', () => {
    it('Should return a 34 character string.', () => {
        const secretKey = generateSecretKey('AWGSTDBEM');
        expect(secretKey).toHaveLength(34);
    });
    it('Should starts with A3', () => {
        const secretKey = generateSecretKey('AWGSTDBEM');
        expect(secretKey?.startsWith('A3')).toBeTruthy();
    });
    it('Should includes first 6 character of UUID', () => {
        const secretKey = generateSecretKey('AWGSTDBEM');
        expect(secretKey?.includes('AWGSTD')).toBeTruthy();
    });
    it('Should throw UUIDLengthException when UUID is less than 6 character', () => {
        try {
            generateSecretKey('AW');
        } catch (e) {
            expect(e.message).toBe(
                'UUID length must be equal or bigger than 6 characters.'
            );
            expect(e.name).toBe('UUID length Exception');
        }
    });
    it('Should throw WrongTypeException ', () => {
        const arg: any = 2134;
        try {
            generateSecretKey(arg);
        } catch (e) {
            expect(e.message).toBe('UUID must be string.');
            expect(e.name).toBe('Wrong Type Exception');
        }
    });
    it('Should generate 1000000 uniq secretKey', () => {
        const set = new Set();
        const arr: string[] = [];
        for (let i = 0; i < 1000000; i++) {
            const item = generateSecretKey('AHSGDDHDBDVS');
            set.add(item);
            arr.push(item);
        }
        expect(set.size).toBe(arr.length);
    });
});
