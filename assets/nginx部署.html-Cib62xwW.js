import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,b as i,a,d as s,o as t}from"./app-Bi9sAhmd.js";const l={},r=a("p",null," ",-1),c=s(`<h1 id="nginx部署" tabindex="-1"><a class="header-anchor" href="#nginx部署"><span>nginx部署</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker run -d -p 80:80 --name web_nginx -v</span></span>
<span class="line"><span> /usr/local/docker/nginx/nginx.conf:/etc/nginx/nginx.conf -v </span></span>
<span class="line"><span> /usr/local/docker/nginx/web:/usr/share/nginx/html nginx</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>日志目录 : /var/log/nginx </span></span>
<span class="line"><span>配置目录 : /etc/nginx/conf.d </span></span>
<span class="line"><span>主配置文 : /etc/nginx/nginx.conf </span></span>
<span class="line"><span>项目目录 : /usr/share/nginx/html</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="搜索镜像" tabindex="-1"><a class="header-anchor" href="#搜索镜像"><span>搜索镜像</span></a></h2><p>建议去官网上面搜索</p><h2 id="拉取镜像" tabindex="-1"><a class="header-anchor" href="#拉取镜像"><span>拉取镜像</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker pull nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><img src="https://jitems.github.io/blog/bk611.png" alt="solar"><h2 id="启动nginx容器" tabindex="-1"><a class="header-anchor" href="#启动nginx容器"><span>启动nginx容器</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker  run   -d   --name  nginx01  -p 3344:80  nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>nginx默认端口是80 取一个容器名字nginx01</p><p>可以看到启动nginx01容器并运行了</p><img src="https://jitems.github.io/blog/bk612.png" alt="solar"><p>本机自测，可以看到已经成功了 (注意：如果在服务器中使用3344端口，需要把这个端口解析出去)</p><img src="https://jitems.github.io/blog/bk613.png" alt="solar">`,14);function d(p,o){return t(),n("div",null,[r,i(" more "),c])}const m=e(l,[["render",d],["__file","nginx部署.html.vue"]]),u=JSON.parse('{"path":"/%E5%90%8E%E7%AB%AF/docker%E6%95%99%E7%A8%8B/nginx%E9%83%A8%E7%BD%B2.html","title":"nginx部署","lang":"zh-CN","frontmatter":{"title":"nginx部署","category":["后端"],"tag":["docker"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%90%8E%E7%AB%AF/docker%E6%95%99%E7%A8%8B/nginx%E9%83%A8%E7%BD%B2.html"}],["meta",{"property":"og:site_name","content":"遐想的猫"}],["meta",{"property":"og:title","content":"nginx部署"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-10T06:34:54.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:modified_time","content":"2024-07-10T06:34:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nginx部署\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-10T06:34:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"搜索镜像","slug":"搜索镜像","link":"#搜索镜像","children":[]},{"level":2,"title":"拉取镜像","slug":"拉取镜像","link":"#拉取镜像","children":[]},{"level":2,"title":"启动nginx容器","slug":"启动nginx容器","link":"#启动nginx容器","children":[]}],"git":{"createdTime":1720591787000,"updatedTime":1720593294000,"contributors":[{"name":"test","email":"email","commits":2}]},"readingTime":{"minutes":0.57,"words":170},"filePathRelative":"后端/docker教程/nginx部署.md","localizedDate":"2024年7月10日","excerpt":"<p>&nbsp;</p>\\n"}');export{m as comp,u as data};
