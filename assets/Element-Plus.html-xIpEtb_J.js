import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as l,d as i,a as s,b as n,f as p,e as a}from"./app-oGr5u-1Z.js";const u={},r=s("p",null," ",-1),k=a(`<h1 id="element-plus项目搭建" tabindex="-1"><a class="header-anchor" href="#element-plus项目搭建" aria-hidden="true">#</a> Element-Plus项目搭建</h1><p>项目使用 Vue3 + Vite + TypeScript + Element Plus + Vue Router + Pinia 等前端主流技术栈</p><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2><p><strong>1. 运行环境Node</strong></p><p>Node下载地址: http://nodejs.cn/download/</p><p>根据本机环境选择对应版本下载，安装过程可视化操作非常简便，静默安装即可。</p><p>安装完成后命令行终端 node -v 查看版本号以验证是否安装成功：</p><img src="https://jitems.gitee.io/myblog/bk269.png" alt="solar"><p><strong>2.pnpm安装</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm install <span class="token operator">-</span>g pnpm <span class="token comment">//通过 npm 安装</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3. 开发工具VSCode</strong></p><p>下载地址：https://code.visualstudio.com/Download</p><p><strong>4. 必装插件Volar</strong></p><p>VSCode 插件市场搜索 Volar (就排在第一位的骷髅头)，且要禁用默认的 Vetur.</p><img src="https://jitems.gitee.io/myblog/bk270.png" alt="solar"><h2 id="项目初始化" tabindex="-1"><a class="header-anchor" href="#项目初始化" aria-hidden="true">#</a> 项目初始化</h2><p><strong>1. Vite 是什么？</strong></p><p>Vite是一种新型前端构建工具，能够显著提升前端开发体验。</p><p>Vite 官方中文文档：https://cn.vitejs.dev/guide/</p><p><strong>2. 初始化项目</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>npm create vite <span class="token punctuation">[</span>vue3<span class="token operator">-</span>element<span class="token operator">-</span>admin<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>vue3-element-admin：项目名称</p></li><li><p>vue-ts : Vue + TypeScript 的模板，除此还有vue，react，react-ts模板</p><img src="https://jitems.gitee.io/myblog/bk271.png" alt="solar"></li></ul><p><strong>3. 启动项目</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>cd vue3<span class="token operator">-</span>element<span class="token operator">-</span>admin
npm install
npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装scss" tabindex="-1"><a class="header-anchor" href="#安装scss" aria-hidden="true">#</a> 安装SCSS</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install sass sass-loader -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,26),d={href:"http://localhost:3000/",target:"_blank",rel:"noopener noreferrer"},v=a(`<img src="https://jitems.gitee.io/myblog/bk272.png" alt="solar"><h2 id="整合element-plus" tabindex="-1"><a class="header-anchor" href="#整合element-plus" aria-hidden="true">#</a> 整合Element-Plus</h2><p><strong>1.本地安装Element Plus和图标组件</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>npm install element<span class="token operator">-</span>plus
npm install <span class="token annotation punctuation">@element</span><span class="token operator">-</span>plus<span class="token operator">/</span>icons<span class="token operator">-</span>vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.全局注册组件</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token class-name">ElementPlus</span> from &#39;element<span class="token operator">-</span>plus&#39;
<span class="token keyword">import</span> &#39;element<span class="token operator">-</span>plus<span class="token operator">/</span>dist<span class="token operator">/</span>index<span class="token punctuation">.</span>css&#39;

<span class="token comment">// 全局注册icons</span>
<span class="token keyword">import</span> <span class="token operator">*</span> as <span class="token class-name">ElementPlusIconsVue</span> from &#39;<span class="token annotation punctuation">@element</span><span class="token operator">-</span>plus<span class="token operator">/</span>icons<span class="token operator">-</span>vue&#39;
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> component<span class="token punctuation">]</span> of <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token class-name">ElementPlusIconsVue</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> component<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token class-name">App</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token class-name">ElementPlus</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token char">&#39;#app&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. Element Plus全局组件类型声明</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token string">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;element-plus/global&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4. 页面使用 Element Plus 组件和图标</strong></p><p>引入icons</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Search<span class="token punctuation">,</span> Edit<span class="token punctuation">,</span>Check<span class="token punctuation">,</span>Message<span class="token punctuation">,</span>Star<span class="token punctuation">,</span> Delete<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/icons-vue&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代码如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> src<span class="token operator">/</span><span class="token class-name">App</span><span class="token punctuation">.</span>vue <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>template<span class="token punctuation">&gt;</span></span>
  <span class="token operator">&lt;</span>img alt<span class="token operator">=</span><span class="token string">&quot;Vue logo&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;./assets/logo.png&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token class-name">HelloWorld</span> msg<span class="token operator">=</span><span class="token string">&quot;Hello Vue 3 + TypeScript + Vite&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token string">&quot;text-align: center;margin-top: 10px&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button <span class="token operator">:</span>icon<span class="token operator">=</span><span class="token string">&quot;Search&quot;</span> circle<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span> <span class="token operator">:</span>icon<span class="token operator">=</span><span class="token string">&quot;Edit&quot;</span> circle<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;success&quot;</span> <span class="token operator">:</span>icon<span class="token operator">=</span><span class="token string">&quot;Check&quot;</span> circle<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;info&quot;</span> <span class="token operator">:</span>icon<span class="token operator">=</span><span class="token string">&quot;Message&quot;</span> circle<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;warning&quot;</span> <span class="token operator">:</span>icon<span class="token operator">=</span><span class="token string">&quot;Star&quot;</span> circle<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;danger&quot;</span> <span class="token operator">:</span>icon<span class="token operator">=</span><span class="token string">&quot;Delete&quot;</span> circle<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span> setup<span class="token operator">&gt;</span>
     <span class="token keyword">import</span> <span class="token class-name">HelloWorld</span> from &#39;<span class="token operator">/</span>src<span class="token operator">/</span>components<span class="token operator">/</span><span class="token class-name">HelloWorld</span><span class="token punctuation">.</span>vue&#39;
     <span class="token keyword">import</span> <span class="token punctuation">{</span><span class="token class-name">Search</span><span class="token punctuation">,</span> <span class="token class-name">Edit</span><span class="token punctuation">,</span><span class="token class-name">Check</span><span class="token punctuation">,</span><span class="token class-name">Message</span><span class="token punctuation">,</span><span class="token class-name">Star</span><span class="token punctuation">,</span> <span class="token class-name">Delete</span><span class="token punctuation">}</span> from &#39;<span class="token annotation punctuation">@element</span><span class="token operator">-</span>plus<span class="token operator">/</span>icons<span class="token operator">-</span>vue&#39;
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5. 效果预览</strong></p><img src="https://jitems.gitee.io/myblog/bk273.png" alt="solar"><h2 id="路径别名配置" tabindex="-1"><a class="header-anchor" href="#路径别名配置" aria-hidden="true">#</a> 路径别名配置</h2><p><strong>1.使用 @ 代替 src</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>tsconfig.json
{
	&quot;compilerOptions&quot;:{
		/** baseUrl 用来告诉编译器到哪里去查找模块，使用非相对模块时必须配置此项 */
		&quot;baseUrl&quot;: &quot;.&quot;,
		/** 非相对模块导入的路径映射配置，根据 baseUrl 配置进行路径计算 */
		&quot;paths&quot;: {
		  &quot;@/*&quot;: [&quot;src/*&quot;]
		},
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// vite.config.ts
	resolve: {
		alias: {
		  /** @ 符号指向 src 目录 */
		  &quot;@&quot;: resolve(__dirname, &quot;./src&quot;)
		}
	},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. 安装@types/node</strong></p><p>本地安装 Node 的 TypeScript 类型描述文件即可解决编译器报错</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install @types/node --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3. Vite配置</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// vite.config.ts
import { defineConfig, loadEnv } from &#39;vite&#39;
import vue from &#39;@vitejs/plugin-vue&#39;
import path, { resolve } from &quot;path&quot;
// vite配置地址：https://cn.vitejs.dev/config
export default ({ mode }: any) =&gt; {
  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        /** @ 符号指向 src 目录 */
        &quot;@&quot;: resolve(__dirname, &quot;./src&quot;)
      }
    },
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.别名使用</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// App.vue</span>
<span class="token keyword">import</span> <span class="token class-name">HelloWorld</span> from &#39;<span class="token operator">/</span>src<span class="token operator">/</span>components<span class="token operator">/</span><span class="token class-name">HelloWorld</span><span class="token punctuation">.</span>vue&#39;
												↓
