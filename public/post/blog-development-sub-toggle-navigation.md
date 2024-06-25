---
title: Next 블로그 개발 - 서브 네비게이션
description: Sub toggle navigation 만들기
date: 2024-06-25 05:39:12
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-sub-toggle-navigation
---

# 계획

1. /cantonese 페이지에서 사용
2. 광둥어 하위 한자/단어/발음/일기 로 구분
3. /blog 페이지에서 사용
4. 블로그의 분류, 파라미터로 구분
5. 검색 인풋 (추후 추가)

<br>

두 페이지에서 같은 디자인을 사용할 생각이지만  
실제로 두 페이지에서 링크형식이 다르다.

기본 링크를 만드는 방법은  
[[헤더 네비게이션]](/blog/blog-development-header-navigation-design)편에서 만든 것과 크게 다를 것은 없어보인다.

디자인은 토글 버튼은 사용하고

<br>

### TMI. 토글 (toggle)

한국에서는  
토글이라고 하면 보통 on/off 스위치를 생각한다.  
토글 자체는 원래 '떡볶이 단추'이다.

토글 스위치(toggle switch)는 전기 스위치이기도 하다.  
탭 토글(tab toggle)은 블라우져의 탭 같은 느낌이다.  
토글 버튼(toggle button)도 탭토글과 비슷하 모양이다.

디자인 모양에 따라 이름이 다르지만  
토글의 주요 내용은 on/off가 있다는 점인 것 같다.  
대부분은 하나가 on이면 남은 선택은 off가 된다.  
radio button과 비슷한 점이 있다.

<br><br><br>

# 서브 네비게이션 컴포넌트

컴포넌트를 만들어 재사용하는 방식을 택했다.

여기서도 usePathname을 사용해도 되지만...  
클라이언트 컴포넌트를 사용하고 싶지가 않다...  
다른 방법을 사용해보기로 했다.

```js
// .\app\components\SubNav.js

import Link from "next/link";

const SubNav = ({ path, slug = "" }) => {
  const navs = {
    tc: {
      url: "/cantonese",
      trail: "/cantonese/",
      links: [
        ["한자", ""],
        ["단어", "word"],
        ["발음", "syllable"],
        ["회화", "conversation"],
      ],
    },
    blog: {
      url: "/blog",
      trail: "/blog?tag=",
      links: [
        ["All", ""],
        ["일상", "daily"],
        ["코딩", "coding"],
        ["광둥어", "cantonese"],
      ],
    },
  };
  const data = navs[path];

  const toggleOffClass = "py-2 px-7 border hover:border-green-500 ";
  const toggleOnClass = "py-2 px-7 bg-green-600 font-bold text-white";

  return (
    <nav className="flex flex-wrap mx-2 gap-2">
      {data.links.map(([name, link]) => (
        <Link key={name} href={link == "" ? data.url : data.trail + link} className={link == slug ? toggleOnClass : toggleOffClass}>
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default SubNav;
```

<br>

### props 받기

```js
const SubNav = ({ path, slug = "" }) => {};
```

props으로 `{ path, slug = "" }`을 부모로 부터 받았다.

<br>

### navs 객체 변수

`navs`객체를 만들어고  
`nav[path]`를 사용해서 사용되는 데이터를 선택한다.  
( if문 대신 사용한 것이다 )

<br>

### 반복문으로 링크 만들기

```js
data.links.map(([name, link]) => <Link>{name}</Link>);
```

`navs[path]`의 `links`를  
`map(([name, link])=>{})`으로 반복한다.

<br>

### Link 컴포넌트의 href 속성

```js
href={link == "" ? data.url : data.trail + link}
```

반복된 `link`가  
빈 내용일 때 `navs[path]`의 url을 사용하고  
내용이 있을면 `navs[path]`의 trail에 `link`을 붙여서 사용한다.

<br>

### Link 컴포넌트의 class 속성

```js
className={link == slug ? toggleOnClass : toggleOffClass}
```

반복된 `link`가  
props의 `slug`와 동일하면 토글 활성화, 아니면 비활성화 했다.

이렇게 링크와 강조 디자인을 적용 완료했다.

<br><br><br>

# 블로그 페이지에 적용

광둥어 페이지는 링크이고,  
블로그 페이지는 검색 파라미터이다.  
즉 사용 방식이 조금 차이가 있다.

```js
// .\app\blog\page.js

import Heros from "@components/Heros";
import SubNav from "@components/SubNav";

export default async function Blog(props) {
  const path = "blog";
  const tag = props.searchParams.tag;

  return (
    <>
      <Heros path={path} />
      <SubNav path={path} slug={tag ?? ""} />
      <p>블로그 내용입니다</p>
    </>
  );
}
```

[[히어로 컴포넌트]](/blog/blog-development-hero-components)에서 만들었던 페이지에  
`SubNav`컴포넌트를 추가했다.  
<br>

```js
const path = "blog";
```

`Heros`컴포넌트도 path를 사용하기 때문에  
"blog"를 변수로 만들어 공동으로 사용했다.  
<br>

```js
const tag = props.searchParams.tag;
```

props를 받아서 searchParams를 사용해서  
파라미터의 tag 값을 받아서 사용했다.

<br>

```js
<SubNav path={path} slug={tag ?? ""} />
```

`SubNav`에 path를 전달하고  
slug는 `??`문법을 사용해서  
`tag`이 null이면 `빈 문자열`을 전달하고  
`tag`이 null이 아니면 `tag`을 전달했다.

<br><br><br>

# 광둥어 페이지에 적용

광둥어 페이지의 경우,  
경로의 서브 디렉토리가 2중이 된다.

우선 /cantonese의 하위 페이지들을 만들었다.  
라우팅 내용은 [[next.js 라우팅]](/blog/blog-development-next-js-routing) 참고

```
app
└ cantonese
  └ word
    └ page.js
  └ syllable
    └ page.js
  └ conversation
    └ page.js
  └ page.js
```

광둥어 (한자) 페이지

```js
// .\app\cantonese\page.js
import Heros from "@components/Heros";
import SubNav from "@components/SubNav";

export default function Cantonese(props) {
  const path = "tc";
  return (
    <>
      <Heros path={path} />
      <SubNav path={path} />
      <p>광둥어 내용입니다</p>
    </>
  );
}
```

단어 페이지

```js
// .\app\cantonese\word\page.js
import Heros from "@components/Heros";
import SubNav from "@components/SubNav";

export default function Word(props) {
  const path = "tc";

  return (
    <>
      <Heros path={path} />
      <SubNav path={path} slug="word" />
      <p>광둥어의 단어(word) 내용입니다</p>
    </>
  );
}
```

발음 페이지

```js
// .\app\cantonese\syllable\page.js
import Heros from "@components/Heros";
import SubNav from "@components/SubNav";

export default function Syllable(props) {
  const path = "tc";
  return (
    <>
      <Heros path={path} />
      <SubNav path={path} slug="syllable" />
      <p>광둥어의 발음(syllable) 내용입니다</p>
    </>
  );
}
```

회화(일기) 페이지

```js
// .\app\cantonese\conversation\page.js
import Heros from "@components/Heros";
import SubNav from "@components/SubNav";

export default function Conversation(props) {
  const path = "tc";
  return (
    <>
      <Heros path={path} />
      <SubNav path={path} slug="conversation" />
      <p>광둥어의 회화(conversation) 내용입니다</p>
    </>
  );
}
```

<br>

이상.

각 필요한 페이지에 SubNav를 적용했다.
