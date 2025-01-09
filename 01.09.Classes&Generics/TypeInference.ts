/*
Type Inference (타입 추론)

타입 추론(Type Inference)은 컴파일러가 코드의 문맥을 기반으로 변수, 표현식, 함수 반환 값 등의 타입을 자동으로 결정하는 프로세스를 의미합니다. TypeScript는 강력한 타입 추론 시스템을 갖추고 있어, 명시적인 타입 선언이 없는 경우에도 코드를 분석하여 적절한 타입을 추론합니다. 타입 추론을 잘 활용하면 코드의 간결함과 가독성을 유지하면서도 타입 안전성을 확보할 수 있습니다.

주요 개념

1. 자동 타입 결정
  - 컴파일러는 변수나 표현식의 초기 값을 분석하여 해당 값의 타입을 결정합니다. 예를 들어, 숫자 값이 할당된 변수는 자동으로 **`number`** 타입으로 추론됩니다.
2. 문맥 기반 추론
  - 함수의 매개 변수나 반환 값이 명시되지 않은 경우에도, 함수의 내부 로직이나 호출 문맥을 통해 타입을 추론할 수 있습니다.
3. 타입 선언 생략
  - 명시적인 타입 선언을 생략해도 컴파일러가 올바른 타입을 추론하므로, 코드가 더 간결하고 직관적으로 작성될 수 있습니다.
*/

//기본 변수 추론
let id = "Alice"; // name을 string 타입으로 추론
let age = 30;       // age를 number 타입으로 추론
let isStudent = true; // isStudent를 boolean 타입으로 추론

// 함수 반환 값 추론
function add(a: number, b: number) {
  return a + b; // 함수의 반환 타입을 number로 추론
}

const sum = add(10, 20); // sum의 타입은 number로 추론

// 배열과 객체 추론
let numbers = [1, 2, 3, 4, 5]; // numbers를 number 타입 요소의 배열로 추론 (number[])

const person = {
    name: 'John',
    age: 30,
    isEmployed: true
};

// person 변수를 다음과 같이 추론합니다:
// { name: string; age: number; isEmployed: boolean; }


// 실습
    
/*
1. 변수 타입 추론
let message = 'Hello, TypeScript!'; // 타입: string
let numberOfItems = 42; // 타입: number
let isCompleted = true; // 타입: boolean

- message : 문자열로 초기화되어 타입스크립트는 이 변수를 string 타입으로 추론합니다.
- numberOfItems : 숫자로 초기화되어 number 타입으로 추론됩니다.
- isCompleted : 불리언 값으로 초기화되어 boolean 타입으로 추론됩니다.

2. 배열 타입 추론
let numberArray = [1, 2, 3, 4, 5]; // 타입: number[]
let stringArray = ['a', 'b', 'c']; // 타입: string[]
let mixedArray = [1, 'two', true]; // 타입: (string | number | boolean)[]

- numberArray : 숫자 배열로 초기화되어 number[] 타입으로 추론됩니다.
- stringArray : 문자열 배열로 초기화되어 string[] 타입으로 추론됩니다.
- mixedArray : 숫자, 문자열, 불리언 값을 포함하는 배열로 초기화되어 (string | number | boolean)[] 타입으로 추론됩니다.

3. 함수 리턴 타입 추론
function multiply(a: number, b: number) {
    return a * b; // 타입스크립트는 리턴 타입을 number로 추론합니다.
}

let product = multiply(6, 7); // 타입: number

- multiply 함수는 두 개의 숫자 매개변수를 받아 곱셈 결과를 반환합니다. 함수의 리턴 타입은 명시적으로 지정하지 않았지만, 타입스크립트는 number 타입으로 추론합니다.
- product 변수는 multiply(6, 7)의 결과를 저장하며, 타입은 number로 추론됩니다.

4. 객체 타입 추론
let user = {
    name: 'Alice',
    age: 30,
    isAdmin: false
};

// 타입스크립트는 user의 타입을 다음과 같이 추론합니다:
// { name: string; age: number; isAdmin: boolean; }

- user 객체는 세 개의 프로퍼티를 가지고 있습니다: name (문자열), age (숫자), isAdmin (불리언).
- 타입스크립트는 user 객체의 타입을 { name: string; age: number; isAdmin: boolean; }으로 추론합니다.
*/