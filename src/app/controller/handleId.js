export function splitIds(idsStr) {
  let result = [];
  if (idsStr.length == 5) {
    result.push(idsStr);
  } else {
    for (let i = 0; i < idsStr.length; i += 5) {
      result.push(idsStr.substring(i, i + 5));
    }
  }
  return result;
}

export function setIdFromTc(tc) {
  return tc.length == 1
    ? tc.codePointAt(0)
    : tc
        .split("")
        .map((char) => char.codePointAt(0))
        .join("");
}

export function setTcFromId(idsArr) {
  return idsArr.map((id) => String.fromCharCode(id));
}
