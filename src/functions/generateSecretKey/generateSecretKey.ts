import { generateRandomKey } from '../../helpers/generateRandomKey/generateRandomKey';
import {
    SECRET_KEY_RANDOM_PART_LENGTH,
    SECRET_KEY_VERSION,
    SECRET_KEY_WISH_LIST,
} from '../../configs';
import { UUIDLengthException } from '../../exceptions/UUIDLengthException';
import { WrongTypeException } from '../../exceptions/wrongTypeException';
export interface IGenerateSecretKeyInput {
    (uuid: string): string;
}

export const generateSecretKey: IGenerateSecretKeyInput = (uuid = '') => {
    if (typeof uuid !== 'string') {
        throw new WrongTypeException('UUID must be string.');
    }
    if (uuid?.length < 6) {
        throw new UUIDLengthException(
            'UUID length must be equal or bigger than 6 characters.'
        );
    }
    const secretKey =
        SECRET_KEY_VERSION +
        uuid?.substr(0, 6) +
        generateRandomKey(SECRET_KEY_RANDOM_PART_LENGTH, SECRET_KEY_WISH_LIST);
    return secretKey;
};
