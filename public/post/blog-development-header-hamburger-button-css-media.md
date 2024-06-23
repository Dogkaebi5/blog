---
title: Next 블로그 개발 - 햄버거 버튼 만들기 및 반응형 감추기
description: hamburger menu button 만들고 @media 사용해서 넓이에 의해 감추기
date: 2024-06-20 06:24:32
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-header-hamburger-button-css-media
---

# Preview

### 전편 전체 레이아웃

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

### 전편 헤더 컴포넌트

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

export default HeaderBar;
```

<br>

### css

```css
/*  .\app\global.css  */

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 4px;
}
```

spread-underline는 [밑줄 애니메이션](/blog/blog-development-header-spread-underline-css) 참고  
active는 [페이지 강조](/blog/blog-development-header-highlight-current-page) 참고

<br>

### 헤더 계획 디자인

1. 일반적인 디자인으로 좌 logo, 우 nav.
2. 링크별 각 페이지로 이동
3. 마우스 호버, 애니메이션
4. 현재 경로(페이지) 강조
5. **햄버거 버튼, 반응형 웹 작은 화면 nav 대체**
6. 햄버거 버튼 애니메이션
7. 사이드 메뉴 및 링크, 각 페이지로 이동
8. 햄버거 버튼 활성 시 사이드 메뉴 나타남
9. 햄버거 버튼 비활성 시 사이드 메뉴 없어짐
10. 링크 클릭시 햄버거 버튼 비활성

<br>

이번에 5을 만들 것이다.

<br>

### 관련 내용

- css. relative absolute
- css @media

<br><br><br>

# Hamburger button 만들기

### MENU UI ICONs

햄버거 버튼 은 줄이 3개인 버튼 UI를 얘기한다.  
menu UI로 많이 사용되는 버튼 중 하나이다.

참고로 메뉴 UI 이름은  
줄 3개 `햄버거 Hamburger` ≡  
9개 사각형이 있는 것은 `벤또 Bento`  
가로 점 3개는 `미트볼 Meatballs` ⋯  
세로 점 3개는 `케밥 Kebab` ⫶  
이라고 부른다.

3줄 위가 길고 아래가 잛은 것은  
`되네르 Döner` 혹 `딸기 Strawberry`이지만  
이런 자주 사용되지 않는 아이콘은  
회사마다 부르는 방식이 다르다.

<br><br>

### 햄버거 버튼 만들기

버튼 자체는 간단하다.  
하지만 애니메이션을 추가할 생각으로  
각 줄을 `span`태그로 만들었다.

```js
// .\app\components\HeaderBar.js - header - div.nav-burger

<div className="nav-burger">
  <span> </span>
  <span> </span>
  <span> </span>
</div>
```

`HeaderBar` 컴포넌트의 `nav`태그 뒤에 추가했다.

```js
// .\app\components\HeaderBar.js - header

<header className="nav">
  <Link href="/">Dogkaebi</Link>
  <nav className="nav-main">...</nav>
  <div className="nav-burger">
    <span></span>
    <span></span>
    <span></span>
  </div>
</header>
```

globals.css에 nav-burger를 추가했다.

```css
.nav-burger {
  position: relative;
  height: 1.75rem;
  width: 2rem;
  margin: 0.5rem;
  cursor: pointer;
  z-index: 9999;
  box-sizing: border-box;
}
.nav-burger span {
  position: absolute;
  height: 0.25rem;
  width: 1.5rem;
  border-radius: 100px;
  margin: 0.25rem 0;
  background-color: #111;
  box-sizing: border-box;
}
```

`nav-burger`는 규격을 만들어 틀 역할을 한다.  
relative를 사용해서 자녀의 기준이 된다.

`span` 의 모양을 만들었다.  
absolute을 사용해 절대 위치를 사용했다.  
높이는 `0.25rem` 부모의 1/7 이다.

위, 아래, 중간 3 span의 간격 2개.  
총 간격을 0.25 ⨉ 4 = 1로 생각했다.  
각 `span`의 높이가 0.25으로 설정했다.  
( 총 0.75 더하면 nav-burger의 높이 1.75 )  
넓이 1.5rem에 양옆 간격 0.25를 사용해서 부모의 넓이와 같게 설정했다.

결과는  
absolute을 사용했기 때문에 3개의 span이 겹쳐있다.

해결을 위해  
각 span에 위치를 지정해야 한다.  
간단하게 하기 위해서 tailwindcss를 사용했다.

```js
// .\app\components\HeaderBar.js - header - div.nav-burger

<div className="nav-burger">
  <span className="top-0"> </span>
  <span className="top-2"> </span>
  <span className="bottom-0"> </span>
</div>
```

이제야 햄버거 버튼 의 모양이 나온다.

<br><br>

### @media 이용, 작은 화면만 나오게 하기

```css
/* .\app\globals.css */

@media (min-width: 960px) {
  .nav-burger {
    display: none;
  }
}
```

`min-width`을 사용해서  
화면 넓이가 960px 혹 이상일 때,  
`nav-burger`가 보이지 않게했다.

<br>

하지만 이렇게 하면 작은 화면일 때,  
햄버거 버튼은 잘 보이지만,  
원래 `nav-main`도 나와서,  
`nav-main`은 `nav-burger`와 반대로 설정했다.

```css
/* .\app\globals.css */

@media (max-width: 960px) {
  .nav-main {
    display: none;
  }
}
```

`max-width`을 사용해서  
화면 넓이가 960px 혹 이하일 때,  
`nav-main`가 보이지 않게했다.

<br><br><br>

# 결론

### HeaderBar 컴포넌트

nav 태그 뒤에 nav-burger를 추가  
각 span에 tailwindcss 위치 추가

```js
// .\app\components\HeaderBar.js - header

<header className="nav">
  <Link href="/">Dogkaebi</Link>
  <nav className="nav-main">
    {links.map(([title, url]) => (
      <Link href={url} key={title} className={url == firstPath ? "spread-underline active" : "spread-underline"}>
        {title}
      </Link>
    ))}
  </nav>
  <div className="nav-burger">
    <span className="top-0"> </span>
    <span className="top-2"> </span>
    <span className="bottom-0"> </span>
  </div>
</header>
```

<br>

### css 추가 내용

```css
/* .\app\globals.css */

.nav-burger {
  position: relative;
  height: 1.75rem;
  width: 2rem;
  margin: 0.5rem;
  cursor: pointer;
  z-index: 9999;
  box-sizing: border-box;
}
.nav-burger span {
  position: absolute;
  height: 0.25rem;
  width: 1.5rem;
  border-radius: 100px;
  margin: 0.25rem 0;
  background-color: #111;
  box-sizing: border-box;
}

@media (min-width: 960px) {
  .nav-burger {
    display: none;
  }
}
```
