export function pipe(...functions: Function[]) {
    return function(value: any) {
        return functions.reduce((currentValue, currentFunction) => {
            return currentFunction(currentValue);
        }, value);
    };
}
