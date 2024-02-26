import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as p,c as i,d as l,a as n,b as s,f as o,e as c}from"./app-oGr5u-1Z.js";const u={},r=n("p",null," ",-1),d=c(`<h1 id="seo配置" tabindex="-1"><a class="header-anchor" href="#seo配置" aria-hidden="true">#</a> SEO配置</h1><h2 id="默认配置" tabindex="-1"><a class="header-anchor" href="#默认配置" aria-hidden="true">#</a> 默认配置</h2><p>nuxt提供了默认值，没有特殊需要，你没必须自己设置。 当然有必须的话，你也可以自己更改这此信息</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//nuxt.config.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  app<span class="token operator">:</span> <span class="token punctuation">{</span>
    head<span class="token operator">:</span> <span class="token punctuation">{</span>
      charset<span class="token operator">:</span> <span class="token string">&#39;utf-16&#39;</span><span class="token punctuation">,</span>
      viewport<span class="token operator">:</span> <span class="token string">&#39;width=500, initial-scale=1&#39;</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">&#39;My App&#39;</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// &lt;meta name=&quot;description&quot; content=&quot;My amazing site&quot;&gt;</span>
        <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;description&#39;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">&#39;My amazing site.&#39;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组合式函数-usehead" tabindex="-1"><a class="header-anchor" href="#组合式函数-usehead" aria-hidden="true">#</a> 组合式函数: useHead</h2><p>使用useHead可以管理你项目中的head中的标签。这种方式更灵活，支持响应式的设置。Nuxt内部是使用@vueuse/head来实现此功能的。 和所有的其它组合式函数样，你只能在组件中的setup和生命周期中的钩子中使用此接口。</p><p>示例:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token function">useHead</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&#39;My App&#39;</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;description&#39;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">&#39;My amazing site.&#39;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  bodyAttrs<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  script<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> <span class="token string">&#39;console.log(\\&#39;Hello world\\&#39;)&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Nuxt提供了<span class="token operator">&lt;</span>Title<span class="token operator">&gt;</span>, <span class="token operator">&lt;</span>Base<span class="token operator">&gt;</span>,<span class="token operator">&lt;</span>NoScript<span class="token operator">&gt;</span>,<span class="token operator">&lt;</span>Meta<span class="token operator">&gt;</span>, <span class="token operator">&lt;</span>Link<span class="token operator">&gt;</span>,<span class="token operator">&lt;</span>Body<span class="token operator">&gt;</span>,<span class="token operator">&lt;</span>Html<span class="token operator">&gt;</span>和<span class="token operator">&lt;</span>Head<span class="token operator">&gt;</span>等组件让你在组件中方便的设置和更改你项目中的metadata。

由于这些组件名与原生的HTML中的一些元素一样，所以你在template中使用时，一定要注意大写。

<span class="token operator">&lt;</span>Head<span class="token operator">&gt;</span>和<span class="token operator">&lt;</span>Body<span class="token operator">&gt;</span>可以内部包含元标签<span class="token punctuation">(</span>meta tags<span class="token punctuation">)</span>。但对最终渲染成的HTML中的嵌套元标签没有什么影响 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例:</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Head</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Title</span><span class="token punctuation">&gt;</span></span>{{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Title</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>description<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">children</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>body { background-color: green; }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Head</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MetaObject</span> <span class="token punctuation">{</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  titleTemplate<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
  base<span class="token operator">?</span><span class="token operator">:</span> Base
  link<span class="token operator">?</span><span class="token operator">:</span> Link<span class="token punctuation">[</span><span class="token punctuation">]</span>
  meta<span class="token operator">?</span><span class="token operator">:</span> Meta<span class="token punctuation">[</span><span class="token punctuation">]</span>
  style<span class="token operator">?</span><span class="token operator">:</span> Style<span class="token punctuation">[</span><span class="token punctuation">]</span>
  script<span class="token operator">?</span><span class="token operator">:</span> Script<span class="token punctuation">[</span><span class="token punctuation">]</span>
  noscript<span class="token operator">?</span><span class="token operator">:</span> Noscript<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  htmlAttrs<span class="token operator">?</span><span class="token operator">:</span> HtmlAttributes<span class="token punctuation">;</span>
  bodyAttrs<span class="token operator">?</span><span class="token operator">:</span> BodyAttributes<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以在useHead, app.head和组件中使用上面这么类型的元数据。</p><h2 id="响应式" tabindex="-1"><a class="header-anchor" href="#响应式" aria-hidden="true">#</a> 响应式</h2><p>所有的属性都是支持响应式的。你可以使用refs和reactive来设置和修改这些属性。 例如:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 使用useHead <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">const</span> desc <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;My amazing site.&#39;</span><span class="token punctuation">)</span>

<span class="token function">useHead</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  meta<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;description&#39;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> desc <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用组件</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> desc <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;My amazing site.&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>description<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>desc<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标题模板" tabindex="-1"><a class="header-anchor" href="#标题模板" aria-hidden="true">#</a> 标题模板</h2><p>你可以使用titleTemplate这个可选项，这个可以提供一个动态的模板来定制化你的网站的标题。例如给每个页面的头部添加网站名。 titleTemplate可以是一个字符串，字符串中的%s可以被标题替换。 也可以是一个函数。 如果你想使用函数，那你就不能在nuxt.config配置文件中去设置了，推荐在app.vue文件中去设置，这样就可以将此模板应用到全部页面了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
  useHead({
    titleTemplate: (titleChunk) =&gt; {
      return titleChunk ? \`\${titleChunk} - Site Title\` : &#39;Site Title&#39;;
    }
  })
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="body-标签" tabindex="-1"><a class="header-anchor" href="#body-标签" aria-hidden="true">#</a> Body 标签</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>你可以在link和script元标签中添加body: true可选项，这样这些元标签就将被添加到<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>标签的最后面。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
useHead({
  script: [
    {
      src: &#39;https://third-party-script.com&#39;,
      body: true
    }
  ]
})
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="definepagemeta使用示例" tabindex="-1"><a class="header-anchor" href="#definepagemeta使用示例" aria-hidden="true">#</a> definePageMeta使用示例</h2><p>在你的page/目录下，你可以基于当前路由使用definePageMeta来设置元信息。</p><p>例如:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- pages/some-page.vue --&gt;
&lt;script setup&gt;
definePageMeta({
  title: &#39;Some Page&#39;
})
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些信息会在项目的构建编译阶段被提取，你不能动态设置这些信息。</p><p>通过上面的设置后，你就就可以在布局文件中使用这些路由信息了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- layouts/default.vue --&gt;
&lt;script setup&gt;
const route = useRoute()

useHead({
  meta: [{ property: &#39;og:title&#39;, content: \`App Name - \${route.meta.title}\` }]
})
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加动态标题" tabindex="-1"><a class="header-anchor" href="#添加动态标题" aria-hidden="true">#</a> 添加动态标题</h2><p>使用titleTemplate添加动态的标题</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- app.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token function">useHead</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// as a string,</span>
    <span class="token comment">// where \`%s\` is replaced with the title</span>
    <span class="token literal-property property">titleTemplate</span><span class="token operator">:</span> <span class="token string">&#39;%s - Site Title&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// ... or as a function</span>
    <span class="token function-variable function">titleTemplate</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">productCategory</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> productCategory
        <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>productCategory<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> - Site Title</span><span class="token template-punctuation string">\`</span></span>
        <span class="token operator">:</span> <span class="token string">&#39;Site Title&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加外部的css" tabindex="-1"><a class="header-anchor" href="#添加外部的css" aria-hidden="true">#</a> 添加外部的CSS</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 使用useHead <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token function">useHead</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  link<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      rel<span class="token operator">:</span> <span class="token string">&#39;preconnect&#39;</span><span class="token punctuation">,</span>
      href<span class="token operator">:</span> <span class="token string">&#39;https://fonts.googleapis.com&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      rel<span class="token operator">:</span> <span class="token string">&#39;stylesheet&#39;</span><span class="token punctuation">,</span>
      href<span class="token operator">:</span> <span class="token string">&#39;https://fonts.googleapis.com/css2?family=Roboto&amp;display=swap&#39;</span><span class="token punctuation">,</span>
      crossorigin<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 使用组件的方式 --&gt;
&lt;template&gt;
&lt;div&gt;
  &lt;Link rel=&quot;preconnect&quot; href=&quot;https://fonts.googleapis.com&quot; /&gt;
  &lt;Link rel=&quot;stylesheet&quot; href=&quot;https://fonts.googleapis.com/css2?family=Roboto&amp;display=swap&quot; crossorigin=&quot;&quot; /&gt;
&lt;/div&gt;
&lt;/template&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="综合案例" tabindex="-1"><a class="header-anchor" href="#综合案例" aria-hidden="true">#</a> 综合案例</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> loadEnv <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">VITE_ENV_CONFIG</span></span> <span class="token punctuation">{</span>
    <span class="token constant">VITE_API_URL</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> envScript <span class="token operator">=</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">.</span>npm_lifecycle_script<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> envName <span class="token operator">=</span> envScript<span class="token punctuation">[</span>envScript<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> envData <span class="token operator">=</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>envName<span class="token punctuation">,</span> <span class="token string">&#39;env&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">unknown</span> <span class="token keyword">as</span> <span class="token constant">VITE_ENV_CONFIG</span>



<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    app<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 为每一个页面进行head设置 --- SEO 和 加载外部资源</span>
        <span class="token comment">// 在nuxt项目中 没有index.html文件</span>
        <span class="token comment">// 所以对应的配置写在这里</span>
        head<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 设置title</span>
            title<span class="token operator">:</span> <span class="token string">&#39;wst客户端&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// charset 和 viewport比较特殊 可以提到app顶层进行配置</span>
            <span class="token comment">// charset: &#39;utf-8&#39;,</span>
            <span class="token comment">// viewport: &#39;width=device-width, initial-scale=1.0, maximum-scalable=1.0, minmum-scalable=1.0, user-scalable=no&#39;,</span>

            <span class="token comment">// 设置meta</span>
            meta<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token comment">// 对象中的key是meta的属性名</span>
                <span class="token comment">// 对象中的value是meta的属性值</span>
                <span class="token punctuation">{</span>
                    charset<span class="token operator">:</span> <span class="token string">&#39;utf-8&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    name<span class="token operator">:</span> <span class="token string">&#39;viewport&#39;</span><span class="token punctuation">,</span>
                    content<span class="token operator">:</span> <span class="token string">&#39;width=device-width, initial-scale=1.0, maximum-scalable=1, minmum-scalable=1, user-scalable=no&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    name<span class="token operator">:</span> <span class="token string">&#39;keywords&#39;</span><span class="token punctuation">,</span>
                    content<span class="token operator">:</span> <span class="token string">&#39;nuxt3 config&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    name<span class="token operator">:</span> <span class="token string">&#39;description&#39;</span><span class="token punctuation">,</span>
                    content<span class="token operator">:</span> <span class="token string">&#39;nuxt3 config description&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token comment">// 设置script</span>
            script<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">// 默认情况下，是插入到head中</span>
                    src<span class="token operator">:</span> <span class="token string">&#39;https://www.example.js&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>

                <span class="token punctuation">{</span>
                    src<span class="token operator">:</span> <span class="token string">&#39;https://www.foo.js&#39;</span><span class="token punctuation">,</span>
                    <span class="token comment">// script插入到body的最后边</span>
                    body<span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token comment">// 设置link</span>
            link<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    rel<span class="token operator">:</span> <span class="token string">&#39;shortcut icon&#39;</span><span class="token punctuation">,</span>
                    href<span class="token operator">:</span> <span class="token string">&#39;favicon.ico&#39;</span><span class="token punctuation">,</span>
                    type<span class="token operator">:</span> <span class="token string">&#39;image/x-icon&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            style<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">// 有一个特殊的属性 children</span>
                    <span class="token comment">// children对应的属性值会被作为对应属性的子元素</span>
                    <span class="token comment">// 所以下述会被渲染为 &lt;style&gt;body { color: red }&lt;/style&gt;</span>
                    children<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
              body {
                color: red;
              }
            </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>

            <span class="token comment">// 给body元素添加对应的属性</span>
            <span class="token comment">// ps: 这里的值是对象不是数组</span>
            bodyAttrs<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;body-style&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42),v={href:"https://tr.zhiyakeji.com/post/1673943931497",target:"_blank",rel:"noopener noreferrer"};function k(m,b){const a=e("ExternalLinkIcon");return p(),i("div",null,[r,l(" more "),d,n("p",null,[s("原文链接："),n("a",v,[s("nuxt3-SEO篇"),o(a)])])])}const y=t(u,[["render",k],["__file","SEO配置.html.vue"]]);export{y as default};
