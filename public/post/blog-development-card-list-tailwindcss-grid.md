---
title: Next 블로그 개발 - 카드 리스트 반응형 tailwind grid
description: 한자 사전의 한자 리스트의 기본틀 만들기
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
- tailwindcss overflow-hidden
- tailwindcss whitespace-nowrap
- tailwindcss text-ellipsis

<br/><br/><br/>

## Tailwindcss 추가하기

"카드 리스트"이기 때문에 grid를 사용했다.  
grid를 사용하면 자동으로 자녀의 크기 조절을 해서,  
"카드" 크기에 대한 디자인은 고려하지 않아도 된다.

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

<br/><br/>

```js
// .\app\components\CardList.js - CardList - CnCard

function CnCard({data}{
  return (
    <Link className="border rounded-md text-center shadow-md hover:scale-105" href={`/cantonese/${data.sortId}`}>
      <p className="p-2 text-sm overflow-hidden whitespace-nowrap text-ellipsis">{data.jyutJam}</p>
      <h1 className="mb-6 font-bold text-6xl">{data.tc}</h1>
      <p className="py-2 font-bold text-sm bg-gray-10">{data.title}</p>
    </Link>
  )
})
```

광둥어 카드의 경우

- Link 컴포넌트 : border rounded-md text-center hover:scale-105
- 월음 P 태그 : p-2 text-sm whitespace-nowrap overflow-hidden text-ellipsis
- 한자 h1 태그 : mb-6 font-bold text-6xl
- 제목 p 태그 : py-2 font-bold text-sm bg-gray-10

<br/>

Link 컴포넌트는  
`border를` 만들고 모서리를 `rounded-md` 둥굴게.  
문자를 `text-center` 중간 정렬.  
호버 `hover:scale-105` 커지게.  
이전에 모든 css에 애니메이션을 추가했어서  
별도로 애니메이션은 만들지 않았다.

월음은 한줄 넘음 방지  
`overflow-hidden`로 넘는 글자를 숨기기.  
`whitespace-nowrap`로 줄바꿈 안함.  
`text-ellipsis`로 "`...`" 생략 표시.

한자와 제목은 크기, 굵이, 배경색만 설정했다.

<br/><br/><br/>

## 결과

grid로 잘 정렬되고  
각 화면 크기에 따라서 한줄의 카드 수량이 달라진다.

flex를 사용하고 카드의 크기를 지정할 수도 있지만...  
광둥어에서는 카드 자체의 디자인은 중요하지 않아서 grid가 더 적합한 것 같다.

만들고 발견한 것은  
grid를 선언한 부모의 클라스를 path에 따라서 변경하면,  
CardList를 블로그`/blog`와 단어`/cantonese/word`에서 똑같이 사용이 가능하고,  
한자와 단어는 같은 CnCard를 사용해도 된다.

다음은  
같은 CardList을 사용해서  
다른 path에 따라서  
grid만 변경되는 부분도 작성해야겠다.
