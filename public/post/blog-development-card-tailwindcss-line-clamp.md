---
title: Next 블로그 개발 - 블로그 카드 tailwind line-clamp
description: 블로그 카드. 2줄 이상일 때 문자 넘침 생략 line-clamp
date: 2024-06-30 07:10:22
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-card-tailwindcss-line-clamp
---

## 기존 진행된 내용

[[카드 리스트 기본틀]](/blog/blog-development-card-list-template)  
[[카드 리스트 tailwindcss grid]](/blog/blog-development-card-list-tailwindcss-grid)  
[[한자 카드 디자인]](/blog/blog-development-card-tailwindcss-overflow-and-whitespace)

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

### 이번 관련 내용

- tailwindcss overflow-hidden
- tailwindcss whitespace-nowrap
- tailwindcss text-ellipsis

<br/><br/><hr/>

"카드 리스트"는 grid이다.  
( [[카드 리스트 tailwindcss grid]](/blog/blog-development-card-list-tailwindcss-grid) 참고 )

## BlogCard 만들기

### BlogCard 컴포넌트

```js
// .\app\components\BlogCard.js
import Link from "next/link";

const BlogCard = ({ data }) => {
  return (
    <Link href={`/blog/${data.slug}`}>
      <div>
        <div>
          <h2>{data.title}</h2>
          <p>{data.desc ?? ""}</p>
        </div>
        <p>{data.date.toLocaleString()}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
```

`href={/blog/${data.slug}`, 임시 링크주소를 사용했다.  
date변수가 시간일 것을 예상해서 `toLocaleString()`함수를 사용했다.  
(추후 이미지 추가 예정)

<br/>

### tailwindcss 사용

광둥어 카드의 경우  
overflow와 whitespace를 감추어  
텍스트가 한줄만 나타나고  
텍스트가 한줄이 넘는 곳은 text-ellipsis으로 생략 표시를 했다.  
([광둥어 카드 디자인](/blog/blog-development-card-tailwindcss-overflow-and-whitespace) 참고)

블로그 카드의 경우  
텍스트 정보가 많아서  
**2줄**을 사용하고  
넘는 부분을 생략할 생각이다.

```js
// .\app\components\BlogCard.js - return 값(Link 컴포넌트)

<Link className="overflow-hidden rounded-md hover:scale-105" href={`/blog/${data.slug}`}>
  <div className="p-4 flex flex-col justify-between">
    <div>
      <h2 className="text-lg font-bold text-ellipsis line-clamp-2">{data.title}</h2>
      <p className="text-sm text-ellipsis line-clamp-2">{data.desc ?? ""}</p>
    </div>
    <p className="text-xs">{data.date.toLocaleString()}</p>
  </div>
</Link>
```

- Link 컴포넌트 `overflow-hidden`
- 위아래로 정렬을 위해 `flex flex-col justify-between`을 부모로 사용
- `line-clamp-2` 제목(title)과 설명(desc)를 2줄만 나타냄
- 제목(title)과 설명(desc)를 2줄 넘을 때, `text-ellipsis`으로 생략 표시

<br/><br/><hr/>

## BlogCard 테스트

카드는 다 만들었지만 확인이 안된다.  
당연하지만 아직 BlogCard를 사용한 곳이 없다.

CardList에서 사용을 해야하는데  
아직 CardList에서 CnCard와 BlogCard를 구분하는 방법이 없어서, 이를 추가해야 하지만... 지금은 테스트만 하기로 했다.

```js
// .\app\components\CardList.js
const CardList = ({dataList}) => {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {dataList.map((data)=> <BlogCard key={data.slug} data={data}>)}
    </div>
  )
}

export default CardList;
```

<br/><br/><hr/>

## 결과

**오류가 나타난다**

이유는 dataList로 받은 형식이  
BlogCard가 필요로 하는 변수가 없다.

임시 변수를 추가하고,  
블로그 페이지에서 테스트했다.

```js
// .\app\blog\page.js - tempBlog 임시 변수

const tempBlog = [
  { date: "2024-01-01 00:00:00", title: "테스트 타이틀", desc: "테스트 설명", slug: "blogTest1" },
  { date: "2024-01-01 00:00:00", title: "테스트 123456789012345678901234567890", desc: "테스트 설명 123456789012345678901234567890", slug: "blogTest2" },
];
```

<br/>

다시 테스트 해보니  
카드 디자인은 문제가 없다.  
다음에 구분하는 방법을 추가할 필요가 있다.
