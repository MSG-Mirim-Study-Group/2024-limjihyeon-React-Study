# React 시작하기

> [스터디 링크](https://developer.mozilla.org/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
> 

# 1. Hello React

> React는 사용자 인터페이스를 만들기 위한 라이브러리
> 

React는 프레임워크가 아니고, 웹에서만 사용할 수 있는것도 아님.

- [React](https://reactjs.org/) :  다른 라이브러리들과 함께 특정한 환경을 렌더링 하는데 사용.
- [React Native](https://reactnative.dev/) : 모바일 애플리케이션을 만드는데 사용.
- [React 360](https://opensource.fb.com/) : 가상 현실 애플리케이션을 만드는데 사용.

# 2. React 앱 준비하기

요구되는 것 : Node.js 설치(npm 사용 권고)

> npm과 yarn에 대해 더 자세한 정보는 [Package management basics (en-US)](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)를 참고
> 

## 2-1. 앱 초기화

```bash
npx create-react-app moz-todo-react
```

명령어는 `moz-todo-react` 디렉토리를 만들고 다음과 같은 일들을 한다.

- 앱의 기능에 필수적인 npm 패키지들을 설치.
- 애플리케이션을 시작하고 서비스하기 위한 스크립트를 작성.
- 기본적인 앱 아키텍처를 정의하는 파일과 디렉토리의 구조를 만듦.
- 컴퓨터에 깃이 설치되어있다면, 디렉토리를 깃 레포지토리로 초기화.

localhost:3000에서 실행 시작. 

## 2-2. 애플리케이션 구조

create-react-app은 React 애플리케이션을 개발하기 위해 필요한 모든 것을 제공한다. 초기 파일 구조는 다음과 같다.

```
moz-todo-react
├── README.md
├── node_modules
├── package.json
├── package-lock.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js

```

- **`src`** : 디렉토리는 애플리케이션의 소스 코드가 있는 곳
- **`public`** 디렉토리는 앱을 개발하는 동안 브라우저가 읽을 파일들을 가지고 있는 곳

# 3. React 컴포넌트 </App> 탐색하기

> 컴포넌트(component)는 앱의 일부를 렌더링하는 재사용가능한 모듈.
> 

App.js파일을 열면

- 상단의 import문
- 중앙의 App 컴포넌트
- 하단의 export문

## 3-1) import문

> 상단의 `import` 문은 `App.js`가 다른 곳에 정의된 코드들을 사용할 수 있게 해준다.
> 
- `import React from "react";` : React 라이브러리 불러오기(필수)
- `import logo from "./logo.svg";` : 로고 불러오기
- `import "./App.css";` : css 불러오기

## 3-2) App 컴포넌트

> React 컴포넌트는 **파스칼-케이스(pascal-case) 변수 이름**을 사용
> 

to JSX 요소가 React 컴포넌트이지, 정규 HTML 태그가 아니라는 것을 분명히 하기 위해서

ex) `App` 함수를 `app`으로 이름 짓는다면 브라우저는 오류 발생

```jsx
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, World!</p>
      </header>
    </div>
  );
}
```

## 3-3) Export문

`App.js` 파일의 최하단에 있는 `export default App`라는 명령문은 `App` 컴포넌트들을 다른 모듈에서 사용할 수 있게 해준다.

# 4. Interrogating the index

`index.js`

```jsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

- 렌더링하기 원하는 컴포넌트. 여기서는 `<App />`
- 렌더링 되길 원하는 컴포넌트들이 포함된 DOM 요소. 여기서는 `root`라는 ID를 가진 요소. `public/index.html`을 본다면, 이것이 `<body>` 내부에 있는 `<div>` 요소라는 것을 알 수 있다.

→ 이 모든 것이 React에게 우리가 루트로서, 혹은 첫 번째 컴포넌트로서 `App` 컴포넌트를 렌더링하길 원한다고 알려준.

# 5. 변수와 prpos

> props는 컴포넌트에 데이터를 전달하는 방법이며, 전달된 후에는 변수를 통하여 접근할 수 있다.
> 

+props는 오직 부모 컴포넌트에서 자식 컴포넌트로 내려간다. 그리고 props는 오로지 읽기 전용.

## 5-1) JSX안의 변수들

변수명 : {} 사용

```jsx
function App() {
  const subject = "React";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, {subject}!</p>
      </header>
    </div>
  );
}
```

## 5-2) 컴포넌트 props

> **prop**는 React 컴포넌트에 전달되는 모든 데이터를 뜻
> 

HTML 요소는 속성을 가지고 있고 React 컴포넌트는 props를 가지고 있다.

React에서, 데이터의 흐름은 단방향(unidirectional)

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App name="임지현" />
  </React.StrictMode>
);
```

`index.js`를 열고 `<App />` 호출에 첫 번째 prop를 전달 후

```jsx
function App(props) {
  const name = props.name; // 임지현
	return(
		// return statement
	);
}
```

`App` 함수의 시그네처(signature)를 바꾸어, `props`를 파라미터로 써보기

# 요약

- 컴포넌트는 필요한 모듈을 불러오고 그들 자신을 파일의 하단에서 내보낼 수 있다.
- 컴포넌트 함수는 `PascalCase`로 설정하기
- JSX 변수는 `{so}`와 같이 중괄호 사이에 넣어 읽을 수 있다.
- JSX 속성은 HTML 속성과 다르기 때문에 JavaScript의 예약어와 충돌하지 않는다. ex) HTML의 `class`는 JSX에서는 `className`. 여러 개의 단어로 된 속성을 `camelCase`로 작성하기
- props는 컴포넌트 호출에 속성처럼 쓰이고, 컴포넌트로 전달.
