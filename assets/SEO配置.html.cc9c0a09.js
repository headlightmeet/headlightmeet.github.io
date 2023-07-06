import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o as p,c as i,b as n,d as l,a as o,e as s}from"./app.3c425ae9.js";const c={},u=o(`<h1 id="seo\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#seo\u914D\u7F6E" aria-hidden="true">#</a> SEO\u914D\u7F6E</h1><h2 id="\u9ED8\u8BA4\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u914D\u7F6E" aria-hidden="true">#</a> \u9ED8\u8BA4\u914D\u7F6E</h2><p>nuxt\u63D0\u4F9B\u4E86\u9ED8\u8BA4\u503C\uFF0C\u6CA1\u6709\u7279\u6B8A\u9700\u8981\uFF0C\u4F60\u6CA1\u5FC5\u987B\u81EA\u5DF1\u8BBE\u7F6E\u3002 \u5F53\u7136\u6709\u5FC5\u987B\u7684\u8BDD\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u66F4\u6539\u8FD9\u6B64\u4FE1\u606F</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//nuxt.config.ts</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EC4\u5408\u5F0F\u51FD\u6570-usehead" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u5F0F\u51FD\u6570-usehead" aria-hidden="true">#</a> \u7EC4\u5408\u5F0F\u51FD\u6570: useHead</h2><p>\u4F7F\u7528useHead\u53EF\u4EE5\u7BA1\u7406\u4F60\u9879\u76EE\u4E2D\u7684head\u4E2D\u7684\u6807\u7B7E\u3002\u8FD9\u79CD\u65B9\u5F0F\u66F4\u7075\u6D3B\uFF0C\u652F\u6301\u54CD\u5E94\u5F0F\u7684\u8BBE\u7F6E\u3002Nuxt\u5185\u90E8\u662F\u4F7F\u7528@vueuse/head\u6765\u5B9E\u73B0\u6B64\u529F\u80FD\u7684\u3002 \u548C\u6240\u6709\u7684\u5176\u5B83\u7EC4\u5408\u5F0F\u51FD\u6570\u6837\uFF0C\u4F60\u53EA\u80FD\u5728\u7EC4\u4EF6\u4E2D\u7684setup\u548C\u751F\u547D\u5468\u671F\u4E2D\u7684\u94A9\u5B50\u4E2D\u4F7F\u7528\u6B64\u63A5\u53E3\u3002</p><p>\u793A\u4F8B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6" aria-hidden="true">#</a> \u7EC4\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Nuxt\u63D0\u4F9B\u4E86<span class="token operator">&lt;</span>Title<span class="token operator">&gt;</span>, <span class="token operator">&lt;</span>Base<span class="token operator">&gt;</span>,<span class="token operator">&lt;</span>NoScript<span class="token operator">&gt;</span>,<span class="token operator">&lt;</span>Meta<span class="token operator">&gt;</span>, <span class="token operator">&lt;</span>Link<span class="token operator">&gt;</span>,<span class="token operator">&lt;</span>Body<span class="token operator">&gt;</span>,<span class="token operator">&lt;</span>Html<span class="token operator">&gt;</span>\u548C<span class="token operator">&lt;</span>Head<span class="token operator">&gt;</span>\u7B49\u7EC4\u4EF6\u8BA9\u4F60\u5728\u7EC4\u4EF6\u4E2D\u65B9\u4FBF\u7684\u8BBE\u7F6E\u548C\u66F4\u6539\u4F60\u9879\u76EE\u4E2D\u7684metadata\u3002

\u7531\u4E8E\u8FD9\u4E9B\u7EC4\u4EF6\u540D\u4E0E\u539F\u751F\u7684HTML\u4E2D\u7684\u4E00\u4E9B\u5143\u7D20\u4E00\u6837\uFF0C\u6240\u4EE5\u4F60\u5728template\u4E2D\u4F7F\u7528\u65F6\uFF0C\u4E00\u5B9A\u8981\u6CE8\u610F\u5927\u5199\u3002

<span class="token operator">&lt;</span>Head<span class="token operator">&gt;</span>\u548C<span class="token operator">&lt;</span>Body<span class="token operator">&gt;</span>\u53EF\u4EE5\u5185\u90E8\u5305\u542B\u5143\u6807\u7B7E<span class="token punctuation">(</span>meta tags<span class="token punctuation">)</span>\u3002\u4F46\u5BF9\u6700\u7EC8\u6E32\u67D3\u6210\u7684HTML\u4E2D\u7684\u5D4C\u5957\u5143\u6807\u7B7E\u6CA1\u6709\u4EC0\u4E48\u5F71\u54CD \u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B:</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B" aria-hidden="true">#</a> \u7C7B\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MetaObject</span> <span class="token punctuation">{</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60\u53EF\u4EE5\u5728useHead, app.head\u548C\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u4E0A\u9762\u8FD9\u4E48\u7C7B\u578B\u7684\u5143\u6570\u636E\u3002</p><h2 id="\u54CD\u5E94\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u5F0F" aria-hidden="true">#</a> \u54CD\u5E94\u5F0F</h2><p>\u6240\u6709\u7684\u5C5E\u6027\u90FD\u662F\u652F\u6301\u54CD\u5E94\u5F0F\u7684\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528refs\u548Creactive\u6765\u8BBE\u7F6E\u548C\u4FEE\u6539\u8FD9\u4E9B\u5C5E\u6027\u3002 \u4F8B\u5982:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \u4F7F\u7528useHead <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">const</span> desc <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;My amazing site.&#39;</span><span class="token punctuation">)</span>

<span class="token function">useHead</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  meta<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;description&#39;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> desc <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u7EC4\u4EF6</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> desc <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;My amazing site.&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>description<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>desc<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6807\u9898\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u6807\u9898\u6A21\u677F" aria-hidden="true">#</a> \u6807\u9898\u6A21\u677F</h2><p>\u4F60\u53EF\u4EE5\u4F7F\u7528titleTemplate\u8FD9\u4E2A\u53EF\u9009\u9879\uFF0C\u8FD9\u4E2A\u53EF\u4EE5\u63D0\u4F9B\u4E00\u4E2A\u52A8\u6001\u7684\u6A21\u677F\u6765\u5B9A\u5236\u5316\u4F60\u7684\u7F51\u7AD9\u7684\u6807\u9898\u3002\u4F8B\u5982\u7ED9\u6BCF\u4E2A\u9875\u9762\u7684\u5934\u90E8\u6DFB\u52A0\u7F51\u7AD9\u540D\u3002 titleTemplate\u53EF\u4EE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5B57\u7B26\u4E32\u4E2D\u7684%s\u53EF\u4EE5\u88AB\u6807\u9898\u66FF\u6362\u3002 \u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u51FD\u6570\u3002 \u5982\u679C\u4F60\u60F3\u4F7F\u7528\u51FD\u6570\uFF0C\u90A3\u4F60\u5C31\u4E0D\u80FD\u5728nuxt.config\u914D\u7F6E\u6587\u4EF6\u4E2D\u53BB\u8BBE\u7F6E\u4E86\uFF0C\u63A8\u8350\u5728app.vue\u6587\u4EF6\u4E2D\u53BB\u8BBE\u7F6E\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u5C06\u6B64\u6A21\u677F\u5E94\u7528\u5230\u5168\u90E8\u9875\u9762\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
  useHead({
    titleTemplate: (titleChunk) =&gt; {
      return titleChunk ? \`\${titleChunk} - Site Title\` : &#39;Site Title&#39;;
    }
  })
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="body-\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#body-\u6807\u7B7E" aria-hidden="true">#</a> Body \u6807\u7B7E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u4F60\u53EF\u4EE5\u5728link\u548Cscript\u5143\u6807\u7B7E\u4E2D\u6DFB\u52A0body: true\u53EF\u9009\u9879\uFF0C\u8FD9\u6837\u8FD9\u4E9B\u5143\u6807\u7B7E\u5C31\u5C06\u88AB\u6DFB\u52A0\u5230<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>\u6807\u7B7E\u7684\u6700\u540E\u9762\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F8B\u5982:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
useHead({
  script: [
    {
      src: &#39;https://third-party-script.com&#39;,
      body: true
    }
  ]
})
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="definepagemeta\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#definepagemeta\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> definePageMeta\u4F7F\u7528\u793A\u4F8B</h2><p>\u5728\u4F60\u7684page/\u76EE\u5F55\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u57FA\u4E8E\u5F53\u524D\u8DEF\u7531\u4F7F\u7528definePageMeta\u6765\u8BBE\u7F6E\u5143\u4FE1\u606F\u3002</p><p>\u4F8B\u5982:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!-- pages/some-page.vue --&gt;
&lt;script setup&gt;
definePageMeta({
  title: &#39;Some Page&#39;
})
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E9B\u4FE1\u606F\u4F1A\u5728\u9879\u76EE\u7684\u6784\u5EFA\u7F16\u8BD1\u9636\u6BB5\u88AB\u63D0\u53D6\uFF0C\u4F60\u4E0D\u80FD\u52A8\u6001\u8BBE\u7F6E\u8FD9\u4E9B\u4FE1\u606F\u3002</p><p>\u901A\u8FC7\u4E0A\u9762\u7684\u8BBE\u7F6E\u540E\uFF0C\u4F60\u5C31\u5C31\u53EF\u4EE5\u5728\u5E03\u5C40\u6587\u4EF6\u4E2D\u4F7F\u7528\u8FD9\u4E9B\u8DEF\u7531\u4FE1\u606F\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!-- layouts/default.vue --&gt;
&lt;script setup&gt;
const route = useRoute()

useHead({
  meta: [{ property: &#39;og:title&#39;, content: \`App Name - \${route.meta.title}\` }]
})
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6DFB\u52A0\u52A8\u6001\u6807\u9898" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u52A8\u6001\u6807\u9898" aria-hidden="true">#</a> \u6DFB\u52A0\u52A8\u6001\u6807\u9898</h2><p>\u4F7F\u7528titleTemplate\u6DFB\u52A0\u52A8\u6001\u7684\u6807\u9898</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- app.vue --&gt;</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6DFB\u52A0\u5916\u90E8\u7684css" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u5916\u90E8\u7684css" aria-hidden="true">#</a> \u6DFB\u52A0\u5916\u90E8\u7684CSS</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \u4F7F\u7528useHead <span class="token operator">--</span><span class="token operator">&gt;</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!-- \u4F7F\u7528\u7EC4\u4EF6\u7684\u65B9\u5F0F --&gt;
&lt;template&gt;
&lt;div&gt;
  &lt;Link rel=&quot;preconnect&quot; href=&quot;https://fonts.googleapis.com&quot; /&gt;
  &lt;Link rel=&quot;stylesheet&quot; href=&quot;https://fonts.googleapis.com/css2?family=Roboto&amp;display=swap&quot; crossorigin=&quot;&quot; /&gt;
&lt;/div&gt;
&lt;/template&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EFC\u5408\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u7EFC\u5408\u6848\u4F8B" aria-hidden="true">#</a> \u7EFC\u5408\u6848\u4F8B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> loadEnv <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">VITE_ENV_CONFIG</span></span> <span class="token punctuation">{</span>
    <span class="token constant">VITE_API_URL</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> envScript <span class="token operator">=</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">.</span>npm_lifecycle_script<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> envName <span class="token operator">=</span> envScript<span class="token punctuation">[</span>envScript<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> envData <span class="token operator">=</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>envName<span class="token punctuation">,</span> <span class="token string">&#39;env&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">unknown</span> <span class="token keyword">as</span> <span class="token constant">VITE_ENV_CONFIG</span>



<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    app<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4E3A\u6BCF\u4E00\u4E2A\u9875\u9762\u8FDB\u884Chead\u8BBE\u7F6E --- SEO \u548C \u52A0\u8F7D\u5916\u90E8\u8D44\u6E90</span>
        <span class="token comment">// \u5728nuxt\u9879\u76EE\u4E2D \u6CA1\u6709index.html\u6587\u4EF6</span>
        <span class="token comment">// \u6240\u4EE5\u5BF9\u5E94\u7684\u914D\u7F6E\u5199\u5728\u8FD9\u91CC</span>
        head<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u8BBE\u7F6Etitle</span>
            title<span class="token operator">:</span> <span class="token string">&#39;wst\u5BA2\u6237\u7AEF&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// charset \u548C viewport\u6BD4\u8F83\u7279\u6B8A \u53EF\u4EE5\u63D0\u5230app\u9876\u5C42\u8FDB\u884C\u914D\u7F6E</span>
            <span class="token comment">// charset: &#39;utf-8&#39;,</span>
            <span class="token comment">// viewport: &#39;width=device-width, initial-scale=1.0, maximum-scalable=1.0, minmum-scalable=1.0, user-scalable=no&#39;,</span>

            <span class="token comment">// \u8BBE\u7F6Emeta</span>
            meta<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token comment">// \u5BF9\u8C61\u4E2D\u7684key\u662Fmeta\u7684\u5C5E\u6027\u540D</span>
                <span class="token comment">// \u5BF9\u8C61\u4E2D\u7684value\u662Fmeta\u7684\u5C5E\u6027\u503C</span>
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
            <span class="token comment">// \u8BBE\u7F6Escript</span>
            script<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">// \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u662F\u63D2\u5165\u5230head\u4E2D</span>
                    src<span class="token operator">:</span> <span class="token string">&#39;https://www.example.js&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>

                <span class="token punctuation">{</span>
                    src<span class="token operator">:</span> <span class="token string">&#39;https://www.foo.js&#39;</span><span class="token punctuation">,</span>
                    <span class="token comment">// script\u63D2\u5165\u5230body\u7684\u6700\u540E\u8FB9</span>
                    body<span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token comment">// \u8BBE\u7F6Elink</span>
            link<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    rel<span class="token operator">:</span> <span class="token string">&#39;shortcut icon&#39;</span><span class="token punctuation">,</span>
                    href<span class="token operator">:</span> <span class="token string">&#39;favicon.ico&#39;</span><span class="token punctuation">,</span>
                    type<span class="token operator">:</span> <span class="token string">&#39;image/x-icon&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            style<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">// \u6709\u4E00\u4E2A\u7279\u6B8A\u7684\u5C5E\u6027 children</span>
                    <span class="token comment">// children\u5BF9\u5E94\u7684\u5C5E\u6027\u503C\u4F1A\u88AB\u4F5C\u4E3A\u5BF9\u5E94\u5C5E\u6027\u7684\u5B50\u5143\u7D20</span>
                    <span class="token comment">// \u6240\u4EE5\u4E0B\u8FF0\u4F1A\u88AB\u6E32\u67D3\u4E3A &lt;style&gt;body { color: red }&lt;/style&gt;</span>
                    children<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
              body {
                color: red;
              }
            </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>

            <span class="token comment">// \u7ED9body\u5143\u7D20\u6DFB\u52A0\u5BF9\u5E94\u7684\u5C5E\u6027</span>
            <span class="token comment">// ps: \u8FD9\u91CC\u7684\u503C\u662F\u5BF9\u8C61\u4E0D\u662F\u6570\u7EC4</span>
            bodyAttrs<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;body-style&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42),r=s("\u539F\u6587\u94FE\u63A5\uFF1A"),d={href:"https://tr.zhiyakeji.com/post/1673943931497",target:"_blank",rel:"noopener noreferrer"},v=s("nuxt3-SEO\u7BC7");function k(m,b){const a=e("ExternalLinkIcon");return p(),i("div",null,[u,n("p",null,[r,n("a",d,[v,l(a)])])])}var y=t(c,[["render",k],["__file","SEO\u914D\u7F6E.html.vue"]]);export{y as default};
