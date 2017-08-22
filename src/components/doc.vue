<template>
  <div>
    <div class="doc-wrap">
      <div class="doc-nav">
        <ul>
          <li class="doc-nav__item">
            <h2 class="title">开始使用</h2>
            <ul class="sub-tree">
              <li><router-link to="">概述</router-link></li>
              <li><router-link to="">快速上手</router-link></li>
            </ul>
          </li>
          <li class="doc-nav__item">
            <h2 class="title">WE-VUE 组件</h2>
            <h3 class="sub-title">基础组件</h3>
            <ul class="sub-tree">
              <li><router-link to="">概述</router-link></li>
              <li><router-link to="">快速上手</router-link></li>
              <li><router-link to="">快速上手</router-link></li>
              <li><router-link to="">快速上手</router-link></li>
              <li><router-link to="">快速上手</router-link></li>
              <li><router-link to="">快速上手</router-link></li>
              <li><router-link to="">快速上手</router-link></li>
              <li><router-link to="">快速上手</router-link></li>
              <li><router-link to="">快速上手</router-link></li>
              <li><router-link to="">快速上手</router-link></li>
            </ul>
            <h3 class="sub-title">基础组件</h3>
            <ul class="sub-tree">
              <li><router-link to="">概述</router-link></li>
              <li><router-link to="">快速上手</router-link></li>
              <li><router-link to="">快速上手</router-link></li>
              <li><router-link to="">快速上手</router-link></li>
              <li><router-link to="">快速上手</router-link></li>
              <li><router-link to="">快速上手</router-link></li>
              <li><router-link to="">快速上手</router-link></li>
              <li><router-link to="">快速上手</router-link></li>
              <li><router-link to="">快速上手</router-link></li>
              <li><router-link to="">快速上手</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="doc-content" v-html="content">
      </div>
    </div>
    <div class="demo-wrap">
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

      let demoIframe = document.getElementById('iframe-demo')

      demoIframe.src = 'http://demo.wevue.org/indicator'
    }
  }
</script>

<style scoped lang="scss">
  .doc-wrap {
    display: flex;
    margin: 90px 100px 50px 30px;
    width: calc(100vw - 490px);
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
    height: 640px;
    z-index: 100;
    border-radius: 6px;
    background: #f2f2f2;
    box-sizing: border-box;
    right: 30px;
    top: 90px;
    position: fixed;

    .mobile-top {
      display: block;
      overflow: hidden;
      width: 100%;
      height: 65px;
      background: url(../assets/mobile_top.jpg) left top no-repeat;
      background-size: contain;
    }

    iframe {
      width: 100%;
      height: 575px;
    }
  }
</style>
