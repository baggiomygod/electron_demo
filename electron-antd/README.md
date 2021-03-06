[中文说明](./README.zh-cn.md)

> node >= 11.15.0 

## Quick start
install
```bash
yarn
# or
npm install
```

start dev
```bash
npm run dev
```

## Overview
- webpack
- electron
- electron-builder
- electron-log
- react
- react-router
- redux
- ant-design
- remixicon // https://remixicon.com/
- less
- typescript
- eslint
- prettier

## DevTools

Toggle DevTools:

* OSX: <kbd>Cmd</kbd> <kbd>Alt</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
* Linux: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
* Windows: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>

## Build package

Modify [builder.config.ts](./build/builder.config.ts) to edit package info.

For a full list of options see: https://www.electron.build/configuration/configuration

Create a package for OSX, Windows and Linux
```
npm run build
```

Please check the `release` folder after the build is complete.

## 本地数据存储 

- lowdb
https://blog.csdn.net/jbguo/article/details/90409198
- electron-store
https://github.com/sindresorhus/electron-store

## License
[MIT](./LICENSE)