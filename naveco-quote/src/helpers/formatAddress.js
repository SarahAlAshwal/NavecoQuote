export function formatAddress(address) {
  const addressWithoutSpaces = address.split(' ').filter(word => word.length > 0);
  return addressWithoutSpaces.join('+');
}