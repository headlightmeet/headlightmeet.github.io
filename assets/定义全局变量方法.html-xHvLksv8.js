import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as e,d as t,a as n,e as p}from"./app-oGr5u-1Z.js";const i={},o=n("p",null,"--- title: 定义全局变量方法 category:",-1),l=n("ul",null,[n("li",null,"前端 tag:"),n("li",null,"uniapp")],-1),c=n("hr",null,null,-1),u=n("p",null," ",-1),r=p(`<h1 id="定义全局变量方法" tabindex="-1"><a class="header-anchor" href="#定义全局变量方法" aria-hidden="true">#</a> 定义全局变量方法</h1><h4 id="当我们开发uniapp的时候-会想到全局变量-全端存储到全局中-调用起来非常方便" tabindex="-1"><a class="header-anchor" href="#当我们开发uniapp的时候-会想到全局变量-全端存储到全局中-调用起来非常方便" aria-hidden="true">#</a> 当我们开发uniapp的时候，会想到全局变量，全端存储到全局中，调用起来非常方便</h4><h2 id="main-js代码" tabindex="-1"><a class="header-anchor" href="#main-js代码" aria-hidden="true">#</a> main.js代码</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">import</span> Vue from <span class="token string">&#39;vue&#39;</span>
<span class="token function">import</span> App from <span class="token string">&#39;./App&#39;</span>
Vue.config.productionTip <span class="token operator">=</span> <span class="token boolean">false</span>

Vue.prototype.globalData <span class="token operator">=</span> <span class="token punctuation">{</span>
	 addressId:<span class="token string">&#39;&#39;</span>,//默认地址
<span class="token punctuation">}</span>
<span class="token assign-left variable">Vue.prototype.baseUrl</span><span class="token operator">=</span>  <span class="token string">&quot;http://XXX.XXX.XXX/&quot;</span><span class="token punctuation">;</span> // 测试环境
// <span class="token assign-left variable">Vue.prototype.baseUrl</span><span class="token operator">=</span>  <span class="token string">&quot;https://XXX.XXX.XXX/&quot;</span><span class="token punctuation">;</span> // 正式环境
// 全局授权登录
Vue.prototype.authorize <span class="token operator">=</span> <span class="token function-name function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	// 跳转到登录页面
	uni.navigateTo<span class="token punctuation">(</span><span class="token punctuation">{</span>
		url: <span class="token string">&#39;/pages/logon/logon&#39;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
App.mpType <span class="token operator">=</span> <span class="token string">&#39;app&#39;</span>

const app <span class="token operator">=</span> new Vue<span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token punctuation">..</span>.App
<span class="token punctuation">}</span><span class="token punctuation">)</span>
app.<span class="token variable">$mount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue页面中使用" tabindex="-1"><a class="header-anchor" href="#vue页面中使用" aria-hidden="true">#</a> vue页面中使用</h2><p><strong>调用方法很简单，这里做一个调用全局中 authorize() 全局授权登录的案例</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bannerClickEvent<span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	var self <span class="token operator">=</span> this<span class="token punctuation">;</span>
	<span class="token builtin class-name">let</span> session <span class="token operator">=</span> uni.getStorageSync<span class="token punctuation">(</span><span class="token string">&#39;SESSION&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>session <span class="token operator">!=</span><span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		self.authorize<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function d(v,k){return a(),e("div",null,[o,l,c,u,t(" more "),r])}const h=s(i,[["render",d],["__file","定义全局变量方法.html.vue"]]);export{h as default};
