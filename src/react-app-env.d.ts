/// <reference types="react-scripts" />
/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="material-ui" />
/// <reference types="@emotion/react/types/css-prop" />

declare global {
  namespace NodeJS {
    interface Global {
      __test__: {};
    }
  }
}

//some useful sites

// https://github.com/typescript-cheatsheets/react-typescript-cheatsheet
// https://github.com/piotrwitek/react-redux-typescript-guide
// https://medium.com/@martin_hotell/10-typescript-pro-tips-patterns-with-or-without-react-5799488d6680