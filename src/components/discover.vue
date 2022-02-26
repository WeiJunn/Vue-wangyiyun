<template>
  <div>
    <Carousel :banner="banner"></Carousel>
    <recommendPlaylist :RecommendList="RecommendList"></recommendPlaylist>
  </div>
</template>

<script>
import Carousel from "components/Carousel.vue";
import recommendPlaylist from "components/recommendPlaylist.vue";
import { getBanner } from "network/banner.js";
import { getRecommendList } from "network/getRecommendList.js";
export default {
  data() {
    return { banner: [], RecommendList: [] };
  },

  components: { Carousel, recommendPlaylist },
  created() {
    this.getBanner();
    this.getRecommendList();
  },
  methods: {
    //轮播图数据
    getBanner() {
      getBanner().then((res) => {
        this.banner = res.data.banners;
      });
    },
    // 推荐歌单数据
    getRecommendList() {
      getRecommendList().then((res) => {
        console.log(res);
        this.RecommendList = res.data.result;
      });
    },
  },
};
</script>

<style>
</style>