---
title: Next 블로그 개발 - 네비 호버 밑줄 애니메이션 css
description: Header Navigation, 링크 hover하면 밑줄이 나오는 css를 작성했다.
date: 2024-06-16 01:14:23
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-spread-underline-css
---

# Preview

### 진행된 내용

**전체 레이아웃**

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

**헤더 컴포넌트**

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

<br>

### 헤더 계획 디자인

1. 일반적인 디자인으로 좌 logo, 우 nav.
2. 링크별 각 페이지로 이동
3. **마우스 호버, 애니메이션**
4. 현재 경로(페이지) 강조
5. 반응형 버거 버튼, 작은 화면 nav 대체
6. 메뉴바 및 링크, 각 페이지로 이동
7. 버거 버튼 애니메이션
8. 버거 버튼 활성 시 메뉴바 나타남
9. 버거 버튼 비활성 시 메뉴바 없어짐
10. 링크 클릭시 버거 버튼 비활성

<br>

이번에 3을 만들 것이다.

<br>

### 관련 내용

- css hover
- css after
- css hover:after
- css position: absolute
- css transition

<br><br><br>

# 호버 애니메이션 밑줄

### 효과 추가 이유

실무에서 가끔  
왜 링크에 호버 효과나 강조를 하는지 물어보는 직원이 있다.

사실 이유는 간단하게

> 사용자에게  
> '이것은 링크입니다'라고 알리고  
> 클릭을 유도하기 위해서이다.

<br><br>

### tailwindcss 사용하지 않음

tailwindcss으로 애니메이션을 제어하는 것이  
개인적으로 좀 어렵다고 느꼈다.

그래서 globals.css를 수정했다.

<br><br>

### class name 추가

우선 효과를 만들기 위해  
header component의 Link태그에 class를 추가했다.  
class name은 `spread-underline`으로 했다.

```js
// .\app\components\HeaderBar.js - header 태그
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
```

<br>

css는 3가지를 고려했다.

1. 원래 css
2. 호버 css
3. after css

<br><br>

### spread-underline css 만들기

우선 hover 전에 css으로  
넓이를 추가하고 중간 정렬했다.

```css
/*  .\app\globals.css  */

.spread-underline {
  text-align: center;
  width: 80px;
}
```

hover의 효과도 추가했다.

```css
/*  .\app\globals.css  */

.spread-underline:hover {
  color: #16a34a;
  scale: 110%;
}
```

이제 본격적으로 밑줄을 만들어야 한다.

중간에서 양측으로 줄이 늘어나는 효과를 만들 계획이어서 `after`를 사용했다.

```css
/*  .\app\globals.css  */

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

위에서 부터 설명하면  
`content: ""` 내용 없음,  
`position: absolute` 절대 위치,  
`left: 50%` 중간에서 시작,  
`bottom: 0` (class의)밑으로 정렬,  
`height: 1px` 높이 1px,  
`width: 0` 시작 넓이 0,  
`background: #16a34a` 밑줄 색상,  
`transition: width 0.3s ease 0s, left 0.3s ease 0s` 애니메이션 제어

그리고 hover했을 때,  
`width: 100%` (class만큼) 넓이 최대  
`left: 0` 좌측 정렬

즉 원래 넓이가 없어서 안보이다가  
hover를 하면 넓이가 생기고  
중간에서 왼쪽으로 가서 양측으로 늘어나는 것 같은 효과를 만들었다.
