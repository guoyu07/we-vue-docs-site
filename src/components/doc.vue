<template>
  <div>
    <div class="doc-wrap">
      <div class="doc-nav">
        <ul>
          <li class="doc-nav__item" v-for="navItem in nav">
            <h2 class="title" v-html="navItem.name"></h2>
            <ul class="sub-tree">
              <li><router-link to="" v-for="subItem in navItem.subNav" v-text="subItem.name"></router-link></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="doc-content" v-html="content">
      </div>
    </div>
    <div class="demo-wrap" :style="{ top: demoWrapTop + 'px' }">
      <div class="mobile-top"></div>
      <iframe id="iframe-demo" src="http://demo.wevue.org" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import MarkdownIt from 'markdown-it'
  import Highlightjs from 'highlight.js'
  import 'highlight.js/styles/github.css'
  import { nav } from '../config'

  export default {
    data () {
      return {
        nav,
        content: '',
        demoWrapTop: 90
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

      let demoIframe = document.getElementById('iframe-demo')

      demoIframe.src = 'http://demo.wevue.org/indicator'

      // 右侧 DEMO 区实在 sticky 效果
      document.addEventListener('scroll', (e) => {
        if (document.body.scrollTop >= 70) {
          this.demoWrapTop = document.body.scrollTop + 20
        } else {
          this.demoWrapTop = 90
        }
      })
    }
  }
</script>

<style scoped lang="scss">
  .doc-wrap {
    display: flex;
    margin: 20px 100px 50px 30px;
    width: calc(100vw - 480px);
    background-color: #fff;
    border-radius: 5px;

    .doc-nav {
      display: block;
      overflow: hidden;
      width: 240px;
      min-width: 240px;
      border-right: 1px solid #ececec;

      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .doc-nav__item {
        list-style: none;
        padding: 0;
        margin: 0;

        .title {
          font-size: 18px;
          font-weight: 500;
          color: #333;
          display: block;
          text-indent: 1em;
        }

        .sub-title {
          font-size: 15px;
          font-weight: 500;
          color: #333;
          display: block;
          text-indent: 1em;
          margin: .2em 0;
        }

        .sub-tree {

          li {
            display: block;
          }
        }

        a {
          font-size: 14px;
          display: block;
          color: #444;
          text-decoration: none;
          background-color: #fff;
          text-indent: 2em;
          padding: .5em;

          &:hover {
            color: #67baff;
            background-color: #efefef;
          }
        }
      }
    }

    .doc-content {
      display: block;
      overflow: hidden;
      padding: 1.8em;
    }
  }

  .demo-wrap {
    display: block;
    overflow: hidden;
    width: 375px;
    min-width: 375px;
    z-index: 100;
    border-radius: 6px;
    background: #f2f2f2;
    box-sizing: border-box;
    right: 30px;
    position: absolute;
    box-shadow: #999 5px 5px 10px;

    .mobile-top {
      display: block;
      overflow: hidden;
      width: 100%;
      height: 42px;
      background: url(../assets/mobile_top.jpg) left top no-repeat;
      background-size: contain;
    }

    iframe {
      width: 100%;
      height: 555px;
    }
  }
</style>
