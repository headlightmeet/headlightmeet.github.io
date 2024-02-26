import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t,a as p,e}from"./app-oGr5u-1Z.js";const o={},c=p("p",null," ",-1),i=e(`<h1 id="tabbar案例" tabindex="-1"><a class="header-anchor" href="#tabbar案例" aria-hidden="true">#</a> tabBar案例</h1><p>目录结构</p><img src="https://jitems.gitee.io/myblog/bk705.png" alt="solar"><p>Index.ets页面，引入user组件和home页面</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>User<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./components/user&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Home<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./components/home&#39;</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
struct Index <span class="token punctuation">{</span>
  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">Tabs</span><span class="token punctuation">(</span><span class="token punctuation">{</span> barPosition<span class="token operator">:</span> BarPosition<span class="token punctuation">.</span>End <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">TabContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">.</span><span class="token function">tabBar</span><span class="token punctuation">(</span><span class="token string">&#39;首页&#39;</span><span class="token punctuation">)</span>

        <span class="token function">TabContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">.</span><span class="token function">tabBar</span><span class="token punctuation">(</span><span class="token string">&#39;推荐&#39;</span><span class="token punctuation">)</span>

        <span class="token function">TabContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;发现的内容&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fontSize</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">.</span><span class="token function">tabBar</span><span class="token punctuation">(</span><span class="token string">&#39;发现&#39;</span><span class="token punctuation">)</span>

        <span class="token function">TabContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;我的内容&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fontSize</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">.</span><span class="token function">tabBar</span><span class="token punctuation">(</span><span class="token string">&quot;我的&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token string">&#39;100%&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token string">&#39;100%&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pages/components/home.ets页面</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
<span class="token keyword">export</span> struct Home <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">State</span></span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span>

  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Tabs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">TabContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;首页的内容&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fontSize</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">.</span><span class="token function">tabBar</span><span class="token punctuation">(</span><span class="token string">&#39;首页&#39;</span><span class="token punctuation">)</span>

      <span class="token function">TabContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;推荐的内容&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fontSize</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">.</span><span class="token function">tabBar</span><span class="token punctuation">(</span><span class="token string">&#39;推荐&#39;</span><span class="token punctuation">)</span>

      <span class="token function">TabContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;发现的内容&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fontSize</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">.</span><span class="token function">tabBar</span><span class="token punctuation">(</span><span class="token string">&#39;发现&#39;</span><span class="token punctuation">)</span>

      <span class="token function">TabContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;我的内容&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fontSize</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">.</span><span class="token function">tabBar</span><span class="token punctuation">(</span><span class="token string">&quot;我的&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pages/componens/user.ets页面</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
<span class="token keyword">export</span>  struct User<span class="token punctuation">{</span>
  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&quot;你好&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击首页</p><img src="https://jitems.gitee.io/myblog/bk706.png" alt="solar"><p>点击推荐</p><img src="https://jitems.gitee.io/myblog/bk707.png" alt="solar">`,13);function u(l,k){return s(),a("div",null,[c,t(" more "),i])}const v=n(o,[["render",u],["__file","tabBar案例.html.vue"]]);export{v as default};
