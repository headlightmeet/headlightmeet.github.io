import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as e,d as t,a as s,e as p}from"./app-PxqKmrwv.js";const o={},i=s("p",null,"--- title: vuex状态管理 category:",-1),l=s("ul",null,[s("li",null,"前端 tag:"),s("li",null,"uniapp")],-1),c=s("hr",null,null,-1),r=s("p",null," ",-1),u=p(`<h1 id="vuex状态管理" tabindex="-1"><a class="header-anchor" href="#vuex状态管理" aria-hidden="true">#</a> vuex状态管理</h1><p>应用中，保持登录状态是常见需求，本文讲解使用uni-app框架时如何保持用户登录状态。 即：初次进入应用为未登录状态-------&gt;登录----------&gt;关闭应用，再次打开---------&gt;为已登录状态 传统应用保持登录状态的方式是通过读取 cookie 来判断是否是登录状态，但是uni-app不支持对cookie的读写。因为uni-app框架的主体是 VUE，所以可以使用 vuex 进行登录态管理。 关于vuex中定义的全局变量和方法需要定义在指定目录的文件内。 即在项目目录下新建名称为 store 的目录，目录下创建用于定义全局变量和方法的js文件，如下图：</p><img src="https://jitems.gitee.io/myblog/blog/bk238.png" alt="solar"><p>index.js文件内容如下图所示：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vuex状态管理</span>
<span class="token comment">//demo中的数据是模拟状态数据，用于测试，实际使用中，请根据您自己的业务编写</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token comment">// 全局属性变量</span>
	<span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">blutooString</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token comment">//进制数据</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">//全局同步方法</span>
	<span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>

	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">//全局异步方法</span>
	<span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>

	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">// Vuex中的计算属性，相当于vue中的computed,依赖于state状态值，状态值一旦改变，getter会重新计算</span>
	<span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token comment">//用户是否登录</span>
		<span class="token function">blutooString</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> getters</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> state<span class="token punctuation">.</span>blutooString
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>想要定义的这个 js 文件中的变量和方法能在各个页面使用并生效，需要先在项目目录下的 main.js 文件中导入这个 js 文件并声明方法，如下图所示：</p><img src="https://jitems.gitee.io/myblog/blog/bk239.png" alt="solar"><p>声明结束后就可以在页面中监控全局变量和相应方法了，下面在一个登录页面中具体展示。</p><p>先在页面导入vuex的方法，如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
		mapGetters<span class="token punctuation">,</span>
		mapMutations
	<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在 computed 计算属性方法中使用 mapState 对全局变量进行监控，在 method中使用 mapMutations 进行全局方法监控，如下所示：</p><img src="https://jitems.gitee.io/myblog/blog/bk240.png" alt="solar"><p><strong>在vue页面中调用修改与调用</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>blutooString <span class="token comment">//调用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>blutooString <span class="token operator">=</span> <span class="token string">&#39;121212&#39;</span> <span class="token comment">//修改</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>在js文件中调用与修改</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 单独文件中使用vuex</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;@/store&#39;</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>blutooString <span class="token comment">//调用</span>

store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>blutooString <span class="token operator">=</span> <span class="token string">&#39;121212&#39;</span> <span class="token comment">//修改</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function d(v,k){return a(),e("div",null,[i,l,c,r,t(" more "),u])}const g=n(o,[["render",d],["__file","vuex状态管理.html.vue"]]);export{g as default};
