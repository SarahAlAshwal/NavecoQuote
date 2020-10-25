export function formatNumbers (number) {

  number = number.toFixed(2);
  return Number(number).toLocaleString('en');
}