/*
# Type Narrowing

TypeScript 에서 타입 좁히기(Type Narrowing)은 코드에서 변수의 타입을 더 구체적이거나 좁은 타입으로 명확하게 만드는 과정을 의미합니다. 이는 TypeScript 가 변수의 타입을 보다 정확하게 이해하고, 그에 따라 올바른 타입 체크와 코드 완성을 제공할 수 있도록 돕습니다. 타입 좁히기는 주로 조건문과 타입 가드를 사용하여 이루어집니다. 

## 타입 가드

타입 가드(Type Guard)는 TypeScript 에서 특정 조건을 통해 변수의 타입을 좁히는 기법을 의미합니다. 타입 가드를 사용하는 방법에는 여러 가지가 있으며, 이 중 몇 가지 주요한 방법을 소개하겠습니다. 

### typeof 연산자를 사용한 타입 가드

`typeof` 연산자를 사용하여 원시 타입을 좁힐 수 있습니다. 

```tsx
function process(value: string | number) {
  if (typeof value === 'string') {
    // 여기서는 value가 문자열임을 타입스크립트가 인식합니다.
    console.log(value.toUpperCase()); // string 메서드 사용 가능
  } else {
    // 여기서는 value가 숫자임을 타입스크립트가 인식합니다.
    console.log(value.toFixed(2)); // number 메서드 사용 가능
  }
}
```

### instanceof 연산자를 사용한 타입 가드

`instanceof` 연산자를 사용하여 객체가 특정 클래스의 인스턴스인지 확인할 수 있습니다. 이는 객체 타입을 좁히는 데 유용합니다. 

```tsx
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    // 여기서 animal은 Dog 타입으로 좁혀집니다.
    animal.bark();
  } else {
    // 여기서 animal은 Cat 타입으로 좁혀집니다.
    animal.meow();
  }
}
```

### in 연산자를 사용한 타입 가드

`in` 연산자를 사용하여 객체에 특정 속성이 존재하는지 확인할 수 있습니다. 이는 인터페이스나 객체 리터럴 타입을 좁히는 데 유용합니다.

```tsx
interface Car {
  drive: () => void;
}

interface Boat {
  sail: () => void;
}

function operate(vehicle: Car | Boat) {
  if ("drive" in vehicle) {
    // 여기서 vehicle은 Car 타입으로 좁혀집니다.
    vehicle.drive();
  } else {
    // 여기서 vehicle은 Boat 타입으로 좁혀집니다.
    vehicle.sail();
  }
}
```

### 동일성 좁히기(equality narrowing)

동일성 좁히기는 변수가 특정 값이나 값의 집합과 같음을 확인하여 타입을 좁히는 방법입니다. 이는 비교 연산자를 사용하여 변수가 특정 값과 동일한지 여부를 확인하고, 이를 통해 해당 변수의 타입을 더 구체적으로 좁히는 방식입니다. 

```tsx
function handleEvent(event: "click" | "scroll" | "mousemove") {
  if (event === "click") {
    // 여기서 event는 타입이 "click"으로 좁혀집니다.
    console.log("Handling click event");
  } else if (event === "scroll") {
    // 여기서 event는 타입이 "scroll"으로 좁혀집니다.
    console.log("Handling scroll event");
  } else {
    // 여기서 event는 타입이 "mousemove"로 좁혀집니다.
    console.log("Handling mousemove event");
  }
}
```

### 식별 가능한 유니언 타입(discriminated union)

식별 가능한 유니언 타입은 공통된 속성을 사용하여 유니언 타입을 구분하는 방법입니다. 이는 특정 속성 값을 통해 타입을 좁히는 방식입니다. 

```tsx
interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(shape: Shape): number {
  switch (shape.kind) {
    case "square":
      // 여기서 shape은 Square 타입으로 좁혀집니다.
      return shape.size * shape.size;
    case "rectangle":
      // 여기서 shape은 Rectangle 타입으로 좁혀집니다.
      return shape.width * shape.height;
    case "circle":
      // 여기서 shape은 Circle 타입으로 좁혀집니다.
      return Math.PI * shape.radius * shape.radius;
    default:
      throw new Error("Unknown shape");
  }
}
```

각 인터페이스는 ‘kind’ 속성을 가지고 있으며, 이 속성의 값은 각 타입을 구분하는 문자열 리터럴 입니다. area 함수에서 Shape 타입의 객체를 받아 ‘kind’ 속성을 사용하여 타입을 좁히고, 해당 타입에 맞는 면적을 계산합니다. 

*/