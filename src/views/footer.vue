<template>
  <div class="box">
    <div class="player">
      <div class="music">
        <!-- 监听pause和play事件改变播放的布尔值 -->
        <audio
          @timeupdate="onTimeupdate"
          @loadedmetadata="onLoadedmetadata"
          ref="audio"
          @pause="onPause"
          @play="onPlay"
          :src="this.$store.state.musicUrl"
          autoplay
          controls
          id="music"
          style="outline: none"
        ></audio>
        <el-button @click="startPlayOrPause()">{{
          audio.playing | transPlayPause
        }}</el-button>
        <el-slider v-model="value3" :show-tooltip="false"></el-slider>
        <span>{{ audio.maxTime | realFormatSecond }}</span>
        <td></td>
        <span>{{ audio.currentTime | realFormatSecond }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      audio: {
        // 该字段是音频是否处于播放状态的属性
        playing: false,
        // 音频当前播放时长
        currentTime: 0,
        // 音频最大播放时长
        maxTime: 0,
      },
    };
  },
  methods: {
    startPlayOrPause() {
      return this.audio.playing ? this.pause() : this.play();
    },
    play() {
      this.$refs.audio.play();
    },
    pause() {
      this.$refs.audio.pause();
    },
    // 当音频播放
    onPlay() {
      this.audio.playing = true;
    },
    // 当音频暂停
    onPause() {
      this.audio.playing = false;
    },
    onLoadedmetadata(e) {
      console.log(e);
      this.audio.maxTime = parseInt(e.target.duration);
    },
    onTimeupdate(e) {
      this.audio.currentTime = e.target.currentTime;
    },
  },
  filters: {
    // 使用组件过滤器来动态改变按钮的显示
    transPlayPause(value) {
      return value ? "暂停" : "播放";
    },
    realFormatSecond(second) {
      let secondType = typeof second; //获取second的类型
      if (secondType === "number" || secondType === "string") {
        second = Math.floor(second); // 取整second 向0取整
        let hours = Math.floor(second / 3600);
        second = second - hours * 3600;
        let mimute = Math.floor(second / 60);
        second = second - mimute * 60;
        return (
          hours +
          ":" +
          ("0" + mimute).slice(-2) +
          ":" +
          ("0" + second).slice(-2)
        );
      } else {
        return "0:00:00";
      }
    },
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 60px;
  border-radius: 0 0 10px 10px;
  background-color: red;
}
.box .player .music audio {
  display: none;
}
.box .player .music {
  margin: 0 auto;
  width: 300px;
}
</style>