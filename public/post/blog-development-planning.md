---
title: 블로그 개발 - 초기 기획
description: 기획의 기본은 있지만 정답은 없다. 초기 기획은 문제점의 큰 틀에서 시작된다.
date: 2024-04-26 05:34:29
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-planning
---

기획은 기본은 있지만  
기획은 정답은 없다고 생각한다.

이번 기획의 경우,

> '그냥 만들면서 생각하자'

마인드로 만들기 시작했다.

원래 기획이라는 분야는 폭이 매우 넓다.  
많은 사람들이 ㅇㅇ기획이라는 직책을 들어봤을 것이다.  
뭐든 "기획"을 뒤에 붙이면 직책이 되는 느낌이다.

개인적으로는  
서비스/상품의 개발부터 판매, 고객관리까지  
기획의 분야라고 생각한다.

당연히 혼자서 다하는 것은 무리다.  
하지만 상품의 전체적 계획은 기획자의 몫 같다.

## 문제점 추출

---

출발점은  
"광둥어를 알려주는 한국어 사이트가 없다"  
이었다.

하지만 정보를 모으면서 느낀점은  
"광둥어 교육이 아직 체계가 없다"  
이었다.

광둥어를 사용하는 지역에서도  
광둥어 정식 교육은 없어서  
각 대학의 광둥어 연구 자료를 활용해야 했다.

그래서 우선  
"한글로 광둥어 알리기"으로 시작하고  
"정보 보존 및 홍보하기"으로 발전하는 것을 생각했다.

## 목적

---

1. 코딩 공부
2. 광둥어 콘텐츠
3. 개인 블로그
4. 수익 창출

서버 비용 정도는 알아서 버는 사이트가 되어으면 한다.

코딩 공부용이기도 하기 때문에  
코딩, 일상, 광둥어 관련 일기의 블로그도 될 것 같다.

그 외에 프로젝트 기획툴을 만들고 싶은데  
이 것은 좀 더 시간이 필요해 보인다.

## 설계? 디자인?

---

### 디자인

블로그가 위주일 것 같아서  
디자인 사이트에서 블로그 디자인을 찾아보았다.

광둥어가 메인이 될 것 같아서  
광둥어 사전에 대한 자료(디자인)도 찾아보았다.

결론적으로 디자인은 점차 수정하는 방향으로 진행하고,  
먼저 **와이어프레임** (wireframing)을 만들기로 했다.

**수익 창출**이 목표이기 때문에  
마음에 드는 디자인을 기반으로  
광고 기재 위치를 고려하고 와이어프레임을 그렸다.

### 설계

블로그와 광둥어 한자 사전 같은 기능은  
동적인 데이터가 많기 때문에 정적 하드코드(그냥 HTML) 보다  
SPA(Single Page Application)을 사용하기로 했다.  
(솔직히 요즘 그냥 하드코드 짜는 사람이 있을까?...)

[React](https://react.dev/)를 사용할 생각인데, 이유는 크게 없었다.  
많은 사람들이 사용하고 있어서  
문제가 발생하면 정보를 얻기가 쉽고,  
전에 간단한 사용법을 본 적이 있어서이다.

광고 효율을 위해서 검색을 고려해야 한다. 즉...  
SEO(Search Engine Optimization)도 고려해서  
CSR(Client Side Rendering)을 기본 제공하는 React에서  
SSR(Server Side Rendering)을 제공하는  
[Next.js](https://nextjs.org/)를 사용해보기로 했다.

혼자 만드는 것이기 때문에 CSS는  
[Tailwind css](https://tailwindcss.com/)를 사용하기로 했다.

### 데이터 베이스

고민을 많이 했지만  
처음에 결론이 나오지 않았다.

[Firebase](https://firebase.google.com/)를 먼저 사용하고,  
나중에 SQL로 변경할 생각이다.

### 서버

서버는 지식이 부족해서 AWS를 사용할지  
아니면 Serverless인 Vercel를 사용할지  
아직도 고민 중이다.

광고 효율 및 사이트 무게로 인한 성능을 확인해보고,  
다시 결정할 생각이다.

### 홍보

처음에는 그냥 지익들과  
중국어/광둥어/코딩 공부 채팅방을 이용할 생각이다.

직접적인 판매가 없기 때문에  
아직 직접적인 CS관리도 없다.

추후 댓글 기능과  
알고 싶은 광둥어 기능을 추가해서  
사용자와 인터렉션을 증가할 생각이다.

### 보안

아주 큰 벽이다.  
수동적일 수 밖에 없을 것 같다.  
아직 인터렉션 부분이 거의 없어서,  
크게 문제가 발생하지 않겠지만,

기능과 정보가 많아지면  
신경을 써야할 부분이다.

---

그럼 이제 사이트를 만들어보자...

기초의 틀은

- 광둥어 - 사전/발음/회화
- 일기 - 일상/코딩/광둥어(회화)

기초 기능은

- 콘텐츠(사전/일기) 보기
- 한자 검색
- (추가) 댓글
- (추가) 알고 싶은 내용 신청
- (추가) 기획툴