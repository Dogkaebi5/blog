export const startsWithMultiple = (str, prefixes) => {
  const pattern = new RegExp(`^(${prefixes.join("|")})`);
  return pattern.test(str);
};

export const endsWithMultiple = (str, suffixes) => {
  const pattern = new RegExp(`(${suffixes.join("|")})$`);
  return pattern.test(str);
};

export function checkIsVowel(text) {
  return startsWithMultiple(text, ["a", "e", "i", "o", "u", "y"]);
}

export function checkIncludeNGK(text) {
  const arr = ["n", "g", "k"];
  return arr.includes(text);
}

export function checkOnlyStartWithNGK(yueYin, text) {
  return (
    yueYin.startsWith(text) &&
    !yueYin.startsWith(text + "w") &&
    !yueYin.startsWith(text + "g")
  );
}

export function checkLongAVowel(yueYin, text) {
  return yueYin.endsWith(text) && !yueYin.endsWith("a" + text);
}

export function checkEVowel(yueYin, text) {
  return yueYin.endsWith(text) && !yueYin.endsWith("o" + text);
}

export function checkIVowel(yueYin, text) {
  return (
    yueYin.endsWith(text) && !endsWithMultiple(yueYin, ["ai", "ei", "oi", "ui"])
  );
}

export function checkOVowel(yueYin, text) {
  const arr = ["oi", "on", "ot"];
  if (arr.includes(text))
    return yueYin.endsWith(text) && !yueYin.endsWith("e" + text);
  return yueYin.endsWith(text);
}

export function checkUVowel(yueYin, text) {
  if (text.startsWith("u"))
    return (
      yueYin.endsWith(text) &&
      !yueYin.endsWith("y" + text) &&
      !endsWithMultiple(yueYin, ["au", "eu", "iu", "ou"])
    );
}
