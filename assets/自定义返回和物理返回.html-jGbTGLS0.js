import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as a,d as e,a as n,e as i}from"./app-PxqKmrwv.js";const p={},l=n("p",null,"--- title: 自定义返回和物理返回 category:",-1),o=n("ul",null,[n("li",null,"前端 tag:"),n("li",null,"uniapp")],-1),c=n("hr",null,null,-1),u=n("p",null," ",-1),r=i(`<h1 id="自定义返回和物理返回" tabindex="-1"><a class="header-anchor" href="#自定义返回和物理返回" aria-hidden="true">#</a> 自定义返回和物理返回</h1><p>在pages.json中可以使用自己去找的图标样式</p><img src="https://jitems.gitee.io/myblog/blog/bk234.png" alt="solar"><img src="https://jitems.gitee.io/myblog/blog/bk235.png" alt="solar"><img src="https://jitems.gitee.io/myblog/blog/bk236.png" alt="solar"><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
			<span class="token string">&quot;path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pages/myOrder/myOrder&quot;</span>,
			<span class="token string">&quot;style&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
				<span class="token string">&quot;navigationBarTitleText&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;我的订单&quot;</span>,
				<span class="token string">&quot;navigationBarBackgroundColor&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;#fff&quot;</span>,
				<span class="token string">&quot;app-plus&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
				    <span class="token string">&quot;titleNView&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>  
						<span class="token string">&quot;autoBackButton&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;false&quot;</span>,
						<span class="token string">&quot;buttons&quot;</span>:<span class="token punctuation">[</span>
							<span class="token punctuation">{</span>
								<span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;<span class="token entity" title="\\ue601">\\ue601</span>&quot;</span>,
								<span class="token string">&quot;fontSrc&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;/static/iconfont.ttf&quot;</span>,
								<span class="token string">&quot;float&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;left&quot;</span>,
								<span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;none&quot;</span>
							<span class="token punctuation">}</span>
						<span class="token punctuation">]</span>
				    <span class="token punctuation">}</span>  
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在vue页面中与methods同级</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 自定义返回事件,跳转到首页
		onNavigationBarButtonTap: function<span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token builtin class-name">let</span> routes <span class="token operator">=</span> getCurrentPages<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token builtin class-name">let</span> curRoute <span class="token operator">=</span> routes<span class="token punctuation">[</span>routes.length - <span class="token number">2</span><span class="token punctuation">]</span>.route
			// 获取上一个页面路径
			console.log<span class="token punctuation">(</span>curRoute<span class="token punctuation">)</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>curRoute <span class="token operator">!=</span> <span class="token string">&quot;pages/my/my&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				uni.switchTab<span class="token punctuation">(</span><span class="token punctuation">{</span>
					url: <span class="token string">&#39;/pages/my/my&#39;</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				uni.navigateBack<span class="token punctuation">(</span><span class="token punctuation">{</span>
				    delta: <span class="token number">1</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>,
		// 物理返回
		<span class="token function-name function">onBackPress</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> //与methods同级
			//尽量少使用uni.reLaunch
			<span class="token builtin class-name">let</span> routes <span class="token operator">=</span> getCurrentPages<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token builtin class-name">let</span> curRoute <span class="token operator">=</span> routes<span class="token punctuation">[</span>routes.length - <span class="token number">2</span><span class="token punctuation">]</span>.route
			// 获取上一个页面路径
			<span class="token keyword">if</span> <span class="token punctuation">(</span>curRoute <span class="token operator">!=</span> <span class="token string">&quot;pages/my/my&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				uni.switchTab<span class="token punctuation">(</span><span class="token punctuation">{</span>
					url: <span class="token string">&#39;/pages/my/my&#39;</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				uni.navigateBack<span class="token punctuation">(</span><span class="token punctuation">{</span>
				    delta: <span class="token number">1</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token builtin class-name">return</span> <span class="token boolean">true</span> //只有在该函数中返回值为 <span class="token boolean">true</span> 时，才表示不执行默认的返回，自行处理此时的业务逻辑
		<span class="token punctuation">}</span>,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function d(k,v){return t(),a("div",null,[l,o,c,u,e(" more "),r])}const g=s(p,[["render",d],["__file","自定义返回和物理返回.html.vue"]]);export{g as default};
