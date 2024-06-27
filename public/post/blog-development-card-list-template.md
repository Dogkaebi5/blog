---
title: Next 블로그 개발 - 카드 리스트 기본틀 (한자사전)
description: 한자 사전의 한자 리스트의 기본틀 만들기
date: 2024-06-27 05:39:12
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-card-list-template
---

# 계획

한자 사전 (Character dictionary) 페이지를 만들려고 한다.  
<sub>tmi. 중국어 사전은.. 글자-字典, 단어-詞典이 따로 있다</sub>

생각해야 하는 것이 많았다.

- 페이지 라우팅
- 페이지 디자인
- 데이터 형식 (type & schema)
- 데이터 처리 (controller)

<br/>

### 라우터 router

`/cantonese` 는 한자 리스트  
`/cantonese/word` 는 단어 리스트  
으로 사용할 생각이다.

<br/>

### 디자인 & 데이터

디자인이 대부분의 데이터를 결정한다.

원형 데이터의 형식은 아직 결정하지 않았지만,  
디자인을 정하면 현재 페이지에서 사용할 데이터는 대부분 결정된다.

우선 한자 데이터 형식을 정하지 않아서  
한자 리스트에서 보여주고 싶은 내용을 정리했다.

1. 한자
2. 월음
3. 한글 뜻

한자에 여러 뜻이 있을 수 있고,  
뜻 풀이가 길 수 있기 때문에..  
별도의 타이틀을 사용했다.

리스트의 순서는 여러 고민을 했다.  
검색 기능을 추가하면 순서가 중요하지 않을 것 같다.  
하지만 콘텐츠가 추가할 때 한자도 같이 업데이트되면 좋을 것 같기도 하다.  
결국은 데이터에 순서 숫자를 추가할 계획이다.

"리스트"이기 때문에 데이터는 array가 적합하다고 생각했다.

위 내용을 바탕으로 임시 데이터틀을 만들었다.

```js
const tempChars = [
  { sortId: "0", tc: "零", jyutJam: "ling4 lin4", title: "숫자 0" },
  { sortId: "1", tc: "一", jyutJam: "jat1", title: "숫자 1" },
];

const tempWords = [
  { sortId: "0", tc: "你好", jyutJam: "nei5 hou2", title: "안녕하세요" },
  { sortId: "1", tc: "再見", jyutJam: "zoi3 gin3", title: "또 만나요" },
];
```

<br/>

윤곽이 머리속에 그려져서  
계획을 조금 명확히 했다.

<br/>

1. 한자 사전 리스트, 단어 사전 리스트 분리
2. 등록된 한자 총 수량
3. 링크 리스트 디자인
4. 각 한자/단어 링크
5. 추후. 페이지 카드 수량 제한
6. 추후. 페이지네이션 추가
7. 추후. 별도 컨트롤러, 데이터 처리

<br/><br/><br/>

# CardList 컴포넌트

전에 만들었던 components 폴더에( [next.js컴포넌트](/blog/blog-development-next-js-component) 참고 )  
`CardList.js`를 만들었다.

CardList 컴포넌트 안에서  
CharCard 컴포넌트를 만들었다.

<br/><br/>

### CardList 기본틀

```js
// .\app\components\CardList.js
import Link from "next/link";

const CardList = ({dataList}) => {
  return (
    <div>
      {dataList == null || dataList == undefined
        ? "데이터를 찾지 못했습니다"
        : dataList.map((data)=> <CharCard key={data.sortId} data={data}>)
      }
    </div>
  )

  function CharCard({data}{
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

- 데이터는 부모에서`dataList`를 받는 것으로 했다.
- `CardList`는 div을 return했다.
- `dataList` 읽기 오류 처리를 했다.
- 정상으로 읽으면 `map()`으로 `CharCard` 컴포넌트를 생성했다.
- `CardList` 안에서 `CharCard`를 선언했다.
- `CardList`는 이미 return했기 때문에 `CharCard`은 function으로 선언해서 호이스팅했다.
- `CharCard`는 Link 컴포넌트를 return 한다. 아직 한자 상세페이지를 만들지 않아서 임시로 `/cantonese/${data.sortId}`을 동적 링크로 사용했다.

<br/><br/><br/>

# CardList 적용

이전 만들었던 Cantonese페이지에 적용했다.

```js
// .\app\cantonese\page.js
import Heros from "@components/Heros";
import SubNav from "@components/SubNav";
import CardList from "@components/CardList";

const tempChars = [
  { sortId: "0", tc: "零", jyutJam: "ling4 lin4", title: "숫자 0" },
  { sortId: "1", tc: "一", jyutJam: "jat1", title: "숫자 1" },
];

export default function Cantonese(props) {
  const path = "tc";

  return (
    <>
      <Heros path={path} />
      <SubNav path={path} />
      <div>
        <p>등록 한자 : {tempChars.length}</p>
        <CardList dataList={tempChars} />
      </div>
    </>
  );
}
```

- 데이터를 외부에서 가져오는 것을 가졍해서 `tempChars`을 `Cantonese` 밖에 선언했다.
- 이전 만들었던 "광둥어 내용입니다"를 삭제하고 \<div>를 만들었다.
- 등록 수량 `{tempChars.length}` 표시
- `CardList` 컴포넌트를 만들고 데이터를 전달했다.

<br/><br/>

광둥어 단어 페이지에도 동일하게 추가했다.  
같은 형식의 임시 단어 데이터도 만들었다.  
( [[서브 네비게이션]](/blog/blog-development-sub-toggle-navigation)편에서 페이지는 이미 만들었다 )

```js
// .\app\cantonese\word\page.js
import Heros from "@components/Heros";
import SubNav from "@components/SubNav";
import CardList from "@components/CardList";

const tempWords = [
  { sortId: "0", tc: "你好", jyutJam: "nei5 hou2", title: "안녕하세요" },
  { sortId: "1", tc: "再見", jyutJam: "zoi3 gin3", title: "또 만나요" },
];

export default function Word(props) {
  const path = "tc";

  return (
    <>
      <Heros path={path} />
      <SubNav path={path} />
      <div>
        <p>등록 단어 : {tempWords.length}</p>
        <CardList dataList={tempWords} />
      </div>
    </>
  );
}
```

<br/>

기본적인 틀은 완료되었다.  
다음편에서는 디자인을 추가할 예정이다.

<br/><br/><br/>

#### TMI. 데이터 받기 위치

많이 고민했던 내용이다.  
원래 CardList에서 받을까 했지만,  
사용하는 페이지에서 데이터를 받는 것이 안전할 것 같았다.

나중에  
같은 CardList 컴포넌트를 사용하고  
데이터에 따라서 디자인만 다르게 사용해서  
CardList를 재사용해볼 생각이다.
