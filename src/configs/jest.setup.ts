import { Crypto } from '@peculiar/webcrypto';
import encoding from 'text-encoding';
Object.defineProperty(global, 'crypto', {
    value: new Crypto(),
});
Object.defineProperty(global, 'TextDecoder', {
    value: encoding.TextDecoder,
});
Object.defineProperty(global, 'TextEncoder', {
    value: encoding.TextEncoder,
});
