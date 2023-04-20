import vm from "vm";

const allowedOperands = ['+', '-', '/', '*']

export const parseInput = (input: string, context: vm.Context): void => {
    if(!isNaN(Number(input))) {
        context.values.push(input);
    } else if (allowedOperands.includes(input)){
        const last = context.values.pop();
        const first = context.values.pop();
        const result = eval(`${first} ${input} ${last}`);
        if (!isNaN(Number(result))) {
            context.values.push(result);
        }
    }
};

export const rpnEval = (cmd: string, context: vm.Context, _: string, callback: Function): void => {
    const values = cmd.trim().split(' ');
    for (const value of values) {
        parseInput(value, context);
    }
    const result = context.values.length > 0 ? context.values[context.values.length - 1] : '';
    callback(null, result)
};
