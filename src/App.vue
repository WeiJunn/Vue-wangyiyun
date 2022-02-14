<template>
  <div id="app">
    <Header />
    <index />
    <Footer />
  </div>
</template>
<script>
import index from "views/index.vue";
import Header from "views/header.vue";
import Footer from "views/footer.vue";
export default {
  // 数据
  data() {
    return {};
  },
  // 组件注册
  components: { index, Header, Footer },
  //钩子函数 组件被创建时候
  created() {},
  // 方法
  methods: {},
  // 计算属性
  computed: {},
};
</script>
<style scoped>
@import "assets/css/base.css";
#app,
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
#app {
  border-radius: 20px;
  width: 1400px;
  height: 800px;
  margin: 0 auto;
  box-shadow: 11px 10px 34px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 11px 10px 34px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 11px 10px 34px 0px rgba(0, 0, 0, 0.75);
}
</style>
