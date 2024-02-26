import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,d as t,a as s,e as a}from"./app-oGr5u-1Z.js";const d={},l=s("p",null," ",-1),r=a(`<h1 id="pinia状态管理的使用" tabindex="-1"><a class="header-anchor" href="#pinia状态管理的使用" aria-hidden="true">#</a> pinia状态管理的使用</h1><h2 id="main-js配置" tabindex="-1"><a class="header-anchor" href="#main-js配置" aria-hidden="true">#</a> main.js配置</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { createSSRApp } from &#39;vue&#39;;
import * as Pinia from &#39;pinia&#39;;

export function createApp() {
	const app = createSSRApp(App);
	app.use(Pinia.createPinia());
	return {
		app,
		Pinia, // 此处必须将 Pinia 返回
	};
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建一个pinia" tabindex="-1"><a class="header-anchor" href="#创建一个pinia" aria-hidden="true">#</a> 创建一个pinia</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// stores/counter.js
import { defineStore } from &#39;pinia&#39;;

export const useCounterStore = defineStore(&#39;counter&#39;, {
	state: () =&gt; {
		return { count: 0 };
	},
	// 也可以这样定义
	// state: () =&gt; ({ count: 0 })
	actions: {
		increment() {
			this.count++;
		},
	},
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件和页面使用" tabindex="-1"><a class="header-anchor" href="#组件和页面使用" aria-hidden="true">#</a> 组件和页面使用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
	&lt;view&gt;
		&lt;view&gt;{{count}}&lt;/view&gt;
		&lt;button  @click=&quot;setNum&quot;&gt;点击&lt;/button&gt;
	&lt;/view&gt;
&lt;/template&gt;

&lt;script setup&gt;
	// 导入ref响应数据
	import {ref} from &#39;vue&#39;
	import { useCounterStore } from &#39;@/stores/counter&#39;; 
	const counter = useCounterStore();
	let count = ref(0)
	const setNum = ()=&gt;{
		counter.increment()
		count.value = counter.count
	}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function c(v,u){return i(),n("div",null,[l,t(" more "),r])}const b=e(d,[["render",c],["__file","pinia状态管理使用.html.vue"]]);export{b as default};
