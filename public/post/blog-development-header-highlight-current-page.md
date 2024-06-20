---
title: Next 블로그 개발 - 현재 페이지 텍스트 강조
description: Navigation bar에서 usePathname으로 현재 페이지를 강조하기
date: 2024-06-18 05:12:36
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-header-highlight-current-page
---

# Preview

### 전체 레이아웃

```js
// .\app\layout.js

import HeaderBar from "./components/HeaderBar";
...

<body className={inter.className + " mx-auto max-w-6xl"}>
  <HeaderBar />
  <main>{children}</main>
  <footer>푸터입니다</footer>
</body>
```

<br>

### 헤더 컴포넌트

```js
// .\app\components\HeaderBar.js

import Link from "next/link";

const HeaderBar = () => {
  const links = [
    ["Home", "/"],
    ["粵", "/cantonese"],
    ["Blog", "/blog"],
    ["About", "/about"],
  ];

  return (
    <header className="nav">
      <Link href="/">Dogkaebi</Link>
      <nav className="nav-main">
        {links.map(([title, url]) => (
          <Link href={url} key={title} className="spread-underline">
            {title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default HeaderBar;
```

<br>

### css

nav는 [헤더 기본틀](/blog/blog-development-header-navigation-design)참고  
spread-underline는 [밑줄 애니메이션](/blog/blog-development-spread-underline-css) 참고

<br>

### 헤더 계획 디자인

1. 일반적인 디자인으로 좌 logo, 우 nav.
2. 링크별 각 페이지로 이동
3. 마우스 호버, 애니메이션
4. **현재 경로(페이지) 강조**
5. 햄버거 버튼, 반응형 웹 작은 화면 nav 대체
6. 햄버거 버튼 애니메이션
7. 사이드 메뉴 및 링크, 각 페이지로 이동
8. 햄버거 버튼 활성 시 사이드 메뉴 나타남
9. 햄버거 버튼 비활성 시 사이드 메뉴 없어짐
10. 링크 클릭시 햄버거 버튼 비활성

<br>

이번에 4을 만들 것이다.

<br>

### 관련 내용

- usePathname
- string.split()
- if else 문법 ? :
- 비교 문법 ==

<br><br><br>

# 현재 페이지 강조

### css 추가

전편에서  
`spread-underline` 클라스를 만들고  
밑줄 애니메이션 css도 작성했다.

`spread-underline` 기초에서  
`active` 클라스를 추가했다.  
( tailwindcss를 사용해도 된다 )

```css
.spread-underline.active {
  color: #16a34a;
  font-weight: bold;
}
```

간단하게 색상 및 굵게만 추가했다.  
(tailwindcss: font-bold text-green-600)

`active` 클라스 자체에 css는 만들지 않고  
`spread-underline`이 `active`했을 때 css이다.

클라스명이 조건에 따라서 추가해야 한다.  
고려할 내용은

1. 현재 주소 확인
2. 현재 주소 비교
3. className에 active 추가 및 삭제

<br><br>

### HeaderBar 전체 코드

```js
// .\app\components\HeaderBar.js

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderBar = () => {
  const navigation = [
    ["Home", "/"],
    ["粵", "/cantonese"],
    ["Blog", "/blog"],
    ["About", "/about"],
  ];

  const pathname = usePathname();
  const firstPath = "/" + pathname.split("/")[1];

  return (
    <header className="nav">
      <Link href="/">Dogkaebi</Link>
      <nav className="nav-main">
        {links.map(([title, url]) => (
          <Link href={url} key={title} className={url == firstPath ? "spread-underline active" : "spread-underline"}>
            {title}
          </Link>
        ))}
      </nav>
    </header>
  );
};
```

<br><br>

## 코드 풀이. usePathname

### 클라이언트 컴포넌트

Next.js에서는 쉽게 현재 주소를 확인할 수 있다.  
`usePathname`를 사용하면 된다.

`usePathname`는  
클라이언트 컴포넌트 에서만 사용이 가능하다.  
[클라이언트 컴포넌트 Client Components : Next.js 공식 설명문](https://nextjs.org/docs/app/building-your-application/rendering/client-components)

```js
"use client";
```

클라이언트 컴포넌트를 선언한다.

<br><br>

### usePathname

```js
import { usePathname } from "next/navigation";
```

`usePathname` import(가져오기) 했다.

<br>

```js
const pathname = usePathname();
```

변수 `pathname`에 `usePathname()`를 사용해서 담았다.

<br>

`pathname`의 값을 확인하면  
**현재의 url 전체 경로가 나온다.**

페이지에서 props를 사용하면 전달 값만 확인이 가능했으나  
usePathname()은 상위 주소도 확인이 된다.

headerBar가 컴포넌트이기 때문에 (페이지 아님)  
props를 사용하는 것은 한계가 있었다.

<br><br>

### 경로 비교

```js
const firstPath = "/" + pathname.split("/")[1];
```

전체 경로가 나오기 때문에  
비교를 위한 첫 경로만 따로 변수로 만들었다.

string(문자열)을  
split()함수를 사용해서 array(배열)로 만들고,  
2번째 내용 [1]을 사용했다.

예시로 `pathname` = `/blog/slug` 이면

```
| 0 |   1    |   2    |
|   |  blog  |  slug  |
```

가 되어서 [1]은 `blog`가 된다.

현재는 하위 경로가 없지만  
이후 추가될 것을 고려했다.

<br>

```js
links.map(([title, url]) => (
  <Link href={url} key={title} className={url == firstPath ? "spread-underline active" : "spread-underline"}>
    {title}
  </Link>
));
```

리액트(React)에서는 클라스명에서 코드를 사용할 수 있다.

전에 만든 `links` 변수의 반복문에서  
`url`부분을 현재`firstPath`와 `? :` 문법으로 비교했다.  
동일하면 `spread-underline active` 아니면 `spread-underline`

```js
url == firstPath ? "spread-underline active" : "spread-underline";
```

<br><br><br>

# 정리

usePathname을 사용 현재 페이지 확인.  
usePathname은 클라이언트 컴포넌트에서 사용 가능.  
pathname의 첫 경로를 Link의 경로와 비교.  
비교가 참이면 class에 active 아니면 없음.
