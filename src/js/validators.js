export function isValidCard(value) {
  const isNumeric = /^\d+$/.test(value);
  let sum = 0;
  const length = value.length;
  const parity = length % 2;

  if (isNumeric) {
    for (let i = 0; i < length; i++) {
      if (i % 2 !== parity) {
        sum += value[i];
      } else {
        if (value[i] > 4) {
          sum += (2 * value[i] - 9);
        } else {
          sum += (2 * value[i]);
        }
      }
    }

    return value[length - 1] === ((10 - (sum % 10)) % 10);
  }
  return false;
}