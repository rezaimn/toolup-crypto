import {
    DEFAULT_RANDOM_STRING_LENGTH,
    RANDOM_STRING_DOMAIN as RSD,
} from '../configs';
import { isNumber } from './isNumber';

type Options = {
    domain?: string;
};
/**
 *
 * @param len random string lengtgh
 * @returns {String}
 */
export function randomString(
    length: number = DEFAULT_RANDOM_STRING_LENGTH,
    options?: Options
): string {
    /*

     */
    var S = options?.domain || RSD?.lower?.concat(RSD?.upper);

    if (!isNumber(length)) {
        throw new Error('Provided length must be a finite number!');
    }

    if (length < 10) {
        console.warn(
            'Provided length is too small, be aware that we can not guarantee uniqueness or unpredictability.'
        );
    }

    return Array(length)
        .join()
        .split(',')
        .map(() => S.charAt(Math.floor(Math.random() * S.length)))
        .join('');
}
