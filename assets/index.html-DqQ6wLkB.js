import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,b as i,a,d as s,o}from"./app-MFCVIeoV.js";const n={},r=a("p",null," ",-1),c=s('<h1 id="nuxt3-安装问题" tabindex="-1"><a class="header-anchor" href="#nuxt3-安装问题"><span>Nuxt3 安装问题</span></a></h1><p>按照官方的命令安装项目脚手架时候直接报错，提示 Failed to download template from register:fetch failed</p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h2><p>Mac系统的host文件目录在/etc/hosts。 windows系统的hosts文件目录在C:\\Windows\\System32\\drivers\\etc\\host 。打开host文件，在里边增加一行</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">185.199.108.133</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> raw.githubusercontent.com</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>注意这个ip:185.199.108.133是可能会改变的，最终配置为哪个IP，需要通过去 https://ipaddress.com/website/raw.githubusercontent.com 网站查询域名对应的真实ip</p><img src="https://jitems.gitee.io/myblog/blog/bk561.png" alt="solar"><p>然后就可以使用nuxt官方文档的安装命令，即可安装最新的Nuxt3</p>',8);function p(l,h){return o(),e("div",null,[r,i(" more "),c])}const u=t(n,[["render",p],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF/Nuxt3%E6%95%99%E7%A8%8B/","title":"Nuxt3 安装问题","lang":"zh-CN","frontmatter":{"title":"Nuxt3 安装问题","category":["前端"],"tag":["nuxt3"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%89%8D%E7%AB%AF/Nuxt3%E6%95%99%E7%A8%8B/"}],["meta",{"property":"og:site_name","content":"遐想的猫"}],["meta",{"property":"og:title","content":"Nuxt3 安装问题"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-10T06:11:54.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"nuxt3"}],["meta",{"property":"article:modified_time","content":"2024-04-10T06:11:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nuxt3 安装问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-10T06:11:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]}],"git":{"createdTime":1698994754000,"updatedTime":1712729514000,"contributors":[{"name":"LAPTOP-5H5RR9E6\\\\jinwa","email":"ljw1314","commits":3},{"name":"jinwang.liu","email":"jinwang.liu@wstair.com","commits":1}]},"readingTime":{"minutes":0.55,"words":166},"filePathRelative":"前端/Nuxt3教程/README.md","localizedDate":"2023年11月3日","excerpt":"<p>&nbsp;</p>\\n"}');export{u as comp,g as data};
