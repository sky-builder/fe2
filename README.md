# fe

## 项目介绍

部分页面，如首页，需要 SEO，

部分页面，如登录页、报名页，是类似后台管理系统的，不需要 SEO 的页面

综上考虑，项目架构为：CSR（客户端渲染） + Pre-Rrender（预渲染）

需要 SEO 的页面使用预渲染打包生成。不需要 SEO 的页面使用客户端渲染，得以有接近原生应用程序的速度。弥补了 CSR 对 SEO 不友好的缺陷，也不像 SSR 那样，会给服务器造成更多负担。

CSR 由 [vue-cli](https://cli.vuejs.org/) 4.3.1 创建

Pre-Render 使用 [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin)

[需求文档](http://wiki.iyunxiao.com/pages/viewpage.action?pageId=389061245)


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
