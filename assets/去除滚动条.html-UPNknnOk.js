import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,d,a,e as s}from"./app-PxqKmrwv.js";const l={},r=a("p",null," ",-1),t=s(`<h1 id="去除滚动条" tabindex="-1"><a class="header-anchor" href="#去除滚动条" aria-hidden="true">#</a> 去除滚动条</h1><p>1、div超过指定高度可滚动，且不出现滚动条</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  height: 46px;
  overflow-x: hidden;
  overflow-y: scroll;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、去除滚动条</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 此处的 div 可以依照情况替换成对应的元素名称 */
	div::-webkit-scrollbar{
         display:none
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：vue_cli脚手架中在App.vue文件中写入</p><p>3、文字不换行，且超出部分用省略号代替</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function c(v,o){return i(),n("div",null,[r,d(" more "),t])}const p=e(l,[["render",c],["__file","去除滚动条.html.vue"]]);export{p as default};
