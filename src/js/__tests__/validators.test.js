import {isValidCard} from '../validators';

test('should be false if inn length less then 10', () => {
    const result = isValidCard('');

    expect(result).toBe(false);
});


test('should be false if inn length more then 10', () => {
    const result = isValidCard('fdfasdfsadadfasdfasdfasdfadfa');

    expect(result).toBe(false);
});

test('should be false if inn length is 10', () => {
    const result = isValidCard('1234567890');

    expect(result).toBe(true);
});