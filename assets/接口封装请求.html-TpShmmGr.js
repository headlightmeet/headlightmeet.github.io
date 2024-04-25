import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as t,d as p,a as n,e}from"./app-PxqKmrwv.js";const o={},c=n("p",null,"--- title: 接口封装请求 category:",-1),l=n("ul",null,[n("li",null,"前端 tag:"),n("li",null,"uniapp")],-1),i=n("hr",null,null,-1),u=n("p",null," ",-1),r=e(`<h1 id="接口封装请求" tabindex="-1"><a class="header-anchor" href="#接口封装请求" aria-hidden="true">#</a> 接口封装请求</h1><img src="https://jitems.gitee.io/myblog/blog/bk225.png" alt="solar"><h3 id="utils-http-http-js文件-一层封装请求" tabindex="-1"><a class="header-anchor" href="#utils-http-http-js文件-一层封装请求" aria-hidden="true">#</a> utils&gt;http&gt;http.js文件 一层封装请求</h3><p>//post和get请求封装</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> baseUrl <span class="token operator">=</span> <span class="token string">&quot;XXXXXXXXX&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 测试环境</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="utils-api-logon-js文件-二层封装统一管理接口" tabindex="-1"><a class="header-anchor" href="#utils-api-logon-js文件-二层封装统一管理接口" aria-hidden="true">#</a> utils&gt;api&gt;logon.js文件 二层封装统一管理接口</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入请求js</span>
<span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">&#39;@/utils/http/http.js&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 登录接口统一管理</span>
<span class="token keyword">const</span> $http <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token comment">//比如说是 login 登录接口,</span>
	<span class="token function-variable function">getcode</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">params<span class="token punctuation">,</span>methods</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> config<span class="token punctuation">.</span><span class="token function">httpRequest</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;Common/GetCode&#39;</span><span class="token punctuation">,</span>params<span class="token punctuation">,</span>methods<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> $http<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="logon-vue文件中调用方法" tabindex="-1"><a class="header-anchor" href="#logon-vue文件中调用方法" aria-hidden="true">#</a> logon.vue文件中调用方法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
	<span class="token keyword">import</span> logon <span class="token keyword">from</span> <span class="token string">&#39;@/utils/api/logon.js&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>logonChecked<span class="token punctuation">)</span>
				<span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
				<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
					<span class="token literal-property property">phone</span><span class="token operator">:</span> self<span class="token punctuation">.</span>phone
				<span class="token punctuation">}</span><span class="token punctuation">;</span>
				<span class="token keyword">let</span> methods <span class="token operator">=</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">;</span>
				logon<span class="token punctuation">.</span><span class="token function">getcode</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> methods<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
					self<span class="token punctuation">.</span>title <span class="token operator">=</span> res<span class="token punctuation">;</span>
					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
					<span class="token comment">//如果有需要，个别单独接口可以监听失败操作</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就完成了，如果有帮到你，可以点一个赞哦！！！</p>`,10);function k(d,v){return a(),t("div",null,[c,l,i,u,p(" more "),r])}const h=s(o,[["render",k],["__file","接口封装请求.html.vue"]]);export{h as default};
