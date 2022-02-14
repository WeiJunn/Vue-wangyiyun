<template>
  <div class="box">
    <div class="player">
      <div class="music">
        <audio
          :src="musicUrl"
          autoplay
          controls
          id="music"
          style="outline: none"
        ></audio>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  width: 100%;
  height: 60px;
  background-color: red;
  border-radius: 0 0 10px 10px;
}
</style>