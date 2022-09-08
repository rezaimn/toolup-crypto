import {
    arrayToBase64String,
    bufferXor,
    isNumber,
    isString,
} from '../../helpers';
import { derivePasswordKey } from '../derivePasswordKey';
import { deriveSecretKey } from '../deriveSecretKey';

export interface IDeriveMUKArgs {
    email: string;
    iterations: number;
    password: string;
    salt: string;
    accountId: string;
    secret: string;
    version: string;
}

export async function deriveMuk({
    accountId,
    email,
    version,
    secret,
    password,
    iterations,
    salt,
}: IDeriveMUKArgs): Promise<string> {
    if (!isString(accountId)) {
        throw new TypeError('accountId must be string');
    }

    if (!isString(email)) {
        throw new TypeError('email must be string');
    }

    if (!isString(version)) {
        throw new TypeError('version must be string');
    }

    if (!isString(secret)) {
        throw new TypeError('secret must be string');
    }

    if (!isString(password)) {
        throw new TypeError('password must be string');
    }

    if (!isString(salt)) {
        throw new TypeError('salt must be string');
    }

    if (!isNumber(iterations)) {
        throw new TypeError('iterations must be number');
    }

    const derivedPasswordKey = await derivePasswordKey({
        email,
        iterations,
        password,
        salt,
    });

    const derivedSecretKey = await deriveSecretKey({
        accountId,
        secret,
        version,
    });

    const xorResult = bufferXor(
        Buffer.from(derivedPasswordKey, 'hex'),
        Buffer.from(derivedSecretKey, 'hex')
    );

    return arrayToBase64String(xorResult);
}
