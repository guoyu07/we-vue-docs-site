<template>
  <div class="doc-content" v-html="content">
  </div>
</template>

<script>
  import { getRenderedMd } from '../utils'

  export default {
    data () {
      return {
        content: ''
      }
    },

    mounted () {
      getRenderedMd('changelog').then((data) => {
        this.content = data
      })
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
