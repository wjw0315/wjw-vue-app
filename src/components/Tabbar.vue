<template>
    <mt-tabbar v-model="selected" fixed>
  <mt-tab-item id="1">
    <img slot="icon" src="../assets/image/ic_nav_news_actived.png" v-if="this.selected == '1'">
    <img slot="icon" src="../assets/image/ic_nav_news_normal.png" v-else>
    综合
  </mt-tab-item>
  <mt-tab-item id="2">
    <img slot="icon" src="../assets/image/ic_nav_tweet_actived.png" v-if="this.selected == '2'">
    <img slot="icon" src="../assets/image/ic_nav_tweet_normal.png" v-else>
    归档
  </mt-tab-item>
  <mt-tab-item id="3">
     <img slot="icon" src="../assets/image/ic_nav_discover_actived.png" v-if="this.selected == '3'">
    <img slot="icon" src="../assets/image/ic_nav_discover_normal.png" v-else>
    发现
  </mt-tab-item>
  <mt-tab-item id="4">
    <img slot="icon" src="../assets/image/ic_nav_my_pressed.png" v-if="this.selected == '4'">
    <img slot="icon" src="../assets/image/ic_nav_my_normal.png" v-else>
    我的
  </mt-tab-item>
</mt-tabbar>
</template>

<script>
export default {
  data () {
    return {
    // 选中的tabbar值selected为外面页面传入的值selected
      selected: '1'
    // 这里使用的icon图标为图片，所以需要加图片改变的传入，阿若使用里图标，则不用加
      // atabs:this.tabs,
    }
  },
  props: {
    // selected: String,
    // tabs:Array,
  },
  watch: {
    selected: function (val, oldVal) {
      // 这里就可以通过 val 的值变更来确定去向
      switch (val) {
        case '1':
          this.$router.push('/bloglist')
          break
        case '2':
          this.$router.push('/file')
          break
        case '3':
          this.$router.push('/search')
          break
        case '4':
          this.$router.push('/usercenter')
          break
      }
    }
  }
}
</script>
