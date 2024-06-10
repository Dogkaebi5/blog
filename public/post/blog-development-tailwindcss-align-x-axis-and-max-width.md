---
title: Next 블로그 개발 - Tailwind 좌우 정렬, 최대 넓이
description: 광고 배너 공간을 고려해서 화면의 중간만 사용하기로 했다.
date: 2024-06-10 05:16:23
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-tailwindcss-align-x-axis-and-max-width
---

## Tailwindcss

### Tailwindcss 사용이유

빠르게 블로그를 만들어 보기 위해서  
tailwind를 사용하기로 했다.

css를 직접 사용해보면 알겠지만  
모든 element (요소, 각 태그)에 class명을 작명하는 것도 상당히 큰 작업량이다.

tailwind를 사용하면  
클라스명으로 요소의 css(디자인)을 제어할 수 있다.

[tailwindcss 공식 사이트](https://tailwindcss.com/)

<br><br>

### Tailwindcss 설치

처음에 [프로젝트를 설치](blog/blog-development-next-js-installation)할 때  
이미 tailwindcss를 기본으로 설치해서  
별도 설치는 필요 없다.

만약 설치 안되어 있다면  
[공식 사이트 설명](https://tailwindcss.com/docs/installation)대로 설치하면 된다.

<br><br><br>

## 화면 (좌우) 중간 정렬

### 좌우 중각 정렬 이유

[기획편](blog/blog-development-planning)에서  
블로그의 목적4 : 광고 수익이 있다.

아직 구글 광고가 어떻게 작동하는지 모르지만  
좌우 배너가 있던 것이 생각난다.

그러면 주요 콘텐츠는 중간 위치해서  
광고 배너의 자리를 남겨두는 것이 좋겠다고 생각했다.

<br><br>

### 클라스명 수정

전에 [페이지와 레이아웃](/blog/blog-development-next-js-page-and-layout)에서 만들었던 전체 레이아웃

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
      <body className={inter.className}>
        <header>해더입니다</header>
        <main>{children}</main>
        <footer>푸터입니다</footer>
      </body>
    </html>
  );
}
```

next.js ( react )에서는  
`class`가 아니라 `className`을 사용해야 한다.

body태그에 `inter.className`이라는 클라스명이 설정되어 있다.  
아마 nextjs에서 처음 샘플에 폰트나 기본 디자인을 제공했던 것 같다.

나는 `inter.className`을 사용하면서 내용을 추가했다.

아래는 body 태그만으로 간략

```js
// .\app\layout.js
<body className={inter.className + " mx-auto"}>
  <header>해더입니다</header>
  <main>{children}</main>
  <footer>푸터입니다</footer>
</body>
```

<br><br>

### tailwindcss의 "mx-auto"

위에 보는 것처럼  
`" mx-auto"`을 추가했다.

앞에 공백이 있어야 앞의 이름과 붙는 오류가 발생하지 않는다.  
mx는 margin, x-axis 정도의 뜻이다.

`mx-auto`을 css로 보면 아래처럼 나온다.

```css
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
```

애초 css 제어하는 종류가 너무 많아서  
tailwind도 내용이 많으니  
필요한 내용은 홈페이지에서 참고바란다.

<br><br>

### tailwindcss의 "max-w-6xl"

`mx-auto`를 적용했지만 아무런 변화가 없다.  
태그 \<header>\<main>\<footer>  
3개 다 block으로 넓이를 최대한으로 사용해서이다. ( \<body> 동일 )

그래서 최대 넓이를 추가했다.  
추가 방법은 className에 추가하면된다.

```js
// .\app\layout.js
<body className={inter.className + " mx-auto max-w-6xl"}>
  <header>해더입니다</header>
  <main>{children}</main>
  <footer>푸터입니다</footer>
</body>
```

 <br>

`max-w-6xl`을 css로 보면

```css
.max-w-6xl {
  max-width: 72rem /* 1152px */;
}
```

<br>

보는 것처럼 max-w은 max-width이다.  
( 나중에 디자인을 변경하면서 `max-w-4xl`으로 변경했다 )

이러면 좌우 공백을 두고 최대 1152px만 사용할 수 있게된다.
