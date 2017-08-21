<template>
  <div>
    <div class="doc-wrap">
      <div class="sidebar">

      </div>
      <div class="doc-content">

      </div>
    </div>
    <div class="demo-wrap">
      <iframe src="http://demo.wevue.org" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },

    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  .doc-wrap {
    display: block;
    margin-top: 90px;
    width: 500px;
    min-height: 100px;
    background-color: #fff;
  }

  .demo-wrap {
    display: block;
    overflow: hidden;
    width: 375px;
    min-width: 375px;
    height: 640px;
    z-index: 1;
    position: absolute;
    border-radius: 6px;
    background: #f2f2f2;
    box-sizing: border-box;
    right: 30px;
    top: 90px;

    iframe {
      width: 100%;
      height: 560px;
    }
  }
</style>
