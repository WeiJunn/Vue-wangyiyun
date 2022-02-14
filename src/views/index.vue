<template>
  <div class="box">
    <div class="content">
      <div class="left">
        <Nav></Nav>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "components/nav.vue";
export default {
  data() {
    return {};
  },
  // 组件注册
  components: { Nav },
  //钩子函数 组件被创建时候

  // 方法
  methods: {},
  // 计算属性
  computed: {},
};
</script>

<style  scoped>
.box {
  height: 700px;
}
.box .content {
  display: flex;
}
.box .content .left {
  border-right: 1px solid #e1e1e1;
  border-left: 1px solid #e1e1e1;
  width: 200px;
}
.box .content .right {
  height: 700px;
  padding: 20px;
  border-right: 1px solid #e1e1e1;
  flex: 1;
  overflow-x: auto;
  overflow-y: scroll;
}
.box .content .right::-webkit-scrollbar {
  width: 5px; /*竖向滚动条的宽度*/
  height: 10px; /*横向滚动条的高度*/
}
.box .content .right::-webkit-scrollbar-thumb {
  /*滚动条里面的小方块*/
  background: rgb(192, 170, 170);
  border-radius: 5px;
}
.box .content .right::-webkit-scrollbar-track {
  /*滚动条轨道的样式*/
  background: #fff;
}
</style>