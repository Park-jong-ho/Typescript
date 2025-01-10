/*
# 25. 상수 단언

# **상수 단언 (const assertion)**

TypeScript의 상수 단언(**`const assertion`**)은 값을 리터럴 타입으로 고정하여 변수의 타입을 더욱 엄격하게 제어할 수 있는 기능입니다. 이를 통해 컴파일러가 해당 값이 변경하지 않는 것을 보장하고, 정확한 타입 추론을 도와줍니다. 상수 단언을 사용하면 변수의 값이 고정되어야 하는 상황에서 특히 유용합니다.

## **상수 단언의 주요 특징**

1. **확장할 수 없는 리터럴 타입**:
    - 변수의 타입을 리터럴 값으로 고정하여 확장할 수 없게 만듭니다.
2. **애플리케이션 전역에서 일관된 값 사용**:
    - 값을 상수로 고정하여 전역에서 올바른 값을 일관되게 사용할 수 있게 합니다.
3. **컴파일러의 정확한 타입 추론**:
    - TypeScript 컴파일러가 값의 타입을 정확히 추론할 수 있게 돕습니다.

## **기본 사용법**

```tsx
let greeting = "Hello, World!";
// TypeScript는 greeting의 타입을 string으로 추론합니다.

const greetingConst = "Hello, World!" as const;
// greetingConst의 타입은 "Hello, World!"라는 리터럴 타입으로 고정됩니다.
```

위 예제에서 **`greeting`** 변수는TypeScript에 의해 **`string`** 타입으로 추론되지만, **`greetingConst`** 변수는 **`as const`** 단언을 사용하여 "Hello, World!"라는 리터럴 타입으로 고정됩니다.

## **객체에 상수 단언 사용**

```tsx
const user = {
  name: "Alice",
  age: 30
} as const;

// user의 타입은 다음과 같이 고정됩니다:
// {
//   readonly name: "Alice";
//   readonly age: 30;
// }
```

**`as const`** 단언을 사용하면 객체의 모든 속성이 읽기 전용(**`readonly`**)이 되며, 각각의 속성이 리터럴 타입으로 고정됩니다.

## **배열에 상수 단언 사용**

```tsx
const colors = ["red", "green", "blue"] as const;

// colors의 타입은 다음과 같이 고정됩니다:
// readonly ["red", "green", "blue"]
```

배열에 **`as const`**를 사용하면 배열의 요소 타입이 고정되고, 배열 자체가 읽기 전용이 됩니다.

## **상수 단언을 사용한 타입 추론**

```tsx
const directions = ["up", "down", "left", "right"] as const;

type Direction = typeof directions[number];
// Direction 타입은 "up" | "down" | "left" | "right" 입니다.

function move(direction: Direction) {
  console.log(`Moving ${direction}`);
}

move("up");    // 정상
move("right"); // 정상
// move("forward"); // 오류: 타입 '"forward"'은 'Direction' 타입에 할당할 수 없습니다.
```

위 예제에서 **`directions`** 배열은 **`as const`** 단언을 사용하여 리터럴 타입의 배열로 고정됩니다. **`typeof directions[number]`**를 사용하여 배열의 모든 값들을 유니온 타입으로 추출하고, 이를 **`Direction`** 타입으로 정의합니다.

## 실습

- RUN PROJECT를 클릭하세요.
- 터미널(Terminal)에  `npm install && npm run dev` 를 입력하고 enter를 누르면 코드가 실행됩니다.
- 오른쪽 브라우저에서 결과를 확인해 보세요.

https://www.typescriptlang.org/play/?#code/PTAEEYDpUXBrBaZ0hYwcIyDpA1nYBkXAv7aQAwuFDx0QA5rBUCYCgyBjAewDsBnAF1AFd6BTAJ1AF5QBvMqFC0AhgFt2ALlAAiAIIAbAJaV2sgDRDQogObTQAJgCsZAL476oGg0YBuCiFCATpsAy46EAgk4AFx0IBIxwBqdgD6doIA4PYC7A4A7Q4CtC4ATTc6QZE5sXJBikrxyAELUAEaydqBOATIA5GnsJT6AvuOADHWggCATgJVj+HEJVHT01IrskIrUugAUyZwAlAVOgDmzgKQdMvwiEgYlSqoVGjr6MiagZhSJYIbQgAw9gC+joIApY4Axg+jYeISk7bbWXdScVnwA2rKc7AAmmnK6b7sWj-WQ5RQsdQAXUsT1sDj2Lnc3j8QVCkVi8URND6r3eAAYYXxZABPdiKPoAd3yhTAxVAtQajSQyEALuOAAe7ADodoEABquAT6aeaBABhDoEAY6OAVqHWhQbJ1ur1+gMcS96GNaaBpjJ3iVvj8SmsSoD2MC9aASuDISUoWQgA

- 실습 해설
    
    1. 객체 속성 리터럴 타입 고정
    
    - **상수 단언 사용**:
        - **`as const`**를 사용하여 **`user`** 객체의 모든 속성을 리터럴 타입으로 고정합니다.
    - **읽기 전용 속성**:
        - **`user`** 객체의 **`name`**과 **`age`** 속성은 읽기 전용이 되어 값을 변경할 수 없습니다.
    - **출력**:
        - **`console.log(user);`** : **`user`** 객체를 출력합니다.
    
    1.  배열 요소 리터럴 타입 고정
        - **상수 단언 사용**:
            - **`as const`**를 사용하여 **`colors`** 배열의 모든 요소를 리터럴 타입으로 고정합니다.
        - **읽기 전용 속성**:
            - **`colors`** 배열의 모든 요소는 읽기 전용이 되어 값을 변경할 수 없습니다.
        - **출력**:
            - **`console.log(colors);`** : **`colors`** 배열을 출력합니다.

### 참고 자료

- [TypeScript 공식문서: type-assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)

### 이해도 자가 체크 리스트

아래 항목 중 몇 가지를 이해했는지 파악해 보세요!

- **상수 단언의 주요 특징에 대해 설명할 수 있다.**
- **객체에서 상수 단언 사용하는 방법에 대해 설명할 수 있다.**
- **배열에서 상수 단언 사용하는 방법에 대해 설명할 수 있다.**
- **상수 단언을 사용한 타입 추론하는 방법에 대해 설명할 수 있다.**

<aside>
⚠️ 자신있게 ‘예’라고 대답할 수 있는 항목이 3개 이하라면 다시 처음부터 학습하는 것을 권장합니다.

</aside>
*/