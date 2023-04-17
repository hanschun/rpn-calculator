import repl from 'node:repl';
import { start } from './index';

describe('index.ts', () => {
    it('should start a repl', async () => {
        // mock repl creation to prevent test failing to tear down
        const startSpy = jest.spyOn(repl, 'start').mockImplementation(() => {
            return {} as repl.REPLServer;
        });
        start();
        expect(startSpy).toHaveBeenCalled();
    });
});