<span class="token keyword">import</span> <span class="token class-name">HelloWorld</span> from &#39;@<span class="token operator">/</span>components<span class="token operator">/</span><span class="token class-name">HelloWorld</span><span class="token punctuation">.</span>vue&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2><blockquote><p>官方教程: https://cn.vitejs.dev/guide/env-and-mode.html</p></blockquote><p><strong>1. env配置文件</strong></p><p>项目根目录分别添加 开发、生产和模拟环境配置</p><ul><li>开发环境配置：.env.development</li><li>变量必须以 VITE_ 为前缀才能暴露给外部读取</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  VITE_BASE_API <span class="token operator">=</span> <span class="token string">&#39;https://mock.liuj.com/mock/api/v1&#39;</span>
  VITE_APP_PORT <span class="token operator">=</span> <span class="token number">3000</span>
  VITE_PUBLIC_PATH <span class="token operator">=</span> <span class="token string">&#39;/dev-api&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>生产环境配置：.env.production</li><li>变量必须以 VITE_ 为前缀才能暴露给外部读取</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  VITE_BASE_API <span class="token operator">=</span> <span class="token string">&#39;https://mock.liuj.com/mock/api/v1&#39;</span>
  VITE_APP_PORT <span class="token operator">=</span> <span class="token number">3000</span>
  VITE_PUBLIC_PATH <span class="token operator">=</span> <span class="token string">&#39;/prod-api&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>模拟生产环境配置：.env.staging</li><li>变量必须以 VITE_ 为前缀才能暴露给外部读取</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> VITE_BASE_API <span class="token operator">=</span> <span class="token string">&#39;https://mock.liuj.com/mock/api/v1&#39;</span>
 VITE_APP_PORT <span class="token operator">=</span> <span class="token number">3000</span>
 VITE_PUBLIC_PATH <span class="token operator">=</span> <span class="token string">&#39;/prod--api&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.环境变量智能提示</strong></p><p>添加环境变量类型声明</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// src/ env.d.ts</span>
