import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as i,c as o,d as l,a as n,b as s,f as c,e as a}from"./app-PxqKmrwv.js";const u={},d=n("p",null," ",-1),r=a(`<h1 id="nuxt3项目搭建" tabindex="-1"><a class="header-anchor" href="#nuxt3项目搭建" aria-hidden="true">#</a> Nuxt3项目搭建</h1><h2 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a> 初始化项目</h2><p>安装项目依赖（node版本至少v16）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx nuxi@latest init &lt;project-name&gt;

pnpm dlx nuxi@latest init &lt;project-name&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2><p>理论上一个完整的项目除了常用目录以外，还需要建立 husky、commitlint、prettier、stylelint、tsconfig等以便更好地规范项目。 正常情况下，我们希望项目配置文件比如以上说项目规范配置文件或者是build工程化构建相关配置文件、环境变量等放在根目录下，而项目内容（如页面、组件等）统一放在src文件夹内管理。 所以项目结构最终大致如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Nuxt3
├── .husky                        # Git hooks 工具配置
├── .vscode                       # vscode配置
├── doc                           # 项目文档
├── build                         # 工程化构建相关配置
├── src
│   ├── api                       # 接口请求服务管理
│   │  └── modules                # 接口模块
│   ├── assets                    # 工程化处理的静态资源
│   ├── components                # 项目组件
│   ├── composables               # 响应式共享状态
│   ├── constants                 # 公共方法管理
│   ├── enums                     # 枚举管理
│   ├── layouts                   # 布局组件
│   ├── middleware                # 路由中间件
│   ├── pages                     # 页面视图
│   ├── plugins                   # 项目公共插件
│   ├── public                    # 不需要工程化处理的静态资源
│   ├── store                     # 状态管理
│   ├── utils                     # 静态工具函数
│   └── app.vue                   # 入口页面
├── .commitlintrc.json            # git提交规范检查配置
├── .editorconfig                 # 编辑器配置
├── env
│   ├── .env.dev                  # 本地环境
│   ├── .env.test                 # 测试环境
│   └── .env.prod                 # 生产环境
├── .eslintignore                 # eslint忽略文件检查的配置
├── .eslintrc.js                  # eslint代码规范检查配置
├── .gitignore                    # git仓库提交忽略配置
├── .lintstagedrc.js              # git提交代码规范检查配置
├── nuxt.config.ts                # Vite 构建配置入口
├── package.json                  # 项目包管理文件
├── pnpm-lock.yaml                # pnpm包版本管理锁定
├── README.md                     # 项目说明
└── tsconfig.json                 # TS编译的配置

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>而 Nuxt 初始化，app.vue、pages文件等都建立在根目录下，所以我们先在根目录下建立 src 文件夹，并且把 app.vue 文件移入到 src 目录下，修改 nuxt.config.ts文件配置</strong>：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	srcDir<span class="token operator">:</span> <span class="token string">&#39;src/&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nuxt" tabindex="-1"><a class="header-anchor" href="#nuxt" aria-hidden="true">#</a> .nuxt</h2><p>Nuxt 使用.nuxt/目录在开发中生成您的Vue应用程序。 你不应该碰里面的任何文件，因为整个目录将在运行 nuxt dev 时重新创建。 ##　assets</p><p>assets/ 目录用于添加构建工具(webpack或Vite)将处理的所有网站资产。 该目录通常包含以下类型的文件: Stylesheets (CSS, SASS, etc.) Fonts Images Icons 如果你想从服务器上提供资产，可以将文件放入 public/ 目录。</p><h2 id="public" tabindex="-1"><a class="header-anchor" href="#public" aria-hidden="true">#</a> public</h2><p>public/目录直接服务于服务器根目录，包含必须保留其名称的公共文件(例如：robots.txt)或可能不会更改(例如:favicon.ico)。</p><h2 id="utils" tabindex="-1"><a class="header-anchor" href="#utils" aria-hidden="true">#</a> utils</h2><p>Nuxt 3 使用 utils/ 目录在整个应用程序中使用自动导入辅助函数和其他实用程序。</p><h2 id="app-vue" tabindex="-1"><a class="header-anchor" href="#app-vue" aria-hidden="true">#</a> app.vue</h2><p>app.vue 是应用程序的主要组件，可以在组件中定义全局的样式和行为，如路由全局守卫和错误处理等。当应用程序启动时，app.vue 会被渲染为根视图组件，并且在应用程序的整个生命周期内始终存在，可以说 app.vue 是 Nuxt.js 3 应用程序的视图层的入口文件。</p><h2 id="layouts-布局" tabindex="-1"><a class="header-anchor" href="#layouts-布局" aria-hidden="true">#</a> layouts 布局</h2><p>Nuxt提供了一个可定制的布局框架，可以在整个应用程序中使用，非常适合将常见的UI或代码模式提取到可重用的布局组件中。 布局放在layouts/目录中，使用时将通过异步导入自动加载。</p><h3 id="默认布局" tabindex="-1"><a class="header-anchor" href="#默认布局" aria-hidden="true">#</a> 默认布局</h3><p>在layouts目录下添加default.vue 布局文件。 不像其他组件，布局组件必须有一个根元素，以允许 Nuxt 在布局变化之间应用过渡-这个根元素不能是slot。如果你的应用只有一个布局，建议使用app.vue。 在布局文件中，布局的内容将加载在slot中，~/layouts/default.vue</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你使用app.vue你还需要添加</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NuxtLayout</span><span class="token punctuation">&gt;</span></span>
      // 在app.vue中没有NuxtLayout组件，内容将会不显示
	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NuxtPage</span><span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NuxtLayout</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果业务组件不使用 <code>&lt;NuxtLayout&gt;</code> 组件包裹，配置布局是不会生效的</p><h3 id="配置布局" tabindex="-1"><a class="header-anchor" href="#配置布局" aria-hidden="true">#</a> 配置布局</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-| layouts/
---| default.vue
---| custom.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以在 NuxtLayout 中添加 name 属性来覆盖默认布局</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NuxtLayout</span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>layout<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NuxtPage</span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NuxtLayout</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
   <span class="token comment">// 您可以根据API调用或登录状态来选择此选项</span>
   <span class="token keyword">const</span> layout <span class="token operator">=</span> <span class="token string">&quot;custom&quot;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以通过 definePageMeta 设置</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NuxtLayout</span><span class="token punctuation">&gt;</span></span>
    巴拉巴拉小魔仙
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NuxtLayout</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token function">definePageMeta</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token string">&quot;custom&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="layouts配置" tabindex="-1"><a class="header-anchor" href="#layouts配置" aria-hidden="true">#</a> layouts配置</h3><p>app.vue中代码</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NuxtLayout</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NuxtPage</span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NuxtLayout</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建组件src/components/Header.vue</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        222
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建src/layouts/default.vue</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Header</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Header</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Header <span class="token keyword">from</span> <span class="token string">&#39;~/components/Header.vue&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即可实现每个页面都有header组件内容</p><h2 id="middleware-中间件" tabindex="-1"><a class="header-anchor" href="#middleware-中间件" aria-hidden="true">#</a> middleware 中间件</h2><p>Nuxt提供了一个可定制的路由中间件框架，可以在整个应用程序中使用，可以认为路由中间件就是导航守卫，因为它接收当前路由和下一个路由作为参数。</p><p>路由中间件有三种</p><h3 id="匿名-或内联-路由中间件" tabindex="-1"><a class="header-anchor" href="#匿名-或内联-路由中间件" aria-hidden="true">#</a> 匿名(或内联)路由中间件</h3><p>直接在使用它们的页面中定义</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
   <span class="token function">definePageMeta</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token function">defineNuxtRouteMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
             console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;匿名路由中间件&#39;</span><span class="token punctuation">,</span> to<span class="token punctuation">,</span> from<span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命名路由中间件" tabindex="-1"><a class="header-anchor" href="#命名路由中间件" aria-hidden="true">#</a> 命名路由中间件</h3><p>放置在middleware/ 目录中，在页面上使用时会通过异步导入自动加载。(注意:路由中间件名称被规范化为串串形式，因此someMiddleware 变成 some-middleware。)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-| middleware/
---| auth.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
   <span class="token function">definePageMeta</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;auth&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局路由中间件" tabindex="-1"><a class="header-anchor" href="#全局路由中间件" aria-hidden="true">#</a> 全局路由中间件</h3><p>放置在 middleware/目录中(带有.global后缀)，并将在每次路由更改时自动运行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-| middleware/
---| auth.global.ts

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>带 .global 后缀的全局路由中间件，执行顺序优先于app.vue</strong> Nuxt提供了两个全局可用的辅助函数，它们可以直接从中间件返回:</p><ul><li>navigateTo 在插件或中间件中重定向到给定的路由。也可以直接调用它来执行页面导航。</li><li>abortNavigation 终止导航，并显示一条可选的错误消息。</li></ul><p>不像 vue-router 中的导航守卫，第三个 next() 参数不会被传递，重定向或路由取消是通过从中间件返回值来处理的。可能的返回值有:</p><ul><li>nothing 不会阻塞导航，并且会移动到下一个中间件功能(如果有的话)，或者完成路由导航</li><li>return navigateTo(&#39;/&#39;) - 重定向到给定的路径，并将重定向代码设置为302 Found</li><li>return navigateTo(&#39;/&#39;, { redirectCode: 301 }) - 重定向到给定的路径，并将重定向代码设置为301 Moved permanent</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">navigateTo</span><span class="token punctuation">(</span>to<span class="token operator">:</span> RouteLocationRaw <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>options<span class="token operator">?</span><span class="token operator">:</span> NavigateToOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
    <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span> <span class="token operator">|</span> NavigationFailure<span class="token operator">&gt;</span> <span class="token operator">|</span> RouteLocationRaw

<span class="token keyword">interface</span> <span class="token class-name">NavigateToOptions</span> <span class="token punctuation">{</span>
  replace<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  redirectCode<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  external<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="middleware-实现单点登录" tabindex="-1"><a class="header-anchor" href="#middleware-实现单点登录" aria-hidden="true">#</a> middleware 实现单点登录</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-| middleware/
---| auth.global.ts
-| enums/
---| auth.ts

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
* enums/auth.ts
**/</span>
<span class="token keyword">export</span> <span class="token keyword">enum</span> WhitePageEnum <span class="token punctuation">{</span>
   <span class="token constant">BASE_HOME</span> <span class="token operator">=</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
   <span class="token constant">SERVER_ERROR_PAGE</span> <span class="token operator">=</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
   <span class="token constant">FETCH_TEST_PAGE</span> <span class="token operator">=</span> <span class="token string">&#39;fetch&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
* middleware/auth.global.ts
**/</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> WhitePageEnum <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;~/enums/auth&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useUserStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;~/store/modules/user&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 白名单</span>
<span class="token keyword">const</span> whitePathList<span class="token operator">:</span> WhitePageEnum<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  WhitePageEnum<span class="token punctuation">.</span><span class="token constant">BASE_HOME</span><span class="token punctuation">,</span>
  WhitePageEnum<span class="token punctuation">.</span><span class="token constant">SERVER_ERROR_PAGE</span><span class="token punctuation">,</span>
  WhitePageEnum<span class="token punctuation">.</span><span class="token constant">FETCH_TEST_PAGE</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtRouteMiddleware</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>to<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> userStore <span class="token operator">=</span> <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 从 store 获取用户信息</span>
  <span class="token keyword">let</span> <span class="token punctuation">{</span> userId <span class="token punctuation">}</span> <span class="token operator">=</span> userStore<span class="token punctuation">.</span>getUserInfo<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> userStore<span class="token punctuation">.</span><span class="token function">fetchUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    userId <span class="token operator">=</span> res<span class="token operator">?.</span>userId<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>whitePathList<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>name <span class="token keyword">as</span> WhitePageEnum<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> nuxtApp <span class="token operator">=</span> <span class="token function">useNuxtApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> _route<span class="token punctuation">,</span> $login <span class="token punctuation">}</span> <span class="token operator">=</span> nuxtApp<span class="token punctuation">;</span>
      <span class="token keyword">await</span> <span class="token function">$login</span><span class="token punctuation">(</span>_route<span class="token operator">?.</span>fullPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>useUserStore 内容可以参考本文档状态管理-引入pinia部分</p><h2 id="pages-页面" tabindex="-1"><a class="header-anchor" href="#pages-页面" aria-hidden="true">#</a> pages 页面</h2><p>页面目录。Nuxt 提供了一个基于文件的路由，使用 Vue Router 在底层创建路由。pages/index.vue 文件将被映射到应用程序 / 路由。 如果你正在使用app.vue，确保在 app.vue 使用 <code>&lt;NuxtPage/&gt;</code> 组件来显示当前页面。</p><h3 id="动态路由" tabindex="-1"><a class="header-anchor" href="#动态路由" aria-hidden="true">#</a> 动态路由</h3><p>建立页面文件时，如果命名时将任何内容放在方括号内，它将被转换为路由参数。在文件名或目录中混合和匹配多个参数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-| pages/
---| index.vue
---| users-[group]/
-----| [id].vue

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会生成路由：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
   &quot;routes&quot;: [
     {
        &quot;name&quot;: &quot;users-group-id&quot;,
        &quot;path&quot;: &quot;/users-:group()/:id()&quot;,
        &quot;component&quot;: &quot;~/pages/users-[group]/[id].vue&quot;
     },
   ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据上面的例子，你可以通过 $route 对象中的 params 访问组件中的 group &amp; idx</p><h3 id="嵌套路由" tabindex="-1"><a class="header-anchor" href="#嵌套路由" aria-hidden="true">#</a> 嵌套路由</h3><p>可以使用 来显示嵌套路由。示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  -| pages/
  ---| parent/
  ------| child.vue
  ---| parent.vue

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个文件树将生成这些路由:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/parent&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;~/pages/parent.vue&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;parent&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;child&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;~/pages/parent/child.vue&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;parent-child&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要显示 child.vue 组件，你必须在 pages/parent.vue 中插入 <code>&lt;NuxtPage&gt;</code> 组件:</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>    <span class="token comment">&lt;!-- parent.vue --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>I am the parent view<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NuxtPage</span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- child.vue --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-base text-gray-600<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          I am the child view
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="页面导航" tabindex="-1"><a class="header-anchor" href="#页面导航" aria-hidden="true">#</a> 页面导航</h3><p>在 setup 可以使用 useRouter、useRoute 来获取路由信息。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
  <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token operator">=</span> route<span class="token punctuation">.</span>params<span class="token punctuation">;</span>
      
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>router<span class="token punctuation">.</span><span class="token function">getRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handlerToHome</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 router.getRoutes() 我们可以获取到当前 web 项目所有的路由，打印获取到上述动态路由的 name 和 path 如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    {
      &quot;name&quot;: &quot;users-group-id&quot;
      &quot;path&quot;: &quot;/users-:group()/:id()&quot;
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="metadata" tabindex="-1"><a class="header-anchor" href="#metadata" aria-hidden="true">#</a> metaData</h3><p>如果想在应用程序中为每个路由定义元数据，可以使用definePageMeta宏来实现这一点</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token function">definePageMeta</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&#39;My home page&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>title<span class="token punctuation">)</span> <span class="token comment">// My home page</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="element-plus安装" tabindex="-1"><a class="header-anchor" href="#element-plus安装" aria-hidden="true">#</a> Element-plus安装</h2><h3 id="安装引入" tabindex="-1"><a class="header-anchor" href="#安装引入" aria-hidden="true">#</a> 安装引入</h3><p><strong>1、先安装Element Plus</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install element-plus --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2、安装Nuxt官方专门针对引入Element Plus 开发的模块</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i @element-plus/nuxt -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3、在nuxt.config.ts中配置modules参数</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  modules<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;@element-plus/nuxt&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  elementPlus<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token doc-comment comment">/** Options */</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，已经引入成功，且所有Element Plus 组件也都可以直接自动导入。</p><h3 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h3>`,96),k={href:"https://github.com/element-plus/element-plus-nuxt#readme",target:"_blank",rel:"noopener noreferrer"},v=a(`<p><strong>如何全局引入element ui 图标</strong> Element Plus UI 的图标并未在nuxt3中做自动导入，所以使用的时候，需要手动从@element-plus/icons-vue中导入, 如下：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> Document <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/icons-vue&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Document</span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为使用到的图标的地方会非常多，所以这里创建plugins目录中创建一个global.ts文件，用于全局引入一些组件。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ElementPlusIconsVue <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/icons-vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtPlugin</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>NuxtApp<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// nuxtApp包含的属性可看文档 https://nuxt.com/docs/guide/going-further/internals</span>

  <span class="token comment">// 全局组件引入</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> component<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>ElementPlusIconsVue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    NuxtApp<span class="token punctuation">.</span>vueApp<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> component<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次在页面中查看</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span> setup<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>el<span class="token operator">-</span>icon<span class="token operator">&gt;</span><span class="token operator">&lt;</span>Document <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>icon<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pinia及数据持久化" tabindex="-1"><a class="header-anchor" href="#pinia及数据持久化" aria-hidden="true">#</a> pinia及数据持久化</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    npm install pinia @pinia/nuxt
    npm i -D @pinia-plugin-persistedstate/nuxt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="项目中配置-nuxt-config-ts中" tabindex="-1"><a class="header-anchor" href="#项目中配置-nuxt-config-ts中" aria-hidden="true">#</a> 项目中配置(nuxt.config.ts中)</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  modules<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;@pinia/nuxt&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;@pinia-plugin-persistedstate/nuxt&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据持久化配置-注册插件-plugis-pinia-ts" tabindex="-1"><a class="header-anchor" href="#数据持久化配置-注册插件-plugis-pinia-ts" aria-hidden="true">#</a> 数据持久化配置,注册插件(plugis/pinia.ts)</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> piniaPluginPersistedstate <span class="token keyword">from</span> <span class="token string">&#39;pinia-plugin-persistedstate&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtPlugin</span><span class="token punctuation">(</span><span class="token punctuation">(</span>nuxtApp<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    nuxtApp<span class="token punctuation">.</span>$pinia<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>piniaPluginPersistedstate<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新建文件-store-counter-ts" tabindex="-1"><a class="header-anchor" href="#新建文件-store-counter-ts" aria-hidden="true">#</a> 新建文件(store/counter.ts)</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 登录信息持久化保存</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> useLoginStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;loginStore&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            userInfo<span class="token operator">:</span><span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    getters<span class="token operator">:</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    actions<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">setUser</span><span class="token punctuation">(</span>e<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>userInfo <span class="token operator">=</span> e
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    persist<span class="token operator">:</span> <span class="token punctuation">{</span>
        storage<span class="token operator">:</span> persistedState<span class="token punctuation">.</span>localStorage<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="页面使用" tabindex="-1"><a class="header-anchor" href="#页面使用" aria-hidden="true">#</a> 页面使用</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cont<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
131434
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useLoginStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/store/login&#39;</span>


<span class="token keyword">let</span> login <span class="token operator">=</span> <span class="token function">useLoginStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>login<span class="token punctuation">.</span>userInfo<span class="token punctuation">)</span>
login<span class="token punctuation">.</span><span class="token function">setUser</span><span class="token punctuation">(</span><span class="token string">&#39;dsdfsf&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>login<span class="token punctuation">.</span>userInfo<span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.cont</span><span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h2><p>获取环境变量可以通过 useRuntimeConfig()里面的public获取，不放在public里面话，客户端渲染是找不到变量的</p><p><strong>安装@types/node</strong> 本地安装 Node 的 TypeScript 类型描述文件即可解决编译器报错</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i --save-dev @types/node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//nuxt.config.ts </span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> loadEnv <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">VITE_ENV_CONFIG</span></span> <span class="token punctuation">{</span>
    <span class="token constant">VITE_API_URL</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> envScript <span class="token operator">=</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">.</span>npm_lifecycle_script<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> envName <span class="token operator">=</span> envScript<span class="token punctuation">[</span>envScript<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// 通过启动命令区分环境</span>
<span class="token keyword">const</span> envData <span class="token operator">=</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>envName<span class="token punctuation">,</span> <span class="token string">&#39;env&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">unknown</span> <span class="token keyword">as</span> <span class="token constant">VITE_ENV_CONFIG</span>

<span class="token comment">// ts文件中调用环境变量</span>
<span class="token comment">// const config = useRuntimeConfig()</span>
<span class="token comment">// console.log(config)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;当前环境：&#39;</span><span class="token punctuation">,</span> envData<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;当前环境：&#39;</span><span class="token punctuation">,</span> envData<span class="token punctuation">.</span><span class="token constant">VITE_API_URL</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   runtimeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span><span class="token operator">:</span><span class="token punctuation">{</span>
           baseUrl<span class="token operator">:</span> envData<span class="token punctuation">.</span><span class="token constant">VITE_API_URL</span> <span class="token comment">// 把env放入这个里面，通过useRuntimeConfig获取</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    vite<span class="token operator">:</span> <span class="token punctuation">{</span>
        envDir<span class="token operator">:</span> <span class="token string">&#39;~/env&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 指定env文件夹</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把拿到的环境变量放在<strong>runtimeConfig</strong>里面</p><img src="https://jitems.gitee.io/myblog/blog/bk565.png" alt="solar"><p>然后在项目根目录新建一个env文件夹</p><img src="https://jitems.gitee.io/myblog/blog/bk563.png" alt="solar"><p>每个env文件设置不同的变量，例如env.dev文件的内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 开发环境请求接口地址
VITE_API_URL=https://nuxtjs.org/dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里随便添加什么变，需要以VITE_开头，然后通过<strong>useRuntimeConfig</strong>都能获取到这些变量</p><img src="https://jitems.gitee.io/myblog/blog/bk564.png" alt="solar"><p>然后随便写个axios请求后，请求的地址就改变了</p><img src="https://jitems.gitee.io/myblog/blog/bk566.png" alt="solar"><h2 id="安装scss及配置全局scss文件" tabindex="-1"><a class="header-anchor" href="#安装scss及配置全局scss文件" aria-hidden="true">#</a> 安装scss及配置全局scss文件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install sass sass-loader -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在assets目录下创建scss/_variables.scss文件，这个文件可编写一些公共的scss代码</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">//_variables.scss</span>

<span class="token comment">// 定义全局scss</span>
<span class="token comment">// 通用背景颜色</span>
<span class="token property"><span class="token variable">$backgroundColor</span></span><span class="token punctuation">:</span> #575AEC<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$textColorUser</span></span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.90<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 全局复选框样式</span>
<span class="token punctuation">:</span><span class="token function">deep</span><span class="token punctuation">(</span>.el-checkbox__input.is-checked+.el-checkbox__label<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$textColorUser</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">:</span><span class="token function">deep</span><span class="token punctuation">(</span>.el-checkbox<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$textColorUser</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">:</span><span class="token function">deep</span><span class="token punctuation">(</span>.el-checkbox__input.is-checked .el-checkbox__inner<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span>  <span class="token variable">$backgroundColor</span><span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span>  <span class="token variable">$backgroundColor</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 全局单选样式</span>
<span class="token punctuation">:</span><span class="token function">deep</span><span class="token punctuation">(</span>.el-radio__input.is-checked+.el-radio__label<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$textColorUser</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">:</span><span class="token function">deep</span><span class="token punctuation">(</span>.el-radio<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$textColorUser</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">:</span><span class="token function">deep</span><span class="token punctuation">(</span>.el-radio__input.is-checked .el-radio__inner<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span>  <span class="token variable">$backgroundColor</span><span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span>  <span class="token variable">$backgroundColor</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 下拉菜单移入效果</span>
<span class="token punctuation">:</span><span class="token function">deep</span><span class="token punctuation">(</span>.<span class="token property">el-dropdown-menu__item</span><span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span>.is-disabled<span class="token punctuation">)</span><span class="token punctuation">:</span>hover<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #F3F3F3<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$backgroundColor</span><span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nuxt.config.ts中配置</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//nuxt.config.ts</span>
vite<span class="token operator">:</span> <span class="token punctuation">{</span>
    envDir<span class="token operator">:</span> <span class="token string">&#39;~/env&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 指定env文件夹</span>
    css<span class="token operator">:</span> <span class="token punctuation">{</span>
      preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
        scss<span class="token operator">:</span> <span class="token punctuation">{</span>
          additionalData<span class="token operator">:</span> <span class="token string">&#39;@import &quot;~/assets/scss/_variables.scss&quot;;&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_404页面配置" tabindex="-1"><a class="header-anchor" href="#_404页面配置" aria-hidden="true">#</a> 404页面配置</h2><p>在这里我采用的是middleware中间件方式来做的404页面,新建全局路由中间件文件，middleware/auth.global.ts</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { useLoginStore } from &#39;@/store/login&#39;
// 路由中间件
export default defineNuxtRouteMiddleware((to, from) =&gt; {

    // 不存在的页面路由拦截
    if ((to.name ?? &#39;&#39;) == &#39;&#39; &amp;&amp; to.fullPath != &#39;/&#39;) {
        return navigateTo(&#39;/404/404&#39;)
    }

    let path = [&#39;/login/login&#39;, &#39;/404/404&#39;]
    // 未登录跳转到登录页面
    // if (useLoginStore().userInfo == &#39;&#39; &amp;&amp; !path.includes(to.fullPath) &amp;&amp; !to.fullPath.includes(&#39;/agreement/agreement&#39;)) {
    //     return navigateTo(&#39;/login/login&#39;)
    // }
    // 有登录信息跳转到后台系统
    // if (useLoginStore().userInfo != &#39;&#39; &amp;&amp; to.fullPath == &#39;/&#39;) {
    //     return navigateTo(&#39;/home/home&#39;)
    // }

})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="components-组件" tabindex="-1"><a class="header-anchor" href="#components-组件" aria-hidden="true">#</a> components 组件</h2><h3 id="组件名策略" tabindex="-1"><a class="header-anchor" href="#组件名策略" aria-hidden="true">#</a> 组件名策略</h3><p>默认情况下，Nuxt自动导入components目录中的任何组件，组件名将基于它的路径、目录和文件名。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>| components/
--| Base
----| Footer.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上，该组件名为：BaseFooter</p><p>如果只想根据组件的名称而不是路径自动导入组件，那么需要在 nuxt.config.ts 文件中将 pathPrefix 选项设置为false，此时与Nuxt2的命名策略相同：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//nuxt.config.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  components<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;~/components/&#39;</span><span class="token punctuation">,</span>
      pathPrefix<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>| components/
 --| Base
----| Footer.vue

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="绕过自动导入" tabindex="-1"><a class="header-anchor" href="#绕过自动导入" aria-hidden="true">#</a> 绕过自动导入</h3><p>可以在 nuxt.config.ts 文件中在 components 下配置 path；只有 path 配置路径下的组件才会被自动导入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>| components/
--| business/
----| Count.vue
--| public/
----| MyImg.vue

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//nuxt.config.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   components<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
         path<span class="token operator">:</span> <span class="token string">&#39;~/components/public&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认为 &#39;~/components&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上只有 public 目录下的组件将被注册，且自动注册的组件名为 MyImg (非 PublicMyImg)；business 目录下的组件将被忽略。</p><p>可以配置 components 为 false，此时 components 下任何组件都不会被自动导入。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//nuxt.config.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   components<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以显式地从 #components 导入组件</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LazyMyImg</span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
   <span class="token keyword">import</span> <span class="token punctuation">{</span> LazyMyImg <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;#components&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="惰性加载组件" tabindex="-1"><a class="header-anchor" href="#惰性加载组件" aria-hidden="true">#</a> 惰性加载组件</h3><p>要动态导入一个组件(也称为惰性加载组件)，则在组件名称前添加 Lazy 前缀。通过使用 Lazy 前缀，你可以延迟加载组件代码，直到合适的时刻</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyImg</span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LazyMyImg</span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="composables-状态共享" tabindex="-1"><a class="header-anchor" href="#composables-状态共享" aria-hidden="true">#</a> composables 状态共享</h2><p>composables 目录下的内容也将自动将  Vue 组合导入到应用中，Nuxt 只扫描 composables/ 目录的顶层文件。 Composables 的主要作用是将常用逻辑和逻辑相关的代码抽象出来，以提高代码可复用性和可维护性，如：跨组件创建响应性的、对ssr友好的共享状态—— useState</p><p>composables/counter.ts 内容</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">userCounter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;counter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>业务组件</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> Count <span class="token keyword">from</span> <span class="token string">&quot;~/components/business/Count.vue&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">userCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    业务组件内容: {{ counter }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>counter--<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> － <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>counter++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> ＋ <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>business/Count 组件内容</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Count组件内容：{{ counter }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">userCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,69);function m(g,b){const t=p("ExternalLinkIcon");return i(),o("div",null,[d,l(" more "),r,n("p",null,[s("所有的配置参数可以点击查看"),n("a",k,[s("官方文档"),c(t)])]),v])}const f=e(u,[["render",m],["__file","Nuxt3项目搭建.html.vue"]]);export{f as default};
