<template>
  <div id="header">
    <div class="main">
      <div class="logo"></div>
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
      background-color: #0f0;
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
</style>
