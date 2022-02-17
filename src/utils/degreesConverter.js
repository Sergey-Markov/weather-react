export function degreesConverter(celsius) {
  const statVal = 9 / 5;
  const fahrenheit = celsius * statVal + 32;
  return Math.round(fahrenheit);
}
