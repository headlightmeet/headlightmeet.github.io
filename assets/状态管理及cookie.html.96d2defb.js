import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,a as s}from"./app.3c425ae9.js";var l="/assets/bk567.665da2b5.png",t="/assets/bk568.6d10cde9.png";const d={},a=s(`<h1 id="\u72B6\u6001\u7BA1\u7406\u53CAcookie" tabindex="-1"><a class="header-anchor" href="#\u72B6\u6001\u7BA1\u7406\u53CAcookie" aria-hidden="true">#</a> \u72B6\u6001\u7BA1\u7406\u53CAcookie</h1><p>\u5728Nuxt2\u4E2D\uFF0C\u5982\u679C\u6211\u4EEC\u8981\u4F7F\u7528cookie,\u9700\u8981\u5F15\u5165\u63D2\u4EF6js-cookie\uFF0C\u5728Nuxt3\u4E2D\uFF0C\u4E5F\u4E0D\u518D\u96C6\u6210Vuex\uFF0C\u53EF\u4EE5\u5229\u7528Nuxt3\u7684composables\u81EA\u52A8\u5BFC\u5165\u5C5E\u6027\uFF0C\u628A\u5B83\u4EEC\u5B9A\u4E49\u5728composables\u76EE\u5F55\u4E2D\uFF0C\u8FD9\u6837\u4ED6\u4EEC\u5C06\u6210\u4E3A\u5168\u5C40\u7C7B\u578B\u5B89\u5168\u7684\u72B6\u6001\u3002</p><p><strong>1\u3001useState\u4F7F\u7528</strong></p><p>\u9996\u5148\u6211\u4EEC\u9700\u8981\u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55\u65B0\u5EFAcomposables\u6587\u4EF6\u5939\uFF0C\u7136\u540E\u521B\u5EFA\u72B6\u6001\u7BA1\u7406\u6587\u4EF6\u5982\uFF1Acomposables/state.ts.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u9996\u5148\u5F15\u5165useState\u3001useCookie
import { useState, useCookie } from &quot;nuxt/app&quot;;

export const userLangeages = () =&gt; {
    const langages = useCookie(&#39;lang&#39;)
    langages.value = langages.value || &#39;cn&#39;
    return useState(&#39;userLang&#39;, () =&gt; langages.value)
}
export const userinfo = () =&gt; {
    return useState(&#39;userLang&#39;, () =&gt; &quot;\u8FD9\u662F\u72B6\u6001\u6570\u636E\u67E5\u770B&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u4F55\u83B7\u53D6state\u503C\u548C\u4FEE\u6539state\u7684\u503C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;div&gt;{{ userlang }}&lt;/div&gt;
        &lt;div&gt;{{ userin }}&lt;/div&gt;
        &lt;button @click=&quot;onEventClick()&quot;&gt; \u66F4\u6539\u72B6\u6001 &lt;/button&gt;
    &lt;/div&gt;
&lt;/template&gt;
 
&lt;script setup lang=&quot;ts&quot;&gt;

// \u4E0D\u4F7F\u7528layout\u5E03\u5C40\u529F\u80FD
definePageMeta({
    layout: false
})
//\u83B7\u53D6state\u7684\u503C
const userlang = userLangeages ()
const userin = userinfo ()


const onEventClick = () =&gt; {
    userlang.value = &quot;ljsdfdfe&quot;
    userin.value = &quot;\u72B6\u6001\u5DF2\u7ECF\u6539\u53D8\u4E86&quot;
}
&lt;/script&gt;
 
&lt;style scoped&gt;&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u70B9\u51FB\u4E4B\u524D <img src="`+l+'" alt="solar"> \u70B9\u51FB\u4E8B\u4EF6\uFF0C\u6539\u53D8\u72B6\u6001 <img src="'+t+`" alt="solar"></p><p><strong>2\u3001useCookie\u4F7F\u7528</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;template&gt;
    &lt;h3&gt;\u4F60\u597D&lt;/h3&gt;
&lt;/template&gt;
 
&lt;script setup lang=&quot;ts&quot;&gt;
  
	// \u83B7\u53D6 Cookie
  const Cookies = useCookie(&#39;token&#39;)
 
	// \u8BBE\u7F6E Cookie
	Cookies.value = Cookies.value || &#39;&#39;
 
	// \u5220\u9664  Cookie
	cookie.value = undefined || null
 
&lt;/script&gt;
 
&lt;style scoped&gt;
 
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),v=[a];function u(r,c){return n(),i("div",null,v)}var b=e(d,[["render",u],["__file","\u72B6\u6001\u7BA1\u7406\u53CAcookie.html.vue"]]);export{b as default};
