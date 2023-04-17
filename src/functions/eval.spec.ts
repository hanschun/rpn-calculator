import vm from "vm";
import { parseInput, rpnEval } from "./eval";

describe('eval', () => {
    let context: vm.Context;
    beforeEach(() => {
        context = vm.createContext();
        context.values = [];
    });

    describe('parseInput', () => {
        it('should push a number input onto the context values stack', () => {
            parseInput('1', context);
            expect(context.values[context.values.length - 1]).toBe('1');
        });
        it('should use an operator to evaluate an expression', () => {
            const newContext = context;
            newContext.values = ['1', '2'];
            parseInput('+', context);
            expect(context.values[context.values.length - 1]).toBe(3);
        });
        it('should ignore non-number, non-allowed-operator inputs', () => {
            parseInput('@', context);
            expect(context.values).toEqual([]);
        });
    });

    describe('rpnEval', () => {
        const callback = (_: any, out: string) => {
            return out;
        };

        it('should handle a single input value', () => {
            rpnEval('1', context, '', callback);
            expect(context.values[context.values.length - 1]).toBe('1');
        });
        it('should handle a series of space-delimited values', () => {
            rpnEval('1 2 +', context, '', callback);
            expect(context.values[context.values.length - 1]).toBe(3);
        });
        it('should return empty string if there are no values in the stack', () => {
            rpnEval('+', context, '', callback);
            expect(context.values).toEqual([]);
        });
    });
});