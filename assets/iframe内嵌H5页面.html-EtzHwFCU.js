import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,d,a as t,e as s}from"./app-PxqKmrwv.js";const l={},a=t("p",null," ",-1),r=s(`<h1 id="iframe内嵌h5页面" tabindex="-1"><a class="header-anchor" href="#iframe内嵌h5页面" aria-hidden="true">#</a> iframe内嵌H5页面</h1><h2 id="uniapp部分" tabindex="-1"><a class="header-anchor" href="#uniapp部分" aria-hidden="true">#</a> uniapp部分</h2><p>这里使用的是vue3的uniapp版本</p><p>在manifest.json文件中配置h5</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;h5&quot; : {
        &quot;router&quot; : {
            &quot;mode&quot; : &quot;hash&quot;,
            &quot;base&quot; : &quot;/wst-b2g-app/&quot;
        }
    },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>接收参数</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>App.vue

&lt;script&gt;
	export default {
		
		onLaunch: function() {
			console.log(&#39;App Launch&#39;)
			// 这里获取windows页面中传递过来的数据
			window.addEventListener(&#39;message&#39;, function (event) {
				console.log(event.data)
			});
		},
		onShow: function() {
			console.log(&#39;App Show&#39;)
			
		},
		onHide: function() {
			console.log(&#39;App Hide&#39;)
		},		
	}
&lt;/script&gt;

&lt;style lang=&quot;scss&quot;&gt;

&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="windows部分" tabindex="-1"><a class="header-anchor" href="#windows部分" aria-hidden="true">#</a> windows部分</h2><p>这里我使用的是nuxt3框架</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div class=&quot;cont&quot;&gt;
    &lt;div class=&quot;iframe&quot;&gt;
	&lt;!-- 这里的地址就是h5的地址 --&gt;
      &lt;iframe width=&quot;600&quot; ref=&quot;iframeRef&quot; frameborder=0 height=&quot;800&quot; src=&quot;http://localhost:5173/wst-b2g-app/#/&quot;&gt;&lt;/iframe&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
let iframeRef = ref&lt;any&gt;(null);   // 和iframe标签的ref绑定
onMounted(()=&gt;{
  if (iframeRef.value) {
		iframeRef.value.contentWindow.postMessage(
			&quot;dddddddddddddddddddddddddddddddd&quot;,
			&quot;*&quot;
		);
	}
})
&lt;/script&gt;

&lt;style scoped lang=&quot;scss&quot;&gt;
.iframe {
  margin: 50px auto;
  width: 380px;
  height: 680px;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.09);
}

.iframe&gt;iframe {
  width: 380px;
  height: 680px;
  border-radius: 30px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://jitems.gitee.io/myblog/blog/bk595.png" alt="solar">`,11);function v(u,c){return i(),n("div",null,[a,d(" more "),r])}const b=e(l,[["render",v],["__file","iframe内嵌H5页面.html.vue"]]);export{b as default};
