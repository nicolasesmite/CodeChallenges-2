export default function posiblePalindromo(num: number): boolean {
  const appearences = Object.values(
    num
      .toString()
      .split("")
      .reduce(
        (acc, num) => ({
          ...acc,
          [num]: acc[num] ? acc[num] === undefined : !acc[num],
        }),
        {}
      )
  );

  return appearences.indexOf(true) === appearences.lastIndexOf(true);
}
