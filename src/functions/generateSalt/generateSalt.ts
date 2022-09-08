import { DEFAULT_SALT_BYTE } from '../../configs';
import { arrayToBase64String, pipe, replace, randomBytes } from '../../helpers';

export interface IGenerateSaltFunction {
    (length?: number): string;
}

/**
 * @param length salt length
 * @returns {String}
 */
export const generateSalt: IGenerateSaltFunction = (
    length = DEFAULT_SALT_BYTE
): string => {
    /*
     */
    return pipe(arrayToBase64String, replace('==', ''))(randomBytes(length));
};
