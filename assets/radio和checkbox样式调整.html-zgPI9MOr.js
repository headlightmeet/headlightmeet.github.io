import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,d as s,a as i,e as d}from"./app-PxqKmrwv.js";const c={},t=i("p",null," ",-1),r=d(`<h1 id="radio和checkbox样式调整" tabindex="-1"><a class="header-anchor" href="#radio和checkbox样式调整" aria-hidden="true">#</a> radio和checkbox样式调整</h1><h2 id="radio样式" tabindex="-1"><a class="header-anchor" href="#radio样式" aria-hidden="true">#</a> radio样式</h2><p>在css中添加如下代码，修改选中颜色</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>uni-radio:not<span class="token punctuation">(</span><span class="token punctuation">[</span>disabled<span class="token punctuation">]</span><span class="token punctuation">)</span> .uni-radio-input:hover <span class="token punctuation">{</span>
	border-color: <span class="token comment">#d1d1d1;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在css中添加如下代码，即可实现选中状态填充颜色渐变</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>.uni-radio-input-checked<span class="token punctuation">{</span>
	background: linear-gradient<span class="token punctuation">(</span>142deg,<span class="token comment">#FF9200 0%,#FF2B2B 100%);</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="checkbox样式" tabindex="-1"><a class="header-anchor" href="#checkbox样式" aria-hidden="true">#</a> checkbox样式</h2><p>在css中添加如下代码，即可去除复选框右边的边距</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>uni-checkbox .uni-checkbox-input {
	margin-right: 0 !important;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在css中添加如下代码，修改选中颜色</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>uni-checkbox:not([disabled]) .uni-checkbox-input:hover {
	border-color: #d1d1d1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在css中添加如下代码，即可实现选中状态填充颜色</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.uni-checkbox-input-checked{
	background: linear-gradient(0,blue 0%,blue 100%);
	border-color: blue;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function l(o,u){return n(),a("div",null,[t,s(" more "),r])}const v=e(c,[["render",l],["__file","radio和checkbox样式调整.html.vue"]]);export{v as default};
