/*
# Module

TypeScript 모듈은 파일 자체가 하나의 모듈로 간주됩니다. 모듈 내에서 정의된 변수, 함수, 클래스 등을 외부로 내보내기(export) 하여 다른 모듈에서 이를 가져오기(import) 할 수 있습니다. 모듈은 독립적인 스코프를 가지므로, 다른 모듈과 변수나 함수의 이름이 충돌하는 것을 방지할 수 있습니다. 

## 모듈의 장점

- 구조화된 코드
    
    모듈을 사용하면 코드를 논리적으로 구분하여 관리할 수 있습니다. 각 모듈은 특정 기능 또는 역할을 담당하므로 코드가 더욱 구조화되고 이해하기 쉬워집니다.
    
- 재사용성
    
    모듈을 사용하여 코드를 작성하면 다른 프로젝트에서 필요한 경우 쉽게 재사용할 수 있습니다. 필요한 모듈만 가져와서 사용하면 되기 때문에 중복된 작업을 피할  수 있습니다.
    
- 네임스페이스 분리
    
    모듈은 자체적인 스코프를 가지므로 전역 네임스페이스 오염을 방지할 수 있습니다. 각 모듈은 독립적으로 동작하며 다른 모듈과 상호작용할 때 충돌이 발생하지 않습니다. 
    

## ES 모듈

ES 모듈은 ES6 부터 표준화된 모듈 시스템입니다. ES 모듈을 사용하면 `import`와 `export` 키워드를 통해 모듈을 구성할 수 있습니다.

### 모듈 내보내기

- Named Export

Named Export 는 여러 개의 값을 내보낼 때 사용합니다. 각 내보낸 값은 가져올 때 이름을 사용합니다. 

```tsx
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export const PI = 3.14;
```

- Default Export

Default Export는 모듈에서 하나의 값을 기본값으로 내보낼 때 사용합니다. Default Export는 모듈 당 하나만 있을 수 있습니다.

```tsx
// greet.ts
export default function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

### 모듈 가져오기(import)

- Named import

Named import 는 중괄호 `{}` 를 사용하여 필요한 값을 가져옵니다. 

```tsx
// app.ts
import { add, subtract, PI } from './math';

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
console.log(PI); // 3.14
```

- Default import

Default import 는 이름을 사용하지 않고 모듈 자체를 가져옵니다.

```tsx
// app.ts
import greet from './greet';

console.log(greet('Alice')); // Hello, Alice!
```

## 타입 모듈

TypeScript에서는 타입을 정의하고 가져오는 데에도 모듈을 사용할 수 있습니다. 타입 모듈은 주로 타입 정의를 공유하거나 타입을 외부 라이브러리와 함께 사용할 때 유용합니다. 

- 타입 모듈 types.ts 정의

```tsx
// types.ts

// 사용자 객체 타입 정의
export interface User {
  id: number;
  username: string;
  email: string;
}

// 게시글 객체 타입 정의
export interface Post {
  id: number;
  title: string;
  content: string;
}
```

- 타입 모듈 사용
 */