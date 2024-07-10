import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,b as a,a as i,d as o,o as s}from"./app-MFCVIeoV.js";const r={},l=i("p",null," ",-1),n=o('<h1 id="tomcat部署" tabindex="-1"><a class="header-anchor" href="#tomcat部署"><span>tomcat部署</span></a></h1><h2 id="搜索镜像" tabindex="-1"><a class="header-anchor" href="#搜索镜像"><span>搜索镜像</span></a></h2><p>建议去官网上面搜索</p><h2 id="拉取镜像" tabindex="-1"><a class="header-anchor" href="#拉取镜像"><span>拉取镜像</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker  pull  tomcat</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><img src="https://jitems.gitee.io/myblog/blog/bk614.png" alt="solar"><h2 id="启动tomcat容器" tabindex="-1"><a class="header-anchor" href="#启动tomcat容器"><span>启动tomcat容器</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker  run -d -p 3355:8080 --name tomcat01 tomcat</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如下代码，表示tomcat创建容器并启动成功</p><img src="https://jitems.gitee.io/myblog/blog/bk615.png" alt="solar"><p>浏览器测试访问，但是访问报错</p><img src="https://jitems.gitee.io/myblog/blog/bk616.png" alt="solar"><img src="https://jitems.gitee.io/myblog/blog/bk617.png" alt="solar"><p>解决办法 把tomcat容器里面webapps.dist文件夹中的内容拷贝到webapps文件中</p><img src="https://jitems.gitee.io/myblog/blog/bk618.png" alt="solar"><p>结果</p><img src="https://jitems.gitee.io/myblog/blog/bk619.png" alt="solar">',17);function c(m,p){return s(),e("div",null,[l,a(" more "),n])}const g=t(r,[["render",c],["__file","tomcat部署.html.vue"]]),b=JSON.parse('{"path":"/%E5%90%8E%E7%AB%AF/docker%E6%95%99%E7%A8%8B/tomcat%E9%83%A8%E7%BD%B2.html","title":"tomcat部署","lang":"zh-CN","frontmatter":{"title":"tomcat部署","category":["后端"],"tag":["docker"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%90%8E%E7%AB%AF/docker%E6%95%99%E7%A8%8B/tomcat%E9%83%A8%E7%BD%B2.html"}],["meta",{"property":"og:site_name","content":"遐想的猫"}],["meta",{"property":"og:title","content":"tomcat部署"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-10T06:11:54.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:modified_time","content":"2024-04-10T06:11:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"tomcat部署\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-10T06:11:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"搜索镜像","slug":"搜索镜像","link":"#搜索镜像","children":[]},{"level":2,"title":"拉取镜像","slug":"拉取镜像","link":"#拉取镜像","children":[]},{"level":2,"title":"启动tomcat容器","slug":"启动tomcat容器","link":"#启动tomcat容器","children":[]}],"git":{"createdTime":1699607816000,"updatedTime":1712729514000,"contributors":[{"name":"jinwang.liu","email":"jinwang.liu@wstair.com","commits":2}]},"readingTime":{"minutes":0.49,"words":146},"filePathRelative":"后端/docker教程/tomcat部署.md","localizedDate":"2023年11月10日","excerpt":"<p>&nbsp;</p>\\n"}');export{g as comp,b as data};
