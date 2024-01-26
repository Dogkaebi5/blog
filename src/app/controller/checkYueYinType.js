const startsWithMultiple = (str, prefixes) => {
  const pattern = new RegExp(`^(${prefixes.join("|")})`);
  return pattern.test(str);
};

const endsWithMultiple = (str, suffixes) => {
  const pattern = new RegExp(`(${suffixes.join("|")})$`);
  return pattern.test(str);
};

function checkIsVowel(text) {
  return startsWithMultiple(text, ["a", "e", "i", "o", "u", "y"]);
}

function checkIncludeNGK(text) {
  const arr = ["n", "g", "k"];
  return arr.includes(text);
}

function checkOnlyStartWithNGK(yueYin, text) {
  return (
    yueYin.startsWith(text) &&
    !yueYin.startsWith(text + "w") &&
    !yueYin.startsWith(text + "g")
  );
}

function checkLongAVowel(yueYin, text) {
  return yueYin.endsWith(text) && !yueYin.endsWith("a" + text);
}

function checkEVowel(yueYin, text) {
  return yueYin.endsWith(text) && !yueYin.endsWith("o" + text);
}

function checkIVowel(yueYin, text) {
  return (
    yueYin.endsWith(text) && !endsWithMultiple(yueYin, ["ai", "ei", "oi", "ui"])
  );
}

function checkOVowel(yueYin, text) {
  const arr = ["oi", "on", "ot"];
  if (arr.includes(text))
    return yueYin.endsWith(text) && !yueYin.endsWith("e" + text);
  return yueYin.endsWith(text);
}

function checkUVowel(yueYin, text) {
  if (text.startsWith("u"))
    return (
      yueYin.endsWith(text) &&
      !yueYin.endsWith("y" + text) &&
      !endsWithMultiple(yueYin, ["au", "eu", "iu", "ou"])
    );
}

export {
  checkIsVowel,
  checkOnlyStartWithNGK,
  checkIncludeNGK,
  checkLongAVowel,
  checkEVowel,
  checkIVowel,
  checkOVowel,
  checkUVowel,
};
