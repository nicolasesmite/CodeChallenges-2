export default function validarParéntesis(parentesis: string): boolean {
  const replacedString = parentesis.replace("()", "");

  if (replacedString === "") {
    return true;
  } else if (replacedString === parentesis) {
    return false;
  }

  return validarParéntesis(replacedString);
}
