---
title: Next.js 블로그 개발 - 컴포넌트 (component)
description: 컴포넌트는 Next가 아닌 React 방법으로 사용된다.
date: 2024-06-07 03:23:29
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-next-js-component
---

## React.js 컴포넌트 (component)

컴포넌트 (component)는  
여러개 프로그램 함수들을 모아  
하나의 특정한 기능을 수행하는 기능적 단위.

영어의 뜻이 요소, 부품으로...  
여러 분야에서도 사용되는 영단어다.

<br>

Next는 React 컴포넌트를 사용한다.  
Next는 React 프레임워크이다.  
React를 기반으로 한다는 얘기다.

<br>
<br>

## 컴포넌트 사용 이유

반복을 줄이기 위해서이다.

https://dogkaebi.com/cantonese 에서  
한자가 카드 리스트로 나열되어 있다.

카드는 모두 같은 틀을 가지고 있고 내용만 다르다.  
월음 / 한자 / 뜻 으로 구성되어 있는데,  
만약 컴포넌트가 없으면 카드를 하나씩 만들어야 한다.

컴포넌트를 사용하면 카드의 틀을 하나 만들면 된다.

이런 이유로  
같은 UI를 사용하는 카드, 버튼, 인풋 등은  
컴포넌트로 사용하는 경우가 많다.

<br>
<br>

## 컴포넌트 만들기

나의 경우 `components` 폴더를 만들고,  
모든 컴포넌트를 이 폴더 안에서 만들었다.

```js
components
└ HeaderBar.js
```

<br>

작성법은 `page.js`, `layout.js`와 큰 차이는 없다.  
다른점은 파일명 정도이다.

대부분 개발자분들이  
컴포넌트의 파일명과  
컴포넌트의 함수(혹 객체)명의  
첫 알파벳은 대문자를 사용한다.

나의 경우  
컴포넌트는 화살표 함수를 사용한다.  
일종의 구분인데...  
아직 this와 호이스팅을 잘 모르면  
딱히 추천하지는 않는다.

```js
// \components\HeaderBar.js

import Link from "next/link";

const HeaderBar = () => {
  return (
    <header>
      <Link href="/">Logo</Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/cantonese">粵</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">about</Link>
      </nav>
    </header>
  );
};

export default HeaderBar;
```

( next에서는 a태그 대신 Link 컴포넌트를 사용한다 )

<br>

위처럼 사용 시,  
마지막에 함수를 export(내보내기) 해야한다.

<br>
<br>

## 컴포넌트 사용법

컴포넌트는 html 태그처럼 사용된다.

위 예시의 HeaderBar를 사용할 때는  
\<HeaderBar />으로 사용한다.

HeaderBar는 전체 레이아웃에서 사용했다

```js
app
└ layout.js
└ page.js
```

```js
// .\app\layout.js

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>...</head>
      <body>
        <HearderBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
```
