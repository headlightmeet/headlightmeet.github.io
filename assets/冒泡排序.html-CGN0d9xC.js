import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as h}from"./app-PVtevige.js";const n={},k=h(`<h1 id="冒泡排序" tabindex="-1"><a class="header-anchor" href="#冒泡排序"><span>冒泡排序</span></a></h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>冒泡排序（Bubble Sort），是一种计算机科学领域的较简单的排序算法。</p><p>从开始位置两两比较，持续n轮</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> bubbleSort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 执行第 i + 1 轮</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> j</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">j</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">j</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">            // 前一个与后一个两两比较</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">j</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">j</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">                // 交换两个变量值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                [</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">j</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">], </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">j</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]] </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">j</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">], </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">j</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> arr</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">23</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">14</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">52</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">66</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1134</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">567</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">23</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">bubbleSort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//[4, 14, 23, 23, 52, 66, 567, 1134]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[k];function l(p,e){return a(),s("div",null,t)}const B=i(n,[["render",l],["__file","冒泡排序.html.vue"]]),g=JSON.parse('{"path":"/%E7%9F%A5%E8%AF%86%E5%BA%93/%E7%AE%97%E6%B3%95/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F.html","title":"冒泡排序","lang":"zh-CN","frontmatter":{"description":"冒泡排序 简介 冒泡排序（Bubble Sort），是一种计算机科学领域的较简单的排序算法。 从开始位置两两比较，持续n轮","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%9F%A5%E8%AF%86%E5%BA%93/%E7%AE%97%E6%B3%95/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F.html"}],["meta",{"property":"og:site_name","content":"向前有光的博客"}],["meta",{"property":"og:title","content":"冒泡排序"}],["meta",{"property":"og:description","content":"冒泡排序 简介 冒泡排序（Bubble Sort），是一种计算机科学领域的较简单的排序算法。 从开始位置两两比较，持续n轮"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-10T06:09:47.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:modified_time","content":"2024-07-10T06:09:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"冒泡排序\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-10T06:09:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]}],"git":{"createdTime":1720591787000,"updatedTime":1720591787000,"contributors":[{"name":"test","email":"email","commits":1}]},"readingTime":{"minutes":0.43,"words":130},"filePathRelative":"知识库/算法/冒泡排序.md","localizedDate":"2024年7月10日","excerpt":"\\n<h2>简介</h2>\\n<p>冒泡排序（Bubble Sort），是一种计算机科学领域的较简单的排序算法。</p>\\n<p>从开始位置两两比较，持续n轮</p>\\n<div class=\\"language-ts line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"ts\\" data-title=\\"ts\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">function</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> bubbleSort</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">arr</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">    // 执行第 i + 1 轮</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">    for</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">var</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> i</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> 0</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">; </span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">i</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\"> &lt;</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E5C07B\\"> arr</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#E06C75\\">length</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\"> -</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> 1</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">; </span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">i</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\">++</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">        for</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">var</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> j</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> 0</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">; </span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">j</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\"> &lt;</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E5C07B\\"> arr</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#E06C75\\">length</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\"> -</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> 1</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">; </span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">j</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\">++</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">            // 前一个与后一个两两比较</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">            if</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">arr</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">[</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">j</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">] </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\">&gt;</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> arr</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">[</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">j</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\"> +</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> 1</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">]) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">                // 交换两个变量值</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">                [</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">arr</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">[</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">j</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">], </span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">arr</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">[</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">j</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\"> +</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> 1</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">]] </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> [</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">arr</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">[</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">j</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\"> +</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> 1</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">], </span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">arr</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">[</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">j</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">]]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">            }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">        }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">var</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> arr</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> [</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">4</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">23</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">14</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">52</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">66</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">1134</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">567</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">23</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">bubbleSort</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">arr</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#E5C07B\\">console</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">log</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">arr</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">);</span><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">//[4, 14, 23, 23, 52, 66, 567, 1134]</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{B as comp,g as data};
