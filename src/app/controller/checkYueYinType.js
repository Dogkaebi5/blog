function checkIsVowel(text) {
  return (
    text.startsWith("a") ||
    text.startsWith("e") ||
    text.startsWith("i") ||
    text.startsWith("o") ||
    text.startsWith("u") ||
    text.startsWith("y")
  );
}

export { checkIsVowel };
