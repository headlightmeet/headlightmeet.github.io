import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t,a as p,e}from"./app-oGr5u-1Z.js";const i={},c=p("p",null," ",-1),o=e(`<h1 id="组件之间传递参数" tabindex="-1"><a class="header-anchor" href="#组件之间传递参数" aria-hidden="true">#</a> 组件之间传递参数</h1><h2 id="on-emit-off" tabindex="-1"><a class="header-anchor" href="#on-emit-off" aria-hidden="true">#</a> $on,$emit,$off</h2><p>在页面与页面之间通讯时，很多人会直接选择使用在navigato的时候直接拼接字符串来传递。可是当需要传依个比较多数据的的对象的时候这个方式就不是很管用了，为此uniapp给我们提供了页面与页面之间通讯的极为简便的方法。</p><p>比如我在下订单页面的时候需要用户选择一个地址去配送，因此我们需要点击之后跳转到选择收货地址页面。而在选择完了收货地址以后需要关闭那个页面返回该订单页面。因此在该订单页面我们需要开启监听用户选择地址的事件。注意在订单页面卸载的时候也要记得关闭该监听。</p><p>下面为订单页面的代码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function-name function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			
	//开启监听选择收货地址事件
	uni.<span class="token variable">$on</span><span class="token punctuation">(</span><span class="token string">&#39;choosePath&#39;</span>,<span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>
		this.path <span class="token operator">=</span> res<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>,
		
//页面卸载
	<span class="token function-name function">onUnload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		//关闭监听选择收货地址事件
	uni.<span class="token variable">$off</span><span class="token punctuation">(</span><span class="token string">&#39;choosePath&#39;</span>,<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>
		console.log<span class="token punctuation">(</span><span class="token string">&#39;关闭监听选择收货地址&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>,
	
methods: <span class="token punctuation">{</span>
	<span class="token function-name function">openPathList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	    uni.navigateTo<span class="token punctuation">(</span><span class="token punctuation">{</span>
	        url: <span class="token string">&#39;../user-path-list/user-path-list?type=choose&#39;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>,
<span class="token punctuation">}</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是选择地址的页面：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>onLoad<span class="token punctuation">(</span>option<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	if<span class="token punctuation">(</span>option.type<span class="token operator">==</span><span class="token operator">=</span><span class="token string">&#39;choose&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		this.isChoose <span class="token operator">=</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>,
 
methods:<span class="token punctuation">{</span>
    //选择收获地址
	choosePath<span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">{</span>
		if<span class="token punctuation">(</span>this.isChoose<span class="token punctuation">)</span><span class="token punctuation">{</span>
			//通知订单页面修改地址
			uni.<span class="token variable">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;choosePath&#39;</span>,item<span class="token punctuation">)</span>
			//关闭当前页面
			uni.navigateBack<span class="token punctuation">(</span><span class="token punctuation">{</span>
				delta: <span class="token number">1</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="跨级组件传递状态" tabindex="-1"><a class="header-anchor" href="#跨级组件传递状态" aria-hidden="true">#</a> 跨级组件传递状态</h2><p>使用 Provide Inject 选项 父组件中：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token attr-name">:msg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Demo</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
 export default {
     provide(){
         return {
             handleClick: () =&gt; {
                 // do something
             }
         }
     }
 };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件中：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;DEMO&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;handleClick&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function l(u,d){return s(),a("div",null,[c,t(" more "),o])}const v=n(i,[["render",l],["__file","组件之间传递参数.html.vue"]]);export{v as default};
