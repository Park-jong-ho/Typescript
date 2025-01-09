/*
Classes

TypeScript에서 클래스는 객체를 생성하기 위한 템플릿 역할을 하며, 이를 통해 객체 지향 프로그래밍(OOP)을 구현할 수 있습니다. 
클래스는 ES6에서 도입된 클래스 문법을 기반으로 하며, TypeScript는 여기에 타입 시스템을 추가하여 더 강력하고 안전한 코드를 작성할 수 있게 해줍니다. TypeScript 클래스의 주요 구성 요소는 생성자, 속성, 메서드입니다.

클래스 정의
TypeScript에서 클래스는 class 키워드를 사용하여 정의됩니다. 클래스 이름은 일반적으로 대문자로 시작합니다.
class Person {
    // 속성 (Properties)
    name: string;
    age: number;

    // 생성자 (Constructor)
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // 메서드 (Methods)
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

인스턴스 생성
클래스는 new 키워드를 사용하여 인스턴스를 생성할 수 있습니다.
const person1 = new Person('Alice', 30);
person1.greet(); // 출력: Hello, my name is Alice and I am 30 years old.

접근 제어자 (Access Modifiers)
TypeScript는 접근 제어자를 통해 클래스 속성과 메서드의 접근 범위를 제어할 수 있습니다. 주요 접근 제어자는 **`public`**, **`private`**, **`protected`**입니다.

- public : 기본값으로 어디서나 접근 가능.
- private : 클래스 내부에서만 접근 가능.
- protected : 클래스 내부 및 서브클래스에서 접근 가능.

class Animal {
    public name: string;
    private age: number;
    protected type: string;

    constructor(name: string, age: number, type: string) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    public getAge() {
        return this.age;
    }

    protected getType() {
        return this.type;
    }
}

const animal = new Animal('Dog', 5, 'Mammal');
console.log(animal.name); // 출력: Dog
console.log(animal.getAge()); // 출력: 5
// console.log(animal.age); // 오류: 'age'는 private 속성입니다.
// console.log(animal.type); // 오류: 'type'은 protected 속성입니다.

인터페이스 (Interface)와 클래스

TypeScript에서 인터페이스는 클래스의 구조를 정의할 수 있습니다. 클래스는 인터페이스를 구현하여 그 구조를 따를 수 있습니다.
interface Drivable {
    startEngine(): void;
    stopEngine(): void;
}

class Car implements Drivable {
    startEngine() {
        console.log('Engine started.');
    }

    stopEngine() {
        console.log('Engine stopped.');
    }
}

const myCar = new Car();
myCar.startEngine(); // 출력: Engine started.
myCar.stopEngine(); // 출력: Engine stopped.
*/

// 실습 
/*
class Animal {
    public species: string;
    private age: number;
    protected habitat: string;

    constructor(species: string, age: number, habitat: string) {
        this.species = species;
        this.age = age;
        this.habitat = habitat;
    }

    public getAge(): number {
        return this.age;
    }

    protected getHabitat(): string {
        return this.habitat;
    }
}

const animal1 = new Animal('Dog', 5, 'Domestic');
console.log(animal1.species); // 출력: Dog
console.log(animal1.getAge()); // 출력: 5
// console.log(animal1.age); // 오류: 'age'는 private 속성입니다.
// console.log(animal1.habitat); // 오류: 'habitat'는 protected 속성입니다.

// 해설

이 실습 코드는 타입스크립트에서 클래스를 사용하여 **`Animal`** 객체를 정의하는 예제입니다. 각각의 접근 제어자(**`public`**, **`private`**, **`protected`**)를 사용하는 방법과 해당 접근 제어자가 클래스의 속성과 메서드에 어떻게 영향을 미치는지 보여줍니다.

속성 정의

class Animal {
public species: string;
private age: number;
protected habitat: string;

- species : public 접근 제어자를 사용하여 어디서나 접근 가능합니다.
- age : private 접근 제어자를 사용하여 클래스 내부에서만 접근 가능합니다.
- habitat: protected 접근 제어자를 사용하여 클래스 내부와 서브클래스에서만 접근 가능합니다.

- 생성자
constructor(species: string, age: number, habitat: string) {
    this.species = species;
    this.age = age;
    this.habitat = habitat;
}

- constructor는 객체를 생성할 때 호출됩니다. species, age, habitat 속성을 초기화합니다.

- 메서드 정의
public getAge(): number {
    return this.age;
}

protected getHabitat(): string {
    return this.habitat;
}
}

- getAge : public 메서드로 어디서나 호출할 수 있습니다. private 속성인 age를 반환합니다.
- getHabitat : protected 메서드로 클래스 내부와 서브클래스에서만 호출할 수 있습니다. protected 속성인 habitat를 반환합니다.

- 인스턴스 생성 및 사용
typescript코드 복사
const animal1 = new Animal('Dog', 5, 'Domestic');
console.log(animal1.species); // 출력: Dog
console.log(animal1.getAge()); // 출력: 5
// console.log(animal1.age); // 오류: 'age'는 private 속성입니다.
// console.log(animal1.habitat); // 오류: 'habitat'는 protected 속성입니다.

- const animal1 = new Animal('Dog', 5, 'Domestic'); : Animal 클래스의 새로운 인스턴스를 생성합니다.
- console.log(animal1.species); : public 속성인 species에 접근하여 값을 출력합니다.
- console.log(animal1.getAge()); : public 메서드인 getAge를 호출하여 age 값을 출력합니다.
- // console.log(animal1.age); : private 속성인 age에 직접 접근하려고 하면 컴파일 오류가 발생합니다.
- // console.log(animal1.habitat); : protected 속성인 habitat에 직접 접근하려고 하면 컴파일 오류가 발생합니다.
*/