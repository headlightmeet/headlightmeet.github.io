import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as e,d as s,a as i,e as t}from"./app-oGr5u-1Z.js";const d={},l=i("p",null," ",-1),r=t(`<h1 id="nvm之node版本管理" tabindex="-1"><a class="header-anchor" href="#nvm之node版本管理" aria-hidden="true">#</a> nvm之node版本管理</h1><h2 id="nvm介绍" tabindex="-1"><a class="header-anchor" href="#nvm介绍" aria-hidden="true">#</a> nvm介绍</h2><p>node的版本管理器，可以方便地安装&amp;切换不同版本的node</p><h2 id="下载地址" tabindex="-1"><a class="header-anchor" href="#下载地址" aria-hidden="true">#</a> 下载地址</h2><p>下载地址：https://github.com/coreybutler/nvm-windows/releases</p><img src="https://jitems.gitee.io/myblog/bk556.png" alt="solar"><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>安装需要注意两点 1、 把电脑上面的node环境先卸载干净（C:\\Users\\xiaopao\\AppData\\Roaming\\node下面的文件也要解决干净） 2、 安装时，建议选择手动安装版，然后一直下一步就行，不要尝试改变安装目录</p><h2 id="检查安装是否成功" tabindex="-1"><a class="header-anchor" href="#检查安装是否成功" aria-hidden="true">#</a> 检查安装是否成功</h2><p>在命令行输入nvm 能出现反应就行OK了</p><img src="https://jitems.gitee.io/myblog/bk557.png" alt="solar"><h2 id="配置镜像地址" tabindex="-1"><a class="header-anchor" href="#配置镜像地址" aria-hidden="true">#</a> 配置镜像地址</h2><p><strong>注意：这里配置的淘宝镜像是http协议，因为https协议已经过期，如果后期http协议不能使用，建议更换镜像源</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>安装node前配置一下镜像地址

root: C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>jinwa<span class="token punctuation">\\</span>AppData<span class="token punctuation">\\</span>Roaming<span class="token punctuation">\\</span>nvm
path: C:<span class="token punctuation">\\</span>Program Files<span class="token punctuation">\\</span>nodejs
node_mirror: http://npm.taobao.org/mirrors/node/
npm_mirror: http://npm.taobao.org/mirrors/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://jitems.gitee.io/myblog/bk558.png" alt="solar"><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>安装想要的node版本，可以通过  nvm  <span class="token function">ls</span>  available 命令查看可以安装的node版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="https://jitems.gitee.io/myblog/bk559.png" alt="solar"><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>安装方式 nvm <span class="token function">install</span> 版本号
current：当前最新的版本
LTS：稳定版本

nvm <span class="token function">install</span> <span class="token number">14.20</span>.0 （当前稳定的最新版）

我安装了两个
nvm <span class="token function">install</span> <span class="token number">18.15</span>.0
nvm <span class="token function">install</span> <span class="token number">14.21</span>.3
使用nvm <span class="token function">ls</span> 或者 nvm list可以查看安装的不同node版本，*指向的就是当前版本

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://jitems.gitee.io/myblog/bk560.png" alt="solar"><p>切换node版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm use <span class="token number">10.10</span>.0可以切换node版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,21);function o(c,p){return a(),e("div",null,[l,s(" more "),r])}const v=n(d,[["render",o],["__file","nvm之node版本管理.html.vue"]]);export{v as default};
