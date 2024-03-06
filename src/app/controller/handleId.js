//////// 한자ID (utf) 분리
export function splitIds(idsStr) {
  let result = [];
  // 한 글자 (아이디 길이가 5개)
  if (idsStr.length == 5) {
    result.push(idsStr);
  } else {
    // 한 글자 이상의 경우, 5문자씩 자르기
    for (let i = 0; i < idsStr.length; i += 5) {
      result.push(idsStr.substring(i, i + 5));
    }
  }
  return result;
}

//////// 한자ID (utf) 한자로 변경
export function setIdFromTc(tc) {
  // 한 글자인 경우 codePointAt return
  // 한 글자 이상인 경우. 한 글자씩 분리 split(""), map()으로 각 utf 추출, join으로 string 변환
  return tc.length == 1
    ? tc.codePointAt(0)
    : tc
        .split("")
        .map((char) => char.codePointAt(0))
        .join("");
}

//////// 한자를 ID로 변경(utf)
export function setTcFromId(idsArr) {
  return idsArr.map((id) => String.fromCharCode(id));
}
