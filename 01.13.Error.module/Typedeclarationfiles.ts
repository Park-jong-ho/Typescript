/*
# 타입 선언 파일 (type declaration files)

TypeScript 타입 선언 파일 (**`.d.ts`**)은 JavaScript 내장 객체나 외부 라이브러리 API 등의 타입 정보를 제공하기 위한 파일입니다. 이 파일들은 실제 구현을 포함하지 않으며, 특정 타입이 존재한다는 것을 선언하여 TypeScript 컴파일러가 올바른 타입 체크를 수행할 수 있도록 도와줍니다. 다음은 타입 선언 파일에 대한 자세한 설명입니다.

## **주요 특징**

1. **파일 확장자**:
    - 타입 선언 파일은 **`.d.ts`** 확장자를 가집니다.
2. **타입 선언**:
    - 타입 선언 파일은 실제 코드 구현을 포함하지 않으며, 타입 선언만 포함합니다.
3. **사용 목적**:
    - JavaScript 내장 객체, 외부 라이브러리, 또는 애플리케이션에서 사용되는 타입을 정의하여 TypeScript 컴파일러가 타입 정보를 알 수 있도록 합니다.

## **타입 선언 파일의 사용**

타입 선언 파일을 사용하면, TypeScript 컴파일러가 타입 정보를 알 수 있어 코드 작성 시 타입 체크 및 자동 완성 기능을 제공할 수 있습니다.

### **예제**

```tsx
// Math 객체의 pow 함수 사용
const result = Math.pow(2, 3);
console.log(result); // 출력: 8

// 외부 라이브러리 myLibrary 사용
import { doSomething, calculate } from "myLibrary";

doSomething("Hello, TypeScript!");
const sum = calculate(5, 3);
console.log(sum); // 출력: 8

// 사용자 정의 함수 getUser 사용
const user = getUser(1);
console.log(user.name);
```

## **Lodash 타입 선언 파일**

Lodash는 JavaScript 유틸리티 라이브러리로, TypeScript에서 사용하는 경우 타입 선언 파일을 설치해야 합니다. **`@types/lodash`** 패키지를 통해 제공됩니다.

- 설치 명령:

```
npm install lodash @types/lodash
```

타입 선언 파일의 구조는 대략 다음과 같습니다:

```tsx
declare module "lodash" {
    // 예시: lodash의 shuffle 함수 타입 선언
    export function shuffle<T>(collection: T[] | List<T>): T[];
    // 다른 함수들의 타입 선언도 여기에 포함됩니다.
}
```

## **Max 함수 타입 선언**

**`max`** 함수는 배열의 최대값을 찾는 함수입니다. lodash의 max 함수는 **`max`** 또는 **`maxBy`**를 사용할 수 있습니다. 여기에 **`max`** 함수의 타입 선언 예시를 보겠습니다.

```tsx
declare module "lodash" {
    export function max<T>(array: List<T> | null | undefined): T | undefined;
}
```

여기서 **`List<T>`**는 배열 또는 유사 배열 객체를 나타냅니다.

## **Shuffle 함수 타입 선언**

Shuffle 함수는 배열을 무작위로 섞는 함수입니다. 위에서 설명한 Fisher-Yates Shuffle 알고리즘을 사용한 shuffle 함수의 타입 선언은 다음과 같습니다:

```tsx
// TypeScript 파일 내에서 직접 선언한 shuffle 함수 타입
function shuffle<T>(array: T[]): T[] {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

// 이 함수의 타입 선언
function shuffle<T>(array: T[]): T[];
```

이 타입 선언은 **`shuffle`** 함수가 제네릭 함수임을 나타내며, 입력 배열의 타입 **`T`**가 함수의 반환 배열 타입 **`T[]`**와 동일함을 명시합니다.

## **타입 선언 파일을 찾는 방법**

TypeScript는 다음과 같은 순서로 타입 선언 파일을 찾습니다:

1. **로컬 `node_modules/@types` 폴더**:
    - 프로젝트의 **`node_modules/@types`** 폴더 내의 타입 선언 파일을 먼저 찾습니다.
2. **전역 `node_modules/@types` 폴더**:
    - 로컬에 타입 선언 파일이 없으면, 전역 **`node_modules/@types`** 폴더에서 타입 선언 파일을 찾습니다.
3. **트리플 슬래시 디렉티브**:
    - **`/// <reference path="..." />`** 디렉티브를 사용하여 타입 선언 파일을 직접 참조할 수 있습니다.
4. **`tsconfig.json` 파일**:
    - **`tsconfig.json`** 파일의 **`typeRoots`** 및 **`types`** 옵션을 사용하여 타입 선언 파일의 경로를 지정할 수 있습니다.

### **`tsconfig.json` 설정 예제**

```json
{
  "compilerOptions": {
    "typeRoots": ["./types", "./node_modules/@types"],
    "types": ["node", "myLibrary"]
  }
}
```

위 설정은 TypeScript 컴파일러가 **`./types`** 폴더와 **`node_modules/@types`** 폴더에서 타입 선언 파일을 찾도록 합니다.

### 참고 자료

- [TypeScript 공식문서: dts-from-js.html](https://www.typescriptlang.org/docs/handbook/declaration-files/dts-from-js.html#handbook-content)
*/