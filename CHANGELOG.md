# 0.2.2
`2016-03-16`

- 添加 api 访问
  - redux-api-middleware 中间件
  - 查询
- 其他
  - 使用 [mocky][f12fc17e] 作为 mock api

  [f12fc17e]: http://www.mocky.io/ "mocky"

# 0.2.1
`2016-03-16`

- 添加数据层
  - Redux
    - actions
    - reducers
    - store
  - react-redux
  - immutable
- Demo页面
  - Counter (数据由 state -> store)
- 其他
  - 启用 Chrome 的 redux-devtools-extension 插件
  - webpack.config.js 新增标识环境的 \__PRODUCTION__

# 0.2.0
`2016-03-12`

- Demo页面
  - Counter
- 项目结构重构
  - 将页面代码移入 client 文件夹

# 0.1.0
`2016-03-09`

- 初始化项目
  - package.json
  - README.md
  - LICENSE
  - git + .gitignore
  - .editorconfig
  - eslint + .eslintrc
- 核心技术方案
  - es2015 + babel
  - webpack-dev-server/webpack + koa
  - React
  - ant-design
- Demo页面
  - FormDemo
