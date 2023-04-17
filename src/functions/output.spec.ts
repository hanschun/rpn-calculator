import { writeOut } from "./output";

describe('output', () => {
    it('should output empty string when empty argument passed', () => {
        const input = '';
        const result = writeOut(input);
        expect(result).toBe('');
    });

    it('should output float with precision 1 when integer argument passed', () => {
        const input = '1';
        const result = writeOut(input);
        expect(result).toBe('1.0');
    });
    
    it('should output float when float argument passed', () => {
        const input = '1.25';
        const result = writeOut(input);
        expect(result).toBe('1.25');
    });
});