import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,d as s,a as d,e as a}from"./app-PxqKmrwv.js";const l={},t=d("p",null," ",-1),r=a(`<h1 id="集成pinia及数据持久化" tabindex="-1"><a class="header-anchor" href="#集成pinia及数据持久化" aria-hidden="true">#</a> 集成pinia及数据持久化</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    npm install pinia @pinia/nuxt
    npm i -D @pinia-plugin-persistedstate/nuxt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目中配置-nuxt-config-ts中" tabindex="-1"><a class="header-anchor" href="#项目中配置-nuxt-config-ts中" aria-hidden="true">#</a> 项目中配置(nuxt.config.ts中)</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default defineNuxtConfig({
  modules: [
    &#39;@pinia/nuxt&#39;,
    &#39;@pinia-plugin-persistedstate/nuxt&#39;,
  ],

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据持久化配置-注册插件-plugis-pinia-ts" tabindex="-1"><a class="header-anchor" href="#数据持久化配置-注册插件-plugis-pinia-ts" aria-hidden="true">#</a> 数据持久化配置,注册插件(plugis/pinia.ts)</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import piniaPluginPersistedstate from &#39;pinia-plugin-persistedstate&#39;
export default defineNuxtPlugin((nuxtApp) =&gt; {
    nuxtApp.$pinia.use(piniaPluginPersistedstate)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="新建文件-store-counter-ts" tabindex="-1"><a class="header-anchor" href="#新建文件-store-counter-ts" aria-hidden="true">#</a> 新建文件(store/counter.ts)</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 登录信息持久化保存
import { defineStore } from &#39;pinia&#39;
export const useLoginStore = defineStore(&#39;loginStore&#39;, {
    state: () =&gt; {
        return {
            userInfo:&quot;&quot;
        }
    },
    getters: {

    },
    actions: {
        setUser(e:any){
            this.userInfo = e
        }
    },
    persist: {
        storage: persistedState.localStorage,
      },
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面使用" tabindex="-1"><a class="header-anchor" href="#页面使用" aria-hidden="true">#</a> 页面使用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div class=&quot;cont&quot;&gt;
131434
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { useLoginStore } from &#39;@/store/login&#39;


let login = useLoginStore()
console.log(login.userInfo)
login.setUser(&#39;dsdfsf&#39;)
console.log(login.userInfo)

&lt;/script&gt;

&lt;style scoped lang=&quot;scss&quot;&gt;
.cont{
  height: 100%;
}

&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function v(u,c){return i(),n("div",null,[t,s(" more "),r])}const b=e(l,[["render",v],["__file","集成pinia及数据持久化.html.vue"]]);export{b as default};
