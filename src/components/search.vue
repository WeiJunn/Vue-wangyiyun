<template>
  <div class="search-box">
    <div class="title-warp">
      <h2>{{ $route.query.name }}</h2>
      <p>找到{{ count }}个结果</p>
    </div>
    <div class="search-result">
      <el-tabs v-model="activeName">
        <el-tab-pane label="歌曲" name="first">
          <table class="el-table" CELLPADDING="0" CELLSPACING="0    ">
            <thead>
              <th></th>
              <th>音乐标题</th>
              <th>歌手</th>
              <th>专辑</th>
              <th>时长</th>
            </thead>
            <tbody style="background-color: #eee">
              <tr
                class="el-table__row"
                v-for="(item, index) in songs"
                :key="index"
                @dblclick="_getMusicUrl(item.id)"
              >
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.ar[0].name }}</td>
                <td>{{ item.al.name }}</td>
                <td>{{ item.dt }}</td>
              </tr>
            </tbody>
          </table>
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>
        </el-tab-pane>
        <el-tab-pane label="歌单" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="MV" name="third">角色管理</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { getSearch } from "network/search.js";
import { getMusicUrl } from "network/newmusic.js";
export default {
  data() {
    return {
      activeName: "first",
      config: {
        keywords: this.$route.query.name,
        limit: 10,
        type: 1,
        offset: 0,
      },
      //多少首歌
      count: 0,
      // 歌曲列表
      songs: [],
    };
  },
  created() {
    getSearch(this.config).then((res) => {
      // console.log(res);
      this.count = res.data.result.songCount;
      this.songs = res.data.result.songs;
    });
  },
  methods: {
    _getMusicUrl(id) {
      getMusicUrl(id).then((res) => {
        this.$store.commit("changeUrl", res.data.data[0].url);
      });
    },
  },
};
</script>

<style>
.search-box {
}
.search-box .title-warp {
  display: flex;
  align-items: flex-end;
  padding-bottom: 30px;
}
.search-result thead th {
  font-size: 18px;
  text-align: left;
}
.search-result table tbody {
  background-color: red;
}
.search-result table tbody tr {
  font-size: 15px;
  height: 50px;
}
.search-result table tbody tr:hover {
  background-color: #a9b9bd38;
}
.el-pagination {
  display: flex;
  justify-content: center;
}
</style>