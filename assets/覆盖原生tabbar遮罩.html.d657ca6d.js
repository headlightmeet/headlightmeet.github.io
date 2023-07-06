import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.3c425ae9.js";const p={},e=t(`<h1 id="\u8986\u76D6\u539F\u751Ftabbar\u906E\u7F69" tabindex="-1"><a class="header-anchor" href="#\u8986\u76D6\u539F\u751Ftabbar\u906E\u7F69" aria-hidden="true">#</a> \u8986\u76D6\u539F\u751Ftabbar\u906E\u7F69</h1><p>\u80CC\u666F\uFF1A\u6839\u636E\u9700\u6C42\u9700\u8981\u5236\u4F5C\u4E00\u4E2A\u6240\u6709\u9875\u9762\u53EF\u4EE5\u8C03\u7528\u7684\u5F39\u6846\u7EC4\u4EF6\uFF0C\u4F46\u662F\u5728\u505A\u906E\u7F69\u7684\u65F6\u5019\uFF0C\u53D1\u73B0\u906E\u7F69\u5C42\u4E0D\u4F1A\u906E\u7F69tabbar\u3002\u53C8\u56E0\u4E3A\u81EA\u5B9A\u4E49tabbar\u65B9\u5F0F\u6709\u7F3A\u9677\uFF0C\u6240\u4EE5\u624D\u6709\u5982\u4E0B\u65B9\u5F0F\u3002 \u601D\u8DEF\uFF1A 1\u3001\u5728App\u7AEF\uFF1A\u4F7F\u75285+api\u65B9\u5F0F\u6765\u5224\u65AD\u5F53\u524D\u662Ftabbar\u9875\u9762\u5C31\u4F7F\u7528\u539F\u751F\u5199\u6CD5\u906E\u6321\u4F4Ftabbar\u90E8\u5206\u5373\u53EF 2\u3001\u5728\u5C0F\u7A0B\u5E8F\u7AEF\uFF1A\u53EA\u6709\u4F7F\u7528uni.hideTabBar()\u6765\u9690\u85CF\u8FD9\u4E2A\u64CD\u4F5C\u4E86</p><h2 id="\u5B9A\u4E49\u8C03\u7528\u539F\u751F\u906E\u7F69js" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u8C03\u7528\u539F\u751F\u906E\u7F69js" aria-hidden="true">#</a> \u5B9A\u4E49\u8C03\u7528\u539F\u751F\u906E\u7F69js</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//mask.js</span>
<span class="token keyword">const</span> $evt <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">maskLayer</span><span class="token operator">:</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token comment">//\u539F\u751F\u5F39\u6846\u5BF9\u8C61</span>
	<span class="token comment">//\u52A0\u8F7D\u5F39\u6846</span>
	<span class="token function">nativeObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
		uni<span class="token punctuation">.</span><span class="token function">getSystemInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// \u83B7\u53D6\u5230\u5C4F\u5E55\u603B\u9AD8-\u53EF\u7528\u5C4F\u5E55\u9AD8(\u56E0\u4E3A\u6211\u8FD9\u91CC\u662F\u81EA\u5B9A\u4E49\u7684\u5BFC\u822A\u680F\uFF0C\u6240\u4EE5\u5BFC\u822A\u680F\u4E5F\u7B97\u5728\u53EF\u7528\u5C4F\u5E55\u9AD8\u91CC\u9762\u7684)</span>
				that<span class="token punctuation">.</span><span class="token function">nativeObjects</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>screenHeight<span class="token punctuation">,</span>res<span class="token punctuation">.</span>windowHeight<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function">nativeObjects</span><span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span>i</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">let</span> heights <span class="token operator">=</span> e<span class="token operator">-</span>i
		<span class="token comment">//\u6253\u5F00\u7B49\u5F85\u5F39\u6846</span>
		<span class="token comment">//this.maskLayer.show()</span>
		
		<span class="token comment">//\u5173\u95ED\u7B49\u5F85\u6846</span>
		<span class="token comment">//this.maskLayer.hide();</span>
		
		<span class="token comment">//\u5C4F\u5E55\u5BBD\u5EA6</span>
		<span class="token keyword">const</span> screenWidth <span class="token operator">=</span> plus<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>resolutionWidth<span class="token punctuation">;</span>
		<span class="token comment">//\u5C4F\u5E55\u9AD8\u5EA6</span>
		<span class="token keyword">const</span> screenHeight <span class="token operator">=</span> plus<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>resolutionHeight<span class="token punctuation">;</span>
		
		<span class="token comment">// \u5F39\u7A97\u906E\u7F69\u5C42(\u8FD9\u91CC\u53EA\u505A\u906E\u7F69tabbar\u90E8\u5206)</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>maskLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">plus<span class="token punctuation">.</span>nativeObj<span class="token punctuation">.</span>View</span><span class="token punctuation">(</span><span class="token string">&quot;maskLayer&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token comment">//\u5148\u521B\u5EFA\u906E\u7F69\u5C42</span>
			<span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&#39;0px&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;0px&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">height</span><span class="token operator">:</span> heights<span class="token operator">+</span><span class="token string">&#39;px&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;rgba(0,0,0,0.4)&#39;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token comment">// \u6253\u5F00\u5F39\u6846</span>
	<span class="token function">maskLayerShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>maskLayer<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">// \u5173\u95ED\u5F39\u6846</span>
	<span class="token function">maskLayerHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>maskLayer<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> $evt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7F16\u5199\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u7EC4\u4EF6" aria-hidden="true">#</a> \u7F16\u5199\u7EC4\u4EF6</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!-- \u5404\u79CD\u72B6\u6001\u5F39\u6846 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hints<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> masks <span class="token keyword">from</span> <span class="token string">&#39;@/common/mask.js&#39;</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">{</span>
				
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token comment">// \u5728\u5B9E\u4F8B\u521B\u5EFA\u5B8C\u6210\u540E\u88AB\u7ACB\u5373\u8C03\u7528</span>
		<span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u521D\u59CB\u8C03\u7528&#39;</span><span class="token punctuation">)</span>

			<span class="token keyword">var</span> pages <span class="token operator">=</span> <span class="token function">getCurrentPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u83B7\u53D6\u6808\u5B9E\u4F8B</span>
			<span class="token keyword">let</span> currentRoute <span class="token operator">=</span> pages<span class="token punctuation">[</span>pages<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>route<span class="token punctuation">;</span>
			<span class="token comment">//\u76D1\u542C\u7684\u5F53\u524D\u9875\u9762\u4E0D\u662F\u94A5\u5319\u9875\u9762\u6216\u6211\u7684\u9875\u9762\uFF0C\u5219\u4E0D\u6267\u884C\u4E0B\u9762\u64CD\u4F5C</span>
			<span class="token keyword">let</span> curren <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;pages/home/home&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;pages/user/user&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;pages/position/position&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;pages/positions/positions&#39;</span><span class="token punctuation">]</span> 
			<span class="token keyword">if</span><span class="token punctuation">(</span>curren<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>currentRoute<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token comment">// app\u7AEF\u5728tabbar\u90E8\u5206\uFF0C\u4F7F\u7528\u539F\u751F\u906E\u7F69\u6765\u906E\u7F69\u5E95\u90E8\u9009\u9879\u4E00\u90E8\u5206\u533A\u57DF</span>
				<span class="token comment">// #ifdef APP-PLUS</span>
				masks<span class="token punctuation">.</span><span class="token function">nativeObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				masks<span class="token punctuation">.</span><span class="token function">maskLayerShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token comment">// #endif</span>
				
				<span class="token comment">// \u5C0F\u7A0B\u5E8F\u7AEFtabbar\u90E8\u5206\uFF0C\u5219\u662F\u9690\u85CFtabber\u90E8\u5206</span>
				<span class="token comment">// #ifdef MP-WEIXIN</span>
				uni<span class="token punctuation">.</span><span class="token function">hideTabBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token comment">// #endif</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u9500\u6BC1\u8C03\u7528&#39;</span><span class="token punctuation">)</span>
			
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			

		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
	<span class="token selector">.hints</span><span class="token punctuation">{</span>
		<span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
		<span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
		<span class="token property">left</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 100vh <span class="token important">!important</span><span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9875\u9762\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u4F7F\u7528" aria-hidden="true">#</a> \u9875\u9762\u4F7F\u7528</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- index.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!-- \u6D88\u606F\u901A\u77E5\u5F39\u6846 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uni-hints</span>  <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>noStatus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uni-hints</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClink<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>80vh<span class="token punctuation">;</span><span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span><span class="token property">line-height</span><span class="token punctuation">:</span> 80vh<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
			\u5404\u79CD\u5F39\u6846
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">{</span>
				
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		
		<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token function">onClink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>noStatus <span class="token operator">=</span> <span class="token boolean">true</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[e];function o(l,i){return s(),a("div",null,c)}var r=n(p,[["render",o],["__file","\u8986\u76D6\u539F\u751Ftabbar\u906E\u7F69.html.vue"]]);export{r as default};
