---
title: Next 블로그 개발 - 사이드 바 기본틀
description: sliding side navigation bar 감추기와 없애기
date: 2024-06-22 01:32:31
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-header-side-navigation-design
---

# Preview

### 헤더 컴포넌트

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

<br>

### 헤더 계획 디자인

1. 일반적인 디자인으로 좌 logo, 우 nav.
2. 링크별 각 페이지로 이동
3. 마우스 호버, 애니메이션
4. 현재 경로(페이지) 강조
5. 햄버거 버튼, 반응형 웹 작은 화면 nav 대체
6. 햄버거 버튼 애니메이션
7. **사이드 메뉴 및 링크, 각 페이지로 이동**
8. 햄버거 버튼 활성 시 사이드 메뉴 나타남
9. 햄버거 버튼 비활성 시 사이드 메뉴 없어짐
10. 링크 클릭시 햄버거 버튼 비활성

<br>

이번에 7을 만들 것이다.

<br>

### 관련 내용

- css fixed / absolute
- css touch-action none
- css visibility: hidden
- css display: none

<br><br><br>

# 사이드바 만들기

### 계획

1. 전체 화면 고정
2. 페이지 이동 링크

<br><br>

### nav-side 틀 만들기

이전 만들었던 `nav-main`과 큰 차이가 없다.  
[메인 네비게이션 디자인](blog-development-header-navigation-design)

만든 위치는
햄버거 버튼 다음에 추가했다.

```js
// .\app\components\HeaderBar.js - header - .nav-side

<nav className="nav-side active">
  {navigation.map(([title, url]) => {
    return (
      <Link href={url} key={title} className={firstPath === url ? "spread-underline active" : "spread-underline"}>
        {title}
      </Link>
    );
  })}
</nav>
```

이미 [미리보기](#preview)에서  
이전 [메인 네비게이션 디자인](blog-development-header-navigation-design)에서 만들었던  
`navigation`링크 변수와  
`usePathname`을 사용한 현재 주소값이 있다.

틀은 `nav-main`와 동일하다.  
css만 다르게 할 계획이다.

<br><br>

### 활성 nav-side css

```css
.nav-side.active {
  visibility: visible;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 8rem 4rem;
  background-color: #000;
  color: #fff;
  touch-action: none;
  opacity: 0.9;
}
```

비활성이면 안보이게 할 것이기 때문에  
처음부터 `.nav-side.active`의 css를 먼저 만들었다.

- 감춤 효과를 고려해서 `visibility`속성을 사용.
- `fixed`로 네비바 위치가 고정.
- `right` `top`으로 시작점 지정.
- `flex` `column`으로 nav의 링크를 세로로 배치.
- 높이는 `100vh`, 넓이는 `100%`, 화면 전체를 차지.
- `touch-action` 속성을 사용해서 모바일 터치 이벤트를 제거.

기타 내용은 색상과 위치 같은 디자인이다.

<br><br>

### 비활성 nav-side css

처음에는 활성된 사이드바 디자인을 보기 위해 nav태그의 클라스명을 `nav-side active`로 했다.  
이제 다시 `nav-side`으로 변경하고  
css의 `.nav-side` `.nav-side.active` 내용을 분리했다.

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

- `hidden`으로 감춤
- 절대 위치 `absolute` 사용
- right `-100%` 오른쪽 화면 밖으로 이동
- `opacity`. 완전 투명

그리고  
자녀을 `display: none`으로 없앴다.  
`none`으로 하지 않으면 이상한 여백이 생긴다.

<br><br>

### 중복 제거. active 자녀 display

`.nav-side` `.nav-side.active`의 중복 부분이 많다.  
`.nav-side`의 자녀를 안보이게 해서,  
활성했을 때는 다시 보이게 해야 한다.

```css
.nav-side {
  visibility: hidden;
  position: absolute;
  right: -100%;
  top: 0;
  opacity: 0;
}
.nav-side > * {
  display: none;
}
.nav-side.active {
  visibility: visible;
  position: fixed;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 8rem 4rem;
  background-color: #000;
  color: #fff;
  touch-action: none;
  opacity: 0.9;
}
.nav-side.active > * {
  display: initial;
}
```

<br>

### visibility:hidden 과 display:none

`visibility: hidden` 감추기이다.  
보이지 않지만 요소는 지정한 위치에 존재한다.  
`display: none` 없애기이다.  
아예 자리에서 없어진다.

`display`의 경우 `none`-`initial` 전환할 때, 애니메이션을 적용할 수 없다.

<br><br>

### 반응형 media 추가

사이드바는 작은 화면에서만 사용해서  
[반응형 감추기 햄버거 버튼](blog-development-header-hamburger-button-css-media) 에서 만들었던 media 부분에 nav-side를 추가했다.

```css
@media (min-width: 960px) {
  .nav-side.active {
    display: none;
  }
  .nav-burger {
    display: none;
  }
  .nav-burger.active {
    display: none;
  }
}
```

<br><br>

### 전체 animation

사이드바가 나오는 애니메이션을 추가할 생각이다.

밑줄 css `spread-underline`은 별도 애니메이션을 적용했지만...

생각해보니  
페이지 전체에 변화가 있을 때,  
요소가 모두 변화 애니메이션이 필요하다.

그래서 전체 css의 animatin을 추가했다.

```css
* {
  transition: all 400ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
```

css가 변경될 때, 모두 위의 애니메이션이 적용되었다.

<br><br><br>

# 결과 코드

해더 컴포넌트 전체 코드

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

css 추가된 코드

```css
* {
  transition: all 400ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-side {
  visibility: hidden;
  position: absolute;
  right: -100%;
  top: 0;
  opacity: 0;
}
.nav-side > * {
  display: none;
}
.nav-side.active {
  visibility: visible;
  position: fixed;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 8rem 4rem;
  background-color: #000;
  color: #fff;
  touch-action: none;
  opacity: 0.9;
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

<br>

- nav-main과 같은 네비를 만든다
- css를 이용해 다른 디자인 구조를 만든다
- css로 화면 밖으로 감춘다
- css @media로 960px 이상은 없어지게 한다
- 전체 css에 애니메이션을 추가했다

<br>

당연하지만  
css가 변환되는 기능을 작성하지 않아서  
버튼을 눌러도 메뉴 열기/닫기가 안된다.

다음 번에는 열기/닫기 제어를 구현할 예정이다.
