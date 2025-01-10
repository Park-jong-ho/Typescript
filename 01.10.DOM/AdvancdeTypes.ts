/*
# **고급 타입 (Advanced Types)**

TypeScript는 기본적인 타입 시스템 외에도 복잡한 타입 관계와 구조를 표현할 수 있는 다양한 고급 타입 기능을 제공합니다. 이러한 고급 타입 기능을 사용하면 더욱 강력하고 유연한 타입 체크를 수행할 수 있습니다.

## **교차 타입 (Intersection Type)**

교차 타입은 여러 타입을 결합하여 단일 타입으로 만드는 방법입니다. 이는 두 개 이상의 타입을 모두 만족해야 하는 타입을 의미합니다. **`&`** 연산자를 사용하여 정의합니다.

```tsx
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
};

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
  name: "John",
  age: 30,
  employeeId: 1234,
};

```

- **`Person` 타입**: **`name`** (문자열)과 **`age`** (숫자) 속성을 가집니다.
- **`Employee` 타입**: **`employeeId`** (숫자) 속성을 가집니다.
- **`EmployeeDetails` 타입**: **`Person`**과 **`Employee`** 타입을 결합한 교차 타입입니다. 이 타입은 **`name`**, **`age`**, **`employeeId`** 속성을 모두 포함합니다.
- **`employee` 객체**: **`EmployeeDetails`** 타입을 만족하는 객체로, **`name`**, **`age`**, **`employeeId`** 속성을 모두 포함합니다.

## **조건부 타입 (Conditional Type)**

조건부 타입은 조건에 따라 다른 타입을 반환하는 타입입니다. 이는 삼항 연산자 (**`? :`**)와 비슷하게 작동합니다.

```tsx
type IsString<T> = T extends string ? "Yes" : "No";

type A = IsString<string>; // "Yes"
type B = IsString<number>; // "No"

```

- **`IsString<T>` 타입**: **`T`**가 **`string`** 타입인 경우 "Yes"를, 그렇지 않은 경우 "No"를 반환합니다.
- **`A` 타입**: **`IsString<string>`** 타입의 결과로 "Yes"를 가집니다.
- **`B` 타입**: **`IsString<number>`** 타입의 결과로 "No"를 가집니다.

## **`keyof` 연산자**

**`keyof`** 연산자는 객체 타입의 키를 타입으로 반환합니다. 이를 통해 객체의 키에 기반한 타입 연산을 수행할 수 있습니다.

```tsx
typescript코드 복사
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person; // "name" | "age"

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = { name: "Alice", age: 25 };
const name = getProperty(person, "name"); // string

```

- **`Person` 타입**: **`name`** (문자열)과 **`age`** (숫자) 속성을 가집니다.
- **`PersonKeys` 타입**: **`keyof Person`** 타입의 결과로 "name" | "age"를 가집니다.
- **`getProperty` 함수**: 객체 **`obj`**와 키 **`key`**를 받아 해당 키에 해당하는 값을 반환합니다. 반환 타입은 **`T[K]`**로, 이는 객체 **`T`**의 키 **`K`**에 해당하는 값의 타입입니다.
- **`person` 객체**: **`Person`** 타입을 가지는 객체로, **`name`**과 **`age`** 속성을 포함합니다.
- **`name` 변수**: **`getProperty(person, "name")`** 호출 결과로, **`person`** 객체의 **`name`** 속성을 반환하며, 타입은 **`string`**입니다.

## **매핑 타입 (Mapped Type)**

매핑 타입은 기존 타입의 모든 속성들을 다른 형태로 변환하는 타입입니다. 이는 **`in`** 연산자를 사용하여 정의할 수 있습니다.

```tsx
type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type Person = {
  name: string;
  age: number;
};

type ReadOnlyPerson = ReadOnly<Person>;

const person: ReadOnlyPerson = {
  name: "Alice",
  age: 25,
};

// person.name = "Bob"; // 오류: 읽기 전용 속성이므로 'name'에 할당할 수 없습니다.

```

- **`ReadOnly<T>` 타입**: **`T`** 타입의 모든 속성을 읽기 전용(**`readonly`**)으로 변환하는 매핑 타입입니다. **`[P in keyof T]: T[P]`**는 **`T`** 타입의 모든 키 **`P`**를 순회하며, 해당 키의 타입을 유지하되, 읽기 전용으로 만듭니다.
- **`Person` 타입**: **`name`** (문자열)과 **`age`** (숫자) 속성을 가집니다.
- **`ReadOnlyPerson` 타입**: **`ReadOnly<Person>`** 타입의 결과로, **`Person`** 타입의 모든 속성을 읽기 전용으로 만듭니다.
- **`person` 객체**: **`ReadOnlyPerson`** 타입을 가지는 객체로, **`name`**과 **`age`** 속성을 읽기 전용으로 포함합니다. **`person.name`**에 새로운 값을 할당하려고 하면 오류가 발생합니다.
*/