<template>
  <div class="doc-content" v-html="content">
  </div>
</template>

<script>
  import abc from '../assets/docs/changelog.md'
  import 'highlight.js/styles/github.css'

  export default {
    data () {
      return {
        content: abc
      }
    }
  }
</script>

<style scoped lang="scss">
  .doc-content {
    display: block;
    width: 1000px;
    overflow: hidden;
    margin: 20px auto 30px;
    padding: 1.8rem;
    border-radius: .5em;
    background-color: #fff;
  }
</style>
