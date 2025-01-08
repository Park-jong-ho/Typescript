// 배열 타입 방법 1 : type[]

import { Dir } from "fs";
import { platform } from "os";

  // let nums: number[] = [1,2,3,4,5]
  // let strs: string[] = ["a","b","c"]
  // let bools: boolean[] = [false, false, true]

  // nums.push(6)
  // nums.push(7)

  // bools.push(1)


// 배열 타입 방법 2 : Array<>

  // let nums: Array<number> = [1,2,3,4,5]
  // let strs: Array<string> = ["a","b","c"]

  // nums.push(6)
  // nums.push(7)




// 기본 객체 타입

  // 타입 명시
  // let monitor: { brand: string; price: number }

  // monitor.brand = "LG"
  // monitor.price = 120

  // monitor = {
  //   brand: "LG",
  //   price: 120
  // }

  // 타입 추론

  // let monitor = {
  //   brand: "LG",
  //   price: 120
  // }

  // monitor.price = "123";
  // monitor.displaySize = "12inch";

  // Optional 프로퍼티

  // let user: { id: string; name: string; age?: number };

  // user = {
  //   id: "1234",
  //   name: "John"
  // }

  //Readonly 프로퍼티

  // let user: { readonly id: string; name: string; age?: number };

  // user = {
  //   id: "1234",
  //   name: "John"
  // }

  // user.name = "John Smith";
  // user.id = "5678"

  // let apiConfig: {
  //   readonly clientKey: string;
  //   readonly url: string;
  // }

  // 타입 별칭( Type Alias )

  // type UserType = {
  //   id: string;
  //   name: string;
  //   age: number;
  // }

  // let user1: UserType = {
  //   id: "1",
  //   name: "John",
  //   age: 20
  // }

  // let user2: UserType = {
  //   id: "2",
  //   name: "Sarah",
  //   age: 30
  // }

  // let users: UserType[];

  // users.push(user1)
  // users.push(user2)

  // users.push({})
  // users.push({
  //   id: "1",
  // })

  // Nested 객체 ( 중첩 객체 )

  // type payload = {
  //   timeStamp: number
  //   type: string
  //   user: {
  //     readonly id: string
  //     isActive?: boolean
  //     email: string[]
  //   }
  // }

  // const Payload: payload = {
  //   timeStamp: 12903718,
  //   type: 'event',
  //   user: {
  //     id: "123",
  //     isActive: true,
  //     email: [ "testemail1@gmail.com", "testeamil2@gmail.com" ]
  //   }
  // }


  // 함수 타입

  // Parameter
  // function add(x:number, y:number): number {
  //   return x + y;
  // }

  // const result = add(10, 5);

  // Parameter2
  // function addToCart(name: string, price: number, quantity: number = 1) {
  //   return `${name}, ${price}, ${quantity}`;
  // }

  // addToCart("orange", 100, 5)
  // addToCart("pineapple", 150)
  // addToCart("grape", 110, 10, false)
  // addToCart("apple", 10)

  // optional parameter
  // function addToCart(name: string, price: number, quantity?: number) {
  //     return `${name}, ${price}, ${quantity || 1}`;
  //   }
    
  //   addToCart("orange", 150)
  //   addToCart("grape", 100, 2)

  // Contextual Typing
  // const numbers: number[] = [1,2,3,4,5]
  // const letters: string[] = ["a","b","c","d"]

  // numbers.map(element=>{
  //   element.
  // })

  // letters.forEach(letter=>{
  //   letter.
  // })

  // Return type annotation
  // function addTwoValues(x: number, y:number): string {
  //   return `${x}${y}`;
  // }

  // function addTwoNumbers(x: number, y: number): number {
  //   return x + y;
  // }

  // function isTen(x: number, y: number): boolean {
  //   return x + y === 10;
  // }

  // void, never
  // function logMessage(message:string): void {
  //   console.log(message);
  // }

  // function throwError(message: string): never {
  //   throw new Error(message);
  // }



// 유니언 타입 

// 유니언 기초
// let userId: string | number;

// userId = 1
// userId = "100"

// userId = true
// userId = {}

// function printUserId(id: string | number){
//   console.log(id);
// }

// printUserId("1")
// printUserId(1)

// // type narrowing
// function processValue(value: number | string){
//   // 문자열 경우
//   if(typeof value === "string") {
//     return value.toUpperCase()
//   }
//   // 숫자인 경우
//   return value.toString().toUpperCase();
// }


// 배열 사용 예시
// let mixedValues: (string | number)[];

// mixedValues.push("100")
// mixedValues.push(100)

