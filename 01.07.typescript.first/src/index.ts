// console.log("Hello TypeScript");

// const nums: number[] = [];

// const a = 10 + nums[0]

// const someString = "typescript!";

// someString.endsWith("!")

// import { printName } from "./utill";

// printName("typescript");

// 문자열 (string)
const a: string = '';
const b: string = "";
const c: string = ``; // 템플릿 리터럴

let myName: string = "Steve";
let message: string = `Hello, ${myName}`;

myName.toLocaleUpperCase()

// 숫자 타입 (number)
let n: number = 100;

let count: number = 10;
let price: number = 9.99;
let temperature: number = -15;
let distance: number = 3.4e-5;

let total: number = count * price;
let average: number = total / 2;

let infinity: number = Infinity;
let minusInfinity: number = -Infinity;
let iAmNotNumber: number = NaN;

// 블리언 (boolean)
let isOpen: boolean = true;
let isCompleted: boolean = false;

if(isOpen) {
  console.log("Hello we are open!");
}

if(!isCompleted) {
  console.log("job not complete");
}

// {&& || ! 논리연산자}

let isAvailable: boolean = isOpen && !isCompleted;

// null 널 타입
let user: string | null = null;

function login(userName: string) {
  user = userName;
}

function logout() {
  user = null;
}

login("Joey")
logout()

// null : 값이 비어있다.
// undefined : 값이 할당되지 않았다

// any 타입

let someValue: any;

someValue.toString();
someValue = false;
someValue.toFixed();
// 최대한 사용 안 하는 것이 좋다(유연성을 가지고 싶다면 사용, 임시적인 사용)