<span class="token comment">// 环境变量类型声明</span>
<span class="token keyword">interface</span> <span class="token class-name">ImportMetaEnv</span> <span class="token punctuation">{</span>
  <span class="token constant">VITE_BASE_API</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token constant">VITE_APP_PORT</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token constant">VITE_PUBLIC_PATH</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ImportMeta</span> <span class="token punctuation">{</span>
  readonly env<span class="token operator">:</span> <span class="token class-name">ImportMetaEnv</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后面在使用自定义环境变量就会有智能提示，环境变量使用请参考下一节。</p><img src="https://jitems.gitee.io/myblog/bk274.png" alt="solar"><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_APP_PORT</span><span class="token punctuation">)</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_BASE_API</span><span class="token punctuation">)</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_PUBLIC_PATH</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://jitems.gitee.io/myblog/bk562.png" alt="solar"><p><strong>3.模式</strong></p><p>默认情况下，开发服务器 (<code>dev</code> 命令) 运行在 <code>development</code> (开发) 模式，而 <code>build</code> 命令则运行在 <code>production</code> (生产) 模式。</p><p>这意味着当执行 <code>vite build</code> 时，它会自动加载 <code>.env.production</code> 中可能存在的环境变量：</p><p>在你的应用中，你可以使用 <code>import.meta.env.VITE_APP_TITLE</code> 渲染标题。</p><p>你可以通过传递 <code>--mode</code> 选项标志来覆盖命令使用的默认模式。例如，如果你想为我们假设的 staging 模式构建应用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vite build --mode staging
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>4.在配置中使用环境变量</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// vite.config.ts
import { defineConfig, loadEnv } from &#39;vite&#39;
import vue from &#39;@vitejs/plugin-vue&#39;
import path, { resolve } from &quot;path&quot;
// vite配置地址：https://cn.vitejs.dev/config
export default ({ mode }: any) =&gt; {

  const viteEnv = loadEnv(mode, process.cwd(), &#39;&#39;)
  const { VITE_APP_PORT } = viteEnv
  console.log(VITE_APP_PORT);
  
  return defineConfig({
    plugins: [vue()],
	resolve: {
	  alias: {
	    /** @ 符号指向 src 目录 */
	    &quot;@&quot;: resolve(__dirname, &quot;./src&quot;)
	  }
	},
  })
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="浏览器跨域处理" tabindex="-1"><a class="header-anchor" href="#浏览器跨域处理" aria-hidden="true">#</a> 浏览器跨域处理</h2><p><strong>1. 跨域原理</strong></p><blockquote><p>浏览器同源策略: 协议、域名和端口都相同是同源，浏览器会限制非同源请求读取响应结果。</p></blockquote><p>解决浏览器跨域限制大体分为后端和前端两个方向：</p><ul><li>后端：开启 CORS 资源共享；</li><li>前端：使用反向代理欺骗浏览器误认为是同源请求；</li></ul><p><strong>2. 前端反向代理解决跨域</strong></p><p>Vite 配置反向代理解决跨域，<strong>因为需要读取环境变量，故写法和上文的出入较大，这里贴出完整的 vite.config.ts 配置。</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig<span class="token punctuation">,</span> loadEnv <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">import</span> path<span class="token punctuation">,</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span>
<span class="token comment">// vite配置地址：https://cn.vitejs.dev/config</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> mode <span class="token punctuation">}</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  
  <span class="token comment">// 获取环境变量中的数据</span>
  <span class="token keyword">const</span> viteEnv <span class="token operator">=</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token constant">VITE_APP_PORT</span> <span class="token punctuation">}</span> <span class="token operator">=</span> viteEnv

  <span class="token comment">// console.log(loadEnv(mode, process.cwd()));</span>
  <span class="token keyword">return</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/** @ 符号指向 src 目录 */</span>
        <span class="token string-property property">&quot;@&quot;</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;./src&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token doc-comment comment">/** 是否开启 HTTPS */</span>
      <span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token doc-comment comment">/** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */</span>
      <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// host: &quot;0.0.0.0&quot;</span>
      <span class="token doc-comment comment">/** 端口号 */</span>
      <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token constant">VITE_APP_PORT</span><span class="token punctuation">,</span>
      <span class="token doc-comment comment">/** 是否自动打开浏览器 */</span>
      <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token doc-comment comment">/** 跨域设置允许 */</span>
      <span class="token literal-property property">cors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token doc-comment comment">/** 端口被占用时，是否直接退出 */</span>
      <span class="token literal-property property">strictPort</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token doc-comment comment">/** 接口代理 */</span>
      <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;/api/v1&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;https://mock.mengxuegu.com/mock/63218b5fb4c53348ed2bc212/api/v1&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token doc-comment comment">/** 是否允许跨域 */</span>
          <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;/api/v1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">sourcemap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token doc-comment comment">/** Vite 2.6.x 以上需要配置 minify: &quot;terser&quot;, terserOptions 才能生效 */</span>
      <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token string">&#39;terser&#39;</span><span class="token punctuation">,</span>
      <span class="token doc-comment comment">/** 消除打包大小超过 500kb 警告 */</span>
      <span class="token literal-property property">chunkSizeWarningLimit</span><span class="token operator">:</span> <span class="token number">1500</span><span class="token punctuation">,</span>
      <span class="token doc-comment comment">/** 在打包代码时移除 console.log、debugger */</span>
      <span class="token literal-property property">terserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">drop_console</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">drop_debugger</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token function">manualChunks</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> id
                <span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;node_modules/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
                <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
                <span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token function-variable function">chunkFileNames</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">chunkInfo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> facadeModuleId <span class="token operator">=</span> chunkInfo<span class="token punctuation">.</span>facadeModuleId
              <span class="token operator">?</span> chunkInfo<span class="token punctuation">.</span>facadeModuleId<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
              <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> fileName <span class="token operator">=</span>
              facadeModuleId<span class="token punctuation">[</span>facadeModuleId<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&#39;[name]&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">js/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fileName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/[name].[hash].js</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="svg图标" tabindex="-1"><a class="header-anchor" href="#svg图标" aria-hidden="true">#</a> SVG图标</h2><blockquote><p><strong>官方教程：</strong> https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md</p></blockquote>`,61),m={href:"https://github.com/vbenjs/vite-plugin-svg-icons",target:"_blank",rel:"noopener noreferrer"},b=a(`<p><strong>1. 安装 vite-plugin-svg-icons</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i fast-glob@3.2.11 <span class="token parameter variable">-D</span>
<span class="token function">npm</span> i vite-plugin-svg-icons@2.0.1 <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. 创建图标文件夹</strong></p><p>项目创建 src/assets/icons 文件夹，存放 iconfont 下载的 SVG 图标</p><p><strong>3. main.ts 引入注册脚本</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> &#39;virtual<span class="token operator">:</span>svg<span class="token operator">-</span>icons<span class="token operator">-</span>register&#39;<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4. vite.config.ts 插件配置</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig<span class="token punctuation">,</span> loadEnv <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">import</span> path<span class="token punctuation">,</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createSvgIconsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-svg-icons&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> mode <span class="token punctuation">}</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

  <span class="token keyword">const</span> viteEnv <span class="token operator">=</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token constant">VITE_APP_PORT</span> <span class="token punctuation">}</span> <span class="token operator">=</span> viteEnv

  <span class="token comment">// console.log(loadEnv(mode, process.cwd()));</span>
  <span class="token keyword">return</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token function">createSvgIconsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		    <span class="token comment">// 指定需要缓存的图标文件夹</span>
		    <span class="token literal-property property">iconDirs</span><span class="token operator">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;src/assets/icons&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		    <span class="token comment">// 指定symbolId格式</span>
		    <span class="token literal-property property">symbolId</span><span class="token operator">:</span> <span class="token string">&#39;icon-[dir]-[name]&#39;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/** @ 符号指向 src 目录 */</span>
        <span class="token string-property property">&quot;@&quot;</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;./src&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5. TypeScript支持</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vite-plugin-svg-icons/client&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. 组件封装</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> src<span class="token operator">/</span>components<span class="token operator">/</span><span class="token class-name">SvgIcon</span><span class="token operator">/</span>index<span class="token punctuation">.</span>vue <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>template<span class="token punctuation">&gt;</span></span>
  <span class="token operator">&lt;</span>svg aria<span class="token operator">-</span>hidden<span class="token operator">=</span><span class="token string">&quot;true&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;svg-icon&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>use <span class="token operator">:</span>xlink<span class="token operator">:</span>href<span class="token operator">=</span><span class="token string">&quot;symbolId&quot;</span> <span class="token operator">:</span>fill<span class="token operator">=</span><span class="token string">&quot;color&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>svg<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> from <span class="token char">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> props<span class="token operator">=</span><span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  prefix<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token char">&#39;icon&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  iconClass<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span>
    required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  color<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> &#39;&#39;
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> symbolId <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> \`#$<span class="token punctuation">{</span>props<span class="token punctuation">.</span>prefix<span class="token punctuation">}</span><span class="token operator">-</span>$<span class="token punctuation">{</span>props<span class="token punctuation">.</span>iconClass<span class="token punctuation">}</span>\`<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token generics"><span class="token punctuation">&lt;</span>style scoped<span class="token punctuation">&gt;</span></span>
<span class="token punctuation">.</span>svg<span class="token operator">-</span>icon <span class="token punctuation">{</span>
  width<span class="token operator">:</span> <span class="token number">1</span>em<span class="token punctuation">;</span>
  height<span class="token operator">:</span> <span class="token number">1</span>em<span class="token punctuation">;</span>
  vertical<span class="token operator">-</span>align<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">0.15</span>em<span class="token punctuation">;</span>
  overflow<span class="token operator">:</span> hidden<span class="token punctuation">;</span>
  fill<span class="token operator">:</span> currentColor<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>7. 使用案例</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>template<span class="token punctuation">&gt;</span></span>
  <span class="token operator">&lt;</span>svg<span class="token operator">-</span>icon icon<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;menu&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
	<span class="token keyword">import</span> <span class="token class-name">SvgIcon</span> from &#39;@<span class="token operator">/</span>components<span class="token operator">/</span><span class="token class-name">SvgIcon</span><span class="token operator">/</span>index<span class="token punctuation">.</span>vue&#39;<span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pinia状态管理" tabindex="-1"><a class="header-anchor" href="#pinia状态管理" aria-hidden="true">#</a> Pinia状态管理</h2><blockquote><p>Pinia 是 Vue.js 的轻量级状态管理库，Vuex 的替代方案。</p></blockquote><p>尤雨溪于2021.11.24 在 Twitter 上宣布：Pinia 正式成为 vuejs 官方的状态库，意味着 Pinia 就是 Vuex 5 。</p><img src="https://jitems.gitee.io/myblog/bk275.png" alt="solar"><p><strong>1. 安装Pinia</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>npm install pinia
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2. Pinia全局注册</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// src/main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> from <span class="token string">&quot;pinia&quot;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token char">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. 定义Store</strong></p><p>使用<code>defineStore</code>定义<code>store</code>，第一个参数必须是全局唯一的id，可以使用<code>Symbol</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/store/index.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
 
<span class="token keyword">export</span> <span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">10</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function-variable function">doubleCount</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>counter <span class="token operator">*</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>counter<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4. 使用Pinia</strong></p><p>在vue页面中使用</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//HelloWorld.vue</span>
<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> from <span class="token string">&quot;@/store&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//不推荐下面这种写法</span>
  <span class="token keyword">const</span> counter <span class="token operator">=</span> store<span class="token punctuation">.</span>counter
  <span class="token keyword">const</span> doubleCount <span class="token operator">=</span> store<span class="token punctuation">.</span>doubleCount
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token generics"><span class="token punctuation">&lt;</span>template<span class="token punctuation">&gt;</span></span>
  <span class="token comment">//直接调用store中的值</span>
  <span class="token generics"><span class="token punctuation">&lt;</span>h1<span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>store<span class="token punctuation">.</span>counter<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
  <span class="token comment">//做逻辑操作后调用store中的值</span>
  <span class="token generics"><span class="token punctuation">&lt;</span>h1<span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>store<span class="token punctuation">.</span>doubleCount<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
   <span class="token comment">//调用store中的方法</span>
  <span class="token operator">&lt;</span>el<span class="token operator">-</span>button <span class="token annotation punctuation">@click</span><span class="token operator">=</span><span class="token string">&quot;store.increment&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span><span class="token operator">&gt;</span><span class="token class-name">Primary</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
  <span class="token generics"><span class="token punctuation">&lt;</span>br<span class="token punctuation">&gt;</span></span>
  <span class="token comment">//如果store中有改变或点击increment事件，那么下面这种方式不会在页面更新，不推荐</span>
  <span class="token generics"><span class="token punctuation">&lt;</span>h1<span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>counter<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
  <span class="token generics"><span class="token punctuation">&lt;</span>h1<span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>doubleCount<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token generics"><span class="token punctuation">&lt;</span>style scoped<span class="token punctuation">&gt;</span></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：在页面中使用引入store会出现找不到模块，这个时候不用管，实际上是能找到的</p><img src="https://jitems.gitee.io/myblog/bk276.png" alt="solar"><p>界面显示</p><img src="https://jitems.gitee.io/myblog/bk277.png" alt="solar"><h2 id="axios网络请求库封装" tabindex="-1"><a class="header-anchor" href="#axios网络请求库封装" aria-hidden="true">#</a> Axios网络请求库封装</h2><p><strong>1. axios工具封装</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//  src/utils/request.ts</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage<span class="token punctuation">,</span> ElMessageBox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;element-plus&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> localStorage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/storage&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> useStore <span class="token keyword">from</span> <span class="token string">&quot;@/store&quot;</span><span class="token punctuation">;</span> <span class="token comment">// pinia</span>

<span class="token comment">// 创建 axios 实例</span>
<span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    baseURL<span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_PUBLIC_PATH</span><span class="token punctuation">,</span>
    timeout<span class="token operator">:</span> <span class="token number">50000</span><span class="token punctuation">,</span>
    headers<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json;charset=utf-8&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 请求拦截器</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 在发送请求之前做些什么</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Expected &#39;config&#39; and &#39;config.headers&#39; not to be undefined</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> user <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>localStorage<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> config
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 对请求错误做些什么</span>
        <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">)</span>

<span class="token comment">// 添加响应拦截器</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
		<span class="token comment">// 2xx 范围内的状态码都会触发该函数。</span>
		<span class="token comment">// 对响应数据做点什么</span>
		<span class="token keyword">const</span> <span class="token punctuation">{</span> code<span class="token punctuation">,</span> msg <span class="token punctuation">}</span> <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">===</span> <span class="token string">&#39;00000&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">ElMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                message<span class="token operator">:</span> msg <span class="token operator">||</span> <span class="token string">&#39;系统出错&#39;</span><span class="token punctuation">,</span>
                type<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>msg <span class="token operator">||</span> <span class="token string">&#39;Error&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token keyword">function</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 超出 2xx 范围的状态码都会触发该函数。</span>
		<span class="token comment">// 对响应错误做点什么</span>
		<span class="token keyword">const</span> <span class="token punctuation">{</span> code<span class="token punctuation">,</span> msg <span class="token punctuation">}</span> <span class="token operator">=</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data
        <span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">===</span> <span class="token string">&#39;A0230&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// token 过期</span>
            localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 清除浏览器全部缓存</span>
            window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 跳转登录页</span>
            ElMessageBox<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;当前页面已失效，请重新登录&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;提示&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">ElMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                message<span class="token operator">:</span> msg <span class="token operator">||</span> <span class="token string">&#39;系统出错&#39;</span><span class="token punctuation">,</span>
                type<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>msg <span class="token operator">||</span> <span class="token string">&#39;Error&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 导出 axios 实例</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> service

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. API封装</strong></p><p>以登录成功后获取用户信息(昵称、头像、角色集合和权限集合)的接口为案例，演示如何通过封装的 axios 工具类请求后端接口，其中响应数据</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// src/api/login.ts</span>
<span class="token comment">// 导入axios实例</span>
<span class="token keyword">import</span> <span class="token namespace">httpRequest</span> from &#39;@<span class="token operator">/</span>utils<span class="token operator">/</span>request&#39;

<span class="token comment">// 定义接口的传参</span>
<span class="token keyword">interface</span> <span class="token class-name">UserInfoParam</span> <span class="token punctuation">{</span>
	userID<span class="token operator">:</span> string<span class="token punctuation">,</span>
	userName<span class="token operator">:</span> string
<span class="token punctuation">}</span>

<span class="token comment">// 获取用户信息</span>
export function <span class="token function">apiGetUserInfo</span><span class="token punctuation">(</span>param<span class="token operator">:</span> <span class="token class-name">UserInfoParam</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">httpRequest</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		url<span class="token operator">:</span> <span class="token char">&#39;/users&#39;</span><span class="token punctuation">,</span>
		method<span class="token operator">:</span> <span class="token char">&#39;post&#39;</span><span class="token punctuation">,</span>
		data<span class="token operator">:</span> param<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. API调用</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// src/login/login.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> apiGetUserInfo <span class="token punctuation">}</span> from &#39;@<span class="token operator">/</span>api<span class="token operator">/</span>login&#39;

<span class="token comment">// 获取登录用户信息</span>
<span class="token keyword">const</span> param <span class="token operator">=</span> <span class="token punctuation">{</span>
    userID<span class="token operator">:</span> <span class="token char">&#39;10001&#39;</span><span class="token punctuation">,</span>
    userName<span class="token operator">:</span> <span class="token char">&#39;Mike&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token function">apiGetUserInfo</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态权限路由" tabindex="-1"><a class="header-anchor" href="#动态权限路由" aria-hidden="true">#</a> 动态权限路由</h2><blockquote><p>官方文档： https://router.vuejs.org/zh/api/</p></blockquote><p><strong>1. 安装 vue-router</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>npm install vue<span class="token operator">-</span>router<span class="token annotation punctuation">@4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2. 创建路由实例</strong></p><p>创建路由实例并导出，其中包括静态路由数据，动态路由后面将通过接口从后端获取并整合用户角色的权限控制。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/router/index.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHashHistory<span class="token punctuation">,</span> RouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 创建路由规则</span>
<span class="token keyword">const</span> constantRoutes<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>RouteRecordRaw<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
        redirect<span class="token operator">:</span> <span class="token string">&#39;/dashboard&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;login&quot; */</span><span class="token string">&#39;../views/home/home.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                path<span class="token operator">:</span> <span class="token string">&#39;/dashboard&#39;</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">&#39;dashboard&#39;</span><span class="token punctuation">,</span>
                meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                    title<span class="token operator">:</span> <span class="token string">&#39;系统首页&#39;</span><span class="token punctuation">,</span>
                    permiss<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;dashboard&quot; */</span> <span class="token string">&#39;../views/dashboard/dashboard.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                path<span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span>
                meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                    title<span class="token operator">:</span> <span class="token string">&#39;个人中心&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;user&quot; */</span> <span class="token string">&#39;../views/user/user.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                path<span class="token operator">:</span> <span class="token string">&#39;/form&#39;</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">&#39;baseform&#39;</span><span class="token punctuation">,</span>
                meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                    title<span class="token operator">:</span> <span class="token string">&#39;表单&#39;</span><span class="token punctuation">,</span>
                    permiss<span class="token operator">:</span> <span class="token string">&#39;5&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;form&quot; */</span> <span class="token string">&#39;../views/form/form.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                path<span class="token operator">:</span> <span class="token string">&#39;/tabs&#39;</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">&#39;tabs&#39;</span><span class="token punctuation">,</span>
                meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                    title<span class="token operator">:</span> <span class="token string">&#39;tab标签&#39;</span><span class="token punctuation">,</span>
                    permiss<span class="token operator">:</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;tabs&quot; */</span> <span class="token string">&#39;../views/tabs/tabs.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                path<span class="token operator">:</span> <span class="token string">&#39;/permission&#39;</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">&#39;permission&#39;</span><span class="token punctuation">,</span>
                meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                    title<span class="token operator">:</span> <span class="token string">&#39;权限管理&#39;</span><span class="token punctuation">,</span>
                    permiss<span class="token operator">:</span> <span class="token string">&#39;13&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;permission&quot; */</span> <span class="token string">&#39;../views/permission/permission.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                path<span class="token operator">:</span> <span class="token string">&#39;/icon&#39;</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span>
                meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                    title<span class="token operator">:</span> <span class="token string">&#39;自定义图标&#39;</span><span class="token punctuation">,</span>
                    permiss<span class="token operator">:</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;icon&quot; */</span> <span class="token string">&#39;../views/icon/icon.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;Login&#39;</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">&#39;登录&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;login&quot; */</span> <span class="token string">&#39;../views/login/login.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;/404&#39;</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;404&#39;</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">&#39;没有权限&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;404&quot; */</span> <span class="token string">&#39;../views/404/404.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    history<span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    routes<span class="token operator">:</span> constantRoutes <span class="token keyword">as</span> RouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 刷新时，滚动条位置还原</span>
    <span class="token function-variable function">scrollBehavior</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> left<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> top<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>permiss<span class="token punctuation">)</span>
    <span class="token keyword">const</span> role <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;ms_username&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>role <span class="token operator">&amp;&amp;</span> to<span class="token punctuation">.</span>path <span class="token operator">!==</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment">// 将路由对象暴露出去</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> router

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. 路由实例全局注册</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&quot;@/router&quot;</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4. 动态权限路由</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/permission.ts</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&quot;@/router&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;element-plus&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> useStore <span class="token keyword">from</span> <span class="token string">&quot;@/store&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> NProgress <span class="token keyword">from</span> <span class="token string">&#39;nprogress&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;nprogress/nprogress.css&#39;</span>
NProgress<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span> showSpinner<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 进度环显示/隐藏</span>


<span class="token comment">// 白名单路由</span>
<span class="token keyword">const</span> whiteList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/auth-redirect&#39;</span><span class="token punctuation">]</span>

router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>to<span class="token punctuation">,</span> form<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    NProgress<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> user<span class="token punctuation">,</span> permission <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> hasToken <span class="token operator">=</span> user<span class="token punctuation">.</span>token
    <span class="token keyword">if</span> <span class="token punctuation">(</span>hasToken<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 登录成功，跳转到首页</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
            NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> hasGetUserInfo <span class="token operator">=</span> user<span class="token punctuation">.</span>roles<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>hasGetUserInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token keyword">const</span> roles <span class="token operator">=</span> user<span class="token punctuation">.</span>roles
                    <span class="token comment">// 用户拥有权限的路由集合(accessRoutes) </span>
                    <span class="token keyword">const</span> accessRoutes<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token keyword">await</span> permission<span class="token punctuation">.</span><span class="token function">generateRoutes</span><span class="token punctuation">(</span>roles<span class="token punctuation">)</span>
                    accessRoutes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>route<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                        router<span class="token punctuation">.</span><span class="token function">addRoute</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span>
                    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>to<span class="token punctuation">,</span> replace<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 移除 token 并跳转登录页</span>
                    <span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">resetToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    ElMessage<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error <span class="token keyword">as</span> <span class="token builtin">any</span> <span class="token operator">||</span> <span class="token string">&#39;Has Error&#39;</span><span class="token punctuation">)</span>
                    <span class="token function">next</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/login?redirect=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>to<span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
                    NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 未登录可以访问白名单页面(登录页面)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>whiteList<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">next</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/login?redirect=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>to<span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
            NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 const accessRoutes: any = await permission.generateRoutes(roles)是根据用户角色获取拥有权限的路由(静态路由+动态路由)，核心代码如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/store/modules/permission.ts </span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> constantRoutes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/router&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> listRoutes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/api/system/menu&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> usePermissionStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;permission&quot;</span><span class="token punctuation">,</span>
    state<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> PermissionState <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        routes<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        addRoutes<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    actions<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">setRoutes</span><span class="token punctuation">(</span>routes<span class="token operator">:</span> RouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>addRoutes <span class="token operator">=</span> routes
          	<span class="token comment">// 静态路由 + 动态路由</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>routes <span class="token operator">=</span> constantRoutes<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">generateRoutes</span><span class="token punctuation">(</span>roles<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              	<span class="token comment">// API 获取动态路由</span>
                <span class="token function">listRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>response <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">const</span> asyncRoutes <span class="token operator">=</span> response<span class="token punctuation">.</span>data
                    <span class="token keyword">let</span> accessedRoutes <span class="token operator">=</span> <span class="token function">filterAsyncRoutes</span><span class="token punctuation">(</span>asyncRoutes<span class="token punctuation">,</span> roles<span class="token punctuation">)</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setRoutes</span><span class="token punctuation">(</span>accessedRoutes<span class="token punctuation">)</span>
                    <span class="token function">resolve</span><span class="token punctuation">(</span>accessedRoutes<span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>error <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> usePermissionStore<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按钮权限" tabindex="-1"><a class="header-anchor" href="#按钮权限" aria-hidden="true">#</a> 按钮权限</h2><p><strong>1. Directive 自定义指令</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// src/directive/permission/index.ts</span>

<span class="token keyword">import</span> <span class="token namespace">useStore</span> from <span class="token string">&quot;@/store&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token class-name">Directive</span><span class="token punctuation">,</span> <span class="token class-name">DirectiveBinding</span> <span class="token punctuation">}</span> from <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 按钮权限校验
 */</span>
export <span class="token keyword">const</span> hasPerm<span class="token operator">:</span> <span class="token class-name">Directive</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span>el<span class="token operator">:</span> <span class="token class-name">HTMLElement</span><span class="token punctuation">,</span> binding<span class="token operator">:</span> <span class="token class-name">DirectiveBinding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 「超级管理员」拥有所有的按钮权限</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> user <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> roles <span class="token operator">=</span> user<span class="token punctuation">.</span>roles<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>roles<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token char">&#39;ROOT&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 「其他角色」按钮权限校验</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> binding<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> requiredPerms <span class="token operator">=</span> value<span class="token punctuation">;</span> <span class="token comment">// DOM绑定需要的按钮权限标识</span>

            <span class="token keyword">const</span> hasPerm <span class="token operator">=</span> user<span class="token punctuation">.</span>perms<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span>perm <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> requiredPerms<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>perm<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>hasPerm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                el<span class="token punctuation">.</span>parentNode <span class="token operator">&amp;&amp;</span> el<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;need perms! Like v-has-perm=\\&quot;[&#39;sys:user:add&#39;,&#39;sys:user:edit&#39;]\\&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. 自定义指令全局注册</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token comment">// src/main.ts</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token class-name">App</span><span class="token punctuation">)</span>
<span class="token comment">// 自定义指令</span>
<span class="token keyword">import</span> <span class="token operator">*</span> as directive from <span class="token string">&quot;@/directive&quot;</span><span class="token punctuation">;</span>

<span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>directive<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>key <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">(</span>directive as <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token class-name">Directive</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. 指令使用</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token comment">// src/views/system/user/index.vue</span>
<span class="token operator">&lt;</span>el<span class="token operator">-</span>button v<span class="token operator">-</span>hasPerm<span class="token operator">=</span><span class="token string">&quot;[&#39;sys:user:add&#39;]&quot;</span><span class="token operator">&gt;</span>新增<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>el<span class="token operator">-</span>button v<span class="token operator">-</span>hasPerm<span class="token operator">=</span><span class="token string">&quot;[&#39;sys:user:delete&#39;]&quot;</span><span class="token operator">&gt;</span>删除<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="element-plus国际化" tabindex="-1"><a class="header-anchor" href="#element-plus国际化" aria-hidden="true">#</a> Element-Plus国际化</h2><blockquote><p>官方教程：https://element-plus.gitee.io/zh-CN/guide/i18n.html</p></blockquote><p>Element Plus 官方提供全局配置 Config Provider实现国际化</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>
//  src/App.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-config-provider</span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>locale<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-config-provider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;element-plus&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> useStore <span class="token keyword">from</span> <span class="token string">&quot;@/store&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 导入 Element Plus 语言包</span>
<span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">&quot;element-plus/es/locale/lang/zh-cn&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> en <span class="token keyword">from</span> <span class="token string">&quot;element-plus/es/locale/lang/en&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 获取系统语言</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> app <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> language <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> app<span class="token punctuation">.</span>language<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> locale <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">watch</span><span class="token punctuation">(</span>
  language<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">==</span> <span class="token string">&quot;en&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      locale<span class="token punctuation">.</span>value <span class="token operator">=</span> en<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 默认中文</span>
      locale<span class="token punctuation">.</span>value <span class="token operator">=</span> zhCn<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// 初始化立即执行</span>
    <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义国际化" tabindex="-1"><a class="header-anchor" href="#自定义国际化" aria-hidden="true">#</a> 自定义国际化</h2><blockquote><p>i18n 英文全拼 internationalization ,国际化的意思，英文 i 和 n 中间18个英文字母</p></blockquote><p><strong>1. 安装 vue-i18n</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>npm install vue<span class="token operator">-</span>i18n<span class="token annotation punctuation">@9.1.9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2. 语言包</strong></p><p>创建 src/lang 语言包目录，中文语言包 zh-cn.ts，英文语言包 en.ts</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/lang/en.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token comment">// 路由国际化</span>
    route<span class="token operator">:</span> <span class="token punctuation">{</span>
        dashboard<span class="token operator">:</span> <span class="token string">&#39;Dashboard&#39;</span><span class="token punctuation">,</span>
        document<span class="token operator">:</span> <span class="token string">&#39;Document&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 登录页面国际化</span>
    login<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&#39;youlai-mall management system&#39;</span><span class="token punctuation">,</span>
        username<span class="token operator">:</span> <span class="token string">&#39;Username&#39;</span><span class="token punctuation">,</span>
        password<span class="token operator">:</span> <span class="token string">&#39;Password&#39;</span><span class="token punctuation">,</span>
        login<span class="token operator">:</span> <span class="token string">&#39;Login&#39;</span><span class="token punctuation">,</span>
        code<span class="token operator">:</span> <span class="token string">&#39;Verification Code&#39;</span><span class="token punctuation">,</span>
        copyright<span class="token operator">:</span> <span class="token string">&#39;Copyright © 2020 - 2022 youlai.tech All Rights Reserved. &#39;</span><span class="token punctuation">,</span>
        icp<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 导航栏国际化</span>
    navbar<span class="token operator">:</span><span class="token punctuation">{</span>
        dashboard<span class="token operator">:</span> <span class="token string">&#39;Dashboard&#39;</span><span class="token punctuation">,</span>
        logout<span class="token operator">:</span><span class="token string">&#39;Logout&#39;</span><span class="token punctuation">,</span>
        document<span class="token operator">:</span><span class="token string">&#39;Document&#39;</span><span class="token punctuation">,</span>
        gitee<span class="token operator">:</span><span class="token string">&#39;Gitee&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. 创建i18n实例</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token comment">// src/lang/index.ts</span>

<span class="token comment">// 自定义国际化配置</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>createI18n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-i18n&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>localStorage<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/storage&#39;</span>

<span class="token comment">// 本地语言包</span>
<span class="token keyword">import</span> enLocale <span class="token keyword">from</span> <span class="token string">&#39;./en&#39;</span>
<span class="token keyword">import</span> zhCnLocale <span class="token keyword">from</span> <span class="token string">&#39;./zh-cn&#39;</span>

<span class="token keyword">const</span> messages <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;zh-cn&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>zhCnLocale
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    en<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>enLocale
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//获取当前系统使用语言字符串</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getLanguage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 本地缓存获取</span>
    <span class="token keyword">let</span> language <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;language&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>language<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> language
    <span class="token punctuation">}</span>
     <span class="token comment">// 浏览器使用语言</span>
    language <span class="token operator">=</span> navigator<span class="token punctuation">.</span>language<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> locales <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>messages<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> locale <span class="token keyword">of</span> locales<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>language<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>locale<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> locale
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token string">&#39;zh-cn&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> i18n <span class="token operator">=</span> <span class="token function">createI18n</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    locale<span class="token operator">:</span> <span class="token function">getLanguage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    messages<span class="token operator">:</span> messages
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> i18n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4. i18n 全局注册</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// main.ts</span>

<span class="token comment">// 国际化</span>
<span class="token keyword">import</span> i18n <span class="token keyword">from</span> <span class="token string">&quot;@/lang/index&quot;</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>i18n<span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5. 静态页面国际化</strong></p><blockquote><p>$t 是 i18n 提供的根据 key 从语言包翻译对应的 value 方法</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span>h3 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;title&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>
  <span class="token punctuation">{</span> $<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;login.title&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. 动态路由国际化</strong></p><blockquote><p>i18n 工具类，主要使用 i18n 的 te (判断语言包是否存在key) 和 t (翻译) 两个方法</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//  src/utils/i18n.ts</span>
<span class="token keyword">import</span> i18n <span class="token keyword">from</span> <span class="token string">&quot;@/lang/index&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">generateTitle</span><span class="token punctuation">(</span>title<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断是否存在国际化配置，如果没有原生返回</span>
    <span class="token keyword">const</span> hasKey <span class="token operator">=</span> i18n<span class="token punctuation">.</span>global<span class="token punctuation">.</span><span class="token function">te</span><span class="token punctuation">(</span><span class="token string">&#39;route.&#39;</span> <span class="token operator">+</span> title<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>hasKey<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> translatedTitle <span class="token operator">=</span> i18n<span class="token punctuation">.</span>global<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;route.&#39;</span> <span class="token operator">+</span> title<span class="token punctuation">)</span>
        <span class="token keyword">return</span> translatedTitle
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> title
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>页面使用</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// src/components/Breadcrumb/index.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
 	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">v-else</span> <span class="token attr-name">@click.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleLink(item)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
       {
  { generateTitle(item.meta.title) }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>generateTitle<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/i18n&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wangeditor富文本编辑器" tabindex="-1"><a class="header-anchor" href="#wangeditor富文本编辑器" aria-hidden="true">#</a> wangEditor富文本编辑器</h2><blockquote><p>推荐教程：<a href="https://www.wangeditor.com/v5/for-frame.html#vue3" title="Vue3 官方示例">Vue3 官方示例</a></p></blockquote><p><strong>1. 安装wangEditor和Vue3组件</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>npm install <span class="token annotation punctuation">@wangeditor</span><span class="token operator">/</span>editor <span class="token operator">--</span>save
npm install <span class="token annotation punctuation">@wangeditor</span><span class="token operator">/</span>editor<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">-</span>vue<span class="token annotation punctuation">@next</span> <span class="token operator">--</span>save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. wangEditor组件封装</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>
<span class="token comment">&lt;!-- src/components/WangEditor/index.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 工具栏 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toolbar</span> <span class="token attr-name">:editor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editorRef<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:defaultConfig</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toolbarConfig<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #ccc</span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">:mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mode<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- 编辑器 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Editor</span> <span class="token attr-name">:defaultConfig</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editorConfig<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>defaultHtml<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@onChange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span> <span class="token property">overflow-y</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">:mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mode<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@onCreated</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCreated<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onBeforeUnmount<span class="token punctuation">,</span> shallowRef<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> toRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Editor<span class="token punctuation">,</span> Toolbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor-for-vue&#39;</span>

<span class="token comment">// API 引用</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> uploadFile <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/api/system/file&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">modelValue</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 编辑器实例，必须用 shallowRef</span>
<span class="token keyword">const</span> editorRef <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">toolbarConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">editorConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;请输入内容...&#39;</span><span class="token punctuation">,</span>
    <span class="token constant">MENU_CONF</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">uploadImage</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 自定义图片上传</span>
        <span class="token keyword">async</span> <span class="token function">customUpload</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">file</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">insertFn</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;上传图片&quot;</span><span class="token punctuation">)</span>
          <span class="token function">uploadFile</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> url <span class="token operator">=</span> response<span class="token punctuation">.</span>data
            <span class="token function">insertFn</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">defaultHtml</span><span class="token operator">:</span> props<span class="token punctuation">.</span>modelValue<span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> toolbarConfig<span class="token punctuation">,</span> editorConfig<span class="token punctuation">,</span> defaultHtml<span class="token punctuation">,</span> mode <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>


<span class="token keyword">const</span> <span class="token function-variable function">handleCreated</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">editor</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  editorRef<span class="token punctuation">.</span>value <span class="token operator">=</span> editor <span class="token comment">// 记录 editor 实例，重要！</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">editor</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">,</span> editor<span class="token punctuation">.</span><span class="token function">getHtml</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 组件销毁时，也及时销毁编辑器</span>
<span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> editor <span class="token operator">=</span> editorRef<span class="token punctuation">.</span>value
  <span class="token keyword">if</span> <span class="token punctuation">(</span>editor <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
  editor<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@wangeditor/editor/dist/css/style.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

​
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. 使用案例</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>template<span class="token punctuation">&gt;</span></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;component-container&quot;</span><span class="token operator">&gt;</span>
  	<span class="token operator">&lt;</span>editor v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;modelValue.detail&quot;</span> style<span class="token operator">=</span><span class="token string">&quot;height: 600px&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
	<span class="token keyword">import</span> <span class="token class-name">Editor</span> from <span class="token string">&quot;@/components/WangEditor/index.vue&quot;</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

​
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>template<span class="token punctuation">&gt;</span></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;component-container&quot;</span><span class="token operator">&gt;</span>
  	<span class="token operator">&lt;</span>editor v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;modelValue.detail&quot;</span> style<span class="token operator">=</span><span class="token string">&quot;height: 600px&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
	<span class="token keyword">import</span> <span class="token class-name">Editor</span> from <span class="token string">&quot;@/components/WangEditor/index.vue&quot;</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://jitems.gitee.io/myblog/bk278.png" alt="solar"><h2 id="国际化il8n" tabindex="-1"><a class="header-anchor" href="#国际化il8n" aria-hidden="true">#</a> 国际化il8n</h2><h3 id="安装-vue-i18n" tabindex="-1"><a class="header-anchor" href="#安装-vue-i18n" aria-hidden="true">#</a> 安装 vue-i18n</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i vue-i18n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="新建-locales-文件夹" tabindex="-1"><a class="header-anchor" href="#新建-locales-文件夹" aria-hidden="true">#</a> 新建 locales 文件夹</h3><p>以简体中文和英文为例</p><p><strong>在 src 下新建 locales 文件夹</strong></p><p>在 locales 文件夹下新建 zh-cn.ts</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
  buttons: {
    login: &#39;登录&#39;
  },
  menus: {
    home: &#39;首页&#39;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 locales 文件夹下新建 en.ts</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
  buttons: {
    login: &#39;Login&#39;
  },
  menus: {
    home: &#39;Home&#39;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 locales 文件夹下新建 index.ts</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { createI18n } from &#39;vue-i18n&#39;
import zhCn from &#39;./zh-cn&#39;
import en from &#39;./en&#39;

// 创建 i18n
const i18n = createI18n({
  legacy: false,
  globalInjection: true, // 全局模式，可以直接使用 $t
  locale: localStorage.getItem(&#39;lang&#39;) || &#39;zhCn&#39;,
  messages: {
    zhCn,
    en
  }
})

export default i18n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注册-i18n" tabindex="-1"><a class="header-anchor" href="#注册-i18n" aria-hidden="true">#</a> 注册 i18n</h3><p>在 main.ts 文件下注册 i18n</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import i18n from &#39;./locales&#39;

const app = createApp(App)

app.use(i18n)

app.mount(&#39;#app&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h3><p><strong>在 template 中的使用</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{ $t(&#39;menus.home&#39;) }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>在 ts 中的使用</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import i18n from &#39;./locales&#39;

console.log(i18n.global.t(&#39;menus.home&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Element Plus 国际化</strong></p><p>Element Plus 官方提供了一个 Vue 组件 ConfigProvider 用于全局配置国际化的设置 el-config-provider 由 Element Plus 按需引入 - 自动导入 el-config-provider 手动导入：import { ElConfigProvider } from &#39;element-plus&#39;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;el-config-provider :locale=&quot;useAppStoreHook().locale === &#39;zhCn&#39; ? zhCn : en&quot;&gt;
    &lt;app /&gt;
  &lt;/el-config-provider&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import zhCn from &#39;element-plus/lib/locale/lang/zh-cn&#39;
import en from &#39;element-plus/lib/locale/lang/en&#39;
import { useAppStoreHook } from &#39;@/store/modules/app&#39; //store存放语言配置
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>语言切换</strong> 切换语言时，修改 store 、 localstorage 和 i18n 中的语言配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// store/modules/app

import { defineStore } from &#39;pinia&#39;
import { store } from &#39;@/store&#39;
import i18n from &#39;@/locales&#39;

const useAppStore = defineStore(&#39;app&#39;, {
  state: () =&gt; {
    return {
      locale: localStorage.getItem(&#39;lang&#39;) || &#39;zhCn&#39;
    }
  },
  actions: {
    SET_LOCALE(locale: string) { //语言切换
      this.locale = locale
      storageLocal.setItem(&#39;lang&#39;, locale)
      i18n.global.locale.value = locale
    }
  }
})

export function useAppStoreHook() {
  return useAppStore(store)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="echarts图表" tabindex="-1"><a class="header-anchor" href="#echarts图表" aria-hidden="true">#</a> Echarts图表</h2><p><strong>1. 安装 Echarts</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>npm install echarts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2. Echarts 自适应大小工具类</strong></p><blockquote><p>侧边栏、浏览器窗口大小切换都会触发图表的 resize() 方法来进行自适应</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token comment">// src/utils/resize.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> chart <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> sidebarElm <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span>Element<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">chartResizeHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>chart<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            chart<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">sidebarResizeHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> TransitionEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>propertyName <span class="token operator">===</span> <span class="token string">&#39;width&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">chartResizeHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">initResizeEvent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> chartResizeHandler<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">destroyResizeEvent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> chartResizeHandler<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">initSidebarResizeEvent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        sidebarElm<span class="token punctuation">.</span>value <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&#39;sidebar-container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>sidebarElm<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sidebarElm<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;transitionend&#39;</span><span class="token punctuation">,</span> sidebarResizeHandler <span class="token keyword">as</span> EventListener<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">destroySidebarResizeEvent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>sidebarElm<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sidebarElm<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;transitionend&#39;</span><span class="token punctuation">,</span> sidebarResizeHandler <span class="token keyword">as</span> EventListener<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">mounted</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">initResizeEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">initSidebarResizeEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">beforeDestroy</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">destroyResizeEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">destroySidebarResizeEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">activated</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">initResizeEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">initSidebarResizeEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">deactivated</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">destroyResizeEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">destroySidebarResizeEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        chart<span class="token punctuation">,</span>
        mounted<span class="token punctuation">,</span>
        beforeDestroy<span class="token punctuation">,</span>
        activated<span class="token punctuation">,</span>
        deactivated
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

​
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. Echarts使用</strong></p><blockquote><p>官方示例： https://echarts.apache.org/examples/zh/index.html</p></blockquote><p>官方的示例文档丰富和详细，且涵盖了 JavaScript 和 TypeScript 版本，使用非常简单。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>
<span class="token comment">&lt;!-- src/views/dashboard/components/Chart/BarChart.vue --&gt;</span> 
<span class="token comment">&lt;!-- 线 + 柱混合图 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">:id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>className<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{height, width}<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>nextTick<span class="token punctuation">,</span> onActivated<span class="token punctuation">,</span> onBeforeUnmount<span class="token punctuation">,</span> onDeactivated<span class="token punctuation">,</span> onMounted<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>init<span class="token punctuation">,</span> EChartsOption<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts&#39;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">&#39;echarts&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> resize <span class="token keyword">from</span> <span class="token string">&#39;@/utils/resize&#39;</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;barChart&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;200px&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;200px&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>
  mounted<span class="token punctuation">,</span>
  chart<span class="token punctuation">,</span>
  beforeDestroy<span class="token punctuation">,</span>
  activated<span class="token punctuation">,</span>
  deactivated
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">initChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> barChart <span class="token operator">=</span> <span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLDivElement<span class="token punctuation">)</span>

  barChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;业绩总览(2021年)&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
      <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontStyle</span><span class="token operator">:</span> <span class="token string">&#39;normal&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token string">&#39;bold&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#337ecc&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;2%&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&#39;2%&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&#39;10%&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;axis&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisPointer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;cross&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">crossStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#999&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;收入&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;毛利润&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;收入增长率&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;利润增长率&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;上海&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;北京&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;浙江&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;广东&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;深圳&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;四川&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;湖北&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;安徽&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisPointer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;shadow&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">&#39;{value} &#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">&#39;{value}%&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;收入&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token number">8000</span><span class="token punctuation">,</span> <span class="token number">8200</span><span class="token punctuation">,</span> <span class="token number">7000</span><span class="token punctuation">,</span> <span class="token number">6200</span><span class="token punctuation">,</span> <span class="token number">6500</span><span class="token punctuation">,</span> <span class="token number">5500</span><span class="token punctuation">,</span> <span class="token number">4500</span><span class="token punctuation">,</span> <span class="token number">4200</span><span class="token punctuation">,</span> <span class="token number">3800</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">barWidth</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span>LinearGradient</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#83bff6&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#188df0&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#188df0&#39;</span> <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;毛利润&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token number">6700</span><span class="token punctuation">,</span> <span class="token number">6800</span><span class="token punctuation">,</span> <span class="token number">6300</span><span class="token punctuation">,</span> <span class="token number">5213</span><span class="token punctuation">,</span> <span class="token number">4500</span><span class="token punctuation">,</span> <span class="token number">4200</span><span class="token punctuation">,</span> <span class="token number">4200</span><span class="token punctuation">,</span> <span class="token number">3800</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">barWidth</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span>LinearGradient</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#25d73c&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#1bc23d&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#179e61&#39;</span> <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;收入增长率&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">yAxisIndex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">67</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">53</span><span class="token punctuation">,</span> <span class="token number">47</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#67C23A&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;利润增长率&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">yAxisIndex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">81</span><span class="token punctuation">,</span> <span class="token number">78</span><span class="token punctuation">,</span> <span class="token number">67</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">56</span><span class="token punctuation">,</span><span class="token number">51</span><span class="token punctuation">,</span> <span class="token number">45</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#409EFF&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span> <span class="token keyword">as</span> EChartsOption<span class="token punctuation">)</span>
  chart<span class="token punctuation">.</span>value <span class="token operator">=</span> barChart
<span class="token punctuation">}</span>

<span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">onActivated</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">activated</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">onDeactivated</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">deactivated</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">initChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

​
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://jitems.gitee.io/myblog/bk279.png" alt="solar">`,129);function g(y,f){const t=o("ExternalLinkIcon");return c(),l("div",null,[r,i(" more "),k,s("p",null,[n("浏览器访问:  "),s("a",d,[n("http://localhost:3000"),p(t)])]),v,s("p",null,[n("Element Plus 图标库往往满足不了实际开发需求，可以引用和使用第三方例如 iconfont 的图标，本节通过整合  "),s("a",m,[n("vite-plugin-svg-icons"),p(t)]),n(" 插件使用第三方图标库。")]),b])}const q=e(u,[["render",g],["__file","Element-Plus.html.vue"]]);export{q as default};
