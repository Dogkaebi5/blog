---
title: Next 블로그 개발 - 사이드 바 제어
description: 버튼으로 side navigation bar 열기 닫기 제어하기
date: 2024-06-23 04:22:33
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-header-control-side-navigation-with-button
---

# Preview

### 전편 헤더 컴포넌트

```javascript
// .\app\components\HeaderBar.js

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const HeaderBar = () => {
  const navigation = [
    ["Home", "/"],
    ["粵", "/cantonese"],
    ["Blog", "/blog"],
    ["About", "/about"],
  ];

  const pathname = usePathname();
  const firstPath = "/" + pathname.split("/")[1];

  const [isActive, setIsActive] = useState(false);
  const [navBurger, setNavBurger] = useState("nav-burger");

  function clickHandle() {
    if (isActive) {
      setNavBurger("nav-burger active");
    } else {
      setNavBurger("nav-burger");
    }
    setIsActive(!isActive);
  }

  return (
    <header className="flex justify-between items-center px-1 py-2">
      <Link href="/">Dogkaebi</Link>
      <nav className="nav-main">
        {links.map(([title, url]) => (
          <Link href={url} key={title} className={url == firstPath ? "spread-underline active" : "spread-underline"}>
            {title}
          </Link>
        ))}
      </nav>
      <div className={navBurger} onClick={clickHandle}>
        <span className="top-0"> </span>
        <span className="top-2"> </span>
        <span className="bottom-0"> </span>
      </div>
      <nav className="nav-side">
        {navigation.map(([title, url]) => {
          return (
            <Link href={url} key={title} className={url == firstPath ? "spread-underline active" : "spread-underline"}>
              {title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default HeaderBar;
```

<br>

### css

nav는 [헤더 기본 디자인](/blog/blog-development-header-navigation-design) 참고  
spread-underline는 [밑줄 애니메이션](/blog/blog-development-header-spread-underline-css) 참고  
active는 [페이지 강조](/blog/blog-development-header-highlight-current-page) 참고  
nav-burger [반응형 감추기 햄버거 버튼](blog-development-header-hamburger-button-css-media) 참고  
[햄버거-닫기 버튼 애니메이션](blog-development-header-hamburger-to-close-button)참고  
[사이드바 메뉴 디자인](/blog/blog-development-header-side-navigation-design) 참고

<br>

### 헤더 계획 디자인

1. 일반적인 디자인으로 좌 logo, 우 nav.
2. 링크별 각 페이지로 이동
3. 마우스 호버, 애니메이션
4. 현재 경로(페이지) 강조
5. 햄버거 버튼, 반응형 웹 작은 화면 nav 대체
6. 햄버거 버튼 애니메이션
7. 사이드 메뉴 및 링크, 각 페이지로 이동
8. **햄버거 버튼 활성 시 사이드 메뉴 나타남**
9. **햄버거 버튼 비활성 시 사이드 메뉴 없어짐**
10. **링크 클릭시 햄버거 버튼 비활성**

<br>

이번에 8, 9, 10을 만들 것이다.

<br>

### 관련 내용

- if 문. `? :` 문법

<br>

### 헤더 컴포넌트 수정

```js
const [navBurger, setNavBurger] = useState("nav-burger");
```

부분이 너무 쓸모가 없는 것 같아서 **삭제**하고  
`clickHandle`함수와  
`navBurger`요소를 아래와 같이 변경했다.

```js
const clickHandle = () => setIsActive(!isActive);
```

```js
// .\app\components\HeaderBar.js - header - hamburger btn

<div onClick={clickHandle} className={isActive ? "nav-burger active" : "nav-burger"}>
  <span className="top-0"> </span>
  <span className="top-2"> </span>
  <span className="bottom-0"> </span>
</div>
```

<br><br><br>

# 햄버거 버튼으로 사이드바 제어

