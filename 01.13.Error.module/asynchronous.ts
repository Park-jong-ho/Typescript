/*
# TypeScript와 비동기

TypeScript에서 비동기 처리는 주로 **`async`** 함수와 **`await`** 키워드를 사용하여 수행됩니다. 이러한 비동기 처리는 JavaScript와 동일한 방식으로 작동하지만, TypeScript는 추가적인 타입 안전성을 제공합니다. 여기서는 TypeScript에서 비동기 함수를 정의하고 사용하는 방법에 대해 자세히 설명하겠습니다.

### **기본 개념**

1. **`async` 함수**:
    - **`async`** 키워드는 함수가 비동기 작업을 포함하고 있음을 나타내며, 해당 함수는 항상 **`Promise`**를 반환합니다.
2. **`await` 키워드**:
    - **`await`** 키워드는 비동기 작업이 완료될 때까지 기다립니다. **`await`** 키워드는 **`async`** 함수 내에서만 사용할 수 있습니다.
3. **`Promise<T>` 반환 타입**:
    - **`async`** 함수는 기본적으로 **`Promise`**를 반환합니다. 함수의 반환 타입을 **`Promise<T>`**로 지정하여 비동기 작업의 결과 타입을 명확하게 할 수 있습니다.

### **예제**

- **기본 비동기 함수**

```tsx
// 비동기 함수의 반환 타입을 Promise<string>으로 지정합니다.
async function fetchData(): Promise<string> {
  // 비동기 작업을 수행하고 결과를 반환합니다.
  const data = await new Promise<string>((resolve) =>
    setTimeout(() => resolve("Hello, TypeScript!"), 1000)
  );
  return data;
}

fetchData().then((result) => console.log(result)); // 1초 후에 "Hello, TypeScript!" 출력

```

1. **비동기 함수 정의**:
    - **`async function fetchData()`**: **`async`** 키워드를 사용하여 비동기 함수를 정의합니다. 이 함수는 **`Promise<string>`**을 반환합니다.
    - **`Promise<string>`**: 이 함수가 반환하는 **`Promise`**는 문자열을 결과로 가집니다.
2. **비동기 작업 수행**:
    - **`await new Promise<string>((resolve) => setTimeout(() => resolve("Hello, TypeScript!"), 1000))`**:
        - 새로운 **`Promise`**를 생성합니다. 이 **`Promise`**는 1초 후에 **`"Hello, TypeScript!"`** 문자열로 해결됩니다.
        - **`await`** 키워드를 사용하여 **`Promise`**가 해결될 때까지 기다립니다.
3. **값 반환**:
    - **`return data;`**: **`Promise`**가 해결된 후, 결과값인 **`"Hello, TypeScript!"`**를 반환합니다.
4. **함수 호출**:
    - **`fetchData().then((result) => console.log(result));`**:
        - **`fetchData`** 함수를 호출하고, 반환된 **`Promise`**가 해결되면 결과를 출력합니다.
    - 결과: 1초 후에 콘솔에 **`"Hello, TypeScript!"`**가 출력됩니다.

- **비동기 함수의 에러 처리**

```tsx
async function fetchDataWithErrorHandling(): Promise<string> {
  try {
    const data = await new Promise<string>((resolve, reject) =>
      setTimeout(() => reject(new Error("Error occurred!")), 1000)
    );
    return data;
  } catch (error) {
    console.error("Caught an error:", error);
    return "Default data";
  }
}

fetchDataWithErrorHandling().then((result) => console.log(result)); // 1초 후에 "Caught an error: Error occurred!" 출력 후 "Default data" 출력

```

1. **비동기 함수 정의 및 에러 처리**:
    - **`async function fetchDataWithErrorHandling()`**: **`async`** 키워드를 사용하여 비동기 함수를 정의합니다. 이 함수는 **`Promise<string>`**을 반환합니다.
    - **`try...catch`** 블록을 사용하여 에러를 처리합니다.
2. **비동기 작업 수행**:
    - **`await new Promise<string>((resolve, reject) => setTimeout(() => reject(new Error("Error occurred!")), 1000))`**:
        - 새로운 **`Promise`**를 생성합니다. 이 **`Promise`**는 1초 후에 **`"Error occurred!"`** 에러로 거부됩니다.
        - **`await`** 키워드를 사용하여 **`Promise`**가 해결되거나 거부될 때까지 기다립니다.
3. **에러 처리**:
    - **`catch (error)`**: **`Promise`**가 거부되면 **`catch`** 블록이 실행됩니다.
    - **`console.error("Caught an error:", error);`**: 에러 메시지를 출력합니다.
    - **`return "Default data";`**: 기본 데이터를 반환합니다.
4. **함수 호출**:
    - **`fetchDataWithErrorHandling().then((result) => console.log(result));`**:
        - **`fetchDataWithErrorHandling`** 함수를 호출하고, 반환된 **`Promise`**가 해결되면 결과를 출력합니다.
    - 결과: 1초 후에 콘솔에 **`"Caught an error: Error occurred!"`**가 출력되고, **`"Default data"`**가 출력됩니다.

- **비동기 함수의 반환 타입**

```tsx
async function getUserData(userId: number): Promise<{ id: number; name: string }> {
  // 비동기 작업을 통해 사용자 데이터를 가져옵니다.
  const user = await new Promise<{ id: number; name: string }>((resolve) =>
    setTimeout(() => resolve({ id: userId, name: "John Doe" }), 1000)
  );
  return user;
}

getUserData(1).then((user) => console.log(user)); // 1초 후에 { id: 1, name: "John Doe" } 출력

```

1. **비동기 함수 정의**:
    - **`async function getUserData(userId: number)`**: **`async`** 키워드를 사용하여 비동기 함수를 정의합니다. 이 함수는 **`Promise<{ id: number; name: string }>`**을 반환합니다.
    - **`Promise<{ id: number; name: string }>`**: 이 함수가 반환하는 **`Promise`**는 **`{ id: number; name: string }`** 타입의 객체를 결과로 가집니다.
2. **비동기 작업 수행**:
    - **`await new Promise<{ id: number; name: string }>((resolve) => setTimeout(() => resolve({ id: userId, name: "John Doe" }), 1000))`**:
        - 새로운 **`Promise`**를 생성합니다. 이 **`Promise`**는 1초 후에 **`{ id: userId, name: "John Doe" }`** 객체로 해결됩니다.
        - **`await`** 키워드를 사용하여 **`Promise`**가 해결될 때까지 기다립니다.
3. **값 반환**:
    - **`return user;`**: **`Promise`**가 해결된 후, 결과값인 **`{ id: userId, name: "John Doe" }`** 객체를 반환합니다.
4. **함수 호출**:
    - **`getUserData(1).then((user) => console.log(user));`**:
        - **`getUserData`** 함수를 호출하고, 반환된 **`Promise`**가 해결되면 결과를 출력합니다.
    - 결과: 1초 후에 콘솔에 **`{ id: 1, name: "John Doe" }`**가 출력됩니다.

## 실습
*/