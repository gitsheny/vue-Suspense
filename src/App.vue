<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <router-link to="/">routerA</router-link>;&nbsp;
    <router-link to="/pageB">routerB</router-link>
  </div>

  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </template>
  </RouterView>
</template>

<style scoped>
</style>
