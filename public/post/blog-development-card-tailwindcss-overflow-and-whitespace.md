---
title: Next 블로그 개발 - 한자 카드 tailwind text-ellipsis
description: 광둥어 카드 문자 넘침 생략 overflow와 whitespace로 text-ellipsis 적용하기
date: 2024-06-29 05:10:22
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-card-tailwindcss-overflow-and-whitespace
---

## 기존 진행된 내용

[[카드 리스트 기본틀]](/blog/blog-development-card-list-template)  
[[카드 리스트 tailwindcss grid]](/blog/blog-development-card-list-tailwindcss-grid)

### CardList 컴포넌트

```js
// .\app\components\CardList.js
const CardList = ({dataList}) => {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {dataList.map((data)=> <CnCard key={data.sortId} data={data}>)}
    </div>
  )
}

export default CardList;

```

<br/>

### CnCard 컴포넌트

편리를 위해 컴포넌트를 분리했다

```js
// .\app\components\CnCard.js
import Link from "next/link";

const CnCard({data}) => {
  return (
    <Link href={`/cantonese/${data.sortId}`}>
      <p>{data.jyutJam}</p>
      <h1>{data.tc}</h1>
      <p>{data.title}</p>
    </Link>
  )
}

export default CnCard;
```

<br/>

### 이번 관련 내용

- tailwindcss overflow-hidden
- tailwindcss whitespace-nowrap
- tailwindcss text-ellipsis

<br/><br/><hr/>

## Tailwindcss 추가하기

"카드 리스트"는 grid를 사용했다.  
grid를 사용하면 자동으로 자녀의 크기 조절을 해서,  
"카드" 크기에 대한 디자인은 고려하지 않아도 된다.  
( [[카드 리스트 tailwindcss grid]](/blog/blog-development-card-list-tailwindcss-grid) 참고 )

<br/><br/>

```js
// .\app\components\CardList.js - CardList - CnCard

const CnCard({data}) => {
  return (
    <Link className="border rounded-md text-center shadow-md hover:scale-105" href={`/cantonese/${data.sortId}`}>
      <p className="p-2 text-sm overflow-hidden whitespace-nowrap text-ellipsis">{data.jyutJam}</p>
      <h1 className="mb-6 font-bold text-6xl">{data.tc}</h1>
      <p className="py-2 font-bold text-sm bg-gray-10">{data.title}</p>
    </Link>
  );
}
```

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
