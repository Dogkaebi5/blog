---
title: Next.js 블로그 개발 - Hero 컴포넌트
description: 컴포넌트를 만들어 각 페이지의 히어로가 내용이 다르게 만들기
date: 2024-06-08 03:03:29
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-hero-components
---

Hero를 만들어보자..

## Hero

웹 디자인 용어로  
페이지에서 제일 위에 나오는  
이미지나 배너를 히어로라고 부른다.

<br><br>

## 기획, 계획

url에 따라서 다른 내용이 나오도록 계획했다.

원래는 usePathname을 사용해봤지만  
usePathname은 'use client' 사용해야 한다.  
즉 클라이언트 컴포넌트에서만 사용 가능하다.

그리고 Hero를 사용할 페이지는 3곳이었다.  
홈 : [./](/)  
광둥어 : [./cantonese](/cantonese)  
블로그 : [./blog](/blog)

하위 url에서도 Hero를 사용하지 않는다.

그래서  
컴포넌트를 사용할 때, 값을 전달하는 방식을 선택했다.

<br><br>

## 컴포넌트 코드

```js
const Heros = ({ path }) => {
  const texts = {
    cantonese: ["Cantonese", "粵", "중국 광동 방언. 홍콩과 마카오의 공식 언어"],
    blog: ["Blog", "DogKaeBi Blog", "중국/광둥 이야기, 블로그 개발 이야기, 일상 이야기"],
    "": ["Home", "DogKaebi's 코딩연습", "광둥어 블로그 개발 이야기"],
  };

  return (
    <div>
      <p>{texts[path][0]}</p>
      <h1>{texts[path][1]}</h1>
      <p>{texts[path][2]}</p>
      <hr />
    </div>
  );
};

export default Heros;
```

<br>

if문을 사용할 수도 있지만  
객체를 만드는 것이 깔끔하다 생각한다.

위에서부터 설명

```js
const Heros
// 컴포넌트 이름 Heros로 정의
```

```js
({ path }) => {};
// 화살표함수 사용.
// 파라미터(Parameter)를 중괄호를 사용해서 path로 지정했다
```

```js
const texts = {};
// texts라는 객체 생성
// key는 아규먼트(Argument. path로 받은 값)와 같게 작성
// value는 array로 만들었다.
```

```js
<p>{texts[path][0]}</p>
<h1>{texts[path][1]}</h1>
<p>{texts[path][2]}</p>
// 태그 안에서 변수를 사용할 때 중괄호{}를 사용한다.
// 객체에 지정된 key의 value는 "." 을 사용한다. (ex: text.cantonese)
// 하지만 key를 변수로 사용하면 대괄호[]를 사용한다.
// Array의 0,1,2 index를 출력
```

마지막으로 `export default Heros`으로 내보냈다.

<br><br>

## 컴포넌트 사용

사용할 페이지인  
홈, 광둥어, 블로그 폴더의  
page.js에서 사용했다.

```js
// .\app\page.js

export default function Home() {
  return (
    <>
      <Heros path="" />
      <p>홈페이지 내용입니다</p>
    </>
  );
}
```

```js
// .\app\cantonese\page.js

export default function Cantonese() {
  return (
    <>
      <Heros path="cantonese" />
      <p>광둥어 내용입니다</p>
    </>
  );
}
```

```js
// .\app\blog\page.js

export default function Blog() {
  return (
    <>
      <Heros path="blog" />
      <p>블로그 내용입니다</p>
    </>
  );
}
```

<br>

내용이 잘 출력되는 것을 확인했다.

아직 디자인(css)은 없지만...
