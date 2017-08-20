<template>
  <div>
    <doc-header></doc-header>
    <div id="banner">
      <div class="welcome">welcome</div>
    </div>
    <div id="footer">

    </div>
  </div>
</template>

<script>
  import JParticles from 'jparticles'

  export default {
    data () {
      return {}
    }
  }


  // new JParticles.particle('#banner', {
  //   num: 0.2,
  //   maxR: 1.5,
  //   minR: 0.2,
  //   maxSpeed: 1,
  //   minSpeed: 0.2,
  //   // color: '#25bfff',
  //   lineWidth: 0.1,
  //   lineShape: 'spider',
  //   range: 1000,
  //   proximity: 100,
  //   // 开启视差效果
  //   parallax: true,
  //   parallaxStrength: 5
  // })
</script>

<style scoped lang="scss">
$header-height: 70px;

body {
  position: relative;
}

#header {
  display: block;
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: $header-height;
  overflow: hidden;
  background-color: rgba(27, 36, 61, 0.58);

  .logo {
    display: block;
    float: left;
    width: 60px;
    height: 60px;
    background-color: #0f0;
    margin: 5px 20px;
  }

  .nav {
    display: block;
    margin: 0;
    padding: 0;
    float: right;
    margin-right: 20px;

    li {
      display: inline-block;

      a {
        color: #fff;
        text-decoration: none;
        display: inline-block;
        padding: 0 1em;
        line-height: $header-height;

        &:hover {
          color: #B8EC2F;
        }
      }
    }
  }
}

#banner {
  display: block;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: #ccc;
}
</style>
