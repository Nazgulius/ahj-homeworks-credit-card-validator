export function isValidCard(value) {
  const isNumeric = /^\d+$/.test(value);
  let sum = 0;
  const length = value.length;
  const parity = length % 2;

  if (isNumeric) {
    for (let i = 0; i < length; i++) {
      const digit = Number(value[i], 10); 
      if (i % 2 !== parity) {  
        sum += digit;  
      } else {  
        if (digit > 4) {  
          sum += (2 * digit - 9);  
        } else {  
          sum += (2 * digit);  
        }  
      }  
    }
    const lastDigit = Number(value[length - 1], 10);  
    console.log(lastDigit === ((10 - (sum % 10)) % 10)); // проверяю true или false
    return lastDigit === ((10 - (sum % 10)) % 10);  
  }

  return false;
}