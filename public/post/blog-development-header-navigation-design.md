---
title: Next 블로그 개발 - 헤더 네비 외형과 링크
description: map()함수와 Link 컴포넌트로 header navigation bar 기본틀 만들기
date: 2024-06-14 05:03:29
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-header-navigation-design
---

## Preview

현재 app폴더 layout.js의 body 부분

```js
// .\app\layout.js

<body className={inter.className + " mx-auto max-w-6xl"}>
  <header>헤더입니다</header>
  <main>{children}</main>
  <footer>푸터입니다</footer>
</body>
```

<br>

관련 내용

- next.js component ( [컴포넌트](/blog/blog-development-next-js-component) )
- Link component
- css. flex 및 정렬
- javascript array 변수
- javascript map() 함수

<br>

헤더 부분을 네비게이션 바로 만들려고 한다.  
[컴포넌트](/blog/blog-development-next-js-component)로 만들 계획이다.

<br><br><br>

## 계획. 헤더 디자인

1. **일반적인 디자인으로 좌logo, 우nav.**
2. **링크별 각 페이지로 이동**
3. 마우스 호버, 애니메이션
4. 현재 경로(페이지) 강조
5. 햄버거 버튼, 반응형 웹 작은 화면 nav 대체
6. 햄버거 버튼 애니메이션
7. 사이드 메뉴 및 링크, 각 페이지로 이동
8. 햄버거 버튼 활성 시 사이드 메뉴 나타남
9. 햄버거 버튼 비활성 시 사이드 메뉴 없어짐
10. 링크 클릭시 햄버거 버튼 비활성

<br>

우선 1,2을 만들어볼 생각이다.

<br><br><br>

## 코드

### 기본틀

```js
// .\app\components\HeaderBar.js

import Link from "next/link";

const HeaderBar = () => {
  return (
    <header>
      <Link href="/">Dogkaebi</Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/cantonese">粵</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default HeaderBar;
```

로고를 이미지로 하고 싶지만  
아직 정한 로고가 없어서 텍스트"Dogkaebi"를 사용했다.

아직 css가 없다.  
tailwind는 개인적 생각으로  
이런 적용형 nav에는 적합하지 않다고 생각해서  
next.js에서 기본으로 생성된 `globals.css` 안에 css를 작성하기로 했다.

링크도 반복되고, 변경할 가능성이 있어서  
배열 변수 links를 만들고 map() 함수를 사용했다.

### 변경한 코드

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
          <Link href={url} key={title}>
            {title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default HeaderBar;
```

기본틀과 달라진 내용은 없다.  
css에서 바로 header 태그를 사용해도 되지만  
우선 클라스명을 nav으로해서 사용했다.

```css
/*  .\app\global.css  */

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 4px;
}
```

flex로 만들어, 자녀요소를 한줄에 정렬하고  
justify를 space-between을 사용해, 좌우 끝에 배치했다.  
items를 center로 했다. 로고와 nav가 높이가 다를 때 정렬하기 위해서이다.  
padding을 위아래 8px, 좌우 4px으로 조금 공간을 만들었다.

<br><br><br>

## layout.js 에 적용

만들었는데 화면에 나오지 않는다.  
당연하게도 컴포넌트만 만들고  
아직 페이지에서 사용하지 않아서이다...

원래 기존 layout.js에서  
header태그 부분을 새로 만든 컴포넌트로 대체했다.

```js
// .\app\layout.js

import HeaderBar from "./components/HeaderBar";

...

<body className={inter.className + " mx-auto max-w-6xl"}>
  <HeaderBar />
  <main>{children}</main>
  <footer>푸터입니다</footer>
</body>

...

```

HeaderBar 컴포넌트를 import 하고, body에서 사용.  
정상적으로 잘 출력된다.

이렇게 기본 디자인틀을 완성했다.
