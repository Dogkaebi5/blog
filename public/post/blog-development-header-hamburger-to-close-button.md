---
title: Next 블로그 개발 - 햄버거×닫기 버튼 만들기
description: hamburger to close menu icon 만들고 변경 애니메이션 추가하기
date: 2024-06-20 08:24:32
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-header-hamburger-to-close-button
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
      <div className="nav-burger">
        <span className="top-0"> </span>
        <span className="top-2"> </span>
        <span className="bottom-0"> </span>
      </div>
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

nav-burger 현재 css

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

@media (min-width: 960px) {
  .nav-burger {
    display: none;
  }
}
```

<br>

### 헤더 계획 디자인

1. 일반적인 디자인으로 좌 logo, 우 nav.
2. 링크별 각 페이지로 이동
3. 마우스 호버, 애니메이션
4. 현재 경로(페이지) 강조
5. 햄버거 버튼, 반응형 웹 작은 화면 nav 대체
6. **햄버거 버튼 애니메이션**
7. 사이드 메뉴 및 링크, 각 페이지로 이동
8. 햄버거 버튼 활성 시 사이드 메뉴 나타남
9. 햄버거 버튼 비활성 시 사이드 메뉴 없어짐
10. 링크 클릭시 햄버거 버튼 비활성

<br>

이번에 6을 만들 것이다.

<br>

### 관련 내용

- react useState
- onClick
- css :nth-of-type()
- css transform

<br><br><br>

# 햄버거-닫기 아이콘 만들기

### 계획

1. active 추가로 활성/비활성 구분
2. 클릭 시 active 상태 변경
3. 비활성 -> 햄버거 버튼
4. 활성 -> ❌ 버튼

<br>

기능으로는  
active를 추가 및 삭제를 고려해야 하고,  
클릭 event를 제어해야 한다.

디자인의 경우  
3개의 요소로 만들었기 때문에  
각 요소를 움직여서 close btn을 만들 수 있었다.

<br><br>

### active 상태 변화 useState

React.js에서  
상태에 따라 컴포넌트를 변경하는 것을  
State Hook이라고 한다. [React 정식 설명문](https://react.dev/reference/react/useState)

useState도 client component에서 사용이 가능하다.  
지금 HeaderBar 컴포넌트는 이미 클라이언트이다.

active 추가 및 삭제 방법은  
전 [현재 페이지 강조](/blog/blog-development-header-highlight-current-page)과 같은 방법을 사용해도 된다.

하지만 이번에는 공부용으로  
조금 필요 없는 코드가 있지만  
이벤트 함수와 useState를 사용했다.

```js
// HeaderBar 컴포넌트. 기타 코드 생략
import { useState } from "react";

const HeaderBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [navBurger, setNavBurger] = useState("nav-burger");
};
```

`useState`를 사용하기 위해 가져오기를 해야한다.  
`useState`의 사용법은 대괄호 변수를 선언하고 useState함수를 담는다.  
useState함수의 전달값은 기본값(디폴트)가 된다.

대괄호의 첫번째 변수(isActive)는 상태값이다.  
대괄호의 두번째 변수(setIsActive)는 상태 변경 함수이다.

<br><br>

### nav-burger 클라스 변수로 변경

클라스명이 변경될 수 있도록  
className을 `nav-burger`에서 상태값 변수 {`navBurger`}으로 변경했다.

```js
// .\app\components\HeaderBar.js - div.nav-burger

<div className={navBurger}>
  <span className="top-0"> </span>
  <span className="top-2"> </span>
  <span className="bottom-0"> </span>
</div>
```

<br><br>

### onClick. 클릭 함수 만들기

```js
// .\app\components\HeaderBar.js

...

const HeaderBar = () => {

  ...

  function clickHandle() {
    if (isActive) {
      setNavBurger("nav-burger active");
    } else {
      setNavBurger("nav-burger");
    }
    setIsActive(!isActive);
  }

  return (
    <header className="navbar">
      ...

      <div className={navBurger} onClick={clickHandle}>
        <span className="top-0"> </span>
        <span className="top-2"> </span>
        <span className="bottom-0"> </span>
      </div>
    </header>
  );
}
...
```

`navBurger`에 `onClick` 속성을 추가했다.  
클릭할 때 `clickHandle`함수가 호출했다.

```js
// .\app\components\HeaderBar.js - HeaderBar - clickHandle 함수
function clickHandle() {
  if (isActive) {
    setNavBurger("nav-burger active");
  } else {
    setNavBurger("nav-burger");
  }
  setIsActive(!isActive);
}
```

간단하게 상태 `isActive`의 참/거짓을 확인해서  
참이면 상태`navBurger`을 "nav-burger active"으로 만들고  
거짓이면 `navBurger`을 "nav-burger"으로 만든다.  
그리고 `isActive`은 매번 반대값으로 변경한다.

( TMI. function 으로 함수를 만들면 호이스팅이 되어서 return 뒤에 만들어도 된다 )

이제 버튼을 클릭하면  
클라스가 변경되는 것을 확인할 수 있다.  
하지만 디자인이 없어서 화면의 변화는 없다.

<br><br>

### css 자녀 제어

`:nth-of-type()`을 사용해서  
`.nav-burger.active`의 자녀을 각각 제어했다.

```css
/* .\app\globals.css */

.nav-burger.active span:nth-of-type(1) {
  transform: translateY(8px) rotate(-45deg);
  -webkit-transform: translateY(0) rotate (-45deg);
}
.nav-burger.active span:nth-of-type(2) {
  opacity: 0;
}
.nav-burger.active span:nth-of-type(3) {
  transform: translateY(-8px) rotate(45deg);
  -webkit-transform: translateY(0) rotate(45deg);
}
```

`transform`으로 요소를 이동하고  
1st 자녀는 8px 밑으로 이동, 역 시계방향 45도를 돌렸다.  
2nd 자녀는 투명하게 변경했다.  
3rd 자녀는 8px 위로 이동, 시계방향 45도를 돌렸다.

<br>

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
    <header className="nav">
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
    </header>
  );
};

export default HeaderBar;
```

```css
/* .\app\globals.css */

.nav-burger.active span:nth-of-type(1) {
  transform: translateY(8px) rotate(-45deg);
  -webkit-transform: translateY(0) rotate (-45deg);
}
.nav-burger.active span:nth-of-type(2) {
  opacity: 0;
}
.nav-burger.active span:nth-of-type(3) {
  transform: translateY(-8px) rotate(45deg);
  -webkit-transform: translateY(0) rotate(45deg);
}
```

1. useState로 active 참/거짓 만듦.
2. useState로 navBurger 클라스 만듦.
3. navBurger 클라스 적용
4. navBurger 에 onClick 추가, clickHandle 호출
5. clickHandle 함수 만듦
6. css 자녀 하나씩 transform 으로 제어

이렇게 햄버거-닫기 버튼의 디자인과 애니메이션을 완료했다.
