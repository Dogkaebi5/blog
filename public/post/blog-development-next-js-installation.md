---
title: 블로그 개발 - Next.js 설치
description: Next.js 설치해서.. 빠르게 블로그 만들어보기
date: 2024-05-21 07:34:29
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-next-js-installation
---

이번에 Next.js를 사용한 이유는

1. 빠르게 만들기 위해
2. SSR을 위해
3. 공부해보기 위해

위에 순서가 중요 순서이기도 했다.

<br/>

## Next app 설치

---

next자체가 하나의 프로그램으로  
자신이 next로 만드는 웹/앱은 next app이라 많이 한다.

설치는 node.js가 있으면 간단하다.

```bash
npx create-next-app@latest
```

터미널에 위 코드를 입력하면 현재 폴더에서 앱이 생성된다.  
모든 프로젝트는 경로(폴더명)가 영어인 것을 추천한다.

터미널을 여는 방법은  
windows는 `cmd`를 검색하고,  
mac은 `Terminal`을 검색하면 된다.  
(개인적으로 git이나 vscode를 사용하지만...)

위에 코드를 치면 설정이 나온다.

```bash
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to use Turbopack for `next dev`?  No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*
```

위에서 부터

- 프로젝트 이름 설정 : 나는 'dogkaebi-blog'
- TypeScript 사용여부 : javascript 변수에 타입을 선언. 나는 'No'.
- ESLint 사용여부 : 문법체크. 'Yes'
- Tailwind CSS 사용여부 : class명으로 css 제어. 'Yes'
- `src/` : 경로에 src을 사용 여부. 'Yes'
- App Router? : 경로에 App를 사용 여부. 'Yes'
- Turbopack 사용여부 : 모듈 번들러인데.. 개발 테스트가 빠르게 빌드된다고 보고, 관심이 있으면 깊게 공부하는 것을 추천한다. 'Yes'
- 가져오기 별칭 사용여부 : 별칭으로 가져오기 경로를 사용하는 선택 'Yes'
- 가져오기 별칭 설정 : 기본은 @ 이다. '@/\*'

<br/>

`src`을 사용하면 기본 페이지 경로가 `/src/app/`이고  
`src`을 사용하지 않으면 경로가 `/app/`이다.

<br/>

## Dev 실행하기

---

설치가 끝나면 터미널에 next 명령어를 실행할 수 있다.

```bash
next dev
```

위에 코드를 입력하면 (해당 폴더에서 입력)  
http://localhost:3000 서버가 열린다.  
해당 주소로 들어가면 `/app/`에 있는 페이지가 나오게된다.

처음에 샘플 페이지가 있어서, 제대로 설치되는지 확인할 수 있다.
