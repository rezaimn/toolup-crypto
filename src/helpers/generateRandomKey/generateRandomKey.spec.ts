import { generateRandomKey } from './generateRandomKey';
import { SECRET_KEY_WISH_LIST } from '../../configs';

describe('generateRandomKey()', () => {
    it('Should return a 26 character string.', () => {
        const randomKey = generateRandomKey(26, SECRET_KEY_WISH_LIST);
        expect(randomKey).toHaveLength(26);
    });
    it('Should return string series.', () => {
        const randomKey = generateRandomKey(26, SECRET_KEY_WISH_LIST);
        expect(typeof randomKey).toEqual('string');
    });
    it('Should not includes 0,1,I,O,U', () => {
        const randomKey = generateRandomKey(26, SECRET_KEY_WISH_LIST);
        expect(
            !randomKey?.includes('0' || '1' || 'I' || 'O' || 'U')
        ).toBeTruthy();
    });
    it('Should generate 1000000 uniq randomString', () => {
        const set = new Set();
        const arr: string[] = [];
        for (let i = 0; i < 1000000; i++) {
            const item = generateRandomKey(26, SECRET_KEY_WISH_LIST);
            set.add(item);
            arr.push(item);
        }
        expect(set.size).toBe(arr.length);
    });
});
