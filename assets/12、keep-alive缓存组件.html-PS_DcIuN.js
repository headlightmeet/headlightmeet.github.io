import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as a,a as e,d as t,o as n}from"./app-B-svpa5t.js";const l={},h=e("p",null," ",-1),k=t(`<h1 id="keep-alive缓存组件" tabindex="-1"><a class="header-anchor" href="#keep-alive缓存组件"><span>keep-alive缓存组件</span></a></h1><p>keep-alive是vue中的一个内置组件，主要是将组建缓存到内存中，避免切换路由的时候页面刷新从而倒是dom的重新渲染</p><h2 id="路由配置" tabindex="-1"><a class="header-anchor" href="#路由配置"><span>路由配置</span></a></h2><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">//vue3.0的App.vue配置方法如下：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  &lt;!-- vue3.0配置 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">router-view</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> v-slot</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{ </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Component</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> }</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">keep-alive</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">is</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Component</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  v-if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">$route</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">meta</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">keepAlive</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">keep-alive</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">is</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Component</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  v-if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">$route</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">meta</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">keepAlive</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">router-view</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在对应的路由上添加meta属性来设置页面是否要使用缓存，如下：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">  path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;/keepAliveTest&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">   name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;keepAliveTest&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">   meta</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">       keepAlive</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> //设置页面是否需要使用缓存</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">   },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">   component</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#61AFEF;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;@/views/keepAliveTest/index.vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> },</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function p(r,d){return n(),s("div",null,[h,a(" more "),k])}const o=i(l,[["render",p],["__file","12、keep-alive缓存组件.html.vue"]]),y=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF/vue3%E6%95%99%E7%A8%8B/12%E3%80%81keep-alive%E7%BC%93%E5%AD%98%E7%BB%84%E4%BB%B6.html","title":"keep-alive缓存组件","lang":"zh-CN","frontmatter":{"title":"keep-alive缓存组件","order":12,"category":["前端"],"tag":["vue3"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%89%8D%E7%AB%AF/vue3%E6%95%99%E7%A8%8B/12%E3%80%81keep-alive%E7%BC%93%E5%AD%98%E7%BB%84%E4%BB%B6.html"}],["meta",{"property":"og:site_name","content":"遐想的猫"}],["meta",{"property":"og:title","content":"keep-alive缓存组件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"vue3"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"keep-alive缓存组件\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"路由配置","slug":"路由配置","link":"#路由配置","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.54,"words":163},"filePathRelative":"前端/vue3教程/12、keep-alive缓存组件.md","excerpt":"<p>&nbsp;</p>\\n"}');export{o as comp,y as data};
