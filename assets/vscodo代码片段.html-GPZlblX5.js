import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as i,d as n,a as u,e as s}from"./app-PxqKmrwv.js";const l={},o=u("p",null," ",-1),d=s(`<h1 id="vscodo代码片段" tabindex="-1"><a class="header-anchor" href="#vscodo代码片段" aria-hidden="true">#</a> vscodo代码片段</h1><h2 id="新建代码片段" tabindex="-1"><a class="header-anchor" href="#新建代码片段" aria-hidden="true">#</a> 新建代码片段</h2><p>使用快捷键ctrl+shift+p打开命令行窗口，选择代码片段</p><img src="https://jitems.gitee.io/myblog/blog/bk571.png" alt="solar"><p>选择新代码片段</p><img src="https://jitems.gitee.io/myblog/blog/bk572.png" alt="solar"><p>输入代码片段名称，回车</p><img src="https://jitems.gitee.io/myblog/blog/bk573.png" alt="solar"><p>vue3.2模板代码片段</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
	&quot;Print to vue3.2&quot;: {
		&quot;prefix&quot;: &quot;vue3.2&quot;,
		&quot;body&quot;: [
			&quot;&lt;template&gt;&quot;,
			&quot;  &lt;div class=\\&quot;container\\&quot;&gt;\\n&quot;,
			&quot;  &lt;/div&gt;&quot;,
			&quot;&lt;/template&gt;\\n&quot;,
			&quot;&lt;script setup lang=\\&quot;ts\\&quot;&gt;&quot;,
			&quot;import { ref, reactive, onMounted } from &#39;vue&#39;&quot;,
			&quot;import { Plus } from &#39;@element-plus/icons-vue&#39;&quot;,
			&quot;import { FormRules,FormInstance,ElMessageBox,ElMessage } from &#39;element-plus&#39;\\n&quot;,
			&quot;&lt;/script&gt;\\n&quot;,
			&quot;&lt;style scoped lang=\\&quot;scss\\&quot;&gt;&quot;,
				&quot;.container{&quot;,
					&quot;  height: 100%;&quot;,
				&quot;}\\n&quot;,
			&quot;&lt;/style&gt;&quot;,
		],
		&quot;description&quot;: &quot;vue3.2 output to vue3.2模板&quot;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在页面中输入 “vue3.2”，即可弹出对应的代码片段 <img src="https://jitems.gitee.io/myblog/blog/bk574.png" alt="solar"></p><h2 id="代码片段说明" tabindex="-1"><a class="header-anchor" href="#代码片段说明" aria-hidden="true">#</a> 代码片段说明</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>prefix      :代码片段名字，就是创建这个片段的指令。
body        :你想在页面上输出啥就往这里面加啥，不过得按规矩来哦。　　　
\${数字}    	:生成代码后光标的位置，1表示光标开始的序号，按住tab键可切换光标位置。
\\n          :换行符。
\\           :转义符号。
&#39;&#39;          :用来控制代码的缩进。
description :描述,输入创建指令后编辑器显示出提示信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用代码片段" tabindex="-1"><a class="header-anchor" href="#常用代码片段" aria-hidden="true">#</a> 常用代码片段</h2><p>vue2.0</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
	&quot;Print to vue2.0&quot;: {
		&quot;prefix&quot;: &quot;vue2.0&quot;,
		&quot;body&quot;: [
			&quot;&lt;template&gt;&quot;,
			&quot;  &lt;div class=\\&quot;wrapper\\&quot;&gt;&quot;,
			&quot;    hello\${1}&quot;,
			&quot;  &lt;/div&gt;&quot;,
			&quot;&lt;/template&gt;\\n&quot;,
			&quot;&lt;script&gt;&quot;,
			&quot;export default {&quot;,
			&quot;  name:\\&quot;\\&quot;,&quot;,
			&quot;  components: {}&quot;,
			&quot;  data() {&quot;,
			&quot;    return {\\n\${2}&quot;,
			&quot;    }&quot;,
			&quot;  },&quot;,
			&quot;  filters: {\\n\${3}&quot;,
			&quot;  }&quot;,
			&quot;  computed: {\\n\${4}&quot;,
			&quot;  }&quot;,
			&quot;  watch: {\\n\${5}&quot;,
			&quot;  }&quot;,
			&quot;  created () {\\n\${6}&quot;,
			&quot;  }&quot;,
			&quot;  mounted () {\\n\${7}&quot;,
			&quot;  }&quot;,
			&quot;  methods: {\\n\${8}&quot;,
			&quot;  }&quot;,
			&quot;}&quot;,
			&quot;&lt;/script&gt;\\n&quot;,
			&quot;&lt;style scoped&gt;\\n\${9}&quot;,
			&quot;&lt;/style&gt;&quot;,
		],
		&quot;description&quot;: &quot;vue2.0 output to vue2.0模板&quot;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue3.0</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
	&quot;Print to vue3.0&quot;: {
		&quot;prefix&quot;: &quot;vue3.0&quot;,
		&quot;body&quot;: [
			&quot;&lt;template&gt;&quot;,
			&quot;  &lt;div class=\\&quot;wrapper\\&quot;&gt;&quot;,
			&quot;    hello\${1}&quot;,
			&quot;  &lt;/div&gt;&quot;,
			&quot;&lt;/template&gt;\\n&quot;,
			&quot;&lt;script lang=\\&quot;ts\\&quot;&gt;&quot;,
			&quot;export default {&quot;,
			&quot;  name:\\&quot;\\&quot;,&quot;,
			&quot;  setup() {&quot;,
			&quot;    return {\\n\${2}&quot;,
			&quot;    }&quot;,
			&quot;  },&quot;,
			&quot;}&quot;,
			&quot;&lt;/script&gt;\\n&quot;,
			&quot;&lt;style scoped&gt;\\n\${3}&quot;,
			&quot;&lt;/style&gt;&quot;,
		],
		&quot;description&quot;: &quot;vue3.0 output to vue3.0模板&quot;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除代码片段文件" tabindex="-1"><a class="header-anchor" href="#删除代码片段文件" aria-hidden="true">#</a> 删除代码片段文件</h2><p>由于已经创建的代码片段文件会存在本地，因此不能在vscode中直接删除，需要按照以下方法才能删除</p><p><strong>1.1.打开显示导航痕迹</strong></p><img src="https://jitems.gitee.io/myblog/blog/bk575.png" alt="solar"><p><strong>1.2 在目录下找到需要删除的文件</strong> 直接删除即可</p><img src="https://jitems.gitee.io/myblog/blog/bk576.png" alt="solar">`,24);function a(v,r){return e(),i("div",null,[o,n(" more "),d])}const m=t(l,[["render",a],["__file","vscodo代码片段.html.vue"]]);export{m as default};
