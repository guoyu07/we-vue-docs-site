<template>
  <div>
    <div id="banner">
      <div class="title">WE-VUE</div>
    </div>
  </div>
</template>

<script>
  import JParticles from 'jparticles'

  export default {
    data () {
      return {}
    },

    mounted () {
      /* eslint-disable no-new, new-cap */
      new JParticles.particle('#banner', {
        num: 0.2,
        maxR: 1.5,
        minR: 0.2,
        maxSpeed: 1,
        minSpeed: 0.2,
        // color: '#25bfff',
        lineWidth: 0.1,
        lineShape: 'spider',
        range: 1000,
        proximity: 100,
        // 开启视差效果
        parallax: true,
        parallaxStrength: 5
      })
    }
  }
</script>

<style scoped lang="scss">
  #banner {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    background-color: rgba(47, 135, 137, 0.32);
    justify-content: center;
    align-items: center;

    .title {
      color: #000;
      font-size: 3rem;
    }
  }
</style>
