<template>
  <div>
    <mu-circular-progress :size="40" v-if="loading"/>
    <div v-html="html"></div>
  </div>
</template>
<style>

</style>
<script>
export default{
  data () {
    return {
      loading: false,
      html: ''
    }
  },
    created(){
      this.html = this.$route.query.url
      // console.log(this.$route.query.url)

  },
  watch: {
    // html(newVal, oldVal){
    //     this.load(newVal)
    // }
  },
  mounted () {
    this.load(this.html)
  },
  methods: {
    load (url) {
      if (url && url.length > 0) {
        // 加载中
        this.loading = true
        // console.log(url)
        let param = {
          accept: 'text/html, text/plain'
        }
        this.$http.get(url, param).then((response) => {
          this.loading = false
          // 处理HTML显示
          this.html = response.data
        }).catch(() => {
          this.loading = false
          this.html = '加载失败'
        })
      }
    }
  }
}
</script>
