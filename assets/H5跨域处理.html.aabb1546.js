import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.3c425ae9.js";const p={},e=t(`<h1 id="h5\u8DE8\u57DF\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#h5\u8DE8\u57DF\u5904\u7406" aria-hidden="true">#</a> H5\u8DE8\u57DF\u5904\u7406</h1><p>\u6BD4\u5982\u6211\u4EEC\u518D\u5C01\u88C5\u7684http.js\u8BF7\u6C42\u4E2D\u4F7F\u7528\u7684\u57DF\u540D\u662Fhttps\u7684,\u4F8B\u5982\uFF1A<strong>https:ddb.cc.com</strong></p><p>\u8FD9\u91CC\u8FD8\u662F\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>url: baseUrl + url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0D\u9700\u8981\u4F7F\u7528url\uFF0C\u9700\u8981\u628A\u57DF\u540D\u6DFB\u52A0\u4E0A\u53BB\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>url: url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> baseUrl <span class="token operator">=</span> <span class="token string">&quot;https:ddb.cc.com&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u6D4B\u8BD5\u73AF\u5883</span>
<span class="token keyword">const</span> $http <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token comment">/*
	url \u8DEF\u5F84\u5730\u5740
	data \u4F20\u9012\u7684\u6570\u636E
	methods \u8BF7\u6C42\u7C7B\u578B POST
	dataType  \u6570\u636E\u683C\u5F0F\u8F6C\u6210
	token token\u6570\u636E
	headers  headers\u5934\u90E8\u6570\u636E
	*/</span>
	<span class="token function-variable function">httpRequest</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
		url<span class="token punctuation">,</span>
		data<span class="token punctuation">,</span>
		methods<span class="token punctuation">,</span>
		dataType\uFF0C
		token<span class="token punctuation">,</span>
		headers
	<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			uni<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
				<span class="token literal-property property">url</span><span class="token operator">:</span> baseUrl <span class="token operator">+</span> url<span class="token punctuation">,</span>
				<span class="token literal-property property">data</span><span class="token operator">:</span> data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token literal-property property">method</span><span class="token operator">:</span> methods <span class="token operator">||</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">dataType</span><span class="token operator">:</span> dataType <span class="token operator">||</span> <span class="token string">&quot;JSON&quot;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">header</span><span class="token operator">:</span>  <span class="token punctuation">{</span>
					<span class="token string-property property">&quot;token&quot;</span><span class="token operator">:</span> uni<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token string">&#39;SESSION&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>token <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
					<span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> headers <span class="token operator">||</span> <span class="token string">&quot;application/x-www-form-urlencoded&quot;</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token comment">// \u5224\u65AD\u63A5\u53E3\u662F\u5426\u6B63\u5E38</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>statusCode <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token comment">// \u8FD4\u56DE\u6210\u529F\u540E\u5BF9\u6570\u636E\u8FDB\u884C\u5904\u7406,\u8FD9\u513F\u8FD4\u56DE\u72B6\u6001\u662F\u5B57\u7B26\u4E32\uFF08\u6839\u636E\u540E\u7AEF\u8FD4\u56DE\u4E3A\u51C6\uFF09 \u8F6C\u6362</span>
						
						<span class="token comment">//\u9700\u8981\u5904\u7406\u4E00\u4E0B\uFF0Cuniapp\u548C\u5C0F\u7A0B\u5E8F\u8FD4\u56DE\u7684\u4E0D\u4E00\u6837</span>
						<span class="token comment">// #ifdef  APP-PLUS</span>
						<span class="token keyword">var</span> resData <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
						<span class="token comment">// #endif</span>
						<span class="token comment">// #ifdef  MP-WEIXIN</span>
						<span class="token keyword">var</span> resData <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
						<span class="token comment">// #endif</span>
						<span class="token keyword">if</span> <span class="token punctuation">(</span>resData<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//\u63A5\u53E3\u8FDE\u63A5\u6210\u529F\u8C03\u7528</span>
							<span class="token function">resolve</span><span class="token punctuation">(</span>resData<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u8D70  .tnen()\u65B9\u6CD5</span>
						<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>resData<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//\u63A5\u53E3\u8FDE\u63A5\u5931\u8D25\u8C03\u7528</span>
							<span class="token function">reject</span><span class="token punctuation">(</span>resData<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u8D70   .catch()\u65B9\u6CD5</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
						uni<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
						uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
							<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u7F51\u7EDC\u7E41\u5FD9\uFF01&#39;</span><span class="token punctuation">,</span>
							<span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
							<span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span>
						<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>		
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					uni<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> $http<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5728<strong>manifest.json</strong>\u6E90\u7801\u89C6\u56FE\u4E2D\u914D\u7F6EH5\u8BF7\u6C42\u8DE8\u57DF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;h5&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;devServer&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;disableHostCheck&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;proxy&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;/api&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;target&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;https:ddb.cc.com&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u4F60\u9700\u8981\u53CD\u5411\u4EE3\u7406\u7684\u57DF\u540D\u6216ip,</span>
                    <span class="token string-property property">&quot;changeOrigin&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;secure&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;pathRewrite&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token string-property property">&quot;^/api&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;/&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u5C31\u5B8C\u6210\u4E86</p>`,11),o=[e];function c(i,l){return s(),a("div",null,o)}var d=n(p,[["render",c],["__file","H5\u8DE8\u57DF\u5904\u7406.html.vue"]]);export{d as default};
