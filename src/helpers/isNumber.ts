export function isNumber(n: any) {
    return Number(n) === n && isFinite(n);
}
