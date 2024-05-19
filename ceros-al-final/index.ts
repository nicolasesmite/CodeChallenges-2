export default function moverCeros(array: unknown[]): unknown[] {
  // const arrayWithoutZeros:unknown[]= []
  // const arrayOfZeros :number[] = []

  // for (const element of array ){

  //   element === 0 ? arrayOfZeros.push(element) : arrayWithoutZeros.push(element)
  // }
  // return [...arrayWithoutZeros,...arrayOfZeros];

  const { withoutZeros, withZeros } = array.reduce<{
    withoutZeros: unknown[];
    withZeros: unknown[];
  }>(
    ({ withoutZeros, withZeros }, element) =>
      element === 0
        ? { withoutZeros, withZeros: withZeros.concat(element) }
        : { withoutZeros: withoutZeros.concat(element), withZeros },
    { withoutZeros: [], withZeros: [] }
  );

  return [...withoutZeros, ...withZeros];
}
