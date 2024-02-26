import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e,a as t,e as o}from"./app-oGr5u-1Z.js";const c={},i=t("p",null," ",-1),l=o(`<h1 id="防抖节流" tabindex="-1"><a class="header-anchor" href="#防抖节流" aria-hidden="true">#</a> 防抖节流</h1><p>防抖就是（当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时，销毁上一次的定时器）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	// 防抖操作
	const self <span class="token operator">=</span> this<span class="token punctuation">;</span>
	//频繁点击的时候销毁上一个定时器
	clearTimeout<span class="token punctuation">(</span>self.tiems<span class="token punctuation">)</span><span class="token punctuation">;</span>
	//当没有频繁点击后，最后执行的定时器
	self.tiems <span class="token operator">=</span> setTimeout<span class="token punctuation">((</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
		//里面写执行代码
	<span class="token punctuation">}</span>, <span class="token number">1000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function p(r,d){return s(),a("div",null,[i,e(" more "),l])}const v=n(c,[["render",p],["__file","防抖节流.html.vue"]]);export{v as default};
