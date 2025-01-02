import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as e,a as s,d as a,o as h}from"./app-KOF2vefq.js";const n={},l=s("p",null," ",-1),r=a('<h1 id="git使用https拉取github代码问题" tabindex="-1"><a class="header-anchor" href="#git使用https拉取github代码问题"><span>Git使用https拉取Github代码问题</span></a></h1><p>在使用 <code>Git</code> 进行代码管理的过程中，经常会遇到各种各样的问题，其中之一就是在执行 <code>git clone</code> 或 <code>git pull</code> 等操作时出现 <code>“fatal: unable to access ‘https://github.com/…/.git’: Recv failure Connection was reset”</code> 的报错。这个问题通常是由网络连接问题或代理设置不正确导致的。在我的个人使用经验中，我亲自尝试了两种方法，它们都能够有效地解决这个报错。</p><h2 id="设置系统代理" tabindex="-1"><a class="header-anchor" href="#设置系统代理"><span>设置系统代理</span></a></h2><p>打开系统设置，搜索代理设置，并点击编辑按钮</p><img src="https://jitems.github.io/blog/bk834.png" alt="solar"><p>在代理服务器中，将端口设置为7890（这个端口不会影响正常上网，可以放心设置），然后点击保存</p><img src="https://jitems.github.io/blog/bk835.png" alt="solar"><p>在终端输入以下命令，设置 Git 使用本地代理</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">git</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> config</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> --</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">global</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> http</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">proxy</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> http</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//127.0.0.1:7890</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>设置完成后，可以通过以下命令检验是否设置成功</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">git</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> config</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> --</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">global</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">l</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',11);function p(o,d){return h(),i("div",null,[l,e(" more "),r])}const g=t(n,[["render",p],["__file","4.2、Git使用https拉取Github代码问题.html.vue"]]),m=JSON.parse('{"path":"/%E5%85%B6%E5%AE%83/%E6%8A%80%E5%B7%A7/4.2%E3%80%81Git%E4%BD%BF%E7%94%A8https%E6%8B%89%E5%8F%96Github%E4%BB%A3%E7%A0%81%E9%97%AE%E9%A2%98.html","title":"Git使用https拉取Github代码问题","lang":"zh-CN","frontmatter":{"title":"Git使用https拉取Github代码问题","order":4.2,"category":["其它"],"tag":["技巧"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%85%B6%E5%AE%83/%E6%8A%80%E5%B7%A7/4.2%E3%80%81Git%E4%BD%BF%E7%94%A8https%E6%8B%89%E5%8F%96Github%E4%BB%A3%E7%A0%81%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"暖阳的博客"}],["meta",{"property":"og:title","content":"Git使用https拉取Github代码问题"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-02T02:42:11.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"技巧"}],["meta",{"property":"article:modified_time","content":"2025-01-02T02:42:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git使用https拉取Github代码问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-02T02:42:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"设置系统代理","slug":"设置系统代理","link":"#设置系统代理","children":[]}],"git":{"createdTime":1735785495000,"updatedTime":1735785731000,"contributors":[{"name":"jitems","email":"3119125794@qq.com","commits":2}]},"readingTime":{"minutes":0.94,"words":282},"filePathRelative":"其它/技巧/4.2、Git使用https拉取Github代码问题.md","localizedDate":"2025年1月2日","excerpt":"<p>&nbsp;</p>\\n"}');export{g as comp,m as data};
