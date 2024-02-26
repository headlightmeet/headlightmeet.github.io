import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,d as s,a as l,e as t}from"./app-oGr5u-1Z.js";const d={},a=l("p",null," ",-1),v=t(`<h1 id="状态管理及cookie" tabindex="-1"><a class="header-anchor" href="#状态管理及cookie" aria-hidden="true">#</a> 状态管理及cookie</h1><p>在Nuxt2中，如果我们要使用cookie,需要引入插件js-cookie，在Nuxt3中，也不再集成Vuex，可以利用Nuxt3的composables自动导入属性，把它们定义在composables目录中，这样他们将成为全局类型安全的状态。</p><p><strong>1、useState使用</strong></p><p>首先我们需要在项目的根目录新建composables文件夹，然后创建状态管理文件如：composables/state.ts.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//首先引入useState、useCookie
import { useState, useCookie } from &quot;nuxt/app&quot;;

export const userLangeages = () =&gt; {
    const langages = useCookie(&#39;lang&#39;)
    langages.value = langages.value || &#39;cn&#39;
    return useState(&#39;userLang&#39;, () =&gt; langages.value)
}
export const userinfo = () =&gt; {
    return useState(&#39;userLang&#39;, () =&gt; &quot;这是状态数据查看&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如何获取state值和修改state的值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;div&gt;{{ userlang }}&lt;/div&gt;
        &lt;div&gt;{{ userin }}&lt;/div&gt;
        &lt;button @click=&quot;onEventClick()&quot;&gt; 更改状态 &lt;/button&gt;
    &lt;/div&gt;
&lt;/template&gt;
 
&lt;script setup lang=&quot;ts&quot;&gt;

// 不使用layout布局功能
definePageMeta({
    layout: false
})
//获取state的值
const userlang = userLangeages ()
const userin = userinfo ()


const onEventClick = () =&gt; {
    userlang.value = &quot;ljsdfdfe&quot;
    userin.value = &quot;状态已经改变了&quot;
}
&lt;/script&gt;
 
&lt;style scoped&gt;&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击之前 <img src="https://jitems.gitee.io/myblog/bk567.png" alt="solar"> 点击事件，改变状态 <img src="https://jitems.gitee.io/myblog/bk568.png" alt="solar"></p><p><strong>2、useCookie使用</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;h3&gt;你好&lt;/h3&gt;
&lt;/template&gt;
 
&lt;script setup lang=&quot;ts&quot;&gt;
  
	// 获取 Cookie
  const Cookies = useCookie(&#39;token&#39;)
 
	// 设置 Cookie
	Cookies.value = Cookies.value || &#39;&#39;
 
	// 删除  Cookie
	cookie.value = undefined || null
 
&lt;/script&gt;
 
&lt;style scoped&gt;
 
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function u(r,c){return n(),i("div",null,[a,s(" more "),v])}const b=e(d,[["render",u],["__file","状态管理及cookie.html.vue"]]);export{b as default};
