export const writeOut = (input: string): string => {
    // edge case to make sure a string is always returned
    if (isNaN(Number(input))) {
        return '';
    }
    // add decimal to an integer value for common returns
    if (Number.isInteger(Number(input))) {
        return Number(input).toFixed(1);
    }
    return String(parseFloat(input));
};
