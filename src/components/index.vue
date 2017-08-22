<template>
  <div class="main">
    <div id="banner">
    </div>
    <div class="title">WE-VUE</div>
    <div class="slogan">we-vue 一套简单易用的 vue 组件。</div>
    <router-link to="/doc" class="btn-quickstart">开始使用</router-link>
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
    width: 100vw;
    height: 100vh;
    background-color: rgba(47, 135, 137, 0.32);
    position: absolute;
  }

  .main {
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100vw;
    height: 100vh;

    .title {
      color: #000;
      font-size: 3em;
    }

    .slogan {
      color: #00f;
      font-size: 3em;
    }

    .btn-quickstart {
      display: block;
      padding: .5em 1em;
      background-color: purple;
      color: #fff;
      z-index: 100;
    }
  }
</style>
