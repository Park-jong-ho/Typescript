/* 
# 타입 단언(Type Assertion)
타입 단언은 TypeScript에서 특정 값의 타입을 개발자가 확신할 때 사용하는 기능입니다. 이는 컴파일러에게 ‘내가 이 값의 타입을 알고 있으니 너는 걱정하지 말라’ 고 말하는 방식입니다. 이를 통해 컴파일러의 타입 검사와 관련된 오류를 피할 수 있습니다. 타입 단언은 두 가지 형태로 사용할 수 있습니다. 

1. `as` 문법
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

1. `<>` 문법(JSX 구문을 사용하는 경우에는 사용할 수 없습니다.)
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

언제 타입 단언을 사용해야 할까?
- 알 수 없는 타입(any) 또는 불확실한 타입

외부 라이브러리나 API 에서 데이터를 받을 때, 그 데이터의 타입을 정확히 알고 있는 경우가 있습니다. 하지만 컴파일러는 이를 알지 못하기 때문에 타입 단언을 통해 개발자가 타입을 명시할 수 있습니다.
interface User {
    id: number;
    name: string;
    email: string;
}

async function fetchUser(): Promise<User> {
    let response = await fetch('/api/user');
    let data = await response.json();
    return data as User;
}

- DOM 요소 조작
DOM 요소를 선택할 때 TypeScript는 선택된 요소가 정확히 어떤 타입인지 알지 못합니다. 이 때 HTMLElement 를 HTMLInputElement 로 명시할 수 있습니다. 

let inputElement = document.getElementById('user-input') as HTMLInputElement;
inputElement.value = "Hello, TypeScript!";

타입 단언 사용 시 주의 사항
타입 단언은 강력한 도구이지만 남용하면 오히려 코드의 안정성을 해칠 수 있습니다. 잘못된 타입 단언은 런타임 오류를 유발할 수 있습니다. 
let someValue: any = "this is a string";
let num: number = someValue as number; // 런타임 오류 발생 가능

타입 단언은 컴파일러에게 ‘이 값이 내가 지정한 타입이라고 간주해달라’ 고 지시할 뿐, 실제로 값을 변환하지 않습니다. 코드 두번째 줄에서 ‘someValue’ 를 ‘number’ 타입으로 단언하고 있습니다. 그러나 ‘someValue’ 의 실제 값은 문자열 입니다. 타입 단언을 통해 TypeScript의 컴파일러는 이 코드가 맞다고 생각하고 넘어값니다. 하지만 이는 런타임에 문제가 될 수 있습니다. 

런타임 오류 예시
위 코드에서 실제 런타임에서 어떤 일이 벌어질지 생각해봅시다.
let someValue: any = "this is a string";
let num: number = someValue as number;

변수 ‘num’ 은 문자열 ‘this is a string’ 을 담고 있습니다. 하지만 ‘num’ 이 ‘number’ 타입으로 선언되었기 때문에 이 값으로 숫자 연산을 시도하면 문제가 발생할 수 있습니다. 예를 들어
console.log(num + 1); // "this is a string1"

위 코드에서 ‘num’ 은 여전히 문자열이기 때문에 문자열 결합이 이루어집니다. 만약 이 상황에서 숫자 연산을 강제로 수행하려고 하면, 자바스크립트는 암묵적으로 형 변환을 시도하거나 ‘NaN’ 을 반환할 수 있습니다. 

따라서 타입 단언을 사용할 때는 다음을 명심하고 사용해야 합니다.

- 타입을 확실히 알고 있을 때만 사용하세요.
- 코드 리뷰나 협업 시 다른 개발자들도 이해할 수 있도록 타입 단언의 이유를 주석으로 설명하는 것이 좋습니다.
*/

/*
실습
// id가 user-input인 input 요소를 선택하고, 이를 HTMLInputElement로 단언합니다.
let inputElement = document.getElementById('user-input') as HTMLInputElement;

// id가 btn인 button 요소를 선택하고, 이를 HTMLButtonElement로 단언합니다.
let buttonElement = document.getElementById('btn') as HTMLButtonElement;

buttonElement.addEventListener('click', () => {
  alert(`Input value: ${inputElement.value}`);
});
*/