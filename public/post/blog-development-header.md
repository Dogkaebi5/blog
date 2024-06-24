---
title: Next 블로그 개발 - 헤더 네비게이션 통합편
description: header Link, hamburger button, side navigation의 디자인 및 제어
date: 2024-06-24 04:10:33
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-header
---

# 헤더 계획

1. 좌 logo, 우 nav. 디자인
2. 링크별 각 페이지로 이동
3. 마우스 호버, 애니메이션
4. 현재 경로(페이지) 강조
5. 햄버거 버튼, 반응형 웹 작은 화면 nav 대체
6. 햄버거 버튼 애니메이션
7. 사이드 메뉴 및 링크, 각 페이지로 이동
8. 햄버거 버튼 활성 시 사이드 메뉴 나타남
9. 햄버거 버튼 비활성 시 사이드 메뉴 없어짐
10. 링크 클릭시 햄버거 버튼 비활성

<br><br>

# headerBar 컴포넌트

```js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const headerBar = () => {
  const navs = [
    ["Name 1", "/link-1"],
    ["Name 2", "/link-2"],
  ];

  const pathname = "/" + usePathname().split("/")[1];
  const linksCss = (url) => (url == pathname ? "spread-underline active" : "spread-underline");

  const [isActive, setIsActive] = useState(false);
  const clickHandle = () => setIsActive(!isActive);

  const headerCss = "flex justify-between items-center px-1 py-2";
  const logoCss = "ml-2 px-4 py-2 font-bold rounded-full hover:bg-green-100";

  return (
    <header className={headerCss}>
      <Link className={logoCss} href="/">
        LOGO
      </Link>
      <nav className="nav-main">
        {navs.map(([name, url]) => (
          <Link href={url} key={name} className={linksCss(url)}>
            {name}
          </Link>
        ))}
      </nav>
      <div onClick={clickHandle} className={isActive ? "nav-burger active" : "nav-burger"}>
        <span> </span>
        <span> </span>
        <span> </span>
      </div>
      <nav className={isActive ? "nav-side active" : "nav-side"}>
        {navs.map(([name, url]) => (
          <Link onClick={clickHandle} href={url} key={name} className={linksCss(url)}>
            {name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default headerBar;
```

<br>

### headerBar 컴포넌트

```js
const headerBar = () => {};
export default headerBar;
```

- 함수 이름 `headerBar`을 사용하고
- `export default`을 사용해서 내보내기

<br>

### 링크 만들기

```js
import Link from "next/link";

const navs = [
  ["Name 1", "/link-1"],
  ["Name 2", "/link-2"],
];

<nav className="nav-main">
  {navs.map(([name, url]) => (
    <Link href={url} key={name}>
      {name}
    </Link>
  ))}
</nav>;
```

- next.js의 `Link` 컴포넌트 가져오기.
- `nav`변수 선언. 링크 이름 및 링크 배열로 작성.
- `map(()=>{})` 사용 `nav`반복, 링크 [이름, 주소] 사용.

<br>

### 현재 링크 강조

```js
"use client";
import { usePathname } from "next/navigation";

const pathname = "/" + usePathname().split("/")[1];
const linksCss = (url) => (url == pathname ? "spread-underline active" : "spread-underline");

navs.map([name, url])=>
  <Link href={url} key={name} className={linksCss(url)}></Link>
```

- `usePathname`는 client에서만 사용가능. `use client` 사용.
- `usePathname` 가져오기.
- `pathname` = `usePathname()` 사용 현재 주소 가져오기. `split()`으로 "/"로 분리. `[1]`으로 배열의 2번째 요소 사용. 앞에 `/` 추가해서 링크 형태로 만듦.
- 함수`linkCss`는 url을 받아서 `pathname`과 비교, 같으면 active를 추가.
- `linkCss`를 Link의 클라스명으로 사용.

<br>

### 햄버거 버튼 틀

```html
<div>
  <span> </span>
  <span> </span>
  <span> </span>
</div>
```

- span태그 3개 사용

<br>

### 햄버거 버튼 on/off 제어

```js
"use client";
import { useState } from "react";

const [isActive, setIsActive] = useState(false);
const clickHandle = () => setIsActive(!isActive);

<div onClick={clickHandle} className={isActive ? "nav-burger active" : "nav-burger"}></div>;
```

