# vue

`<Suspense>`内含有嵌套路由，且使用了异步组件时。
当页面内的异步未执行结束时跳转路由，会发生错误。
```vue
// App.vue
<RouterView v-slot="{ Component }">
  <template v-if="Component">
    <Suspense>
      <component :is="Component" />
    </Suspense>
  </template>
</RouterView>
```

```vue
// router/index.js
routes: [{
  path: '/',
  component: Layout,
  children: [...]
}]

// Layout.vue
<template>
  <router-view />
</template>
```

```vue
// page.vue
<script setup>
await new Promise((resolve) => {
  setTimeout(() => resolve(), 5000)
})
</script>
```
