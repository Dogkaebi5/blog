---
title: 코딩 공부 - 내가 생각하는 기초
description: 코딩 처음하는 사람이 생각하는 코딩의 기초 - 변수, 조건문, 함수, 객체
date: 2024-05-02 04:17:06
cover: 1Tt4ilKIYWJrhRC4D1X3_LfoqqDtDHUKn
category: coding
slug: coding-javascript-basics
---

\# 본문은 자바스크립트(javascript)를 사용합니다 \#

---

<br>

기초는 무슨 코딩 언어를 배우나에 따라서  
알아야 하는 기본 지식은 다 다르겠지만

**개인적으로는**  
제일 기본이 되는 것은 아래와 같았다.

### 변수, 조건문, 함수, 객체

\+ 메모리에 대한 지식이 중요한 것 같다.

각 주제의 자세한 내용은 공부하면서 업데이트할 예정이다.

<br>

## 변수

---

변수는 어떤 데이터에 이름을 지어주는 것이다.  
예시로 이름은 독깨비, 나이가 18이라고 하면

```js
let name = "독깨비";
let age = 18;
```

이런식으로 변수를 선언하다(만든다).

원래는 데이터 선언 할 때  
데이터가 어떤 종류인지 컴퓨터에게 알려줘야 한다.  
(자료형, 데이터 타입)

JavaScript는 다이나믹 언어로  
`var` `let` `const` 으로만 선언하지만  
자료형이 없는 것이 아니라,  
상황에 따라서 엔진이 판단하는 것 같다.

<br>

## 조건문

---

조건문은 말 그대로  
조건을 주고 결과를 확인하고 명령을 진행한다.

```js
let score = 70;

if (score > 60) {
  console.log("합격");
} else {
  console.log("불합격");
}
```

위에 처럼  
score 변수가 60보다 크면 "합격"을 출력하고,  
score 변수가 60보다 작으면 "불합격"을 출력한다.

<br>

## 함수

---

함수는 학교 수학 시간에 많이 들어봤을 것이다.

<p style="font-size:2rem"> ⨍(x) </p>

위에 부호를 많이 봤을 것이다.  
사실 내용은 간단하다.  
`변수x`를 함수에 주면  
함수는 공식에 따라서 결과는 주는 얘이다.

변수는 요리재료 같고,  
함수는 요리사 같은 느낌이다.

```js
function plus(x, y) {
  console.log(x + y);
}

plus(1, 3); // 4
```

함수 선언은 `function`을 사용한다.  
함수의 이름을 선언 (`plus`)하고 소괄호`()`를 쓴다.  
소괄호 안에는 (`x, y`) 변수(매개변수 = 파라미터 parameter)를 사용할 수 있다.

함수의 기능에 따라서 사용하지 않아도 된다. 아래의 예시 :

```js
function hello() {
  console.log("Hello");
}

hello(); // Hello
```

함수를 호출 (사용)할 때는  
함수 이름과 소괄호를 쓰면 호출된다.  
함수가 파라미터가 있으면,  
전달값(전달인자 = 아규먼트 argument)을 줘야한다. plus(`1,3`)

<br>

## 객체

객체는 틀(?) 같다고 생각한다.  
나도 함수를 많이 사용하지 클라스(객체)는 많이 사용하지 않아서...  
개인적으로도 공부를 더 많이 해야 하는 부분이다.

변수 선언에서 그냥  
name, age를 선언했지만  
만약 사람이 많아지면 선언이 어려워진다.

예시로 예지와 리아가 있다고하면  
아래와 같이 선언할 수 있다.

```js
let yejiName = "황예지";
let yejiAge = 23;
let liaName = "최지수";
let liaAge = 23;
```

점점 많아지면...

```js
let yejiName = "황예지";
let yejiAge = 23;
let liaName = "최지수";
let liaAge = 23;
let ryujinName = "신류진";
let ryujinAge = 23;
let chaeryeongName = "이채령";
let chaeryeongAge = 22;
let yunaName = "신유나";
let yunaAge = 20;
```

class를 사용하면 좀 간단하게 만들 수 있다.

```js
class member {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let yeji = new member("황예지", 23);
let lia = new member("최지수", 23);
let ryujin = new member("신류진", 23);
let chaeryeong = new member("이채령", 22);
let yuna = new member("신유나", 20);
```

<br/>

위에 비유를 따라서 얘기하면  
변수는 재료  
함수는 요리사  
객체는 레시피 같다.

class를 사용하면  
같은 형태의 데이터를  
쉽게 만들 수 있고,  
오류를 줄일 수도 있다.

<br/>

---

<br/>

위 내용은 내가 개인적으로 생각하는 기초이다.

위의 내용을 알고  
만들어 보고 싶은 것을 만들어 보면서  
지식을 더해 나가는 것이  
좋은 것 같다.
