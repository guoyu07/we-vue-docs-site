<header id="banner">
  <div class="inner">
    <h2 id="banner-title">{{ page.subtitle }}</h2>
    <div id="banner-start">
      <span id="banner-start-command">npm install we-vue --save</span><a id="banner-start-link" href="docs/"><i class="fa fa-arrow-right"></i></a>
    </div>
    <div id="banner-share">{{ partial('partial/share') }}</div>
  </div>
</header>
<div id="content-wrap">
  <div class="wrapper">
    <div class="inner">
      {{ page.content }}
      <div id="demo-qrcode">
        <img class="qrcode" src="/image/demo_qrcode.png"/>
      </div>
      <div id="intro-get-started-wrap">
        <a href="http://demo.wevue.org" id="intro-get-started-link">查看示例</a>
      </div>
    </div>
  </div>
</div>