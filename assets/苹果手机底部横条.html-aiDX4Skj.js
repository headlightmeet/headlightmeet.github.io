import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t,a as e,e as p}from"./app-oGr5u-1Z.js";const c={},i=e("p",null," ",-1),o=p(`<h1 id="苹果手机底部横条" tabindex="-1"><a class="header-anchor" href="#苹果手机底部横条" aria-hidden="true">#</a> 苹果手机底部横条</h1><p>在不同的平台上，有很多特殊的位置，比如 Android 系统的状态栏，或者 iPhone X 的“齐刘海”，我们应该避免在这些位置放置元素。 解决方案就是使用 SafeArea 部件</p><h2 id="页面底部" tabindex="-1"><a class="header-anchor" href="#页面底部" aria-hidden="true">#</a> 页面底部</h2><img src="https://jitems.gitee.io/myblog/bk430.png" alt="solar"><p>结果如下：底部就预留出安全区域了(下面截图是练手的页面)</p><img src="https://jitems.gitee.io/myblog/bk431.png" alt="solar"><h2 id="弹框底部" tabindex="-1"><a class="header-anchor" href="#弹框底部" aria-hidden="true">#</a> 弹框底部</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token function">_attrBottomSheet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">showModalBottomSheet</span><span class="token punctuation">(</span>
        context<span class="token punctuation">:</span>context<span class="token punctuation">,</span>
        builder<span class="token punctuation">:</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 代替InkWell组件，这个组件功能更多</span>
            <span class="token keyword">return</span> <span class="token class-name">SafeArea</span><span class="token punctuation">(</span>
                child<span class="token punctuation">:</span><span class="token class-name">GestureDetector</span><span class="token punctuation">(</span>
                    onTap<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    child<span class="token punctuation">:</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>
                        height<span class="token punctuation">:</span> <span class="token number">500.</span>h<span class="token punctuation">,</span>
                        child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;111111&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下：弹框底部也预留出安全区域了</p><img src="https://jitems.gitee.io/myblog/bk432.png" alt="solar">`,10);function l(u,d){return s(),a("div",null,[i,t(" more "),o])}const m=n(c,[["render",l],["__file","苹果手机底部横条.html.vue"]]);export{m as default};
