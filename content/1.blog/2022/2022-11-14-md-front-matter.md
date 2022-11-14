---
date: 2022-11-14T17:45:53.661Z
author: CondorHero
tags:
  - 写个插件
categories: blog
duration: 1 min
---

# 给网站增加最后更新时间和预计阅读时间

新的 [Blog](https://condorheroblog.github.io/condorhero.me/blog) 展示需要两个实用的功能：

1. 添加用户预计阅读时间（duration）。
2. 文章如果被修改，文章末尾添加最后修改时间（lastmod）。

这些信息比较号获取，难就难**如何实时保存动态更新**，因为网站的文章是用 Markdown 写的，我就直接用 VS Code 写了，为了满足这两个小小的要求，就去看看插件市场，还真找到一个 [vscode-front-matter](https://github.com/estruyf/vscode-front-matter) 这是个功能强大的插件，能够自动更新 lastmod，喜出望外之际发现没有提供一个类似 lastmod 的 API，让我动态计算插入 duration。[vscode-front-matter](https://github.com/estruyf/vscode-front-matter) 只能动态更新 lastmod，对 duration 无能为力。

无奈之下，自己上手开干，鏖战 31 小时![auto-front-matter](https://user-images.githubusercontent.com/47056890/201630482-eef1d445-9cc1-492d-aee7-cc1608ada9b1.png) [auto-front-matter](https://github.com/condorheroblog/auto-front-matter) 就诞生了。

## 哎呦，忘了一个功能

如果 front-matter 里面没有 Date，可以支持保存自动插入 date，不过有创建模板了，这个需求不着急。