- `useState`는 client에서만 사용가능. `use client` 사용
- `useState()`으로 `isActive` 상태값 선언. 기본값 "false"
- 함수`clickHandle`선언. `setIsActive`사용 `isActive`값 반대로 전환
- 햄버거 버튼에 `onClick={clickHandle}` 클릭 이벤트 추가
- 햄버거 버튼 클라스명에 조건문으로 `isActive` 확인하고 active 제어

<br>

### 사이드바 메뉴

```js
<nav className={isActive ? "nav-side active" : "nav-side"}>
  {navs.map(([name, url]) => (
    <Link onClick={clickHandle} href={url} key={name} className={linksCss(url)}>
      {name}
    </Link>
  ))}
</nav>
```

- [링크 만들기](#링크-만들기)와 같은 방식으로 작성
- class명만 nav-main과 `nav-side`로 구분

<br><br><br>

# headerBar CSS

css는 tailwindcss와 같이 사용해서  
조금 혼란이 있을 수 있다.

<br>

```css
* {
  transition: all 400ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-main {
  display: flex;
}
@media (max-width: 960px) {
  .nav-main {
    display: none;
  }
}

.spread-underline {
  text-align: center;
  width: 80px;
}
.spread-underline.active {
  color: #16a34a;
  font-weight: bold;
}
.spread-underline:hover {
  color: #16a34a;
  scale: 110%;
}
.spread-underline:after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  height: 1px;
  width: 0;
  background: #16a34a;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
}
.spread-underline:hover:after {
  width: 100%;
  left: 0;
}

.nav-burger {
  position: relative;
  margin: 0.5rem;
  height: 1.75rem;
  width: 2rem;
  z-index: 9999;
  cursor: pointer;
  box-sizing: border-box;
}
.nav-burger.active {
  position: fixed;
  top: 0.5rem;
  right: 0.25rem;
}
@media (min-width: 960px) {
  .nav-burger {
    display: none;
  }
  .nav-burger.active {
    display: none;
  }
}
.nav-burger span {
  position: absolute;
  margin: 0.25rem 0;
  height: 0.25rem;
  width: 1.5rem;
  border-radius: 100px;
  background-color: #111;
  box-sizing: border-box;
}
.nav-burger span:nth-of-type(1) {
  top: 0px;
}
.nav-burger span:nth-of-type(2) {
  top: 8px;
}
.nav-burger span:nth-of-type(3) {
  bottom: 0px;
}
.nav-burger.active span {
  background-color: snow;
}
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

.nav-side {
  visibility: hidden;
  position: absolute;
  right: -100%;
  top: 0;
  height: 100vh;
  color: white;
  background-color: #000;
  opacity: 0;
}
.nav-side.active {
  visibility: visible;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  right: 0;
  touch-action: none;
  opacity: 0.9;
}
.nav-side > * {
  display: none;
}
.nav-side.active > * {
  display: initial;
}
@media (min-width: 960px) {
  .nav-side.active {
    display: none;
  }
}
```

<br><br>

### 전체 애니메이션 css

```css
* {
  transition: all 400ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
```

- 디자인이 변경될 때, 지정한 시간 동안 변화함

<br>

### 반응형 메인 네비게이션

```css
.nav-main {
  display: flex;
}
@media (max-width: 960px) {
  .nav-main {
    display: none;
  }
}
```

- 일반 크기에서 flex, 960px이하 시 없어짐.

( --- 참고  
tailwindcss를 사용해서 `"hidden lg:flex"`를 사용할 수 있다.  
단 `lg:`은 1024px으로 다른 반응형 크기도 같이 수정해야 한다.  
--- )

<br>

### 링크 강조 css

```css
.spread-underline {
  text-align: center;
  width: 80px;
}
.spread-underline.active {
  color: #16a34a;
  font-weight: bold;
}
.spread-underline:hover {
  color: #16a34a;
  scale: 110%;
}
```

- `active`추가했을 때 강조하는 css 추가 (폰트 bold)
- `hover`했을 때 강조하는 css 추가 (크기 110%)

<br>

### 링크 hover 밑줄

```css
.spread-underline:after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  height: 1px;
  width: 0;
  background: #16a34a;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
}
.spread-underline:hover:after {
  width: 100%;
  left: 0;
}
```

- `:after`로 가상 요소 만듦. 넓이 0 (안보임)
- 별도 애니메이션 추가
- `hover`했을 때, 넓이 100%로 변경

<br>

### 햄버거 버튼

```css
.nav-burger {
  position: relative;
  margin: 0.5rem;
  height: 1.75rem;
  width: 2rem;
  z-index: 9999;
  cursor: pointer;
  box-sizing: border-box;
}
.nav-burger.active {
  position: fixed;
  top: 0.5rem;
  right: 0.25rem;
}
.nav-burger span {
  position: absolute;
  margin: 0.25rem 0;
  height: 0.25rem;
  width: 1.5rem;
  border-radius: 100px;
  background-color: #111;
  box-sizing: border-box;
}
.nav-burger span:nth-of-type(1) {
  top: 0px;
}
.nav-burger span:nth-of-type(2) {
  top: 8px;
}
.nav-burger span:nth-of-type(3) {
  bottom: 0px;
}
```

- `nav-burger` 버튼틀 크기 지정
- `nav-burger` 제일 위로 z-index 조절
- `active`되었을 때, `position: fixed`으로 고정 및 위치 지정
- span의 크기 및 모양
- `:nth-of-type`으로 각 자녀의 위치 지정

(--- 참고  
각 자녀는 tailwindcss `top-0` `top-2` `bottom-0` 으로 대체가능.

```html
<span className="top-0"> </span>
<span className="top-2"> </span>
<span className="bottom-2"> </span>
```

---)

<br>

### 반응형 햄버거 버튼

```css
@media (min-width: 960px) {
  .nav-burger {
    display: none;
  }
  .nav-burger.active {
    display: none;
  }
}
```

- 화면 넓이 960px 이하에서만 보이게 설정

<br>

### 닫기 버튼으로 변경

```css
.nav-burger.active span {
  background-color: snow;
}
.nav-burger.active span:nth-of-type(1) {
  -webkit-transform: translateY(0) rotate (-45deg);
  transform: translateY(8px) rotate(-45deg);
}
.nav-burger.active span:nth-of-type(2) {
  opacity: 0;
}
.nav-burger.active span:nth-of-type(3) {
  -webkit-transform: translateY(0) rotate(45deg);
  transform: translateY(-8px) rotate(45deg);
}
```

- `active`일 때 1, 3번 span의 위치 및 각도 변경해 X표 만듦
- 예비용 `-webkit-transform` 사용. (`transform`속성이 무효일 때)
- 2번은 투명하게 변경

<br>

### 사이드 메뉴바 비활성

```css
.nav-side {
  visibility: hidden;
  position: absolute;
  right: -100%;
  top: 0;
  height: 100vh;
  color: white;
  background-color: #000;
  opacity: 0;
}
.nav-side > * {
  display: none;
}
```

- `hidden`으로 안보이게 함 (display: none을 사용하면 애니메이션 적용 안됨)
- `right: -100%` 화면 밖으로 위치 지정
- `> *` 모든 자녀, `display: none` 없음

<br>

### 사이드 메뉴바 비활성

```css
.nav-side.active {
  visibility: visible;
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  touch-action: none;
  opacity: 0.9;
}
.nav-side.active > * {
  display: initial;
}
```

- `visible`으로 나타나게 함
- `position: fixed`로 고정. `right: 0`으로 위치 지정
- 넓이 100%, 전체화면 사용
- `touch-action: none` 모바일 터치 이벤트 없게 함
- 모든 자녀 `display: initial`으로 다시 생겨나게 함

<br>

### 반응형 사이드 메뉴바

```css
@media (min-width: 960px) {
  .nav-side.active {
    display: none;
  }
}
```

`.nav-side`는 원래 `visibility: hidden`이기 때문에 따로 지정할 필요가 없다.

<br><br><br>

# header편 종료

header는 이제 전부 작성 완료했다.  
코드가 좀 긴 느낌이 있지만,  
사실 어려운 내용은 아닌 것 같다.

그저...  
반응형을 만들 때,  
tailwindcss가 불현한 느낌을 받아서 직접 css를 수정했더니, 복잡한 느낌이 조금 있다.

코딩을 배운적이 없고  
그냥 책만 읽고 구글링하면서 작성해서  
조금 두서가 없는 느낌도 있다.
