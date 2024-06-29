---
title: Next 블로그 개발 - 카드 리스트 반응형 tailwind grid
description: 한자 카드 리스트의 grid를 사용해서 정렬 디자인하기
date: 2024-06-28 04:19:22
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-card-list-tailwindcss-grid
---

## CardList 현재 나용

[[카드 리스트 기본틀]](/blog/blog-development-card-list-template)

```js
// .\app\components\CardList.js
import Link from "next/link";

const CardList = ({dataList}) => {
  return (
    <div>
      {dataList.map((data)=> <CnCard key={data.sortId} data={data}>)}
    </div>
  )

  function CnCard({data}{
    return (
      <Link href={`/cantonese/${data.sortId}`}>
        <p>{data.jyutJam}</p>
        <h1>{data.tc}</h1>
        <p>{data.title}</p>
      </Link>
    )
  })
}

```

<br/>

### 이번 관련 내용

- tailwindcss grid
- tailwindcss grid-cols-
- tailwindcss sm: md: lg:

<br/><br/><hr/>

## Tailwindcss 추가하기

"카드 리스트"이기 때문에 grid를 사용했다.  
grid를 사용하면 한줄의 자녀 수량을 정할 수 있다.

자동 정렬이어서  
넓이 혹 높이를 동등하게 나누고  
각 줄의 자녀의 시작점이 같게 된다.

```js
// .\app\components\CardList.js - CardList

const CardList = ({dataList}) => {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {dataList.map((data)=> <CnCard key={data.sortId} data={data}>)}
    </div>
  )
  ...
}
```

div의 클라스명으로 `grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4`을 추가했다.

- `grid` 선언
- `gap-4` 간격
- `grid-cols-2` 기본 한줄에 카드 2개
- `sm:grid-cols-3` 640px 이상은 카드 3개
- `md:grid-cols-4` 768px 이상은 카드 4개

정말 매우 편리하고 간단하다.

<br/><br/><hr/>

## 결과

grid로 잘 정렬된다  
각 화면 크기에 따라서 한줄의 카드 수량이 달라진다.

flex를 사용하고 카드의 크기를 지정할 수도 있지만...  
광둥어에서는 카드 자체의 디자인은 중요하지 않아서 grid가 더 적합한 것 같다.

만들고 발견한 것은  
grid를 선언한 부모의 클라스를 path에 따라서 변경하면,  
CardList를 블로그`/blog`와 단어`/cantonese/word`에서 똑같이 사용이 가능하고,  
한자와 단어는 같은 CnCard를 사용해도 된다.
