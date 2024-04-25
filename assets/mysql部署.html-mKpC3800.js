import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as l,d as i,a,e as n}from"./app-PxqKmrwv.js";const d={},t=a("p",null," ",-1),r=n(`<h1 id="mysql部署" tabindex="-1"><a class="header-anchor" href="#mysql部署" aria-hidden="true">#</a> mysql部署</h1><p>拉取官方镜像（我们这里选择5.7.35，如果不写后面的版本号则会自动拉取最新版）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull mysql:5.7.35 # 拉取 mysql 5.7.35
docker pull mysql # 拉取最新版mysql镜像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>检查是否拉取成功</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一般来说数据库容器不需要建立目录映射</p><p>运行容器，需要做数据挂载，注意：启动mysql容器需要密码的</p><p>这里挂载了多个目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-e MYSQL_ROOT_PASSWORD=123456         #这段配置数据库密码的
-d  #后台运行
-p  #端口映射
-v  #数据卷挂载
-e  #环境配置
-name  #容器名称
命令：docker run -d -p :3306:3306 -v 主机地址:/etc/mysql/conf.d   -v 主机地址:/var/lib/mysql  -e MYSQL_ROOT_PASSWORD=123456  --name mysql01  mysql:5.7.35
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://jitems.gitee.io/myblog/blog/bk620.png" alt="solar"><p>然后本地也创建了相应文件</p><img src="https://jitems.gitee.io/myblog/blog/bk621.png" alt="solar"><p>数据库链接工具中链接到刚创建的数据库容器,输入创建容器数据库时候的密码，这里因为我创建了，所以是编辑，然后是可以打开创建数据库的</p><img src="https://jitems.gitee.io/myblog/blog/bk622.png" alt="solar"><p>总结：这样本地挂载中的文件与容器中的文件同步修改，，，但把容器删除，那么本地的挂载目录不会消失，还是存在</p>`,15);function m(c,o){return s(),l("div",null,[t,i(" more "),r])}const u=e(d,[["render",m],["__file","mysql部署.html.vue"]]);export{u as default};
