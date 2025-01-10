/*
# TypeScript**와 DOM**

DOM (Document Object Model)은 웹 페이지의 구조화된 표현을 제공하며, 스크립트나 프로그래밍 언어를 통해 문서의 내용을 접근하고 수정할 수 있게 합니다. TypeScript는 DOM API와 잘 통합되어 있어, 코드의 안정성과 생산성을 높일 수 있습니다.

## TypeScript**와 DOM의 통합**

TypeScript는 DOM API를 위한 타입 정의를 제공하여, DOM 요소에 접근할 때 타입 안전성을 보장합니다. 이를 통해 컴파일 타임에 잠재적인 오류를 발견할 수 있습니다.

### **1. DOM 요소 선택**

TypeScript에서 DOM 요소를 선택하고 조작하는 방법을 살펴보겠습니다.

```tsx
// HTML
// <div id="app">Hello World</div>

// TypeScript
const appElement = document.getElementById('app');

if (appElement) {
  appElement.textContent = 'Hello TypeScript!';
}
```

- **`document.getElementById`**는 **`HTMLElement | null`** 타입을 반환합니다. TypeScript는 요소가 존재하지 않을 가능성을 고려하므로, null 체크가 필요합니다.

### **2. DOM 요소 타입 캐스팅**

TypeScript는 특정 타입의 요소에 대한 타입 캐스팅을 허용합니다. 예를 들어, **`<input>`** 요소를 선택하고 조작하려면 다음과 같이 할 수 있습니다.

```tsx
// HTML
// <input type="text" id="username" />

// TypeScript
const usernameInput = document.getElementById('username') as HTMLInputElement;

if (usernameInput) {
  usernameInput.value = 'John Doe';
}
```

- **`as HTMLInputElement`**를 사용하여 **`usernameInput`**을 **`HTMLInputElement`** 타입으로 캐스팅합니다. 이를 통해 해당 요소의 **`value`** 속성에 접근할 수 있습니다.

### **3. 이벤트 핸들링**

TypeScript는 이벤트 핸들러에도 타입을 적용할 수 있습니다. 이를 통해 이벤트 객체의 속성에 안전하게 접근할 수 있습니다.

```tsx
// HTML
// <button id="myButton">Click me</button>

// TypeScript
const button = document.getElementById('myButton');

if (button) {
  button.addEventListener('click', (event: MouseEvent) => {
    console.log('Button clicked!', event);
  });
}
```

- **`MouseEvent`** 타입을 명시하여 이벤트 객체의 타입을 지정할 수 있습니다. 이를 통해 이벤트 객체의 속성에 안전하게 접근할 수 있습니다.

### **4. DOM 생성 및 추가**

다음은 TypeScript를 사용하여 DOM 요소를 동적으로 생성하고 추가하는 예제입니다.

```tsx
// HTML
// <div id="container"></div>

// TypeScript
const container = document.getElementById('container');

if (container) {
  const newElement = document.createElement('p');
  newElement.textContent = 'This is a new paragraph.';
  container.appendChild(newElement);
}
```

- **`document.createElement`**를 사용하여 새로운 요소를 생성하고, **`appendChild`**를 사용하여 DOM에 추가합니다.

## 실습

- RUN PROJECT를 클릭하세요.
- 오른쪽 브라우저에서 결과를 확인해 보세요.
- 화면 왼쪽 파일 목록 중 `index.html` 파일과 `main.ts` 파일을 확인해주세요.

https://stackblitz.com/edit/vitejs-vite-2hskpl?ctl=1&embed=1&file=main.ts

- 실습 해설
    
    이 실습 코드는 TypeScript를 사용하여 간단한 ToDo 리스트 애플리케이션을 만드는 예제입니다. HTML과 TypeScript 코드로 구성되어 있습니다. 
    
    - **HTML 코드 설명**
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>TypeScript ToDo List</title>
    </head>
    <body>
      <div id="app">
        <input type="text" id="new-task" placeholder="New task" />
        <button id="add-task">Add Task</button>
        <ul id="task-list"></ul>
      </div>
      <script src="app.js"></script>
    </body>
    </html>
    ```
    
    1. **DOCTYPE 선언**: HTML5 문서임을 선언합니다.
    2. **HTML 요소들**:
        - **`<input>`**: 사용자가 새로운 작업을 입력할 수 있는 텍스트 입력 필드입니다.
        - **`<button>`**: 작업을 추가하는 버튼입니다.
        - **`<ul>`**: 추가된 작업 항목을 표시할 리스트입니다.
    3. **스크립트 포함**: **`app.js`** 파일을 포함하여 TypeScript로 작성된 코드를 실행할 수 있도록 합니다. TypeScript 코드는 컴파일된 JavaScript로 변환되어야 하며, 이 예제에서는 **`app.js`**로 컴파일되었다고 가정합니다.
    
    - **TypeScript 코드 설명**
    
    ```tsx
    const newTaskInput = document.getElementById('new-task') as HTMLInputElement;
    const addTaskButton = document.getElementById('add-task') as HTMLButtonElement;
    const taskList = document.getElementById('task-list') as HTMLUListElement;
    
    if (newTaskInput && addTaskButton && taskList) {
      addTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') return;
    
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
    
        taskList.appendChild(listItem);
        newTaskInput.value = '';
      });
    }
    ```
    
    1. **DOM 요소 선택 및 타입 단언**:
        - **`newTaskInput`**: 새로운 작업을 입력할 텍스트 입력 필드를 선택합니다.
        - **`addTaskButton`**: 작업을 추가할 버튼을 선택합니다.
        - **`taskList`**: 작업 목록을 표시할 리스트를 선택합니다.
        - 각 요소는 **`as`** 키워드를 사용하여 해당 타입(**`HTMLInputElement`**, **`HTMLButtonElement`**, **`HTMLUListElement`**)으로 단언합니다.
    2. **이벤트 리스너 추가**:
        - **`if`** 조건문을 사용하여 모든 요소를 제대로 선택했는지 확인합니다.
        - **`addEventListener`**를 사용하여 **`addTaskButton`**에 클릭 이벤트 핸들러를 추가합니다.
    3. **이벤트 핸들러**:
        - **`newTaskInput.value.trim()`**을 사용하여 입력 필드의 값을 가져오고 양 끝의 공백을 제거합니다.
        - 입력 필드가 비어있으면 함수를 종료합니다(**`return`**).
        - 새로운 **`<li>`** 요소를 생성하고, **`textContent`**를 입력 필드의 값으로 설정합니다.
        - **`taskList.appendChild(listItem)`**를 사용하여 새 항목을 작업 목록에 추가합니다.
        - 입력 필드를 빈 문자열로 설정하여 입력 필드를 초기화합니다.
        */