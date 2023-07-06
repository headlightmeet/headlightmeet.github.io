import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as d,c as a,b as e,d as r,a as n,e as i}from"./app.3c425ae9.js";const u={},c=n(`<h1 id="\u96C6\u6210element-plus" tabindex="-1"><a class="header-anchor" href="#\u96C6\u6210element-plus" aria-hidden="true">#</a> \u96C6\u6210element-plus</h1><h2 id="\u5B89\u88C5\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u5F15\u5165" aria-hidden="true">#</a> \u5B89\u88C5\u5F15\u5165</h2><p><strong>1\u3001\u5148\u5B89\u88C5Element Plus</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install element-plus --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2\u3001\u5B89\u88C5Nuxt\u5B98\u65B9\u4E13\u95E8\u9488\u5BF9\u5F15\u5165Element Plus \u5F00\u53D1\u7684\u6A21\u5757</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm i @element-plus/nuxt -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3\u3001\u5728nuxt.config.ts\u4E2D\u914D\u7F6Emodules\u53C2\u6570</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export default defineNuxtConfig({
  modules: [
    &#39;@element-plus/nuxt&#39;
  ],
  elementPlus: { /** Options */ }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u81F3\u6B64\uFF0C\u5DF2\u7ECF\u5F15\u5165\u6210\u529F\uFF0C\u4E14\u6240\u6709Element Plus \u7EC4\u4EF6\u4E5F\u90FD\u53EF\u4EE5\u76F4\u63A5\u81EA\u52A8\u5BFC\u5165\u3002</p><h2 id="\u5168\u5C40\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u914D\u7F6E" aria-hidden="true">#</a> \u5168\u5C40\u914D\u7F6E</h2><p><strong>\u5982\u4F55\u505A\u5168\u5C40\u914D\u7F6E</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export default defineNuxtConfig({
  modules: [
    &#39;@element-plus/nuxt&#39;
  ],
  elementPlus: {
    themes: [&#39;dart&#39;]
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),m=i("\u6240\u6709\u7684\u914D\u7F6E\u53C2\u6570\u53EF\u4EE5\u70B9\u51FB\u67E5\u770B"),o={href:"https://github.com/element-plus/element-plus-nuxt#readme",target:"_blank",rel:"noopener noreferrer"},v=i("\u5B98\u65B9\u6587\u6863"),p=n(`<p><strong>\u5982\u4F55\u5168\u5C40\u5F15\u5165element ui \u56FE\u6807</strong> Element Plus UI \u7684\u56FE\u6807\u5E76\u672A\u5728nuxt3\u4E2D\u505A\u81EA\u52A8\u5BFC\u5165\uFF0C\u6240\u4EE5\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u9700\u8981\u624B\u52A8\u4ECE@element-plus/icons-vue\u4E2D\u5BFC\u5165, \u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script lang=&quot;ts&quot; setup&gt;
import { Document } from &#39;@element-plus/icons-vue&#39;
&lt;/script&gt;

&lt;template&gt;
   &lt;el-icon&gt;&lt;Document /&gt;&lt;/el-icon&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u4E3A\u4F7F\u7528\u5230\u7684\u56FE\u6807\u7684\u5730\u65B9\u4F1A\u975E\u5E38\u591A\uFF0C\u6240\u4EE5\u8FD9\u91CC\u521B\u5EFAplugins\u76EE\u5F55\u4E2D\u521B\u5EFA\u4E00\u4E2Aglobal.ts\u6587\u4EF6\uFF0C\u7528\u4E8E\u5168\u5C40\u5F15\u5165\u4E00\u4E9B\u7EC4\u4EF6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import * as ElementPlusIconsVue from &#39;@element-plus/icons-vue&#39;

export default defineNuxtPlugin(async (NuxtApp) =&gt; {
  // nuxtApp\u5305\u542B\u7684\u5C5E\u6027\u53EF\u770B\u6587\u6863 https://nuxt.com/docs/guide/going-further/internals

  // \u5168\u5C40\u7EC4\u4EF6\u5F15\u5165
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    NuxtApp.vueApp.component(key, component)
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u6B21\u5728\u9875\u9762\u4E2D\u67E5\u770B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script lang=&quot;ts&quot; setup&gt;
&lt;/script&gt;

&lt;template&gt;
   &lt;el-icon&gt;&lt;Document /&gt;&lt;/el-icon&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function g(b,x){const s=t("ExternalLinkIcon");return d(),a("div",null,[c,e("p",null,[m,e("a",o,[v,r(s)])]),p])}var _=l(u,[["render",g],["__file","\u96C6\u6210element-plus.html.vue"]]);export{_ as default};
