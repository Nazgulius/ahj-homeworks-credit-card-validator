import {isValidCard} from '../validators';

test('should be false if card length less then 10', () => {
    const result = isValidCard('');

    expect(result).toBe(false);
});


test('should be false if card length more then 16 and text', () => {
    const result = isValidCard('fdfasdfsadadfasdfasdfasdfadfaer');

    expect(result).toBe(false);
});

test('should be false if inn length is 12', () => {
    const result = isValidCard('123456789012');

    expect(result).toBe(true);
});

test('should be false if inn length is 13', () => {
    const result = isValidCard('1234567890123');

    expect(result).toBe(true);
});

test('should be false if inn length is 14', () => {
    const result = isValidCard('12345678901234');

    expect(result).toBe(true);
});

test('should be false if inn length is 15', () => {
  const result = isValidCard('123456789012345');
  
  expect(result).toBe(true);
});

test('should be false if inn length is 16', () => {
  const result = isValidCard('1234567890123456');
  
  expect(result).toBe(true);
});

test('should be false if inn length is 19', () => {
    const result = isValidCard('1234567890123456789');

    expect(result).toBe(true);
});