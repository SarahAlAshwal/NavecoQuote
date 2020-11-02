//This function is to format the numbers 2 digits after the decimal points and add , to indicate thousands
export function formatNumbers (number) {

  number = number.toFixed(2);
  return Number(number).toLocaleString('en');
}