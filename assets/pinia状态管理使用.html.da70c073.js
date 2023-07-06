import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,a as t}from"./app.3c425ae9.js";const s={},a=t(`<h1 id="pinia\u72B6\u6001\u7BA1\u7406\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#pinia\u72B6\u6001\u7BA1\u7406\u7684\u4F7F\u7528" aria-hidden="true">#</a> pinia\u72B6\u6001\u7BA1\u7406\u7684\u4F7F\u7528</h1><h2 id="main-js\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#main-js\u914D\u7F6E" aria-hidden="true">#</a> main.js\u914D\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { createSSRApp } from &#39;vue&#39;;
import * as Pinia from &#39;pinia&#39;;

export function createApp() {
	const app = createSSRApp(App);
	app.use(Pinia.createPinia());
	return {
		app,
		Pinia, // \u6B64\u5904\u5FC5\u987B\u5C06 Pinia \u8FD4\u56DE
	};
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u521B\u5EFA\u4E00\u4E2Apinia" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2Apinia" aria-hidden="true">#</a> \u521B\u5EFA\u4E00\u4E2Apinia</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// stores/counter.js
import { defineStore } from &#39;pinia&#39;;

export const useCounterStore = defineStore(&#39;counter&#39;, {
	state: () =&gt; {
		return { count: 0 };
	},
	// \u4E5F\u53EF\u4EE5\u8FD9\u6837\u5B9A\u4E49
	// state: () =&gt; ({ count: 0 })
	actions: {
		increment() {
			this.count++;
		},
	},
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EC4\u4EF6\u548C\u9875\u9762\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u548C\u9875\u9762\u4F7F\u7528" aria-hidden="true">#</a> \u7EC4\u4EF6\u548C\u9875\u9762\u4F7F\u7528</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;template&gt;
	&lt;view&gt;
		&lt;view&gt;{{count}}&lt;/view&gt;
		&lt;button  @click=&quot;setNum&quot;&gt;\u70B9\u51FB&lt;/button&gt;
	&lt;/view&gt;
&lt;/template&gt;

&lt;script setup&gt;
	// \u5BFC\u5165ref\u54CD\u5E94\u6570\u636E
	import {ref} from &#39;vue&#39;
	import { useCounterStore } from &#39;@/stores/counter&#39;; 
	const counter = useCounterStore();
	let count = ref(0)
	const setNum = ()=&gt;{
		counter.increment()
		count.value = counter.count
	}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d=[a];function l(r,v){return i(),n("div",null,d)}var m=e(s,[["render",l],["__file","pinia\u72B6\u6001\u7BA1\u7406\u4F7F\u7528.html.vue"]]);export{m as default};
