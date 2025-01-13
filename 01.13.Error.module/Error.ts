/*
# 26. 에러 처리

# TypeScript 에러 처리

TypeScript v4.4 부터 `try-catch`문으로 구현된 에러의 객체가 `unknown` 타입으로 정의됩니다. 이전에는 `any`타입으로 처리되었지만, `unknown` 타입으로 변경되면서 타입 안정성을 높이는데 기여했습니다. 기존에 `try-catch` 문으로 에러를 처리할 때 에러 객체의 타입이 `any`로 정의되어 있으면 해당 객체를 사용할 때 타입 안전성이 보장되지 않았습니다. 그러나 `unknown` 타입으로 변경됨으로써 사용자는 명시적인 타입 체크나 타입 어설션을 통해 에러 객체를 안전하게 다룰 수 있게 되었습니다.

```tsx
try {
  // 예외 발생 가능한 코드
} catch (error) {
  // error는 이제 unknown 타입
  console.log(error.message); // 에러: 'message' 프로퍼티에 접근할 수 없음
}
```

위 코드에서 `error` 객체는 `unknown` 타입으로 정의되어 있기 때문에 `message` 프로퍼티에 바로 접근할 수 없습니다. 이 경우에는 타입 가드로 에러를 처리해주면 됩니다.

```tsx
try {
  // 예외 발생 가능한 코드
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(error.message); // 에러 객체의 message 프로퍼티에 접근
  } else {
    console.log("Unknown error occurred");
  }
}
```

## 커스텀 에러 클래스

커스텀 에러 클래스는 JavaScript 의 기본 ‘Error’ 클래스를 확장하여, 특정한 상황에 맞는 에러를 정의하고 처리하기 위해 사용됩니다. 커스텀 에러 클래스는 기본 ‘Error’ 클래스의 기능을 모두 가지면서, 추가적인 속성이나 메서드를 포함할 수 있습니다. 이를 통해 에러를 보다 구체적으로 정의하고 에러 처리 로직을 개선할 수 있습니다. 

### 사용 예시

- 기본적인 커스텀 에러 클래스

```tsx
class CustomError extends Error { 
  constructor(message: string) {
    super(message); // 부모 클래스인 Error의 생성자 호출
    this.name = 'CustomError'; // 에러 이름 설정
  }
}

// 사용 예시
try {
  throw new CustomError('This is a custom error');
} catch (error) {
  if (error instanceof CustomError) {
    console.error('Caught custom error:', error.message);
  } else {
    console.error('Unknown error:', error);
  }
}
```

‘Error’ 클래스를 확장하여 새로운 에러 클래스를 만듭니다. 생성자에서 부모 클래스인 ‘Error’ 의 생성자를 호출하고, 에러 이름을 설정합니다. 

- 추가적인 속성을 가진 커스텀 에러

```tsx
class DetailedError extends Error {
  public code: number;
  public details: string;

  constructor(message: string, code: number, details: string) {
    super(message);
    this.name = 'DetailedError'; // 에러 이름 설정
    this.code = code; // 추가적인 속성 초기화
    this.details = details;
  }
}

// 사용 예시
try {
  throw new DetailedError('Invalid operation', 400, 'The operation you attempted is not allowed.');
} catch (error) {
  if (error instanceof DetailedError) {
    console.error(`Error: ${error.message} (Code: ${error.code})`);
    console.error(`Details: ${error.details}`);
  } else {
    console.error('Unknown error:', error);
  }
}
```

## 실습

- `Run` 버튼을 누르면 코드를 실행할 수 있습니다.
- 우측 상단 메뉴 확장 버튼(⇤)을 누르면 실행 결과를 볼 수 있습니다.

https://www.typescriptlang.org/play/?#code/PTAEhO5wSocAUXUBdHA37aQLguAz2ypCoE4DXGBQBjAGwEMBnU0AYQFdSAXAewFsBRAJzYbdAFMAPOjwB2AEwrtO3AN65QofAyH021fIzYAKJj3LEA5jwBcoZQEshegJSgZcuaWoAHHpu26DlgNygQoQAG9gBVdKOigElzYoIC7A4CMg4AJ44A+naCAHGuAObOAGquAN6PwSIAqXYA7Q4ADk4mAJIOYgJargBNNgCdNAHSydnQAFqakNULE2qAAvKAA5DT0zGFsvd6+iBGALuOAIZ2AIuN9A4ysHFy9gDodoKWVtfUAvrj7uOMIiYA4PZF5gCULgClNoIAWq4AYQ1h4AGbUQmqmiqBsLQDWAE8APLONjEOhfIQaABuxEI1CMoCE1CYACMXNZbKBTC9QDC4QjQAAeUAABkx9TkTU4AHckTw6YshitNL0AHI8PTg0zQnigWHwvktJEMOigOGEBg0ngiXpeHxgAUIwAANWTAC89VVAgETxwA844AXLqotCWwzOF0ArQvVOpyfZyBRKBiEHg1SV6DS9EEubnfBz4fA6UhvQhysaKgk8VWkjWgQA2C4AHGsAGQ2gQCYNfrQNFAK81oHyRVAKUApB3bOqHY6gQAZM4AaztwdDYAJs9V+pEBHrBEMUGgAtABGeW+R7JFLGDKABjrADiD2VV50LB3k4PwjTxLkkFLkOIXLOxSjoxA+PAYuKZyyXNgV48Ng0P4VAgA9xyCAFkXIFeCqBAKprV6ndnkilIDqdi64GgAA0oYhqD0RoxW3XgWWMAASKQ-zYGo3FIfQeF2ACezAA9hkAH3HQEAXprAAax7Is0KRJ83fUBdl4QhSD5LFbS-H8agQt0AEEhFAd4-iEKVOIQ0AGF9agOBlYMT2wllVUAEVHABmm0AqkAD07sjwojQBwwAMHpI7NyILS09gOXAgA

### 이해도 자가 체크 리스트

아래 항목 중 몇 가지를 이해했는지 파악해 보세요!

- `try-catch` 문을 사용하여 에러를 처리할 수 있다.
- 타입 가드를 사용하여 에러를 처리할 수 있다.
- 커스텀 에러 클래스를 생성하여 에러를 처리할 수 있다.

<aside>
⚠️ 자신있게 ‘예’라고 대답할 수 있는 항목이 2개 이하라면 다시 처음부터 학습하는 것을 권장합니다.

</aside>
*/