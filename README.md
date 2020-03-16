# webapp

> A Vue + mintui project
#### mintui内部自己做了移动端适配，只需要转换本地项目内的px,忽略node_modules目录下的文件
### px转rem
> npm install postcss-px2rem --save
> npm install postcss-px2rem-exclude --save

  - 1.在项目的根目录下找到文件.postcssrc.js，在里面添加如下代码
``` json

module.exports = {
  "plugins": {
    "postcss-import": {},
    "autoprefixer": {},
    "postcss-px2rem-exclude": {  // 添加的代码
      remUnit: 75,
      exclude: /node_modules|folder_name/i // 忽略node_modules目录下的文件
    }
  }
```
- 然后重新npm run dev，打开控制台可以看到代码中的px已经被转成了rem

### px转vw

>npm install postcss-px-to-viewport --save-dev

``` json
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {}, 
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      viewportHeight: 1334,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: false,
      exclude: /(\/|\\)(node_modules)(\/|\\)/
    },
  }
} 
```
##### gao