방법은 아주 간단하게  
전편에서 만든 사이드바 클라스를  
햄버거 버튼과 같게 조건을 추가했다.

### 사이드바 열기/닫기

```js
// .\app\components\HeaderBar.js - header - side nav

<nav className={isActive ? "nav-side active" : "nav-side"}>
  {navigation.map(([title, url]) => {
    return (
      <Link href={url} key={title} className={url == firstPath ? "spread-underline active" : "spread-underline"}>
        {title}
      </Link>
    );
  })}
</nav>
```

css는 전편 [사이드바 메뉴 디자인](/blog/blog-development-header-side-navigation-design) 에서 만들었다.  
css를 전환하게 클라스명을 제어하는 내용만으로 기능을 구현했다.

<br><br>

### 햄버거 버튼 active 추가

사이드바가 활성되었을 때,  
햄버거 버튼도 고정되기 위해서  
active를 추가했다.

```css
.nav-burger.active {
  top: 0.5rem;
  right: 0.25rem;
  position: fixed;
}
```

(필수 아님)  
나는 사이드바 배경이 검은색이어서  
활성 시, 햄버거 버튼의 span 색상 변경도 추가로 작성했다.

```css
.nav-burger.active span {
  box-sizing: border-box;
  background-color: snow;
}
```

햄버거 버튼 css를 만들 때,  
버튼이 최상위로 있게하는 z-index는  
[반응형 감추기 햄버거 버튼](blog-development-header-hamburger-button-css-media) 편에서 만들었다.

<br><br>

### 사이드바 유지 문제

아직 문제가 있다.  
링크를 클릭했을 때,  
페이지가 이동해도 사이드바가 유지된다.

Link 컴포넌트에 `clickHandle`을 추가해서 해결했다.

```js
// .\app\components\HeaderBar.js - header - side nav

<nav className={isActive ? "nav-side active" : "nav-side"}>
  {navigation.map(([title, url]) => {
    return (
      <Link onClick={clickHandle} href={url} key={title} className={url == firstPath ? "spread-underline active" : "spread-underline"}>
        {title}
      </Link>
    );
  })}
</nav>
```

<br><br><br>

# 결론

```javascript
// .\app\components\HeaderBar.js

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const HeaderBar = () => {
  const navigation = [
    ["Home", "/"],
    ["粵", "/cantonese"],
    ["Blog", "/blog"],
    ["About", "/about"],
  ];

  const pathname = usePathname();
  const firstPath = "/" + pathname.split("/")[1];

  const [isActive, setIsActive] = useState(false);

  const clickHandle = () => setIsActive(!isActive);

  return (
    <header className="flex justify-between items-center px-1 py-2">
      <Link href="/">Dogkaebi</Link>
      <nav className="nav-main">
        {links.map(([title, url]) => (
          <Link href={url} key={title} className={url == firstPath ? "spread-underline active" : "spread-underline"}>
            {title}
          </Link>
        ))}
      </nav>
      <div onClick={clickHandle} className={isActive ? "nav-burger active" : "nav-burger"}>
        <span className="top-0"> </span>
        <span className="top-2"> </span>
        <span className="bottom-0"> </span>
      </div>
      <nav className={isActive ? "nav-side active" : "nav-side"}>
        {navigation.map(([title, url]) => {
          return (
            <Link onClick={clickHandle} href={url} key={title} className={url == firstPath ? "spread-underline active" : "spread-underline"}>
              {title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default HeaderBar;
```

<br>

- 사이드바의 클라스명에 조건을 추가
- Link 컴포넌트에 onClick 속성 추가

<br>

```css
.nav-burger.active {
  top: 0.5rem;
  right: 0.25rem;
  position: fixed;
}
.nav-burger.active span {
  box-sizing: border-box;
  background-color: snow;
}
```

<br>

- 햄버거 활성 css의 포지션 및 위치 추가
- 햄버거 활성 css의 색상 추가 (필수 아님)

<br>
