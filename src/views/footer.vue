<template>
  <div class="box">
    <div class="player">
      <!-- 监听pause和play事件改变播放的布尔值 -->
      <el-button
        @click="startPlayOrPause()"
        type="danger"
        :icon="audio.playing ? 'el-icon-video-pause' : 'el-icon-video-play'"
        circle
      ></el-button>
    </div>
    <div class="music">
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
      <span style="margin-right: 20px">{{
        audio.currentTime | realFormatSecond
      }}</span>
      <div class="slider">
        <el-slider
          v-model="audio.currentTime"
          :max="audio.maxTime"
          :show-tooltip="false"
          color="#f56c6c"
          @change="changeCurrentTime"
          @mousedown.native="isChange = true"
          @mouseup.native="isChange = false"
        ></el-slider>
      </div>
      <span style="margin-left: 20px">{{
        audio.maxTime | realFormatSecond
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 进度条初始进度
      audio: {
        // 该字段是音频是否处于播放状态的属性
        playing: false,
        // 音频当前播放时长
        currentTime: 0,
        // 音频最大播放时长
        maxTime: 0,
      },
      isChange: false, //进度条是否被拖动
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
      this.audio.maxTime = parseInt(e.target.duration);
    },
    onTimeupdate(e) {
      if (this.isChange === true) return;
      this.audio.currentTime = e.target.currentTime;
    },
    changeCurrentTime() {
      if (this.maxTime === 0) return;
      this.$refs.audio.currentTime = this.audio.currentTime;
      this.isChange = false;
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
  height: 65px;
  border-radius: 0 0 10px 10px;
  background-color: #ec4141;
}
.box .player {
  display: flex;
  justify-content: center;
}
.box .music audio {
  display: none;
}
.box .music {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 400px;
  transform: translate(0, -10px);
}
.box .music .slider {
  width: 80%;
}
</style>