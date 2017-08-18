<template>
  <div id="header">
    <div class="logo"></div>
    <ul class="nav">
      <li>
        <a href="">首页</a>
      </li>
      <li>
        <a href="">文档</a>
      </li>
      <li>
        <a href="">变更记录</a>
      </li>
      <li>
        <a href="https://github.com/tianyong90/we-vue" target="new">GitHub</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
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
</style>
