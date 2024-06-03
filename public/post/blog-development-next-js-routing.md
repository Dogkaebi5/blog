---
title: 블로그 개발 - Next.js 14 라우팅 (Routing)
description: Next.js에서 페이지를 이동/전환하는 라우팅은 터미널로직(Terminology)를 사용해서, 더욱 간단하게 url 세팅이 가능해졌다.
date: 2024-06-03 03:06:29
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-next-js-routing
---

Next.js 14에서 라우팅 방식은 진짜 쉬워졌다.  
터미널로직 (Terminology)을 사용해서  
`..app\` 폴더를 기준으로 폴더를 만들면  
폴더명이 url 이름이 된다.

현재 https://dogkaebi.com 의 경우  
Home / Cantonese / Blog / About 페이지가 있다.

```
app
└ home
└ cantonese
└ blog
└ about
```

이렇게 폴더를 만들면 이미 기본 라우팅은 끝이다.  
[nextjs 공식 설명](https://nextjs.org/docs/app/building-your-application/routing)

하지만 지금 터미널에서 `next dev` 를 실행하고  
해당 url을 브라우저에 입력하면 404 페이지가 나타난다.

page.js를 만들지 않아서이다.  
테스트를 위해 각 폴더에 `page.js` 파일을 만들고,  
파일에 아래처럼 입력했다.

```js
// ..src\app\cantonese\page.js

export default function Cantonese() {
  return <> 광둥어 페이지입니다 </>;
}
```

이제 브라우저에서 테스트 화면인  
`http://localhost:3000/cantonese`  
으로 접속하면 "광둥어 페이지입니다"라는 글을 볼 수 있다.

<br/>

위 코드 설명:  
`export` : 내보내기. 뒤에 선언한 변수를 다른 곳에서 사용할 수 있게 한다.  
`default` : export와 같이 사용하면 뒤에 선언한 변수를 기본값으로 내보내기를 하게 한다. 원래 한 파일에서 여러개 변수를 내보낼 수 있다  
`function` : 함수 선언이다. function + 함수이름 + (파라미터) + { 실행 코드 }  
`Cantonese() {}` : 함수이름을 "Cantonese"로 했다. 다른 이름도 정상적으로 작동한다. 보통은 url이름을 사용하고 첫 알파벳을 대문자를 쓴다.  
`return <> 광둥어 페이지입니다 </>` : 함수에서 내보내는 값이다. `<> 광둥어 페이지입니다 </>`을 내보낸다.

<br/>

---

<br/>

각 페이지 테스트를 위해서  
각 페이지 폴더에 page.js를 만들고  
함수를 만들어서 각자의 라우팅 이름을 내보냈다.

```js
// ..src\app\blog\page.js
export default function Blog() {
  return <> 블로그 페이지입니다 </>;
}

// ..src\app\about\page.js
export default function About() {
  return <> 자기소개 페이지입니다 </>;
}
```

이렇게 기본틀을 완료했다.
