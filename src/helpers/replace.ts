export function replace(searchValue: string, replaceValue: string) {
    return (v: string) => {
        return v.replace(searchValue, replaceValue);
    };
}
