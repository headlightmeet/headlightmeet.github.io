import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as t,d as a,a as e,e as i}from"./app-oGr5u-1Z.js";const l={},p=e("p",null," ",-1),o=i(`<h1 id="动态添加及修改导航栏" tabindex="-1"><a class="header-anchor" href="#动态添加及修改导航栏" aria-hidden="true">#</a> 动态添加及修改导航栏</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>uni.setNavigationBarTitle({
	title: &#39;案例详情&#39;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在pages.json</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
			<span class="token string">&quot;path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pages/cart/cart&quot;</span>,
			<span class="token string">&quot;style&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
				<span class="token string">&quot;navigationBarTitleText&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;购物车&quot;</span>,
				<span class="token string">&quot;navigationBarBackgroundColor&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;#FFFFFF&quot;</span>,
				<span class="token string">&quot;app-plus&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
				    <span class="token string">&quot;titleNView&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>  
				       <span class="token string">&quot;titleAlign&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;left&quot;</span>,
					   <span class="token string">&quot;titleSize&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;40rpx&quot;</span>,
					   // <span class="token string">&quot;autoBackButton&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;false&quot;</span>,
					   <span class="token string">&quot;buttons&quot;</span>:<span class="token punctuation">[</span>
					   	<span class="token punctuation">{</span>
					   		<span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;编辑&quot;</span>,
					   		<span class="token string">&quot;float&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;right&quot;</span>,//表示显示在导航栏右侧，，左侧就改成left&#39;
							<span class="token string">&quot;fontSize&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;32rpx&quot;</span>
					   	<span class="token punctuation">}</span>
					   <span class="token punctuation">]</span>
				    <span class="token punctuation">}</span>  
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要实现效果的页面中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>动态修改右侧或左侧内容
var webView <span class="token operator">=</span> this.<span class="token variable">$mp</span>.page.<span class="token variable">$getAppWebview</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
// 修改buttons  
// index: 按钮索引, style <span class="token punctuation">{</span>WebviewTitleNViewButtonStyles <span class="token punctuation">}</span>  
webView.setTitleNViewButtonStyle<span class="token punctuation">(</span><span class="token number">0</span>, <span class="token punctuation">{</span>  
    text: <span class="token string">&#39;hello&#39;</span>,  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
// 修改按钮上的角标  
// index: 按钮索引, text: 角标文本内容  
webView.setTitleNViewButtonBadge<span class="token punctuation">(</span><span class="token punctuation">{</span>  
    index: <span class="token number">0</span>,  
    text: <span class="token number">10</span>,  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function c(u,d){return s(),t("div",null,[p,a(" more "),o])}const m=n(l,[["render",c],["__file","动态添加及修改导航栏.html.vue"]]);export{m as default};
