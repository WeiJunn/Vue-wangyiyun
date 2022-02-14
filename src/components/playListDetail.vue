<template>
  <div class="playList-box">
    <div class="top-warp">
      <div class="img-warp">
        <img :src="PlayDetail.coverImgUrl" width="100%" alt="" />
      </div>
      <div class="in-warp">
        <p>{{ PlayDetail.name }}</p>
        <div class="author-wrap">
          <!-- 头像 -->
          <img :src="PlayDetail.creator.avatarUrl" width="5%" alt="" />
          <!-- 名字 -->
          <p>{{ PlayDetail.creator.nickname }}</p>
          <!-- 日期 -->
          <p>{{ PlayDetail.createTime }}</p>
        </div>
        <!-- 播放按钮 -->
        <el-button type="danger">播放全部</el-button>
        <!-- 标签组 -->
        <div class="tag-warp">
          <spam>标签：</spam>
          <p v-for="(itme, index) in PlayDetail.tags" :key="index">
            {{ itme }}
          </p>
        </div>
        <!-- 简介 -->
        <p>简介：{{ PlayDetail.description }}</p>
      </div>
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="歌曲列表" name="1">
        <table class="el-table playlit-table">
          <thead>
            <th></th>
            <th></th>
            <th>音乐标题</th>
            <th>歌手</th>
            <th>专辑</th>
            <th>时长</th>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in PlayDetail.tracks"
              :key="index"
              class="el-table__row"
            >
              <td>{{ index + 1 }}</td>
              <td>
                <div class="img-wrap">
                  <img :src="item.al.picUrl" alt="" />
                </div>
              </td>
              <td>{{ item.name }}</td>
              <td>{{ item.ar[0].name }}</td>
              <td>{{ item.al.name }}</td>
              <td>{{ item.dt }}</td>
            </tr>
          </tbody>
        </table>
      </el-tab-pane>
      <el-tab-pane label="评论" name="2"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getPlayDetail } from "network/playlists.js";
export default {
  data() {
    return {
      activeName: "1",
      PlayDetail: {},
      id: "",
    };
  },
  created() {
    this.getPlayDetail();
  },
  methods: {
    getPlayDetail() {
      this.id = this.$route.query.q;
      getPlayDetail(this.id).then((res) => {
        console.log(res);
        this.PlayDetail = res.data.playlist;
      });
    },
  },
};
</script>

<style>
.playList-box {
  width: 100%;
  height: 100%;
}
.playList-box .top-warp {
  display: flex;
  width: 100%;
}
.playList-box .top-warp .img-warp {
  padding: 10px;
  width: 250px;
  height: 250px;
}

.playList-box .top-warp .img-warp img {
  border-radius: 10px;
}

.playList-box .top-warp .in-warp .tag-warp {
  display: flex;
}
.playList-box .top-warp .in-warp .tag-warp p:not(:last-child)::after {
  content: "/";
  margin: 0 4px;
}
.playList-box .top-warp .in-warp {
  flex: 1;
}
.playList-box .top-warp .in-warp > * {
  margin: 10px;
}
.playList-box .top-warp .in-warp .author-wrap {
  align-items: center;
  display: flex;
}
.playList-box .top-warp .in-warp .author-wrap > * {
  padding-right: 4px;
}
.playList-box .top-warp .in-warp .author-wrap img {
  border-radius: 50%;
}
.el-tabs .img-wrap img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.el-table thead th {
  text-align: left;
}
</style>