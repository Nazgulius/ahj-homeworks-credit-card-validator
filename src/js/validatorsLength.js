export function isValidCardLength(value) {
  return (value.length > 11) && (value.length < 20);
}