import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as l,c as o,d,a as e,b as s,f as a,e as r}from"./app-PxqKmrwv.js";const c={},p=e("p",null," ",-1),u=e("h1",{id:"vuepress-theme-hope博客搭建",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepress-theme-hope博客搭建","aria-hidden":"true"},"#"),s(" vuepress-theme-hope博客搭建")],-1),m=e("h3",{id:"一、安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一、安装","aria-hidden":"true"},"#"),s(" 一、安装")],-1),h={href:"https://vuepress-theme-hope.github.io/v2/zh/",target:"_blank",rel:"noopener noreferrer"},v=r(`<p>在当前项目的 <code>[dir]</code> 文件夹内创建 vuepress-theme-hope 项目:</p><p><strong>这里的 <code>[dir]</code> 是一个参数，你需要使用真实的文件夹名称替换它，例如 <code>docs</code>、<code>src</code> 或其他你喜欢的名称。</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> create vuepress-theme-hope@next <span class="token punctuation">[</span>dir<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="二、在本地启动服务器" tabindex="-1"><a class="header-anchor" href="#二、在本地启动服务器" aria-hidden="true">#</a> 二、在本地启动服务器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>vuepress-theme-hope 会在http://localhost:8080启动一个热重载的开发服务器</p><h3 id="六、部署上线" tabindex="-1"><a class="header-anchor" href="#六、部署上线" aria-hidden="true">#</a> 六、部署上线</h3><h4 id="_1、新建仓库一-username-github-io-不用克隆到本地" tabindex="-1"><a class="header-anchor" href="#_1、新建仓库一-username-github-io-不用克隆到本地" aria-hidden="true">#</a> 1、新建仓库一： USERNAME.github.io （不用克隆到本地）</h4><p>注意！ <code>USERNAME</code> 必须是你 Github 的账号名称，不是你的名字拼音，也不是你的非主流网名，不要瞎起，要保证和Github账号名一模一样！</p><p>例如我的 Github 账号名称是 <code>jaroflovetop</code></p><img src="https://jitems.gitee.io/myblog/blog/bk345.png" alt="solar"><p><strong>这个仓库建好后，不用克隆到本地，内容更新修改都在下面的仓库中进行</strong></p><img src="https://jitems.gitee.io/myblog/blog/bk346.png" alt="solar"><h4 id="_2、新建仓库二-随便起一个名字-比如-my-test-blog" tabindex="-1"><a class="header-anchor" href="#_2、新建仓库二-随便起一个名字-比如-my-test-blog" aria-hidden="true">#</a> 2、新建仓库二：随便起一个名字，比如：my_test_blog</h4><img src="https://jitems.gitee.io/myblog/blog/bk347.png" alt="solar"><p>这个项目是用来开发博客的,仓库二创建好后进行第三步操作</p><h4 id="_3、根目录下创建-deploy-sh-文件" tabindex="-1"><a class="header-anchor" href="#_3、根目录下创建-deploy-sh-文件" aria-hidden="true">#</a> 3、根目录下创建 deploy.sh 文件</h4><img src="https://jitems.gitee.io/myblog/blog/bk348.png" alt="solar"><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;update docs&#39;</span>

<span class="token comment"># 如果发布到 https://USERNAME.github.io/&lt;REPO&gt;  REPO=github上的项目</span>
 <span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:jaroflovetop/my_test_blog.git master

<span class="token comment"># 生成静态文件</span>
<span class="token function">npm</span> run docs:build

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> vuepress-theme-hope/.vuepress/dist

<span class="token comment"># 如果是发布到自定义域名</span>
<span class="token comment"># echo &#39;www.yourwebsite.com&#39; &gt; CNAME</span>


<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;update docs&#39;</span>

<span class="token comment"># 如果你想要部署到 https://USERNAME.github.io</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:jaroflovetop/jaroflovetop.github.io.git master



<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署网站把文件中的 USERNAME 改成 Github 账号名，例如我的账号名是 jaroflovetop，那么就可以改为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 如果你想要部署到 https://USERNAME.github.io</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:jaroflovetop/jaroflovetop.github.io.git master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>部署提交项目把文件中的 USERNAME 改成 Github 账号名，例如我的账号名是 jaroflovetop，那么就可以改为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 如果发布到 https://USERNAME.github.io/&lt;REPO&gt;  REPO=github上的项目</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:jaroflovetop/my_test_blog.git master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样仓库二和仓库一就建立了关联</p><h3 id="在-package-json-文件夹中添加发布命令" tabindex="-1"><a class="header-anchor" href="#在-package-json-文件夹中添加发布命令" aria-hidden="true">#</a> 在 package.json 文件夹中添加发布命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;scripts&quot;: {
  &quot;deploy&quot;: &quot;bash deploy.sh&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="运行发布命令-即可同时部署项目和上传项目github" tabindex="-1"><a class="header-anchor" href="#运行发布命令-即可同时部署项目和上传项目github" aria-hidden="true">#</a> 运行发布命令，即可同时部署项目和上传项目github</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn deploy 或 #npm run deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,28),b={href:"https://jaroflovetop.github.io/",target:"_blank",rel:"noopener noreferrer"};function g(k,f){const n=t("ExternalLinkIcon");return l(),o("div",null,[p,d(" more "),u,m,e("p",null,[e("a",h,[s("官网地址"),a(n)])]),v,e("p",null,[s("即可打开链接 "),e("a",b,[a(n)]),s("看到自己的主页了")])])}const E=i(c,[["render",g],["__file","index.html.vue"]]);export{E as default};
