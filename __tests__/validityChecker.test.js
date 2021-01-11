import { checkForValidity } from '../src/client/js/validityChecker'

describe('validityChecker', () => {
    test('returns false when input is less than 10 characters long', () => {
        
        expect(checkForValidity('hello')).toBeFalsy();
    });
    test('returns true when input is greater than 10 characters long', () => {
        
        expect(checkForValidity('hello my name is Flomilija')).toBeTruthy();
    });
});