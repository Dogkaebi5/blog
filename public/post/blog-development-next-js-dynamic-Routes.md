---
title: 블로그 개발 - Next.js 동적 라우팅 (Dynamic Routes)
description: Next.js의 터미널로직(Terminology)를 사용해서, 간단하게 동적 라우팅 (Dynamic Routes)이 가능하다
date: 2024-06-04 09:03:29
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-next-js-dynamic-Routes
---

Next.js 14에서  
라우팅 방식은 터미널로직 (Terminology)을 사용한다.  
즉 폴더명으로 라우팅을 한다.  
[블로그 개발 - Next.js 14 라우팅 (Routing)](/blog/blog-development-next-js-routing)

동적 라우팅도 폴더명으로 지정한다.

<br/>

## Dynamic Routes 동적 라우팅

---

동적 라우트는  
아직 경로 이름이 미정이거나  
같은 구조의 페이지에서 경로에 따라서 다른 콘텐츠(내용)을 보여줄 필요가 있는 경우 사용된다.

예시로  
dogkaebi.com의 한자 페이지와  
현재 보고 있는 Post 페이지도 동적 라우팅이다.

쇼핑몰 사이트의 상품 페이지도 동적 라우팅이다.  
같은 디자인틀을 제공하고,  
경로별로 다른 상품을 보여준다.

만약 정적 라우팅 (Static Routes)를 사용하면  
상품이 추가될 때마다 새로 페이지를 복사해야 하고,  
디자인틀이 변경될 때, 모든 상품 페이지를 하나씩 수정해야 한다.

동적 라우트는  
기본적으로 같은 틀을 사용자에게 전달하면서  
세그먼트(경로명)에 따라서 페이지에 설정한 변수만 다르게 전달한다.

<br/>

## 동적 라우팅 사용법

---

아주 간단하다.  
폴더명을 대괄호에 넣으면 된다.

많이 사용되는 세그먼트 이름(폴더, 경로 변수 이름)은  
[id] 와 [slug] 가 있다.

```
app
└ cantonese
└─ [id]
└ blog
└─ [slug]
```

이 폴더 안에도 당연히 page.js를 만들어야 한다.

```js
// ..src\app\cantonese\[id]\page.js

export default function Dict(props) {
  return <> {props.params.id} </>;
}
```

이제 http://localhost:300/cantonese/  
뒤에 아무 주소를 입력해서 접속하면  
뒤에 입력한 내용이 페이지에 출력된다.

예시로 http://localhost:300/cantonese/123 을 접속하면  
브라우저에 "123"이라는 문자가 출력된다.
