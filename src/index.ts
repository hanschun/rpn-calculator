import repl from 'node:repl';
import vm from "vm";
import figlet from 'figlet';
import { writeOut } from './functions/output';
import { rpnEval } from './functions/eval';

const values: number[] = [];
let r: repl.REPLServer | undefined = undefined;

export const setContext = (context: vm.Context): void => {
    context.values = values;
};

export const start = (): void => {
    console.log(figlet.textSync('RPN CALCULATOR'));
    console.log('Enter values in Reverse Polish Notation to begin');
    r  = repl.start({
        prompt: '> ',
        eval: rpnEval,
        writer: writeOut
    });
    if (r.context) { // to let the test bypass context setting
        setContext(r.context);
    }
};

start();