import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as a,c as d,d as r,a as e,b as n,f as u,e as t}from"./app-oGr5u-1Z.js";const c={},o=e("p",null," ",-1),m=t(`<h1 id="集成element-plus" tabindex="-1"><a class="header-anchor" href="#集成element-plus" aria-hidden="true">#</a> 集成element-plus</h1><h2 id="安装引入" tabindex="-1"><a class="header-anchor" href="#安装引入" aria-hidden="true">#</a> 安装引入</h2><p><strong>1、先安装Element Plus</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install element-plus --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2、安装Nuxt官方专门针对引入Element Plus 开发的模块</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i @element-plus/nuxt -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3、在nuxt.config.ts中配置modules参数</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default defineNuxtConfig({
  modules: [
    &#39;@element-plus/nuxt&#39;
  ],
  elementPlus: { /** Options */ }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，已经引入成功，且所有Element Plus 组件也都可以直接自动导入。</p>`,9),v={href:"https://github.com/element-plus/element-plus-nuxt#readme",target:"_blank",rel:"noopener noreferrer"},p=t(`<p><strong>如何全局引入element ui 图标</strong> Element Plus UI 的图标并未在nuxt3中做自动导入，所以使用的时候，需要手动从@element-plus/icons-vue中导入, 如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script lang=&quot;ts&quot; setup&gt;
import { Document } from &#39;@element-plus/icons-vue&#39;
&lt;/script&gt;

&lt;template&gt;
   &lt;el-icon&gt;&lt;Document /&gt;&lt;/el-icon&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为使用到的图标的地方会非常多，所以这里创建plugins目录中创建一个global.ts文件，用于全局引入一些组件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import * as ElementPlusIconsVue from &#39;@element-plus/icons-vue&#39;

export default defineNuxtPlugin(async (NuxtApp) =&gt; {
  // nuxtApp包含的属性可看文档 https://nuxt.com/docs/guide/going-further/internals

  // 全局组件引入
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    NuxtApp.vueApp.component(key, component)
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次在页面中查看</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script lang=&quot;ts&quot; setup&gt;
&lt;/script&gt;

&lt;template&gt;
   &lt;el-icon&gt;&lt;Document /&gt;&lt;/el-icon&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function g(b,x){const l=i("ExternalLinkIcon");return a(),d("div",null,[o,r(" more "),m,e("p",null,[n("所有的配置参数可以点击查看"),e("a",v,[n("官方文档"),u(l)])]),p])}const f=s(c,[["render",g],["__file","集成element-plus.html.vue"]]);export{f as default};
