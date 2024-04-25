import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as p,d as n,a as e,e as s}from"./app-PxqKmrwv.js";const c={},o=e("p",null," ",-1),l=s(`<h1 id="覆盖原生tabbar遮罩" tabindex="-1"><a class="header-anchor" href="#覆盖原生tabbar遮罩" aria-hidden="true">#</a> 覆盖原生tabbar遮罩</h1><p>背景：根据需求需要制作一个所有页面可以调用的弹框组件，但是在做遮罩的时候，发现遮罩层不会遮罩tabbar。又因为自定义tabbar方式有缺陷，所以才有如下方式。 思路： 1、在App端：使用5+api方式来判断当前是tabbar页面就使用原生写法遮挡住tabbar部分即可 2、在小程序端：只有使用uni.hideTabBar()来隐藏这个操作了</p><h2 id="定义调用原生遮罩js" tabindex="-1"><a class="header-anchor" href="#定义调用原生遮罩js" aria-hidden="true">#</a> 定义调用原生遮罩js</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//mask.js</span>
<span class="token keyword">const</span> $evt <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">maskLayer</span><span class="token operator">:</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token comment">//原生弹框对象</span>
	<span class="token comment">//加载弹框</span>
	<span class="token function">nativeObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
		uni<span class="token punctuation">.</span><span class="token function">getSystemInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 获取到屏幕总高-可用屏幕高(因为我这里是自定义的导航栏，所以导航栏也算在可用屏幕高里面的)</span>
				that<span class="token punctuation">.</span><span class="token function">nativeObjects</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>screenHeight<span class="token punctuation">,</span>res<span class="token punctuation">.</span>windowHeight<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function">nativeObjects</span><span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span>i</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">let</span> heights <span class="token operator">=</span> e<span class="token operator">-</span>i
		<span class="token comment">//打开等待弹框</span>
		<span class="token comment">//this.maskLayer.show()</span>
		
		<span class="token comment">//关闭等待框</span>
		<span class="token comment">//this.maskLayer.hide();</span>
		
		<span class="token comment">//屏幕宽度</span>
		<span class="token keyword">const</span> screenWidth <span class="token operator">=</span> plus<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>resolutionWidth<span class="token punctuation">;</span>
		<span class="token comment">//屏幕高度</span>
		<span class="token keyword">const</span> screenHeight <span class="token operator">=</span> plus<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>resolutionHeight<span class="token punctuation">;</span>
		
		<span class="token comment">// 弹窗遮罩层(这里只做遮罩tabbar部分)</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>maskLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">plus<span class="token punctuation">.</span>nativeObj<span class="token punctuation">.</span>View</span><span class="token punctuation">(</span><span class="token string">&quot;maskLayer&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token comment">//先创建遮罩层</span>
			<span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&#39;0px&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;0px&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">height</span><span class="token operator">:</span> heights<span class="token operator">+</span><span class="token string">&#39;px&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;rgba(0,0,0,0.4)&#39;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token comment">// 打开弹框</span>
	<span class="token function">maskLayerShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>maskLayer<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">// 关闭弹框</span>
	<span class="token function">maskLayerHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>maskLayer<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> $evt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编写组件" tabindex="-1"><a class="header-anchor" href="#编写组件" aria-hidden="true">#</a> 编写组件</h2>`,5),i=s(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!-- 各种状态弹框 --&gt;</span>
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
		<span class="token comment">// 在实例创建完成后被立即调用</span>
		<span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;初始调用&#39;</span><span class="token punctuation">)</span>

			<span class="token keyword">var</span> pages <span class="token operator">=</span> <span class="token function">getCurrentPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 获取栈实例</span>
			<span class="token keyword">let</span> currentRoute <span class="token operator">=</span> pages<span class="token punctuation">[</span>pages<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>route<span class="token punctuation">;</span>
			<span class="token comment">//监听的当前页面不是钥匙页面或我的页面，则不执行下面操作</span>
			<span class="token keyword">let</span> curren <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;pages/home/home&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;pages/user/user&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;pages/position/position&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;pages/positions/positions&#39;</span><span class="token punctuation">]</span> 
			<span class="token keyword">if</span><span class="token punctuation">(</span>curren<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>currentRoute<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token comment">// app端在tabbar部分，使用原生遮罩来遮罩底部选项一部分区域</span>
				<span class="token comment">// #ifdef APP-PLUS</span>
				masks<span class="token punctuation">.</span><span class="token function">nativeObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				masks<span class="token punctuation">.</span><span class="token function">maskLayerShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token comment">// #endif</span>
				
				<span class="token comment">// 小程序端tabbar部分，则是隐藏tabber部分</span>
				<span class="token comment">// #ifdef MP-WEIXIN</span>
				uni<span class="token punctuation">.</span><span class="token function">hideTabBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token comment">// #endif</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;销毁调用&#39;</span><span class="token punctuation">)</span>
			
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面使用" tabindex="-1"><a class="header-anchor" href="#页面使用" aria-hidden="true">#</a> 页面使用</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- index.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!-- 消息通知弹框 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uni-hints</span>  <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>noStatus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uni-hints</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClink<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>80vh<span class="token punctuation">;</span><span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span><span class="token property">line-height</span><span class="token punctuation">:</span> 80vh<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
			各种弹框
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function u(k,r){return t(),p("div",null,[o,n(" more "),l,n(" uni-hints.vue "),i])}const m=a(c,[["render",u],["__file","覆盖原生tabbar遮罩.html.vue"]]);export{m as default};
