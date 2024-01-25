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
  if (text.startsWith("a"))
    return yueYin.endsWith(text) && !yueYin.endsWith("a" + text);
}

function checkEVowel(yueYin, text) {
  if (text.startsWith("e"))
    return yueYin.endsWith(text) && !yueYin.endsWith("o" + text);
}

function checkIVowel(yueYin, text) {
  if (text.startsWith("i"))
    return (
      yueYin.endsWith(text) &&
      !yueYin.endsWith("ai") &&
      !yueYin.endsWith("ei") &&
      !yueYin.endsWith("oi") &&
      !yueYin.endsWith("ui")
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
      !yueYin.endsWith("au") &&
      !yueYin.endsWith("eu") &&
      !yueYin.endsWith("iu") &&
      !yueYin.endsWith("ou") &&
      !yueYin.endsWith("y" + text)
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
