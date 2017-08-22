<template>
  <div id="header">
    <div class="main">
      <router-link to="/">
        <img class="logo" src="../assets/logo.png" alt="">
      </router-link>
      <ul class="nav">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/doc">文档</router-link>
        </li>
        <li>
          <router-link to="/changelog">变更记录</router-link>
        </li>
        <li>
          <a href="https://github.com/tianyong90/we-vue" target="new">GitHub</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'doc-header'
  }
</script>

<style scoped lang="scss">
  $header-height: 70px;
  $header-background: #fff;

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
    background-color: $header-background;
    z-index: 100;

    .main {
      display: block;
      overflow: hidden;
      margin: 0 auto;
      width: 90vw;
    }

    .logo {
      display: block;
      float: left;
      width: 60px;
      height: 60px;
      margin: 5px 0;
    }

    .nav {
      display: block;
      padding: 0;
      margin: 0;
      float: right;

      li {
        display: inline-block;

        a {
          color: #333;
          text-decoration: none;
          display: inline-block;
          padding: 0 1em;
          line-height: $header-height;

          &:hover {
            color: #111;
          }
        }
      }
    }
  }
</style>
