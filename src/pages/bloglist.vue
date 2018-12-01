<template>
    <div class="container">
        <div class="row">
            <mt-header fixed  title="博文列表">
            <!-- <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link> -->
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
            </mt-header>
        </div>
        <div class="row">
            <!-- <mt-tab-container v-model="active">
            <mt-tab-container-item id="tab-container1">
                <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
            </mt-tab-container-item>
            </mt-tab-container> -->
            <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
        </div>
    </div>

</template>

<script>
// import Tabbar from '../components/Tabbar'

export default {
  components: {
    // Tabbar
  },
  data () {
    return {
      //       selected:"综合",
      //       tabs:[require("../assets/image/ic_nav_news_actived.png"),require("../assets/image/ic_nav_tweet_normal.png"),
      //          require("../assets/image/ic_nav_discover_normal.png"),require("../assets/image/ic_nav_my_normal.png")],
    }
  }
}
</script>
