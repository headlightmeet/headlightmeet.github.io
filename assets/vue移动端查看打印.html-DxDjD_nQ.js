import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,d as s,a as i,e as d}from"./app-oGr5u-1Z.js";const l={},o=i("p",null," ",-1),r=d(`<h1 id="vue移动端查看打印" tabindex="-1"><a class="header-anchor" href="#vue移动端查看打印" aria-hidden="true">#</a> vue移动端查看打印</h1><h2 id="安装vconsole" tabindex="-1"><a class="header-anchor" href="#安装vconsole" aria-hidden="true">#</a> 安装vconsole</h2><p>vconsole是帮助在手机查看执行情况的插件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install vconsole -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="main-js中引入" tabindex="-1"><a class="header-anchor" href="#main-js中引入" aria-hidden="true">#</a> main.js中引入</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 引入 Vconsole
import Vconsole from &#39;vconsole&#39;
// 所有环境均使用
new Vconsole()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vconsole from &#39;vconsole&#39;
let vConsole = new Vconsole()
Vue.use(vConsole);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function t(c,v){return n(),a("div",null,[o,s(" more "),r])}const h=e(l,[["render",t],["__file","vue移动端查看打印.html.vue"]]);export{h as default};
