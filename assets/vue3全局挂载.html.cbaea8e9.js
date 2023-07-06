import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,a as t}from"./app.3c425ae9.js";const s={},a=t(`<h1 id="vue3\u5168\u5C40\u6302\u8F7D" tabindex="-1"><a class="header-anchor" href="#vue3\u5168\u5C40\u6302\u8F7D" aria-hidden="true">#</a> vue3\u5168\u5C40\u6302\u8F7D</h1><h2 id="main-ts" tabindex="-1"><a class="header-anchor" href="#main-ts" aria-hidden="true">#</a> main.ts</h2><p>\u6269\u5C55\u5168\u5C40\u53D8\u91CF\u7684\u63A5\u53E3\u5185\u5BB9\uFF0C\u9700\u8981\u6269\u5C55ComponentCustomProperties\u8FD9\u4E2A\u63A5\u53E3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>declare module &quot;vue&quot; {
  export interface ComponentCustomProperties {
    $Bus: typeof mit,
    $metaList: any;
  }
}
&lt;!-- \u5B9A\u4E49\u5168\u5C40\u53D8\u91CF --&gt;
app.config.globalProperties.$metaList = &#39;&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u66F4\u65B0\u5168\u5C40\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a> \u66F4\u65B0\u5168\u5C40\u53D8\u91CF</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!-- login.vue --&gt;
let internalInstance: any = getCurrentInstance();

internalInstance.appContext.config.globalProperties.$metaList = &#39;33333333333333&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!-- \u9875\u9762\u4E2D\u76F4\u63A5\u4F7F\u7528 --&gt;
&lt;template&gt;
    &lt;div class=&quot;container&quot;&gt;
        {{ $metaList }}
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
	import { reactive, ref } from &#39;vue&#39;;
	import { ElMessage } from &#39;element-plus&#39;;
	import type { FormInstance, FormRules } from &#39;element-plus&#39;;
	&lt;!-- ts\u4E2D\u4F7F\u7528 --&gt;
	const { proxy }: any = getCurrentInstance()
	console.log(&#39;\u6253\u5370\u5143\u6570\u636E&#39;)
	console.log(proxy.$metaList)
&lt;/script&gt;
&lt;style&gt;
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[a];function d(r,c){return n(),i("div",null,l)}var m=e(s,[["render",d],["__file","vue3\u5168\u5C40\u6302\u8F7D.html.vue"]]);export{m as default};
