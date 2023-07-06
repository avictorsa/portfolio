<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/header/Header.vue'
</script>

<template>
  <Header />

  <RouterView />
</template>

<style  lang="scss">
  @import './assets/scss/app.scss';
</style>
