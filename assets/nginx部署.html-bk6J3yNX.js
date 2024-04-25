import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,d as a,a as d,e as s}from"./app-PxqKmrwv.js";const r={},l=d("p",null," ",-1),t=s(`<h1 id="nginx部署" tabindex="-1"><a class="header-anchor" href="#nginx部署" aria-hidden="true">#</a> nginx部署</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 80:80 --name web_nginx -v
 /usr/local/docker/nginx/nginx.conf:/etc/nginx/nginx.conf -v 
 /usr/local/docker/nginx/web:/usr/share/nginx/html nginx


日志目录 : /var/log/nginx 
配置目录 : /etc/nginx/conf.d 
主配置文 : /etc/nginx/nginx.conf 
项目目录 : /usr/share/nginx/html 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="搜索镜像" tabindex="-1"><a class="header-anchor" href="#搜索镜像" aria-hidden="true">#</a> 搜索镜像</h2><p>建议去官网上面搜索</p><h2 id="拉取镜像" tabindex="-1"><a class="header-anchor" href="#拉取镜像" aria-hidden="true">#</a> 拉取镜像</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull nginx 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="https://jitems.gitee.io/myblog/blog/bk611.png" alt="solar"><h2 id="启动nginx容器" tabindex="-1"><a class="header-anchor" href="#启动nginx容器" aria-hidden="true">#</a> 启动nginx容器</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker  run   -d   --name  nginx01  -p 3344:80  nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>nginx默认端口是80 取一个容器名字nginx01</p><p>可以看到启动nginx01容器并运行了</p><img src="https://jitems.gitee.io/myblog/blog/bk612.png" alt="solar"><p>本机自测，可以看到已经成功了 (注意：如果在服务器中使用3344端口，需要把这个端口解析出去)</p><img src="https://jitems.gitee.io/myblog/blog/bk613.png" alt="solar">`,14);function c(o,g){return n(),i("div",null,[l,a(" more "),t])}const u=e(r,[["render",c],["__file","nginx部署.html.vue"]]);export{u as default};
