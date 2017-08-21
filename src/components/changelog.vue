<template>
  <div class="main" v-html="content">
  </div>
</template>

<script>
  import MarkdownIt from 'markdown-it'

  export default {
    data () {
      return {
        content: ''
      }
    },

    mounted () {
      /* eslint-disable no-new */
      let md = new MarkdownIt()

      this.content = md.render('`what the fuck`')
    }
  }
</script>

<style scoped lang="scss">
  .main {
    display: block;
    width: 1000px;
    overflow: hidden;
    margin: 80px auto 0;
    background-color: #ccc;
    padding: 2rem;
    border-radius: .5em;
  }
</style>
