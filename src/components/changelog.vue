<template>
  <div class="main" v-html="content">
  </div>
</template>

<script>
  import axios from 'axios'
  import MarkdownIt from 'markdown-it'
  import Highlightjs from 'highlight.js'
  import 'highlight.js/styles/github.css'

  export default {
    data () {
      return {
        content: ''
      }
    },

    mounted () {
      /* eslint-disable no-new */
      let md = new MarkdownIt({
        highlight: function (str, lang) {
          if (lang && Highlightjs.getLanguage(lang)) {
            try {
              return Highlightjs.highlight(lang, str).value
            } catch (__) {}
          }

          return ''
        }
      })

      axios.get('../assets/action_sheet.md').then(response => {
        this.content = response.data

        this.content = md.render(response.data)
      }).catch(error => {
        console.log(error)
        console.log('fuck')
      })
    }
  }
</script>

<style scoped lang="scss">
  .main {
    display: block;
    width: 1000px;
    overflow: hidden;
    margin: 90px auto 30px;
    padding: 1.8rem;
    border-radius: .5em;
    background-color: #fff;
  }
</style>
