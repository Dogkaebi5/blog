---
title: 블로그 개발 Next.js 14 페이지와 레이아웃
description: Next.js에서 터미널로직(Terminology) 폴더에 page.js와 layout.js를 사용해서 UI를 만든다.
date: 2024-06-06 02:06:29
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-next-js-page-and-layout
---

Next.js 14의 라우팅은 터미널로직을 사용한다.  
[Next.js 라우팅](/blog/blog-development-next-js-routing)  
[Next.js 동적라우팅](/blog/blog-development-next-js-dynamic-Routes)

폴더로 경로를 지정하기 때문에  
페이지 파일은 폴더에 만든다.

기본값으로 폴더의 `page.js` 파일을 페이지 UI로 사용한다.

```
app
└ layout.js
└ page.js
```

<br>
<br>

## Layout.js

NEXT.js 14에서는  
`layout.js`를 사용해서 UI의 기본틀로 사용할 수 있다.

이름처럼 레이아웃을 만들어서 반복되는 작업을 줄일 수 있다.  
레이아웃은 모든 하위 경로에 적용된다.

```js
// .\app\layout.js
import { Inter } from "next/font/google";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

`app`폴더의 `layout.js`이다.  
children을 받아서 주요 콘텐츠는 children을 보여준다.

`app`폴더는 최상위 경로이기 때문에  
여기의 layout은 모든 경로에 적용된다.

그래서 나는 아래 내용을 수정했다.

- html 태그의 language : lang="ko"
- favicon 수정 : public 폴더에 이미지 추가
- body 태그의 children을 main 태그 사용
- body 태그에 header와 footer 태그 추가

아래 참고

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

UI계획에  
해더 navigation을 만들 것이고,  
푸터도 고정이어서 header와 footer를 추가했다.

<br>
<br>

## Page.js

이제 각 페이지를 만들면 된다.  
페이지는 레이아웃 구조와 크게 다른 점은 없다.

```js
export default function Home() {
  return <h1>여기가 홈페이지입니다</h1>;
}
```

차이점이라고 하면 children의 유무 정도이다.  
페이지 콘텐츠는 layout의 children에 들어간다.

위에 언급한 것처럼 layout은 하위 페이지에 영향을 준다.

```
app
└ layout.js
└ page.js
└ blog
  └ layout.js
  └ page.js
  └ [slug]
    └ page.js
```

위의 예시는  
`app` 안에 layout.js와 `blog`폴더가 있다.  
`blog` 안에는 또 layout.js이 있고 동적 라우팅 `[slug]`폴더가 있다.

이 경우,  
`app`의 layout은 `blog`와 `[slug]` 모두에게 적용된다.  
`blog`의 layout은 같은 폴더의 page.js와 `[slug]`에 적용된다.

<br>
<br>

## 코드 작성법

```js
export default function Home() {
  return <h1>여기가 홈페이지입니다</h1>;
}
```

page.js와 layout.js의 작성법은 html과 매우 유사하다.  
함수 안에 return 값 안에 html 태그를 작성하면 된다.

<br>

주의할 점은 여러줄의 경우

1. 반드시 한개의 태그로 감싸야 한다.
2. return 값을 괄호로 감싸야 한다.

```js
export default function Home() {
  return (
    <div>
      <h1>여기가 홈페이지입니다</h1>
      <p>홈페이지에 오신 것을 환영합니다</p>
    </div>
  );
}
```

html과 다른점은  
javascript문이고, 자체로 함수이다.

그래서 변수도 사용이 가능하다.  
(잘 보면 레이아웃에서도 변수를 사용했었다)

```js
export default function Home() {
  const title = "독깨비";
  return (
    <div>
      <h1>여기가 {title} 홈페이지입니다</h1>
      <p>{title} 홈페이지에 오신 것을 환영합니다</p>
    </div>
  );
}
```

```html
<!-- 위에 코드 출력 예시 (layout포함) -->
<body class="__className_a123456">
  <header>해더입니다</header>
  <main>
    <div>
      <h1>여기가 독깨비 홈페이지입니다</h1>
      <p>독깨비 홈페이지에 오신 것을 환영합니다</p>
    </div>
  </main>
  <footer>푸터입니다</footer>
</body>
```

pages와 layouts의 [nextjs 공식 설명](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
