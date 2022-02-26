<template>
  <div class="carousel">
    <el-carousel :interval="3000" type="card" height="218px" width="">
      <el-carousel-item v-for="(item, index) in banner" :key="index">
        <img :src="item.imageUrl" max-height="100%" max-width="100%" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    banner: {
      type: Array, //传入类型
      // default: "默认值",
    },
  },
};
</script>

<style scoped>
.el-carousel__item:nth-child(2n) {
  border-radius: 5px;
}

.el-carousel__item:nth-child(2n + 1) {
  border-radius: 5px;
}
.el-carousel__item img {
  width: 100%;
}
</style>