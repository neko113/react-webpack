시작

    yarn init -y

리액트 관련 설치

    yarn add react react-dom

타입스크립트 관련 설치

    yarn add -D @types/react @types/react-dom typescript

웹팩 관련 설치

    yarn add -D webpack webpack-cli webpack-dev-server webpack-merge
    yarn add -D @babel/cli @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader
    yarn add -D core-js css-loader css-minimizer-webpack-plugin html-webpack-plugin mini-css-extract-plugin style-loader sass sass-loader terser-webpack-plugin webpack-bundle-analyzer dotenv-webpack

주요 라이브러리 설치

    <페이지>
    yarn add react-router-dom

    <상태관리>
    yarn add zustand immer

    <비동기 처리, 캐싱>
    yarn add @tanstack/react-query axios @tanstack/react-query-devtools

    <CSS>
    yarn add @emotion/react @emotion/styled
    yarn add -D @emotion/babel-plugin

    <Storybook>
    npx sb init

    <Prettier>
    yarn add -D prettier

    <Husky>
    yarn add -D husky
    yarn husky install
