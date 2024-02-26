import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,d as t,a as s,e as a}from"./app-oGr5u-1Z.js";const l={},d=s("p",null," ",-1),r=a(`<h1 id="vue3全局挂载" tabindex="-1"><a class="header-anchor" href="#vue3全局挂载" aria-hidden="true">#</a> vue3全局挂载</h1><h2 id="main-ts" tabindex="-1"><a class="header-anchor" href="#main-ts" aria-hidden="true">#</a> main.ts</h2><p>扩展全局变量的接口内容，需要扩展ComponentCustomProperties这个接口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>declare module &quot;vue&quot; {
  export interface ComponentCustomProperties {
    $Bus: typeof mit,
    $metaList: any;
  }
}
&lt;!-- 定义全局变量 --&gt;
app.config.globalProperties.$metaList = &#39;&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新全局变量" tabindex="-1"><a class="header-anchor" href="#更新全局变量" aria-hidden="true">#</a> 更新全局变量</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- login.vue --&gt;
let internalInstance: any = getCurrentInstance();

internalInstance.appContext.config.globalProperties.$metaList = &#39;33333333333333&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 页面中直接使用 --&gt;
&lt;template&gt;
    &lt;div class=&quot;container&quot;&gt;
        {{ $metaList }}
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
	import { reactive, ref } from &#39;vue&#39;;
	import { ElMessage } from &#39;element-plus&#39;;
	import type { FormInstance, FormRules } from &#39;element-plus&#39;;
	&lt;!-- ts中使用 --&gt;
	const { proxy }: any = getCurrentInstance()
	console.log(&#39;打印元数据&#39;)
	console.log(proxy.$metaList)
&lt;/script&gt;
&lt;style&gt;
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function c(v,u){return n(),i("div",null,[d,t(" more "),r])}const b=e(l,[["render",c],["__file","vue3全局挂载.html.vue"]]);export{b as default};
