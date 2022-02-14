<template>
  <div id="box">
    <h3>推荐歌单</h3>
    <div class="items">
      <div
        class="item"
        v-for="(item, index) in RecommendList"
        :key="index"
        @click="toPlayListDetail(item.id)"
      >
        <div class="img-wrap">
          <div class="item_titel">
            <p>{{ item.copywriter }}</p>
          </div>
          <img :src="item.picUrl" width="100%" height="100%" alt="" />
          <span class="iconfont icon-play"
            ><svg
              t="1623393917979"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3638"
              width="200"
              height="200"
            >
              <path
                d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667zM456.704 305.92C432.704 289.152 405.333333 303.082667 405.333333 331.797333v360.533334c0 28.586667 27.541333 42.538667 51.370667 25.856l252.352-176.768c21.76-15.253333 21.632-43.541333 0-58.709334l-252.373333-176.768z m-8.597333 366.72V351.466667l229.269333 160.597333-229.269333 160.597333z"
                fill="#d81e06"
                p-id="3639"
              ></path></svg
          ></span>
        </div>
        <p class="name">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    RecommendList: {
      type: Object,
      // default
    },
  },
  created() {},
  methods: {
    toPlayListDetail(id) {
      this.$router.push(`/playListDetail?q=${id}`);
    },
  },
  // 计算属性
  computed: {},
};
</script>

<style scoped>
#box .items {
  margin-top: 10px;
  display: flex;
  /* width: 1200px; */
  flex-wrap: wrap;
  height: 200px;
}
#box .items .item {
  position: relative;
  margin: 15px;
  height: 200px;
  width: 200px;
}
#box .items .item .img-wrap {
  overflow: hidden;
  position: relative;
}
#box .items .item:hover .img-wrap .item_titel {
  top: 0;
}
#box .items .item .img-wrap .item_titel p {
  color: #fff;
  line-height: 30px;
  font-size: 15px;
}
#box .items .item .img-wrap .item_titel {
  position: absolute;
  left: 0px;
  top: -100px;
  width: 100%;
  /* height: 30px; */
  background-color: rgba(0, 0, 0, 0.5);
}
#box .items .item .name {
  overflow: hidden; /*溢出隐藏*/
  white-space: nowrap; /*溢出不换行*/
  text-overflow: ellipsis; /*溢出的文字用省略号代替*/
  font-size: 17px;
}
#box .items .item .img-wrap .icon-play {
  position: absolute;
  right: 10px;
  bottom: 13px;
  width: 40px;
  height: 40px;
  color: #dd6d60;
  font-size: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.6);
  opacity: 0;
}

#box .items .item .img-wrap:hover .icon-play {
  opacity: 1;
}
</style>