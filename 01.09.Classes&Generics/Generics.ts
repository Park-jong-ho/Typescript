/*
18. 제네릭

Generics
TypeScript 에서 제네릭(Generic)은 함수, 클래스, 인터페이스 등을 정의할 때 사용하는 강력한 도구로, 다양한 타입에서 작동할 수 있는 컴포넌트를 작성할 수 있게 해줍니다. 제네릭을 사용하면 코드의 재사용성과 타입 안정성을 높일 수 있습니다. 제네릭은 `<>`를 이용하여 표시합니다.
let nums : Array<number> = [1,2,3,4,5]
let strings : Array<string> = ['a','b','c','d']

`Array<T>` 는 TypeScript에서 제공하는 제네릭 배열 타입입니다. 여기서 `T` 는 배열이 포함할 요소의 타입을 나타냅니다. 

제네릭의 장점
- 타입 안전성
    제네릭을 사용하면 컴파일 타임에 타입 오류를 잡을 수 있어 런타임 오류를 줄일 수 있습니다.

- 코드 재사용성    
    제네릭을 사용하면 다양한 타입을 처리할 수 있는 유연한 코드를 작성할 수 있습니다.
    
- 유지보수성
    타입이 명확하게 정의되어 있어 코드의 가독성이 높아지고 유지보수가 쉬워집니다. 
    

제네릭 함수
제네릭 함수는 다음과 같이 정의합니다.
function 함수이름<T>(인수: T): T {
    // 함수 본문
    return 인수;
}
위 코드에서 `T` 는 타입 변수 입니다. 타입 변수는 TypeScript 에서 제네릭을 사용할 때 특정 타입을 매개변수로 받을 수 있도록 정의하는 변수입니다. `T` 는 임의의 이름이므로 다른 이름을 사용해도 되지만 관습적으로 `T`가 많이 사용됩니다. 

기본 예시

- 제네릭을 사용하지 않는 경우
function identity(arg: any): any {
    return arg;
}

let result = identity("Hello");
console.log(result); // "Hello"

위 함수는 ‘any’ 타입을 사용하기 때문에 어떤 타입의 인수도 받을 수 있습니다. 그러나 반환 타입도 ‘any’ 이기 때문에 타입 안전성이 보장되지 않습니다.

- 제네릭을 사용한 경우

function identity<T>(arg: T): T {
    return arg;
}

let string = identity<string>("Hello");
console.log(string); // "Hello"

let number = identity<number>(3);
console.log(number) // 3

함수가 호출될 때 타입을 지정할 수 있으며, 이 타입이 함수의 인수와 반환 값의 타입을 결정합니다. 

제네릭 인터페이스
제네릭 인터페이스는 다음과 같이 정의합니다.

interface 인터페이스이름<T> {
    // 인터페이스 내용
}

기본 예시

- 제네릭 사용하지 않은 경우

// 문자열 쌍
interface StringPair {
    first: string;
    second: string;
}

let stringPair: StringPair = { first: "Hello", second: "World" };
console.log(stringPair); // { first: "Hello", second: "World" }

// 숫자 쌍
interface NumberPair {
    first: number;
    second: number;
}

let numberPair: NumberPair = { first: 1, second: 2 };
console.log(numberPair); // { first: 1, second: 2 }

- 제네릭 사용한 경우

interface Pair<T> {
    first: T;
    second: T;
}

let stringPair: Pair<string> = { first: "Hello", second: "World" };
console.log(stringPair); // { first: "Hello", second: "World" }

let numberPair: Pair<number> = { first: 1, second: 2 };
console.log(numberPair); // { first: 1, second: 2 }

제네릭을 사용하면서 T 를 통해 타입을 매개변화화 했습니다. 이렇게 하면 ‘Pair’ 인터페이스를 여러 가지 타입에 대해 재사용할 수 있습니다. 

- 여러개의 타입 변수 지정
제네릭 인터페이스를 정의할 때 어러 개의 타입 변수를 지정할 수 있습니다.

interface Triple<T, U, V> {
    first: T;
    second: U;
    third: V;
}
let triple: Triple<string, number, boolean> = { first: "Hello", second: 42, third: true };
console.log(triple); // { first: "Hello", second: 42, third: true }

여기서 T, U, V는 각각 제네릭 타입 매개변수입니다. 이 매개변수는 세 가지 다른 타입을 나타내며, 각각 first, second, third 속성의 타입으로 사용됩니다.
*/


/*
Generic - Classes
클래스가 사용할 타입을 인스턴스화 시점에 지정할 수 있게 해주는 기능입니다. 제네릭을 사용하면 타입의 재사용성과 유연성을 높일 수 있습니다. 제네릭 클래스는 클래스 정의 시점에 타입을 고정하지 않고, 클래스 인스턴스화 시점에 구체적인 타입을 지정할 수 있도록 합니다.

기본 구조
제네릭 클래스는 클래스 이름 뒤에 꺾쇠 괄호(**`<>`**)로 묶인 타입 매개변수 목록을 사용하여 정의됩니다. 제네릭 타입 매개변수는 클래스 내부에서 사용할 수 있는 타입을 의미하며, 클래스를 인스턴스화할 때 구체적인 타입을 지정할 수 있습니다.

class GenericNum<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

let myGenericNum = new GenericNum<number>();
myGenericNum.zeroValue = 0;
myGenericNum.add = function (x, y) {
  return x + y;
};

예제

// 문자열 타입으로 제네릭 클래스 사용
const stringInstance = new GenericClass<string>('Hello, TypeScript!');
console.log(stringInstance.getValue()); // 출력: Hello, TypeScript!

// 숫자 타입으로 제네릭 클래스 사용
const numberInstance = new GenericClass<number>(42);
console.log(numberInstance.getValue()); // 출력: 42

위 코드에서 GenericClass는 두 가지 다른 타입, string과 number,으로 인스턴스화되었습니다. 이를 통해 제네릭 클래스를 사용하면 다양한 타입을 처리할 수 있는 유연한 클래스를 정의할 수 있습니다.

타입 제한 (Constraints)

TypeScript에서는 제네릭 타입 매개변수에 제약 조건을 부여하여 특정 타입만 사용할 수 있도록 할 수 있습니다. 이를 통해 제네릭 타입이 특정 인터페이스나 클래스를 상속받도록 강제할 수 있습니다.

interface Lengthwise {
    length: number;
}

class LengthwiseClass<T extends Lengthwise> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    public getLength(): number {
        return this.value.length;
    }
}

// 객체 타입으로 제네릭 클래스 사용
const lengthwiseInstance = new LengthwiseClass({ length: 10, value: 'Hello' });
console.log(lengthwiseInstance.getLength()); // 출력: 10

// 오류: 숫자 타입은 Lengthwise 인터페이스를 구현하지 않음
// const invalidInstance = new LengthwiseClass(42);

위 코드에서 LengthwiseClass는 Lengthwise 인터페이스를 구현하는 타입만 사용할 수 있습니다. 이를 통해 제네릭 타입 매개변수에 제한을 걸어 사용할 수 있는 타입을 더 구체적으로 정의할 수 있습니다.
*/