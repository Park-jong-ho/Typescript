"use strict";
// console.log("Hello TypeScript");
// const nums: number[] = [];
// const a = 10 + nums[0]
// const someString = "typescript!";
// someString.endsWith("!")
// import { printName } from "./utill";
// printName("typescript");
// 문자열 (string)
const a = '';
const b = "";
const c = ``; // 템플릿 리터럴
let myName = "Steve";
let message = `Hello, ${myName}`;
myName.toLocaleUpperCase();
// 숫자 타입 (number)
let n = 100;
let count = 10;
let price = 9.99;
let temperature = -15;
let distance = 3.4e-5;
let total = count * price;
let average = total / 2;
let infinity = Infinity;
let minusInfinity = -Infinity;
let iAmNotNumber = NaN;
// 블리언 (boolean)
let isOpen = true;
let isCompleted = false;
if (isOpen) {
    console.log("Hello we are open!");
}
if (!isCompleted) {
    console.log("job not complete");
}
// {&& || ! 논리연산자}
let isAvailable = isOpen && !isCompleted;
// null 널 타입
let user = null;
function login(userName) {
    user = userName;
}
function logout() {
    user = null;
}
login("Joey");
logout();
// null : 값이 비어있다.
// undefined : 값이 할당되지 않았다
// any 타입
let someValue;
someValue.toString();
someValue = false;
someValue.toFixed();
// 최대한 사용 안 하는 것이 좋다(유연성을 가지고 싶다면 사용, 임시적인 사용)
