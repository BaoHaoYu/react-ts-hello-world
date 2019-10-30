# typescript + react + webpack Hello world

webpack 也是使用 typescript 写的

## 运行项目

安装

```bash
yarn
```

启动

```bash
yarn run dev-server
```

打开页面： `http://localhost:9000/`

## 规范

- 组件文件名大写卡头
- 组件 CSS 开头大写
- 静态引用发到 public 目录
- BEM 格式为 B\_\_E_M
- 如果组件放到一个独立文件夹，组件名称和文件夹名称保持一致

## 让 chrome 支持在线修改 css

### css-loaderV3.2.0

`node_modules\css-loader\dist\index.js`

![](http://bhyblog.oss-cn-shenzhen.aliyuncs.com/hexo/vYJHBWbsvS.png)

```js
if (result.map) {
  const map = JSON.parse(result.map)
  map.sources = map.sources.map((src) => 'file:///' + src.replace(/\\/g, '/'))
  result.map = JSON.stringify(map)
}
```

### css-loaderV2.1.1

`node_modules\css-loader\dist\index.js`

修改这段代码

```js
const moduleCode = `// Module\nexports.push([module.id, ${cssAsString}, ""${result.map ? `,${result.map}`
```

改成

```js
let map = null
if (result.map) {
  map = JSON.parse(result.map)
  map.sources = map.sources.map((src) => 'file:///' + src.replace(/\\/g, '/'))
}
const moduleCode = `// Module\nexports.push([module.id, ${cssAsString}, ""${
  result.map ? `,${JSON.stringify(map)}` : ''
}]);\n\n`
```

### 效果

成功后有绿点，`ctrl + 鼠标左键`可以直接定位到文件
![](http://bhyblog.oss-cn-shenzhen.aliyuncs.com/hexo/chrome_MUotBYxKTD.png)

在线修改
![](http://bhyblog.oss-cn-shenzhen.aliyuncs.com/hexo/PTca7bJX4a.gif)
