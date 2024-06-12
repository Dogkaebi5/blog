---
title: Next 블로그 개발 - Tailwind 최소 높이 화면 만큼
description: 기본 최소 높이를 화면의 높이로 하고 요소 채우기
date: 2024-06-12 03:13:22
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-tailwindcss-min-height-screen
---

사용할 내용

- min-h-svh
- flex
- flex-col
- flex-1

<br><br>

## 1. 이전 내용

### 1.1. Tailwindcss

[tailwindcss 공식 사이트](https://tailwindcss.com/)

<br>

### 1.2 layout.js

[좌우 정렬 및 최대 넓이편](/blog/blog-development-tailwindcss-align-x-axis-and-max-width)에서 만들었던 레이아웃

```js
// .\app\layout.js
import { Inter } from "next/font/google";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={inter.className + " mx-auto max-w-6xl"}>
        <header>해더입니다</header>
        <main>{children}</main>
        <footer>푸터입니다</footer>
      </body>
    </html>
  );
}
```

```js
// .\app\layout.js --> body태그
return (
  <body className={inter.className + " mx-auto max-w-6xl"}>
    <header>해더입니다</header>
    <main>{children}</main>
    <footer>푸터입니다</footer>
  </body>
);
```

<br><br><br>

## 2. 최소 높이 화면크기

css가 없으면  
모든 요소가 (header,main,footer)상단에 모여있다.

기본으로 콘텐츠가 없어도  
최소 높이가 화면 높이로 하는 것이  
보기에 좋을 것 같다.

<br>

### 2.1 min-h-svh

기존 layout에서  
body 태그에 `min-h-svh`를 추가했다.

`min-h-screen` 혹은 `min-h-svh` 사용한다.  
`screen`은 전체 화면 뷰포트이다.  
`svh`은 사용자 기준 짧은 뷰포트 값이다.  
모바일에서 주소 입력창 등으로 뷰가 화면 보다 큰 것을 방지할 때 `svh`을 사용한다.

적용 상태를 보기 위해  
배경화면 색상 `bg-slate-400`도 추가했다.

```js
// .\app\layout.js --> body태그
return (
  <body className={inter.className + " mx-auto max-w-6xl min-h-svh bg-slate-400"}>
    <header>해더입니다</header>
    <main>{children}</main>
    <footer>푸터입니다</footer>
  </body>
);
```

결과는 ... 변화가 없다.  
생각해보니 body 안 요소들이 높이가 없다.

<br>

### 2.2 flex-1

header, footer 태그는 고정 높이이고  
중간의 main 태그는 콘텐츠에 따라서 높이가 변화할 것이다.

그래서 main에 `flex-1`을 사용했다.

```js
// .\app\layout.js --> body태그
return (
  <body className={inter.className + " mx-auto max-w-6xl min-h-svh"}>
    <header>해더입니다</header>
    <main className="flex-1">{children}</main>
    <footer>푸터입니다</footer>
  </body>
);
```

<br>

### 2.3 flex flex-col

하지만 main의 부모(body)가  
아직 `flex`가 아니어서 아무 변화가 없다.

그리고 `flex`는 원래 행(가로줄)으로 적용이 되어서 `flex-col`

```js
// .\app\layout.js --> body태그
return (
  <body className={inter.className + " mx-auto max-w-6xl min-h-svh flex flex-col"}>
    <header>해더입니다</header>
    <main className="flex-1">{children}</main>
    <footer>푸터입니다</footer>
  </body>
);
```

이렇게 부모인 body에 `min-h-svh` `flex` `flex-col`을 사용하고  
높이 변화가 있는 main에 `flex-1`을 사용해서  
화면 최소 높이가 화면 크기이게 작성했다.
