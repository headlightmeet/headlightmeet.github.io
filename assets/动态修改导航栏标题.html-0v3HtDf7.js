import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t,a as e,e as p}from"./app-oGr5u-1Z.js";const i={},o=e("p",null," ",-1),c=p(`<h1 id="动态修改导航栏标题" tabindex="-1"><a class="header-anchor" href="#动态修改导航栏标题" aria-hidden="true">#</a> 动态修改导航栏标题</h1><p>在我们日常开发过程中，往往会用到根据各种条件去动态改变顶部标题，在不自定义顶部标题的情况下，可以使用下面这种方法来实现动态修改</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>uni.setNavigationBarTitle<span class="token punctuation">(</span><span class="token punctuation">{</span>
	title: <span class="token string">&#39;修改的标题&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>onLoad<span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>options.index <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		uni.setNavigationBarTitle<span class="token punctuation">(</span><span class="token punctuation">{</span>
			title: <span class="token string">&#39;修改标题1&#39;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>options.index <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		uni.setNavigationBarTitle<span class="token punctuation">(</span><span class="token punctuation">{</span>
			title: <span class="token string">&#39;修改标题2&#39;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>options.index <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		uni.setNavigationBarTitle<span class="token punctuation">(</span><span class="token punctuation">{</span>
			title: <span class="token string">&#39;修改标题3&#39;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function l(u,d){return s(),a("div",null,[o,t(" more "),c])}const v=n(i,[["render",l],["__file","动态修改导航栏标题.html.vue"]]);export{v as default};
