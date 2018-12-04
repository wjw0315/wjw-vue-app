<template>
    <div class="container">
        <!--<mt-header fixed  title="博文列表">-->
          <!--&lt;!&ndash; <router-link to="/" slot="left">-->
              <!--<mt-button icon="back">返回</mt-button>-->
          <!--</router-link> &ndash;&gt;-->
          <!--&lt;!&ndash; <mt-button icon="more" slot="right"></mt-button> &ndash;&gt;-->
        <!--</mt-header>-->
      <div class="row">
        <router-link tag="a" :to="{path:'/htmlpage',query:{url: 'http://wjwcloud.com/2016/06/06/menu/'}}">某某文章</router-link>
      </div>
    </div>

</template>

<script>
export default {
  components: {
    // Tabbar
  },
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {
  }
}
</script>
