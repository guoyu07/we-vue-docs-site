import axios from 'axios'
import MarkdownIt from 'markdown-it'
import Highlightjs from 'highlight.js'
import 'highlight.js/styles/github.css'

function getRenderedMd (id) {
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

  return axios.get(`../assets/docs/${id}.md`).then(response => {
    return md.render(response.data)
  }).catch(error => {
    console.log(error)
  })
}

export {
  getRenderedMd
}
