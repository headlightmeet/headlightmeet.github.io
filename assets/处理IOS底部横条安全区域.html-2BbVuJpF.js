import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as t,d as e,a as n,e as p}from"./app-oGr5u-1Z.js";const o={},l=n("p",null,"--- title: 处理IOS底部横条安全区域 category:",-1),c=n("ul",null,[n("li",null,"前端 tag:"),n("li",null,"uniapp")],-1),i=n("hr",null,null,-1),r=n("p",null," ",-1),u=p(`<h1 id="处理ios底部横条安全区域" tabindex="-1"><a class="header-anchor" href="#处理ios底部横条安全区域" aria-hidden="true">#</a> 处理IOS底部横条安全区域</h1><h3 id="同步" tabindex="-1"><a class="header-anchor" href="#同步" aria-hidden="true">#</a> 同步</h3><p>uni.getSystemInfo(OBJECT)</p><h3 id="异步" tabindex="-1"><a class="header-anchor" href="#异步" aria-hidden="true">#</a> 异步</h3><p>uni.getSystemInfoSync() <img src="https://jitems.gitee.io/myblog/bk216.png" alt="solar"><img src="https://jitems.gitee.io/myblog/bk217.png" alt="solar"><img src="https://jitems.gitee.io/myblog/bk218.png" alt="solar"></p><h3 id="使用方式一" tabindex="-1"><a class="header-anchor" href="#使用方式一" aria-hidden="true">#</a> 使用方式一</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;content&quot;</span><span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>view style<span class="token operator">=</span><span class="token string">&quot;background-color: red;&quot;</span> <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;{height:heightOne+&#39;px&#39;}&quot;</span><span class="token operator">&gt;</span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>view style<span class="token operator">=</span><span class="token string">&quot;background-color: yellow;&quot;</span> <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;{height:heightTwo+&#39;px&#39;}&quot;</span><span class="token operator">&gt;</span><span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">{</span>
				<span class="token literal-property property">heightOne</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token literal-property property">heightTwo</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
			
			<span class="token keyword">switch</span> <span class="token punctuation">(</span>uni<span class="token punctuation">.</span><span class="token function">getSystemInfoSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>platform<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			    <span class="token keyword">case</span> <span class="token string">&#39;ios&#39;</span><span class="token operator">:</span>
			        <span class="token comment">// 异步方式</span>
			        uni<span class="token punctuation">.</span><span class="token function">getSystemInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			            <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			        		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>safeArea<span class="token punctuation">)</span>
			        		self<span class="token punctuation">.</span>heightOne <span class="token operator">=</span> res<span class="token punctuation">.</span>safeArea<span class="token punctuation">.</span>top<span class="token punctuation">;</span><span class="token comment">//头部区域</span>
			        		self<span class="token punctuation">.</span>heightTwo <span class="token operator">=</span> res<span class="token punctuation">.</span>safeArea<span class="token punctuation">.</span>height<span class="token punctuation">;</span><span class="token comment">//内容区域</span>
			            <span class="token punctuation">}</span>
			        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			        
			        <span class="token comment">//同步方式</span>
			        <span class="token comment">// self.heightOne.uni.getSystemInfoSync().safeArea.top</span>
			        <span class="token comment">// self.heightTwo.uni.getSystemInfoSync().safeArea.height</span>
			    <span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
			
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下： <img src="https://jitems.gitee.io/myblog/bk219.png" alt="solar"></p><h3 id="使用方式二" tabindex="-1"><a class="header-anchor" href="#使用方式二" aria-hidden="true">#</a> 使用方式二</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;content&quot;</span><span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;contents&quot;</span> <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;{bottom:heightOne+&#39;px&#39;}&quot;</span><span class="token operator">&gt;</span>
			
		<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">{</span>
				<span class="token literal-property property">heightOne</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token literal-property property">heightTwo</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
			
			<span class="token keyword">switch</span> <span class="token punctuation">(</span>uni<span class="token punctuation">.</span><span class="token function">getSystemInfoSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>platform<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			    <span class="token keyword">case</span> <span class="token string">&#39;ios&#39;</span><span class="token operator">:</span>
			        <span class="token comment">// 异步方式</span>
			        uni<span class="token punctuation">.</span><span class="token function">getSystemInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			            <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			        		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>safeArea<span class="token punctuation">)</span>
							<span class="token keyword">let</span> sHeight <span class="token operator">=</span> res<span class="token punctuation">.</span>screenHeight<span class="token punctuation">;</span><span class="token comment">//获取屏幕高度</span>
							<span class="token keyword">let</span> sTop <span class="token operator">=</span> res<span class="token punctuation">.</span>safeArea<span class="token punctuation">.</span>bottom<span class="token punctuation">;</span><span class="token comment">//获取安全区域底部高度</span>
							self<span class="token punctuation">.</span>heightOne <span class="token operator">=</span> sHeight <span class="token operator">-</span> sTop<span class="token punctuation">;</span><span class="token comment">//获取安全区域距离底部的高度</span>
			            <span class="token punctuation">}</span>
			        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			        
			        <span class="token comment">//同步方式</span>
			        <span class="token comment">// self.heightOne.uni.getSystemInfoSync().safeArea.top</span>
			        <span class="token comment">// self.heightTwo.uni.getSystemInfoSync().safeArea.height</span>
			    <span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
			
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
	<span class="token punctuation">.</span>contents<span class="token punctuation">{</span>
		background<span class="token operator">-</span>color<span class="token operator">:</span> red<span class="token punctuation">;</span>
		<span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
		<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
		<span class="token literal-property property">height</span><span class="token operator">:</span> 10rpx<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下： <img src="https://jitems.gitee.io/myblog/bk220.png" alt="solar"></p>`,11);function k(d,v){return a(),t("div",null,[l,c,i,r,e(" more "),u])}const g=s(o,[["render",k],["__file","处理IOS底部横条安全区域.html.vue"]]);export{g as default};
