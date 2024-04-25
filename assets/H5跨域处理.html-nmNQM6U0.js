import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t,a as p,e}from"./app-PxqKmrwv.js";const o={},c=p("p",null," ",-1),i=e(`<h1 id="h5跨域处理" tabindex="-1"><a class="header-anchor" href="#h5跨域处理" aria-hidden="true">#</a> H5跨域处理</h1><p>比如我们再封装的http.js请求中使用的域名是https的,例如：<strong>https:ddb.cc.com</strong></p><p>这里还是使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>url: baseUrl + url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不需要使用url，需要把域名添加上去使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>url: url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>完整代码如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> baseUrl <span class="token operator">=</span> <span class="token string">&quot;https:ddb.cc.com&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 测试环境</span>
<span class="token keyword">const</span> $http <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token comment">/*
	url 路径地址
	data 传递的数据
	methods 请求类型 POST
	dataType  数据格式转成
	token token数据
	headers  headers头部数据
	*/</span>
	<span class="token function-variable function">httpRequest</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
		url<span class="token punctuation">,</span>
		data<span class="token punctuation">,</span>
		methods<span class="token punctuation">,</span>
		dataType，
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
					<span class="token comment">// 判断接口是否正常</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>statusCode <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token comment">// 返回成功后对数据进行处理,这儿返回状态是字符串（根据后端返回为准） 转换</span>
						
						<span class="token comment">//需要处理一下，uniapp和小程序返回的不一样</span>
						<span class="token comment">// #ifdef  APP-PLUS</span>
						<span class="token keyword">var</span> resData <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
						<span class="token comment">// #endif</span>
						<span class="token comment">// #ifdef  MP-WEIXIN</span>
						<span class="token keyword">var</span> resData <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
						<span class="token comment">// #endif</span>
						<span class="token keyword">if</span> <span class="token punctuation">(</span>resData<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//接口连接成功调用</span>
							<span class="token function">resolve</span><span class="token punctuation">(</span>resData<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//走  .tnen()方法</span>
						<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>resData<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//接口连接失败调用</span>
							<span class="token function">reject</span><span class="token punctuation">(</span>resData<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//走   .catch()方法</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
						uni<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
						uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
							<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;网络繁忙！&#39;</span><span class="token punctuation">,</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在<strong>manifest.json</strong>源码视图中配置H5请求跨域</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;h5&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;devServer&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;disableHostCheck&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;proxy&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;/api&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;target&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;https:ddb.cc.com&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 你需要反向代理的域名或ip,</span>
                    <span class="token string-property property">&quot;changeOrigin&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;secure&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;pathRewrite&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token string-property property">&quot;^/api&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;/&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就完成了</p>`,11);function l(u,r){return s(),a("div",null,[c,t(" more "),i])}const v=n(o,[["render",l],["__file","H5跨域处理.html.vue"]]);export{v as default};
