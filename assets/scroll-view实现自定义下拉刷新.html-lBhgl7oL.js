import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,d as e,a as t,e as l}from"./app-oGr5u-1Z.js";const o={},i=t("p",null," ",-1),r=l(`<h1 id="scroll-view实现自定义下拉刷新" tabindex="-1"><a class="header-anchor" href="#scroll-view实现自定义下拉刷新" aria-hidden="true">#</a> scroll-view实现自定义下拉刷新</h1><h3 id="使用scroll-view标签" tabindex="-1"><a class="header-anchor" href="#使用scroll-view标签" aria-hidden="true">#</a> 使用scroll-view标签</h3><p><strong>refresher-enabled=“true” 开启下拉刷新</strong><strong>refresher-triggered 设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发</strong><strong>bindrefresherrefresh 自定义下拉刷新被触发事件</strong><strong>bindscrolltolower 滚动到底部触发事件</strong></p><p>页面定义</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>scroll-view <span class="token assign-left variable">class</span><span class="token operator">=</span><span class="token string">&quot;content&quot;</span> <span class="token assign-left variable">style</span><span class="token operator">=</span><span class="token string">&quot;width:100%;height:100vh;&quot;</span>
     refresher-triggered <span class="token operator">=</span> <span class="token string">&#39;{{loading}}&#39;</span> 
     <span class="token assign-left variable">bindrefresherrefresh</span><span class="token operator">=</span><span class="token string">&quot;onRefresh&quot;</span>
      refresher-enabled<span class="token operator">=</span><span class="token string">&quot;true&quot;</span>  
      <span class="token assign-left variable">bindscrolltolower</span><span class="token operator">=</span><span class="token string">&quot;scrollToLower&quot;</span> 
      scroll-y<span class="token operator">=</span><span class="token string">&quot;true&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/scroll-view<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>js中定义</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>data: <span class="token punctuation">{</span>
      // 上拉刷新
      loading:true
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下拉事件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/**
   * 下拉刷新
   */
  onRefresh: <span class="token function-name function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    const self <span class="token operator">=</span> this<span class="token punctuation">;</span>
    //定时器，两秒后触发操作
    setTimeout<span class="token punctuation">((</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
      self.setData<span class="token punctuation">(</span><span class="token punctuation">{</span>
        loading:false
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>, <span class="token number">2000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function c(p,d){return n(),a("div",null,[i,e(" more "),r])}const b=s(o,[["render",c],["__file","scroll-view实现自定义下拉刷新.html.vue"]]);export{b as default};
