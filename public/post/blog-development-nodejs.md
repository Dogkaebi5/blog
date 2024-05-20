---
title: 블로그 개발 - Node.js
description: 노드제이에스는 자바스크립트 런타임 환경이다.
date: 2024-05-10 09:21:06
cover: 1QaNBuiA-anlt_QzydbGtZGbFWy1USlVC
category: coding
slug: blog-development-nodejs
---

# Node.js

노드제이에스는 크로스플랫폼 오픈소스 자바스크립트 런타임 환경이다.  
처음에 이 말을 들었을 때, 머리 위에 물음표만 날라다녓다.

<br>

## 자바스크립트 JavaScript

일종의 프로그램 언어로 알고 있는 것이 쉽다.  
웹 브라우저는 대부분 자바스크립트를 사용한다.

<br>

## 런타임 환경 Runtime environment

언어가 컴퓨터에서 작동하게 하는 프로그램으로 생각하면 쉽다.

<br>

## 오픈소스 Open source

공개되어 있고 모두가 사용이 가능한 소스(코드/프로그램)

<br>

## 크로스플랫폼 cross-platform

윈도우, macOS, 리눅스 등 운영체계에서 실행 가능하다.  
멀티 플랫폼(multi-platform)이라고도 한다.

<br>

풀어서 얘기하면

> Javascript라는 언어가  
> windows, mac 같은 운영체계에서  
> 정상적으로 작동하게 해주는  
> 무료로 사용할 수 있는 프로그램이다.

원래 Javascript는 브라우저에서 작동되는 언어이다.  
이를 브라우저 밖에서 작동하게 하는 것이다.

[Wiki | Node.Js](https://ko.wikipedia.org/wiki/Node.js)  
더 자세한 내용은 위의 링크에서 ...

<br>
<br>

## 설치

설치 방법은 간단하다.  
[Nodejs 홈페이지](https://nodejs.org/en)에서 다운로드 받고  
순서대로 설치만 하면 끝이다.

여러개 버전이 있는데,  
최신 **LTS** 버전을 추천한다.  
서비스를 유지하고 있고, 안정적이라는 뜻이다.

<br>

다른 언어는 환경설정을 해야하는 반면에  
( 환경설정 : 명령어를 모든 폴더에서 실행할 수 있게 하는 세팅 )  
노드제이에스는 설치만 하면 된다.

설치가 정상적으로 끝났으면  
명령 프롤프트에서

```bash
node -v
```

을 입력하면 버전이 출력된다.

```bash
C:\Users\User>node -v
v21.6.1

```

<br>
<br>
<br>

# Nodejs 설치 이유

## Javascript 런타임

우선 당연하게도 Javascript가 정상 작동하게 하기 위해서이다.

내가 만든 페이지를 보기 위해서는  
페이지 문서를 브라우저로 실행하는 방법도 있으나  
실제로 코딩을 하면 서버 응답으로 페이지를 열어봐야 할 때가 많다.

컴퓨터가 서버 열할을 제대로 하기 위해서도 Nodejs를 사용하는 경우가 많다.

<br>

## npmjs

nodejs를 설치하면 npm 명령을 사용할 수 있다.

npm은 패키지를 설치하는 명령이다.  
패키지는 다른 사람이 만들어둔 기능이다.

나는 Next.js 를 사용할 예정인데  
이 것도 명령어로 바로 설치가 가능하다.  
이는 다음에 설명...

```c++
return 0
```
