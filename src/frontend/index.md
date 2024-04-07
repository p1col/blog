# 指引

## VitePress

### 配置文件

VitePress 的配置文件默认放在项目根目录下：`.vitepress/config.[mts|mjs|js|ts]`

### 图片显示不出来

图片需要放在 `public` 目录下，`public` 目录应放在[配置文件](#配置文件)中的 `srcDir` 指定的目录下，如 `src`。

```ts
export default defineConfig({
  srcDir: 'src', // 此时 public 目录应放在 src 目录下
})
```

### 部署找不到静态资源

检查[配置文件](#配置文件)中的 `base` 字段是否正确。

```ts
export default defineConfig({
  base: '/',
})
```

如果需要部署在子路径下，如 `https://foo.github.io/bar/`，则应将 `base` 设为 `/bar/`。

```ts
export default defineConfig({
  base: '/bar/',
})
```
