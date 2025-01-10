/*
# 24. 유틸리티 타입

# Utility Types

유틸리티 타입은 타입스크립트에서 제공하는 내장 타입으로, 기존 타입을 변환하거나 새로운 타입을 생성하는데 사용됩니다. 이러한 유틸리티 타입은 코드를 간결하게 작성하고 재사용성을 높이는 데 도움이 됩니다.

## partial<Type>

partial<Type> 유틸리티 타입은 기존 타입의 모든 속성을 선택적으로 만드는 데 사용됩니다. 즉, 해당 타입의 모든 속성이 필수가 아니라 선택적이 됩니다.

```tsx
interface User {
  name: string;
  age: number;
}

// 모든 속성이 선택적인 UserPartial 타입
type UserPartial = Partial<User>;

// UserPartial 타입 사용
const partialUser: UserPartial = {};
```

## Readonly<Type>

Readonly<Type> 유틸리티 타입은 기존 타입의 모든 속성을 읽기 전용으로 만드는 데 사용됩니다. 즉, 해당 타입의 모든 속성을 변경할 수 없게 됩니다. 

```tsx
interface Config {
  title: string;
  subtitle: string;
}

// 모든 속성이 읽기 전용인 ReadonlyConfig 타입
type ReadonlyConfig = Readonly<Config>;

// ReadonlyConfig 타입 사용
const config: ReadonlyConfig = { title: "Hello", subtitle: "World" };
// 아래와 같이 변경을 시도하면 에러가 발생합니다.
// config.title = "Hi";
```

## Pick<Type, Keys>

Pick<Type, keys> 유틸리티 타입은 기존 타입에서 지정된 속성(키)들만 선택하여 새로운 타입을 생성하는 데 사용됩니다. 이는 타입에서 필요한 일부 속성만을 추출하여 새로운 타입을 만들고자 할 때 유용합니다. 

```tsx
interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}
```

`User` 인터페이스에서 `id` 와 `name` 속성만을 선택하여 새로운 타입을 만들고자 할 때 Pick 유틸리티 타입을 사용할 수 있습니다. 

```tsx
type UserPreview = Pick<User, "id" | "name">;
```

이렇게 하면 `User` 인터페이스에서 `id` 와 `name` 속성만을 선택하여 `UserPreview` 라는 새로운 타입을 생성합니다. 따라서 `UserPreview` 타입은 다음과 같습니다.

```tsx
type UserPreview = {
  id: number;
  name: string;
}
```

## Omit<Type, Keys>

Omit<Type, Keys> 유틸리티 타입은 기존 타입에서 지정된 속성들을 제외한 나머지 속성들로 새로운 타입을 생성하는 데 사용됩니다. 즉, Pick 유틸리티와 반대의 기능을 한다고 생각하면 됩니다. 

```tsx
interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}
```

이 `User` 인터페이스에서 `id`와 `email` 속성을 제외하고 나머지 속성들만을 포함하는 새로운 타입을 만들고자 할 때 Omit ****유틸리티 타입을 사용할 수 있습니다.

```tsx
type UserWithoutIdAndEmail = Omit<User, "id" | "email">;
```

이렇게 하면 `User` 인터페이스에서 `id` 와 `email` 속성을 제외하고 나머지 속성들만 포함하는 `UserWithoutIdAndEmail` 라는 새로운 타입을 생성합니다. `UserWithoutIdAndEmail` 타입은 다음과 같습니다. 

```tsx
type UserWithoutIdAndEmail = {
  name: string;
  age: number;
}
```

## Record<Keys, Type>

Record<Keys, Type> 유틸리티 타입은 지정된 키의 타입을 가진 속성을 포함하는 새로운 타입을 생성합니다. 

```tsx
// 문자열을 키로 갖고 숫자를 값으로 가지는 객체 타입
type NumberRecord = Record<string, number>;

// NumberRecord 타입 사용
const numberRecord: NumberRecord = { one: 1, two: 2, three: 3 };
```

## Parameters<Type>

Parameters<Type> 유틸리티 타입은 함수나 메서드의 매개변수들의 타입을 추출하여 튜플 타입으로 만드는 데 사용됩니다. 이는 함수의 매개변수들을 추출하여 타입을 다루거나 변형할 때 유용합니다.

```tsx
function greet(name: string, age: number) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}
```

이제 이 함수의 매개변수들의 타입을 추출하여 튜플 타입으로 만들고자 할 때 `Parameters` 유틸리티 타입을 사용할 수 있습니다.

```tsx
type GreetParameters = Parameters<typeof greet>;
```

이렇게 하면 `GreetParameters` 라는 새로운 타입이 생성됩니다. 이 타입은 `greet` 의 매개변수들의 타입들을 튜플로 나타냅니다. 따라서 `GreetParameters` 타입은 다음과 같습니다.

```tsx
type GreetParameters = [string, number];
```

## 실습

- `Run` 버튼을 누르면 코드를 실행할 수 있습니다.
- 우측 상단 메뉴 확장 버튼(⇤)을 누르면 실행 결과를 볼 수 있습니다.

https://www.typescriptlang.org/play/?#code/JYOwLgpgTgZghgYwgAgKoGdrIN4ChnLAAmAXMiAK4C2ARtANz7lxURnphSgDmjBc3NuWp0ojAL65cAemnJAFV2ADluSBYwcCMg4Bdx5IAJBwLsLgQAnAHuNpMUAApwoYYHAA2yQAMLgUPHkgVAnAGuO4wATwAOKDGgLKxt7AF5kYOs7AB5AqAA+Rhk5ACUIOCIAexBbb2RAAnHAD6XAGs7AB6XHJ0ARceRAGoHASrHADVXAG9GFZXUtQF9xwAY65EAQCfrjAGEcmGBuSrdPUEhYRBQRkDGJvAJrMFshDi4QXiZ0Chp1zfZOHgkpWTbVTWQe-sHkdMycvMXlyY8vPxRn7NzvO9xsgIn9Xt4YkDuElLnIzMAEABrQqlCrOGoNFrMVg3QAznTU9IAdVZM0AAciwUM4pt9-CSoOScRF4Ui4qYADTIABEIApnJhKWQAHkqMAwCjypUMU1WgIUOoaoAcCcAHmPE+IAdVFAAsshQwABBQSfTw+WnqrU6-WGiLC0Ws6AczmyvnJK7pBBZKBEcVo6p1aXIQAc3YAE8cAL6M1QAlC4AdDuQgDQawAHNchANRDQcAPp3IQBINYAecejgAAawADk4AUpuQgFwawAtM5NALsDahpKFJImgbo9XtBEHdnpi2x4HMotGg-KuwQps3Q3slfqxgAtVwAYQ+5kIATzsAODWAAZ6p2PACmzgBzZ4kAcSgEAgYEHrGHRtwMAoIAQ1hyyG4e4PAAoeaxTjtuBzZWQe6IAJQ4JjuiA6BZJsAB0thZNwD4AAYABIQLYEEcgAJNgz4QOIACEyAAJo6sglgoKhsriMg3gZFAI4gUQoHQT+Fwmigu77oelhDtAI5Mmxx4cTEjFZDAt73mA-ZyA0yCABBjCq4IBHDIL4ljRLY8RkPEUShCCODiPQyBXEoNxaHoRh0updiVLOZYyTkcl7i8AJQmQYL2aMwIRNgyDHEInJqgh7qsJyHIHEcoonFyYBZMgAAqPwAMoIFwvhgJyyDabpcj6R0dy9AMxhOW8LkTM4FmllZQFihQpgMkI8RVZp7noWQnIAFJZJqIDJalVzoXiBK6KqlUUuZJYlbJ5WmBqYDarqBrVeN5rTVaOCEKQyAAIzdhSjV6rYCIQB1OlXLKBnIMqgA4LXSE1TZalJOMVpVyd+Datk2ZB1r2UCNp6dXIDkQjrR5ADuWRkAATByk33mQADMKUHXIwZhsgUaxgmyZplmuaFsN91igpUDsZRZDMQeR4HhxmkANqcttu0BcgUMAAwALpw8g05CSxs6LiukybjuwmkyeRXIIADD0hlIskgRA4GQQ+eNKfE9H3VLMtQbZ-z5Us4xK5LYEQVBFVkhSOvWSr+sPobUCXRaM0m0BZuy49H3PZ6dvAXrst4wT6BK0AA

### 참고 자료

- [TypeScript 공식 문서](https://www.typescriptlang.org/ko/docs/handbook/utility-types.html)

### 이해도 자가 체크 리스트

아래 항목 중 몇 가지를 이해했는지 파악해 보세요!

- `Partial<Type>`을 사용하여 객체의 모든 속성을 선택적으로 만드는 방법을 이해하고 있다
- `Readonly<Type>`을 사용하여 객체의 모든 속성을 읽기 전용으로 만드는 방법을 이해하고 있다
- `Pick<Type, Keys>`을 사용하여 객체에서 특정 속성만을 선택하는 방법을 이해하고 있다
- `Omit<Type, Keys>`을 사용하여 객체에서 특정 속성을 제외하는 방법을 이해하고 있다
- `Record<Keys, Type>`을 사용하여 키-값 쌍을 가진 객체 타입을 생성하는 방법을 이해하고 있다
- `Parameters<Type>`을 사용하여 함수의 매개변수 타입을 추출하는 방법을 이해하고 있다

<aside>
⚠️ 자신있게 ‘예’라고 대답할 수 있는 항목이 4개 이하라면 다시 처음부터 학습하는 것을 권장합니다.

</aside>
*/