---
title: Next 블로그 개발 - 블로그 카드 이미지 추가하기
description: Image 컴포넌트 사용해서 외부 페이지의 이미지 사용하기
date: 2024-07-01 06:12:34
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-next-js-image-component
---

## 기존 진행된 내용

[[카드 리스트 기본틀]](/blog/blog-development-card-list-template)  
[[카드 리스트 tailwindcss grid]](/blog/blog-development-card-list-tailwindcss-grid)  
[[한자 카드 디자인]](/blog/blog-development-card-tailwindcss-overflow-and-whitespace)  
[[블로그 카드 디자인]](/blog/blog-development-card-tailwindcss-line-clamp)

### CardList 컴포넌트

```js

// .\app\components\CardList.js

import Link from "next/link";
import CnCard from "./components/CnCard";
import BlogCard from "./components/BlogCard";

const CardList = ({dataList}) => {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {dataList.map((data)=> <CnCard key={data.sortId} data={data}>)}
    </div>
  )
}
```

### BlogCard 컴포넌트

```js
// .\app\components\BlogCard.js
import Link from "next/link";

const BlogCard = ({ data }) => {
  const cardCss = "border rounded-md overflow-hidden hover:scale-105";
  const textWrapCss = "p-4 flex flex-col justify-between";
  const titleCss = "text-lg font-bold text-ellipsis line-clamp-2";
  const descCss = "text-sm text-ellipsis line-clamp-2";

  return (
    <Link className={cardCss} href={`/blog/${data.slug}`}>
      <div className={textWrapCss}>
        <div>
          <h2 className={titleCss}>{data.title}</h2>
          <p className={descCss}>{data.desc ?? ""}</p>
        </div>
        <p className="text-xs">{data.date.toLocaleString()}</p>
      </div>
    </Link>
  );
};
```

### blog 페이지 임시 데이터

```js
const tempBlog = [
  { date: "2024-01-01 00:00:00", title: "테스트 1", desc: "테스트 설명 1", slug: "blogTest1" },
  { date: "2024-01-02 00:00:00", title: "테스트 2", desc: "테스트 설명 2", slug: "blogTest2" },
];
```

<br/>

### 이번 관련 내용

- next.js Image 컴포넌트
- https://placehold.co/
- tailwindcss object-cover

<br/><br/><hr/>

## Image 컴포넌트

```js
// .\app\components\BlogCard.js - 추가 내용 외 생략

...
import Image from "next/image";

const BlogCard = ({ data }) => {
  ...
  const imgCss = "object-cover h-40";
  const imgURL = "https://placehold.co/600x400"

  return (
    <Link className={cardCss} href={`/blog/${data.slug}`}>
      <Image src={imgURL} width={600} height={400} alt={data.slug} className={imgCss}/>
      <div className={textWrapCss}>...</div>
    </Link>
  );
};
```

`<Image width={600} height={400} src={imgURL} alt={data.slug} />`  
을 Link컴포넌트에 추가했다.

next.js에서 제공하는 이미지 컴포넌트이다. [[next.js 공식]](https://nextjs.org/docs/pages/api-reference/components/image)

Next.js은 웹 성능과 SSR을 위해서  
img태그 대신 Image 컴포넌트를 사용한다.

- "next/image"에서 Image 불러오기
- \<Image /> 사용
- 필수 값 : ①이미지 주소 ②넓이 ③높이 ④설명

부모가 grid 이어서 크기는 중요하지 않았다.  
600x400을 사용했지만 좀 큰 크기이다.  
설명문 `alt`는 slug명을 사용했다.

<br/><br/><hr/>

## 내부 이미지 사용

내부 이미지을 사용하기 위해서는  
프로젝트 폴더(src 밖)의 `public`폴더에 이미지 파일을 저장한다.

링크는 `/` + 파일이름 으로 사용한다.  
예시 : "/이미지.png"

<br/><br/><hr/>

## 외부 이미지 사용

### placehold.co

placehold.co은 샘플 이미지를 제공하는 사이트이다.  
[[placehold 사이트]](https://placehold.co/)

`https://placehold.co/` + 사이즈 로 사용할 수 있다.

```js
const imgURL = "https://placehold.co/600x400";
```

을 이미지 링크로 사용했다.

<br><br>

### Next.js config > image

외부 링크 이미지를 사용하기 위해서는  
Next.js 설정에서 이미지 링크를 허용해야 한다.

프로젝트 폴더에서 (src 밖)  
`next.config.js` 파일을 찾는다.

```js
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

module.exports = nextConfig;
```

`nextConfig`변수 안에 아래 내용을 추가한 것이다.

```js
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "placehold.co",
    },
  ],
},
```

다른 사이트를 등록하고 싶으면  
위처럼 프로토콜과 호스트를 객체로 만들어서 배열로 추가하면 된다.

<br><br><hr>

## tailwindcss

```js
const imgCss = "object-cover h-40";
```

`object-cover`을 사용해서 이미지가 자동으로 조절되게 했다. [tailwindcss 공식](https://tailwindcss.com/docs/object-fit)

높이는 고정했다.  
반응형 웹으로 각 크기에서도 같은 높이로 나오게 하기 위해서 이었다.

<br/><br/><hr/>

## 정리

이미 부모가 grid이어서  
이미지 크기가 사실 중요하지는 않았다.  
우선 원하는 상태로 이미지가 잘 표시된다.

- Image 컴포넌트를 사용해 이미지 사용
- Image 필수 주소, 넓이, 높이, 텍스트 설명
- 내부 파일은 public 폴더에 저장
- 외부 파일은 next.config에 추가해야 사용가능
- tailwindcss의 object-cover사용. 이미지가 자동으로 틀의 넓이와 높이 조절
