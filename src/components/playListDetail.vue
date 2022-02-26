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
          <p>{{ PlayDetail.createTime | YearForamt }}</p>
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
              <!-- 序号 -->
              <td>{{ index + 1 }}</td>
              <!-- 图片div -->
              <td>
                <div class="img-wrap">
                  <img
                    :src="item.al.picUrl"
                    @click="changeUrl(item.id)"
                    alt=""
                  />
                </div>
              </td>
              <td>{{ item.name }}</td>
              <td>{{ item.ar[0].name }}</td>
              <td>{{ item.al.name }}</td>
              <td>{{ item.dt | TimeFormat }}</td>
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
import { getMusicUrl } from "network/newmusic.js";
export default {
  data() {
    return {
      activeName: "1",
      PlayDetail: {},
      id: "",
    };
  },
  created() {
    this._getPlayDetail();
  },
  methods: {
    _getPlayDetail() {
      this.id = this.$route.query.q;
      getPlayDetail(this.id).then((res) => {
        this.PlayDetail = res.data.playlist;
      });
    },
    _getMusicUrl(id) {
      getMusicUrl(id).then((res) => {
        this.$store.commit("changeUrl", res.data.data[0].url);
      });
    },
    changeUrl(id) {
      this._getMusicUrl(id);
    },
  },
  filters: {
    TimeFormat(value) {
      if (!value) return "";
      let mins = parseInt(value / 1000 / 60);
      let seconds = parseInt((value / 1000) % 60);
      seconds = seconds > 10 ? seconds : "0" + seconds;
      mins = mins > 10 ? mins : "0" + mins;
      return `${mins}:${seconds}`;
    },
    YearForamt(value) {
      if (!value) return "";
      const dt = new Date(value);

      const y = dt.getFullYear();
      const m = (dt.getMonth() + 1 + "").padStart(2, "0");
      const d = (dt.getDate() + "").padStart(2, "0");

      // yyyy-mm-dd hh:mm:ss
      return `${y}-${m}-${d} `;
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
  cursor: pointer;
}
.el-table thead th {
  text-align: left;
}
</style>