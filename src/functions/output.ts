export const writeOut = (input: string) => {
    if (!input) {
        return '';
    }
    if (Number.isInteger(Number(input))) {
        return Number(input).toFixed(1);
    }
    return String(parseFloat(input));
};
