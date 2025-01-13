/*
# 번들러(bundle)

번들러는 여러 파일을 하나로 묶어주는 도구입니다. 웹 개발에서는 주로 프론트엔드 자바스크립트 파일과 관련 리소스들을 번들링하여 하나의 파일로 만들어 사용합니다. 이렇게 하면 네트워크에서 파일을 다운로드하는 횟수가 줄어들어 웹 페이지의 성능을 향상시킬 수 있습니다. 번들러는 모듈 시스템을 사용하는 언어에서 주로 사용되며 대표적인 예로는 웹팩(Webpack), Parcel, Rollup 등이 있습니다. 

## 번들러의 주요 작업

1. 모듈 관리: 번들러는 프로젝트의 여러 모듈을 관리합니다. 각 모듈은 파일 하나 혹은 여러 파일로 이루어질 수 있으며, 의존성 관계를 가질 수 있습니다.
2. 의존성 해결: 모듈 간의 의존성을 파악하여 필요한 모듈을 로드하고, 중복된 코드를 최소화합니다. 이를 통해 불필요한 파일을 제외하고 번들의 크기를 최적화합니다.
3. 자원 번들링: 번들러는 자바스크립트 파일뿐만 아니라 CSS, 이미지, 폰트 등의 리소스도 함께 번들링할 수 있습니다. 이를 통해 프로젝트의 모든 자원을 효율적으로 관리할 수 있습니다.
4. 최적화: 번들러는 번들링된 파일을 최적화하여 성능을 향상시킵니다. 코드의 압축, 파일 경로의 최적화, 불필요한 코드의 제거 등의 작업을 수행합니다.
5. 개발 환경 제공: 많은 번들러들은 개발 환경에서의 편의성을 제공합니다. 소스 코드 변경 감지, 개발 서버 제공, 빠른 재빌드 등의 기능을 제공하여 개발 과정을 보다 효율적으로 만듭니다.

# Webpack

웹팩은 모듈 번들러로서, 프론트엔드 개발에서 사용되는 여러 모듈을 하나의 파일로 번들링해주는 도구입니다. TypeScript와 함께 사용되면 웹팩은 TypeScript 코드를 번들링하여 웹 애플리케이션을 구축하는데 매우 유용합니다. 이를 통해 모듈 관리, 번들 최적화, 코드 스플리팅 등의 기능을 사용할 수 있습니다. 

## 사용 예시

```tsx
npm init -y // package.json 파일 설치
npm i --save-dev typescript // typescript 설치
```

- tsconfig.json

```tsx
{
  "compoilerOptions": {
    "outDir": "./dist",
    "module": "ES6",
    "target": "ES5"
  },
  "include": ["src"]
}
```

- src/index.html

```tsx
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>주사위 굴리기 게임</title>
  </head>
  <body></body>
</html>
```

- src/util/dice.ts

```tsx
export default class Dice {
  constructor(private sides: number) {}
  roll(): number {
    let number = Math.floor(Math.random() * this.sides) + 1;
    return number;
  }
}
```

- src/index.ts

```tsx
import Dice from "./util/dice";

const labels = {
  button: "주사위 굴리기",
  div: "결과",
};

function main() {
  const button = document.createElement("button");
  const resultDiv = document.createElement("div");

  button.innerText = labels.button;

  document.body.append(button, resultDiv);

  const dice = new Dice(6);

  button.addEventListener("click", () => {
    resultDiv.innerText = `${labels.div}${dice.roll()}`;
  });
}

main();
```

- Webpack 설치

```tsx
npm i --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin ts-loader
```

- webpack.config.js

웹팩이 프로젝트를 번들링할 때 어떻게 동작해야 하는지를 정의합니다. 

```tsx
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      tmeplate: "src/index.html",
    }),
  ],
};
```

- mode
    
    “development”, 개발 모드로 설정합니다. 개발 모드에서는 번들링된 파일에 대한 추가적인 최적화를 수행하지 않고, 디버깅을 위한 정보가 포함됩니다.
    
- entry
    
    웹팩이 번들링할 진입점(entry point)을 설정합니다. 여기서는 src/index.ts 파일을 진입점으로 설정했습니다.
    
- output
    
     번들링된 파일의 출력 설정을 정의합니다. 여기서는 bundle.js라는 파일을 dist 폴더에 생성하도록 설정했습니다.
    
- plugins
    
    웹팩이 실행될 때 추가적으로 수행할 작업을 설정합니다. 여기서는 HtmlWebpackPlugin 플러그인을 사용하여 src/index.html 파일을 기반으로 HTML 파일을 생성하도록 설정했습니다.
    

- package.json

package.json 에 아래 코드 추가

```tsx
"scripts": {
  "start": "webpack-dev-server --open --mode development",
  "build": "webpack --mode production"
},
```

터미널에 npm run start 를 입력해 결과를 확인합니다.
 */