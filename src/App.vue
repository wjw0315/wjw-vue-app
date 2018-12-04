
<template>
  <div id="app">
      <!-- 路由组件视图 -->
      <router-view></router-view>
      <!-- <router-view keep-alive transition-mode="out-in" transition="fade" ></router-view> -->
      <!-- 非路由组件视图 -->
      <tabbar  v-show="this.$route.meta.show"></tabbar>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'
export default {
  name: 'App',
  components: {
    Tabbar
  }

}

</script>

<style>

</style>
