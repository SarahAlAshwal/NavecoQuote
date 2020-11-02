//This function take out spaces between the address words and put + to be used in the API call
export function formatAddress(address) {
  const addressWithoutSpaces = address.split(' ').filter(word => word.length > 0);
  return addressWithoutSpaces.join('+');
}