// 리터럴과 유니언 타입
// const toggle = (option: "on" | "off") => {
//   console.log(option);
// }

// toggle("on")
// toggle("off")

// toggle("")

// type Size = "xs" | "s" | "m" | "l" | "xl"

// let tShirtSize: Size

// tShirtSize = "m"

// tShirtSize = "xxl"

// function setSize(size: Size) {
//   switch(size) {
//     case "xs":
//       break;
//     case "s":
//       break;
//   }
// }


// type aliases와 유니언
// type SuccessCode = 200 | 201 | 202
// type ErrorCode = 500 | 501 | 503

// let responseCode: SuccessCode | ErrorCode

// responseCode = 200
// responseCode = 503

// responseCode = 403


// // 인터페이스 기본 문법
// interface 이름 {
//   속성이름: 속성타입;
//   속성이름: 속성타입;
//   메서드이름(): 메서드타입;
// }

// interface User {
//   id: number;
//   name: string;
//   isPremium: boolean;
//   someMethod(): void;
// }

// const userA: User = {
//   id: 10,
//   name: "Bill",
//   isPremium: false,
//   someMethod() {
//     console.log("some method called");
//   },
// };

// type alias Vs interface
  // 두 기능의 목적은 크게 다르지않다.
  // 다입 Alias => type User { }
  // 인터페이스 => interface User { }
  // 타입 Alias => 객체 포함, 리터럴, 원시값등을 타입으로 가질 수 있다.
  // 인터페이스 => 객체 타입(형태)으로 사용해야 한다.
  // 확장 문법이 다르다

  // readonly & optional property

  // interface User {
  //   readonly id: number;
  //   name: string;
  //   isPremium?: boolean
  // }

  // const testUser: User = {
  //   id: 100,
  //   name: "John"
  // }

  // testUser.id = 200

  // 메서드/함수 타입
  // interface User {
  //   readonly id: number;
  //   name: string;
  //   isPremium?: boolean;
  //   greet(): void;
  // }

  // const testUser: User = {
  //   id: 100,
  //   name: "Nathan",
  //   isPremium: false,
  //   greet() {
  //       console.log("Hello Nathan");
  //   },
  // }

  // testUser.greet();


  // 확장 및 조합

    // interface Person {
    //   name: string;
    //   age: number;
    // }

    // interface Employee {
    //   employeeId: number;
    // }

    // interface Student extends Person, Employee {
    //   studentId: number;
    // }

    // const personA: Person = {
    //   name: "Eli",
    //   age: 30
    // }

    // const studentA: Student = {
    //   name: "John",
    //   age: 29,
    //   studentId: 12345,
    //   employeeId: 38383
    // }




    // Tuples 기본 문법
    // let myTuple: [string, number, boolean]

    // myTuple = ["Hello", 15, false]
    // myTuple = ["hello", true, 13]
    // myTuple = ["Hello", 18]

    // 사용 예시 1

    // function getUserInfo(): [number, string] {
    //   return [1, "Sam"]
    // }

    // const [userid, usrename] = getUserInfo()

    // 사용 예시 2

    // type Flavor = string;
    // type Price = number;

    // type IceCream = [Flavor, Price]

    // const vanila: IceCream = ["vanila", 500]

    // vanila[0]
    // vanila[1]

    // 사용 에시 3

    // type lat = number;
    // type lng = number;

    // type coord = [lat, lng]

    // let coords: coord[] = [];

    // coords.push([36, -95])
    // coords.push([38, -38])

    // coords.push([false, "1"])

    // for(const [lat, lng] of coords) {
    //   console.log(lat, lng);
    // }




  // 열거형(Enum) 기본 문법

    // enum 이름 {
    //   상수값1 = 1,
    //   상수값2 = 16,
    //   상수값3
    // }

    // 숫자형 Enum

    // enum PlayerState{
    //   Buffering,
    //   Playing,
    //   Paused,
    //   Seeking,
    // }

    // let currentState: PlayerState;
    
    // currentState = PlayerState.Buffering;
    // currentState = PlayerState.Playing;

    // currentState = "Playing"

    // const isPlaying = (state: PlayerState) => {
    //   return state === PlayerState.Playing;
    // }

    // isPlaying(currentState);

    // 문자형 Enum

    enum Direction {
      Left = "LEFT",
      Right = "RIGHT",
      Up = "UP",
      Down = "DOWN"
    }

    function move(dir: Direction) {
      switch(dir) {
        case Direction.Left:
          break;
        case Direction.Right:
          break;
      }
    }

    move(Direction.Left)
    move(Direction.Right)