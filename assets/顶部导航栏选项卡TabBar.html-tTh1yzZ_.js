import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t,a as p,e}from"./app-PxqKmrwv.js";const c={},l=p("p",null," ",-1),i=e(`<h1 id="顶部导航栏选项卡tabbar" tabindex="-1"><a class="header-anchor" href="#顶部导航栏选项卡tabbar" aria-hidden="true">#</a> 顶部导航栏选项卡TabBar</h1><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">const</span> <span class="token class-name">TabBar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">,</span>
  required <span class="token keyword">this</span><span class="token punctuation">.</span>tabs<span class="token punctuation">,</span><span class="token comment">// tab组件列表</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>controller<span class="token punctuation">,</span><span class="token comment">// tabBar控制器</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>isScrollable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">// 是否支持滚动</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>padding<span class="token punctuation">,</span><span class="token comment">// 内部tab内边距</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>indicatorColor<span class="token punctuation">,</span><span class="token comment">// 指示器颜色</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>automaticIndicatorColorAdjustment <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">// 指示器颜色是否自动跟随主题颜色</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>indicatorWeight <span class="token operator">=</span> <span class="token number">2.0</span><span class="token punctuation">,</span><span class="token comment">// 指示器高度</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>indicatorPadding <span class="token operator">=</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span>zero<span class="token punctuation">,</span><span class="token comment">// 指示器padding</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>indicator<span class="token punctuation">,</span><span class="token comment">//选择指示器样式</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>indicatorSize<span class="token punctuation">,</span><span class="token comment">//选择指示器大小</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>labelColor<span class="token punctuation">,</span><span class="token comment">// 选择标签文本颜色</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>labelStyle<span class="token punctuation">,</span><span class="token comment">// 选择标签文本样式</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>labelPadding<span class="token punctuation">,</span><span class="token comment">// 整体标签边距</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>unselectedLabelColor<span class="token punctuation">,</span><span class="token comment">//未选中标签颜色</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>unselectedLabelStyle<span class="token punctuation">,</span><span class="token comment">// 未选中标签样式</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>dragStartBehavior <span class="token operator">=</span> <span class="token class-name">DragStartBehavior</span><span class="token punctuation">.</span>start<span class="token punctuation">,</span><span class="token comment">//设置点击水波纹效果 跟随全局点击效果</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>overlayColor<span class="token punctuation">,</span><span class="token comment">// 设置水波纹颜色</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>mouseCursor<span class="token punctuation">,</span> <span class="token comment">// 鼠标指针悬停的效果 App用不到</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>enableFeedback<span class="token punctuation">,</span><span class="token comment">// 点击是否反馈声音触觉。</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>onTap<span class="token punctuation">,</span><span class="token comment">// 点击Tab的回调</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>physics<span class="token punctuation">,</span><span class="token comment">// 滚动边界交互</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要禁止滑动切换，则需如下设置</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>		<span class="token class-name">Container</span><span class="token punctuation">(</span>
          color<span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token function">fromRGBO</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">,</span> <span class="token number">172</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          child<span class="token punctuation">:</span> <span class="token class-name">TabBarView</span><span class="token punctuation">(</span>
            <span class="token comment">//TabBarView 默认支持手势滑动，若要禁止设置 NeverScrollableScrollPhysics</span>
            physics<span class="token punctuation">:</span> <span class="token class-name">NeverScrollableScrollPhysics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            children<span class="token punctuation">:</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Widget</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span>
                <span class="token class-name">Center</span><span class="token punctuation">(</span>child<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;view1&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name">Center</span><span class="token punctuation">(</span>child<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;view2&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name">Center</span><span class="token punctuation">(</span>child<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;view3&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><p>这里介绍一些方法上的使用</p><h3 id="indicatorcolor-indicatorweight" tabindex="-1"><a class="header-anchor" href="#indicatorcolor-indicatorweight" aria-hidden="true">#</a> indicatorColor, indicatorWeight</h3><p>设置 indicator 颜色和宽度</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>  <span class="token class-name">TabBar</span> <span class="token function">_tabBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">TabBar</span><span class="token punctuation">(</span>
      tabs<span class="token punctuation">:</span> <span class="token function">_tabs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      isScrollable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      indicatorColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span>
      indicatorWeight<span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://jitems.gitee.io/myblog/blog/bk408.png" alt="solar"><h3 id="indicatorsize" tabindex="-1"><a class="header-anchor" href="#indicatorsize" aria-hidden="true">#</a> indicatorSize</h3><p>使用 indicatorSize 修改 indicator 大小。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>  <span class="token class-name">TabBar</span> <span class="token function">_tabBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">TabBar</span><span class="token punctuation">(</span>
      tabs<span class="token punctuation">:</span> <span class="token function">_tabs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      isScrollable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      indicatorColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span>
      indicatorWeight<span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
      indicatorSize<span class="token punctuation">:</span> <span class="token class-name">TabBarIndicatorSize</span><span class="token punctuation">.</span>label<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://jitems.gitee.io/myblog/blog/bk409.png" alt="solar"><h3 id="indicatorpadding" tabindex="-1"><a class="header-anchor" href="#indicatorpadding" aria-hidden="true">#</a> indicatorPadding</h3><p>使用 indicatorPadding 修改 indicator 的位置。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>  <span class="token class-name">TabBar</span> <span class="token function">_tabBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">TabBar</span><span class="token punctuation">(</span>
      tabs<span class="token punctuation">:</span> <span class="token function">_tabs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      isScrollable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      indicatorColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span>
      indicatorWeight<span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
      indicatorSize<span class="token punctuation">:</span> <span class="token class-name">TabBarIndicatorSize</span><span class="token punctuation">.</span>label<span class="token punctuation">,</span>
      indicatorPadding<span class="token punctuation">:</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">only</span><span class="token punctuation">(</span>bottom<span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://jitems.gitee.io/myblog/blog/bk410.png" alt="solar"><h3 id="indicator" tabindex="-1"><a class="header-anchor" href="#indicator" aria-hidden="true">#</a> indicator</h3><p>使用 indicator 属性自定义 indicator。 <strong>注意</strong>：此时会优先执行自定义的 indicator，其他的设置会被覆盖掉。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>  <span class="token class-name">TabBar</span> <span class="token function">_tabBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">TabBar</span><span class="token punctuation">(</span>
      tabs<span class="token punctuation">:</span> <span class="token function">_tabs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      isScrollable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      indicatorColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span>
      indicatorWeight<span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
      indicatorSize<span class="token punctuation">:</span> <span class="token class-name">TabBarIndicatorSize</span><span class="token punctuation">.</span>label<span class="token punctuation">,</span>
      indicatorPadding<span class="token punctuation">:</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">only</span><span class="token punctuation">(</span>bottom<span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      indicator<span class="token punctuation">:</span> <span class="token class-name">UnderlineTabIndicator</span><span class="token punctuation">(</span>
        borderSide<span class="token punctuation">:</span> <span class="token class-name">BorderSide</span><span class="token punctuation">(</span>
          color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span>
          width<span class="token punctuation">:</span> <span class="token number">3</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://jitems.gitee.io/myblog/blog/bk411.png" alt="solar"><h3 id="字体颜色大小设置" tabindex="-1"><a class="header-anchor" href="#字体颜色大小设置" aria-hidden="true">#</a> 字体颜色大小设置</h3><p>具体描述见上方表格。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>  <span class="token class-name">TabBar</span> <span class="token function">_tabBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">TabBar</span><span class="token punctuation">(</span>
      tabs<span class="token punctuation">:</span> <span class="token function">_tabs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      isScrollable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      indicatorColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span>
      indicatorWeight<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      indicatorSize<span class="token punctuation">:</span> <span class="token class-name">TabBarIndicatorSize</span><span class="token punctuation">.</span>label<span class="token punctuation">,</span>
      labelColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>yellow<span class="token punctuation">,</span>
      labelStyle<span class="token punctuation">:</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>
        fontSize<span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      unselectedLabelColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>black<span class="token punctuation">,</span>
      unselectedLabelStyle<span class="token punctuation">:</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>
        fontSize<span class="token punctuation">:</span> <span class="token number">12</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// indicatorPadding: EdgeInsets.only(bottom: 15),</span>
      <span class="token comment">// indicator: UnderlineTabIndicator(</span>
      <span class="token comment">//   borderSide: BorderSide(</span>
      <span class="token comment">//     color: Colors.red,</span>
      <span class="token comment">//     width: 3</span>
      <span class="token comment">//   ),</span>
      <span class="token comment">// ),</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://jitems.gitee.io/myblog/blog/bk412.png" alt="solar"><h3 id="labelpadding" tabindex="-1"><a class="header-anchor" href="#labelpadding" aria-hidden="true">#</a> labelPadding</h3><p>使用 labelPadding 来改变 label 位置。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>  <span class="token class-name">TabBar</span> <span class="token function">_tabBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">TabBar</span><span class="token punctuation">(</span>
      tabs<span class="token punctuation">:</span> <span class="token function">_tabs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      isScrollable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      indicatorColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span>
      indicatorWeight<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      indicatorSize<span class="token punctuation">:</span> <span class="token class-name">TabBarIndicatorSize</span><span class="token punctuation">.</span>label<span class="token punctuation">,</span>
      labelColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>yellow<span class="token punctuation">,</span>
      labelStyle<span class="token punctuation">:</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>
        fontSize<span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      unselectedLabelColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>black<span class="token punctuation">,</span>
      unselectedLabelStyle<span class="token punctuation">:</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>
        fontSize<span class="token punctuation">:</span> <span class="token number">12</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      labelPadding<span class="token punctuation">:</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">only</span><span class="token punctuation">(</span>top<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span>left<span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// indicatorPadding: EdgeInsets.only(bottom: 15),</span>
      <span class="token comment">// indicator: UnderlineTabIndicator(</span>
      <span class="token comment">//   borderSide: BorderSide(</span>
      <span class="token comment">//     color: Colors.red,</span>
      <span class="token comment">//     width: 3</span>
      <span class="token comment">//   ),</span>
      <span class="token comment">// ),</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://jitems.gitee.io/myblog/blog/bk413.png" alt="solar"><h3 id="ontap-点击事件" tabindex="-1"><a class="header-anchor" href="#ontap-点击事件" aria-hidden="true">#</a> onTap 点击事件</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>  <span class="token class-name">TabBar</span> <span class="token function">_tabBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">TabBar</span><span class="token punctuation">(</span>
      tabs<span class="token punctuation">:</span> <span class="token function">_tabs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      isScrollable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      indicatorColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span>
      indicatorWeight<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      indicatorSize<span class="token punctuation">:</span> <span class="token class-name">TabBarIndicatorSize</span><span class="token punctuation">.</span>label<span class="token punctuation">,</span>
      labelColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>yellow<span class="token punctuation">,</span>
      labelStyle<span class="token punctuation">:</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>
        fontSize<span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      unselectedLabelColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>black<span class="token punctuation">,</span>
      unselectedLabelStyle<span class="token punctuation">:</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>
        fontSize<span class="token punctuation">:</span> <span class="token number">12</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      labelPadding<span class="token punctuation">:</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">only</span><span class="token punctuation">(</span>top<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span>left<span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// indicatorPadding: EdgeInsets.only(bottom: 15),</span>
      <span class="token comment">// indicator: UnderlineTabIndicator(</span>
      <span class="token comment">//   borderSide: BorderSide(</span>
      <span class="token comment">//     color: Colors.red,</span>
      <span class="token comment">//     width: 3</span>
      <span class="token comment">//   ),</span>
      <span class="token comment">// ),</span>

      onTap<span class="token punctuation">:</span> <span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;点击了 index = </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">index</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://jitems.gitee.io/myblog/blog/bk414.png" alt="solar"><h2 id="标题栏顶部选项卡切换" tabindex="-1"><a class="header-anchor" href="#标题栏顶部选项卡切换" aria-hidden="true">#</a> 标题栏顶部选项卡切换</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">Home</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">DefaultTabController</span><span class="token punctuation">(</span><span class="token comment">//DefaultTabController 这个配置tabs的控件</span>
      length<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">//顶部tab切换的长度</span>
      child<span class="token punctuation">:</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
        appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
          title<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;标题&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          centerTitle<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//标题是否居中</span>
          backgroundColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span> <span class="token comment">//配置导航栏颜色</span>
          <span class="token comment">//配置导航后置控件</span>
          leading<span class="token punctuation">:</span> <span class="token class-name">IconButton</span><span class="token punctuation">(</span>
            <span class="token comment">//IconButton 按钮图标意思，，就不实用Icon了</span>
            icon<span class="token punctuation">:</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>menu<span class="token punctuation">)</span><span class="token punctuation">,</span>
            onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token comment">//配置导航前置控件</span>
          actions<span class="token punctuation">:</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Widget</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span>
            <span class="token class-name">IconButton</span><span class="token punctuation">(</span>
              <span class="token comment">//IconButton 按钮图标意思，，就不实用Icon了</span>
              icon<span class="token punctuation">:</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>history_toggle_off_rounded<span class="token punctuation">)</span><span class="token punctuation">,</span>
              onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">IconButton</span><span class="token punctuation">(</span>
              <span class="token comment">//IconButton 按钮图标意思，，就不实用Icon了</span>
              icon<span class="token punctuation">:</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>youtube_searched_for<span class="token punctuation">)</span><span class="token punctuation">,</span>
              onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          bottom<span class="token punctuation">:</span> <span class="token class-name">TabBar</span><span class="token punctuation">(</span><span class="token comment">//配置顶部导航选项卡</span>
            tabs<span class="token punctuation">:</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Widget</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token comment">//需要几个选项卡写几个选项卡</span>
              <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;热门&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        body<span class="token punctuation">:</span> <span class="token class-name">TabBarView</span><span class="token punctuation">(</span><span class="token comment">//配置点击顶部选项卡切换下面内容</span>
          children<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token comment">//这个里面放顶部切换的内容，有几个切换选项卡，里面就放几个ListView</span>
            <span class="token class-name">ListView</span><span class="token punctuation">(</span>
                children<span class="token punctuation">:</span><span class="token punctuation">[</span>
                  <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                      title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第一个tab页面&#39;</span></span><span class="token punctuation">)</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                  <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                      title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第一个tab页面&#39;</span></span><span class="token punctuation">)</span>
                  <span class="token punctuation">)</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">ListView</span><span class="token punctuation">(</span>
                children<span class="token punctuation">:</span><span class="token punctuation">[</span>
                  <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                      title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第二个tab页面&#39;</span></span><span class="token punctuation">)</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                  <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                      title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第二个tab页面&#39;</span></span><span class="token punctuation">)</span>
                  <span class="token punctuation">)</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结果如下，支持滑动</strong></p><img src="https://jitems.gitee.io/myblog/blog/bk415.png" alt="solar"><img src="https://jitems.gitee.io/myblog/blog/bk416.png" alt="solar"><h2 id="标题区域作为选项卡切换" tabindex="-1"><a class="header-anchor" href="#标题区域作为选项卡切换" aria-hidden="true">#</a> 标题区域作为选项卡切换</h2><h3 id="带标题图标选项卡切换" tabindex="-1"><a class="header-anchor" href="#带标题图标选项卡切换" aria-hidden="true">#</a> 带标题图标选项卡切换</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">Home</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">DefaultTabController</span><span class="token punctuation">(</span>
      length<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token comment">//顶部tab切换的长度</span>
      child<span class="token punctuation">:</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
        appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
          title<span class="token punctuation">:</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>
            child<span class="token punctuation">:</span> <span class="token class-name">TabBar</span><span class="token punctuation">(</span>
              tabs<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token comment">//需要几个选项写几个选项卡</span>
                <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;热门&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          centerTitle<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//标题是否居中</span>
          backgroundColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span> <span class="token comment">//配置导航栏颜色</span>
          <span class="token comment">//配置导航后置控件</span>
          leading<span class="token punctuation">:</span> <span class="token class-name">IconButton</span><span class="token punctuation">(</span>
            <span class="token comment">//IconButton 按钮图标意思，，就不实用Icon了</span>
            icon<span class="token punctuation">:</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>menu<span class="token punctuation">)</span><span class="token punctuation">,</span>
            onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token comment">//配置导航前置控件</span>
          actions<span class="token punctuation">:</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Widget</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span>
            <span class="token class-name">IconButton</span><span class="token punctuation">(</span>
              <span class="token comment">//IconButton 按钮图标意思，，就不实用Icon了</span>
              icon<span class="token punctuation">:</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>history_toggle_off_rounded<span class="token punctuation">)</span><span class="token punctuation">,</span>
              onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">IconButton</span><span class="token punctuation">(</span>
              <span class="token comment">//IconButton 按钮图标意思，，就不实用Icon了</span>
              icon<span class="token punctuation">:</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>youtube_searched_for<span class="token punctuation">)</span><span class="token punctuation">,</span>
              onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        body<span class="token punctuation">:</span> <span class="token class-name">TabBarView</span><span class="token punctuation">(</span><span class="token comment">//配置点击顶部选项卡切换下面内容</span>
          children<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token comment">//这个里面放顶部切换的内容，有几个切换选项卡，里面就放几个ListView</span>
            <span class="token class-name">ListView</span><span class="token punctuation">(</span>
                children<span class="token punctuation">:</span><span class="token punctuation">[</span>
                  <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                      title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第一个tab页面&#39;</span></span><span class="token punctuation">)</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">ListView</span><span class="token punctuation">(</span>
                children<span class="token punctuation">:</span><span class="token punctuation">[</span>
                  <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                      title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第二个tab页面&#39;</span></span><span class="token punctuation">)</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><img src="https://jitems.gitee.io/myblog/blog/bk417.png" alt="solar"><h3 id="不带标题图标选项卡切换" tabindex="-1"><a class="header-anchor" href="#不带标题图标选项卡切换" aria-hidden="true">#</a> 不带标题图标选项卡切换</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">Home</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">DefaultTabController</span><span class="token punctuation">(</span>
      length<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token comment">//顶部tab切换的长度</span>
      child<span class="token punctuation">:</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
        appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
          title<span class="token punctuation">:</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>
            child<span class="token punctuation">:</span> <span class="token class-name">TabBar</span><span class="token punctuation">(</span>
              tabs<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token comment">//需要几个选项写几个选项卡</span>
                <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;热门&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          centerTitle<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//标题是否居中</span>
          backgroundColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span> <span class="token comment">//配置导航栏颜色</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        body<span class="token punctuation">:</span> <span class="token class-name">TabBarView</span><span class="token punctuation">(</span><span class="token comment">//配置点击顶部选项卡切换下面内容</span>
          children<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token comment">//这个里面放顶部切换的内容，有几个切换选项卡，里面就放几个ListView</span>
            <span class="token class-name">ListView</span><span class="token punctuation">(</span>
                children<span class="token punctuation">:</span><span class="token punctuation">[</span>
                  <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                      title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第一个tab页面&#39;</span></span><span class="token punctuation">)</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">ListView</span><span class="token punctuation">(</span>
                children<span class="token punctuation">:</span><span class="token punctuation">[</span>
                  <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                      title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第二个tab页面&#39;</span></span><span class="token punctuation">)</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><img src="https://jitems.gitee.io/myblog/blog/bk418.png" alt="solar"><h3 id="等宽标题栏选项卡切换" tabindex="-1"><a class="header-anchor" href="#等宽标题栏选项卡切换" aria-hidden="true">#</a> 等宽标题栏选项卡切换</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">Home</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">DefaultTabController</span><span class="token punctuation">(</span>
      length<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span><span class="token comment">//顶部tab切换的长度</span>
      child<span class="token punctuation">:</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
        appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
          title<span class="token punctuation">:</span> <span class="token class-name">Row</span><span class="token punctuation">(</span>
            children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token class-name">Expanded</span><span class="token punctuation">(</span>
                child<span class="token punctuation">:</span> <span class="token class-name">TabBar</span><span class="token punctuation">(</span>
                  indicatorSize<span class="token punctuation">:</span> <span class="token class-name">TabBarIndicatorSize</span><span class="token punctuation">.</span>label<span class="token punctuation">,</span><span class="token comment">//与文字等宽</span>
                  tabs<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token comment">//需要几个选项写几个选项卡</span>
                    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;热门&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐1&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐2&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                  <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          centerTitle<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//标题是否居中</span>
          backgroundColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span> <span class="token comment">//配置导航栏颜色</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        body<span class="token punctuation">:</span> <span class="token class-name">TabBarView</span><span class="token punctuation">(</span><span class="token comment">//配置点击顶部选项卡切换下面内容</span>
          children<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token comment">//这个里面放顶部切换的内容，有几个切换选项卡，里面就放几个ListView</span>
            <span class="token class-name">ListView</span><span class="token punctuation">(</span>
                children<span class="token punctuation">:</span><span class="token punctuation">[</span>
                  <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                      title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第一个tab页面&#39;</span></span><span class="token punctuation">)</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">ListView</span><span class="token punctuation">(</span>
                children<span class="token punctuation">:</span><span class="token punctuation">[</span>
                  <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                      title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第二个tab页面&#39;</span></span><span class="token punctuation">)</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">ListView</span><span class="token punctuation">(</span>
                children<span class="token punctuation">:</span><span class="token punctuation">[</span>
                  <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                      title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第三个tab页面&#39;</span></span><span class="token punctuation">)</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">ListView</span><span class="token punctuation">(</span>
                children<span class="token punctuation">:</span><span class="token punctuation">[</span>
                  <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                      title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第四个tab页面&#39;</span></span><span class="token punctuation">)</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><img src="https://jitems.gitee.io/myblog/blog/bk419.png" alt="solar"><p>在上面代码加上isScrollable:true,代码 在选项卡少的时候就居左</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">TabBar</span><span class="token punctuation">(</span>
  isScrollable<span class="token punctuation">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//是否支持滚动</span>
  indicatorSize<span class="token punctuation">:</span> <span class="token class-name">TabBarIndicatorSize</span><span class="token punctuation">.</span>label<span class="token punctuation">,</span><span class="token comment">//与文字等宽</span>
  tabs<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token comment">//需要几个选项写几个选项卡</span>
    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;热门&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐1&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐2&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><img src="https://jitems.gitee.io/myblog/blog/bk420.png" alt="solar"><h3 id="配置很多选项卡滚动" tabindex="-1"><a class="header-anchor" href="#配置很多选项卡滚动" aria-hidden="true">#</a> 配置很多选项卡滚动</h3><p><strong>注意</strong>：isScrollable 默认为 false，设置为 true 才可以滑动，否则数据过多时，可能会自适应效果，导致 title 被挤压。</p><p><strong>重要属性：isScrollable:true 是否支持滚动</strong></p><p>在DefaultTabController中length:10,定义10个个数</p><p>这里也相对应设置10个</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">TabBar</span><span class="token punctuation">(</span>
  isScrollable<span class="token punctuation">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//是否支持滚动</span>
  indicatorSize<span class="token punctuation">:</span> <span class="token class-name">TabBarIndicatorSize</span><span class="token punctuation">.</span>label<span class="token punctuation">,</span><span class="token comment">//与文字等宽</span>
  tabs<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token comment">//需要几个选项写几个选项卡</span>
    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;热门&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐1&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐2&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐3&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐4&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐5&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐6&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐7&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐8&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相对应的写10个</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">TabBarView</span><span class="token punctuation">(</span><span class="token comment">//配置点击顶部选项卡切换下面内容</span>
  children<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token comment">//这个里面放顶部切换的内容，有几个切换选项卡，里面就放几个ListView</span>
    <span class="token class-name">ListView</span><span class="token punctuation">(</span>
        children<span class="token punctuation">:</span><span class="token punctuation">[</span>
          <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
              title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第一个tab页面&#39;</span></span><span class="token punctuation">)</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">ListView</span><span class="token punctuation">(</span>
        children<span class="token punctuation">:</span><span class="token punctuation">[</span>
          <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
              title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第二个tab页面&#39;</span></span><span class="token punctuation">)</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">ListView</span><span class="token punctuation">(</span>
        children<span class="token punctuation">:</span><span class="token punctuation">[</span>
          <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
              title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第三个tab页面&#39;</span></span><span class="token punctuation">)</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">ListView</span><span class="token punctuation">(</span>
        children<span class="token punctuation">:</span><span class="token punctuation">[</span>
          <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
              title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第四个tab页面&#39;</span></span><span class="token punctuation">)</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">ListView</span><span class="token punctuation">(</span>
        children<span class="token punctuation">:</span><span class="token punctuation">[</span>
          <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
              title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第五个tab页面&#39;</span></span><span class="token punctuation">)</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">ListView</span><span class="token punctuation">(</span>
        children<span class="token punctuation">:</span><span class="token punctuation">[</span>
          <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
              title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第六个tab页面&#39;</span></span><span class="token punctuation">)</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">ListView</span><span class="token punctuation">(</span>
        children<span class="token punctuation">:</span><span class="token punctuation">[</span>
          <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
              title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第七个tab页面&#39;</span></span><span class="token punctuation">)</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">ListView</span><span class="token punctuation">(</span>
        children<span class="token punctuation">:</span><span class="token punctuation">[</span>
          <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
              title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第八个tab页面&#39;</span></span><span class="token punctuation">)</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">ListView</span><span class="token punctuation">(</span>
        children<span class="token punctuation">:</span><span class="token punctuation">[</span>
          <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
              title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第九个tab页面&#39;</span></span><span class="token punctuation">)</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">ListView</span><span class="token punctuation">(</span>
        children<span class="token punctuation">:</span><span class="token punctuation">[</span>
          <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
              title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第十个tab页面&#39;</span></span><span class="token punctuation">)</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整代码</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">Home</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">DefaultTabController</span><span class="token punctuation">(</span>
      length<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span><span class="token comment">//顶部tab切换的长度</span>
      child<span class="token punctuation">:</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
        appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
          title<span class="token punctuation">:</span> <span class="token class-name">Row</span><span class="token punctuation">(</span>
            children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token class-name">Expanded</span><span class="token punctuation">(</span>
                child<span class="token punctuation">:</span> <span class="token class-name">TabBar</span><span class="token punctuation">(</span>
                  isScrollable<span class="token punctuation">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//是否支持滚动</span>
                  indicatorSize<span class="token punctuation">:</span> <span class="token class-name">TabBarIndicatorSize</span><span class="token punctuation">.</span>label<span class="token punctuation">,</span><span class="token comment">//与文字等宽</span>
                  tabs<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token comment">//需要几个选项写几个选项卡</span>
                    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;热门&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐1&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐2&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐3&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐4&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐5&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐6&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐7&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token class-name">Tab</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;推荐8&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                  <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          centerTitle<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//标题是否居中</span>
          backgroundColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span> <span class="token comment">//配置导航栏颜色</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        body<span class="token punctuation">:</span> <span class="token class-name">TabBarView</span><span class="token punctuation">(</span><span class="token comment">//配置点击顶部选项卡切换下面内容</span>
          children<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token comment">//这个里面放顶部切换的内容，有几个切换选项卡，里面就放几个ListView</span>
            <span class="token class-name">ListView</span><span class="token punctuation">(</span>
                children<span class="token punctuation">:</span><span class="token punctuation">[</span>
                  <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                      title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第一个tab页面&#39;</span></span><span class="token punctuation">)</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">ListView</span><span class="token punctuation">(</span>
                children<span class="token punctuation">:</span><span class="token punctuation">[</span>
                  <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                      title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第二个tab页面&#39;</span></span><span class="token punctuation">)</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">ListView</span><span class="token punctuation">(</span>
                children<span class="token punctuation">:</span><span class="token punctuation">[</span>
                  <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                      title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第三个tab页面&#39;</span></span><span class="token punctuation">)</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">ListView</span><span class="token punctuation">(</span>
                children<span class="token punctuation">:</span><span class="token punctuation">[</span>
                  <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                      title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第四个tab页面&#39;</span></span><span class="token punctuation">)</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">ListView</span><span class="token punctuation">(</span>
                children<span class="token punctuation">:</span><span class="token punctuation">[</span>
                  <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                      title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第五个tab页面&#39;</span></span><span class="token punctuation">)</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">ListView</span><span class="token punctuation">(</span>
                children<span class="token punctuation">:</span><span class="token punctuation">[</span>
                  <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                      title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第六个tab页面&#39;</span></span><span class="token punctuation">)</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">ListView</span><span class="token punctuation">(</span>
                children<span class="token punctuation">:</span><span class="token punctuation">[</span>
                  <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                      title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第七个tab页面&#39;</span></span><span class="token punctuation">)</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">ListView</span><span class="token punctuation">(</span>
                children<span class="token punctuation">:</span><span class="token punctuation">[</span>
                  <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                      title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第八个tab页面&#39;</span></span><span class="token punctuation">)</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">ListView</span><span class="token punctuation">(</span>
                children<span class="token punctuation">:</span><span class="token punctuation">[</span>
                  <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                      title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第九个tab页面&#39;</span></span><span class="token punctuation">)</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">ListView</span><span class="token punctuation">(</span>
                children<span class="token punctuation">:</span><span class="token punctuation">[</span>
                  <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                      title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第十个tab页面&#39;</span></span><span class="token punctuation">)</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://jitems.gitee.io/myblog/blog/bk421.png" alt="solar"><h2 id="顶部tab切换监听状态-常用" tabindex="-1"><a class="header-anchor" href="#顶部tab切换监听状态-常用" aria-hidden="true">#</a> 顶部tab切换监听状态(常用)</h2><p>通过DefaultTabController组件实现了AppBar里面的顶部导航切换，但是实际项目中，有网络请求，上拉加载下拉刷新等操作DefaultTabController就不方便操作，所以就需要TabController实现TabBar。</p><p>TabController常用属性介绍</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>index：当前索引值
previousIndex：之前索引值
length：tab的数量
indexIsChanging：是否在切换tab，点击条目切换tab为<span class="token boolean">true</span>，滑动切换tab为<span class="token boolean">false</span>
animation：value表示<span class="token class-name">TabBar</span>的tab当前位置以及<span class="token class-name">TabBar</span> 和<span class="token class-name">TabBarView</span>的scrollOffsets
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TabController常用方法介绍</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>addListener<span class="token punctuation">:</span>添加监听
dispose<span class="token punctuation">:</span>销毁
notifyListeners<span class="token punctuation">:</span>激活所有监听
removeListener<span class="token punctuation">:</span>清除监听
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1、TabController组件必须是在一个继承StatefulWidget的动态组件中</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">Home</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Home</span><span class="token punctuation">&gt;</span></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">_HomeState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、必须实现SingleTickerProviderStateMixin</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// with SingleTickerProviderStateMixin 多继承； 继承SingleTickerProviderStateMixin这个类</span>
<span class="token keyword">class</span> _HomeState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Home</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">with</span> <span class="token class-name">SingleTickerProviderStateMixin</span> <span class="token punctuation">{</span>
  <span class="token comment">//需要定义一个Controller</span>
  late <span class="token class-name">TabController</span> _tabController<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、组件初始化的时候，实例化TabController,实例化的时候，传两个参数，length：tab的个数，vsync：this(固定写法)</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">//实例化TabController</span>
_tabController <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TabController</span><span class="token punctuation">(</span>
    length<span class="token punctuation">:</span> titleTabs<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
    vsync<span class="token punctuation">:</span><span class="token keyword">this</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、在TabBar组件和TabBarView组件中的controller指定，实例化的TabController</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">TabBar</span><span class="token punctuation">(</span>
  indicatorSize<span class="token punctuation">:</span> <span class="token class-name">TabBarIndicatorSize</span><span class="token punctuation">.</span>label<span class="token punctuation">,</span><span class="token comment">//与文字等宽</span>
  controller<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_tabController<span class="token punctuation">,</span><span class="token comment">//注意 这里使用</span>
  tabs<span class="token punctuation">:</span> titleTabs<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">TabBarView</span><span class="token punctuation">(</span><span class="token comment">//配置点击顶部选项卡切换下面内容</span>
    controller<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_tabController<span class="token punctuation">,</span><span class="token comment">//注意 这里使用</span>
    children<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token comment">//这个里面放顶部切换的内容，有几个切换选项卡，里面就放几个ListView</span>
      <span class="token class-name">ListView</span><span class="token punctuation">(</span>
          children<span class="token punctuation">:</span><span class="token punctuation">[</span>
            <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第一个tab页面&#39;</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token class-name">ListView</span><span class="token punctuation">(</span>
          children<span class="token punctuation">:</span><span class="token punctuation">[</span>
            <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第二个tab页面&#39;</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、TabController添加addListener，点击tab回调两次的解决方法(见demo)</p><p>1、点击tab回调一次，滑动切换tab不会回调</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">//监听切换选择中状态的改变</span>
  _tabController<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>_tabController<span class="token punctuation">.</span>indexIsChanging<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span>_tabController<span class="token punctuation">.</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、 //点击tab时或滑动tab回调一次</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">//监听切换选择中状态的改变</span>
  _tabController<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//因为点击选项卡会执行两次，而滑动执行一次，所以这里做处理，，点击和滑动都执行一次</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>_tabController<span class="token punctuation">.</span>index<span class="token punctuation">.</span><span class="token function">toDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span>_tabController<span class="token punctuation">.</span>animation<span class="token operator">?</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span>_tabController<span class="token punctuation">.</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整代码</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">Home</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Home</span><span class="token punctuation">&gt;</span></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">_HomeState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// with SingleTickerProviderStateMixin 多继承； 继承SingleTickerProviderStateMixin这个类</span>
<span class="token keyword">class</span> _HomeState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Home</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">with</span> <span class="token class-name">SingleTickerProviderStateMixin</span> <span class="token punctuation">{</span>
  <span class="token comment">//需要定义一个Controller</span>
  late <span class="token class-name">TabController</span> _tabController<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Tab</span><span class="token punctuation">&gt;</span></span> titleTabs <span class="token operator">=</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Tab</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span>
    <span class="token class-name">Tab</span><span class="token punctuation">(</span>
      text<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;今日实时榜&#39;</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Tab</span><span class="token punctuation">(</span>
      text<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;昨日排行榜&#39;</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//实例化TabController</span>
      _tabController <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TabController</span><span class="token punctuation">(</span>
          length<span class="token punctuation">:</span> titleTabs<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
          vsync<span class="token punctuation">:</span><span class="token keyword">this</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//监听切换选择中状态的改变</span>
      _tabController<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//因为点击选项卡会执行两次，而滑动执行一次，所以这里做处理，，点击和滑动都执行一次</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>_tabController<span class="token punctuation">.</span>index<span class="token punctuation">.</span><span class="token function">toDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span>_tabController<span class="token punctuation">.</span>animation<span class="token operator">?</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token function">print</span><span class="token punctuation">(</span>_tabController<span class="token punctuation">.</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">DefaultTabController</span><span class="token punctuation">(</span>
      length<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token comment">//顶部tab切换的长度</span>
      child<span class="token punctuation">:</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
        appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
          title<span class="token punctuation">:</span> <span class="token class-name">Row</span><span class="token punctuation">(</span>
            children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token class-name">Expanded</span><span class="token punctuation">(</span>
                child<span class="token punctuation">:</span> <span class="token class-name">TabBar</span><span class="token punctuation">(</span>
                  indicatorSize<span class="token punctuation">:</span> <span class="token class-name">TabBarIndicatorSize</span><span class="token punctuation">.</span>label<span class="token punctuation">,</span><span class="token comment">//与文字等宽</span>
                  controller<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_tabController<span class="token punctuation">,</span><span class="token comment">//注意 这里使用</span>
                  tabs<span class="token punctuation">:</span> titleTabs<span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          centerTitle<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//标题是否居中</span>
          backgroundColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span> <span class="token comment">//配置导航栏颜色</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        body<span class="token punctuation">:</span> <span class="token class-name">TabBarView</span><span class="token punctuation">(</span><span class="token comment">//配置点击顶部选项卡切换下面内容</span>
            controller<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_tabController<span class="token punctuation">,</span><span class="token comment">//注意 这里使用</span>
            children<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token comment">//这个里面放顶部切换的内容，有几个切换选项卡，里面就放几个ListView</span>
              <span class="token class-name">ListView</span><span class="token punctuation">(</span>
                  children<span class="token punctuation">:</span><span class="token punctuation">[</span>
                    <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                        title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第一个tab页面&#39;</span></span><span class="token punctuation">)</span>
                    <span class="token punctuation">)</span><span class="token punctuation">,</span>
                  <span class="token punctuation">]</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token class-name">ListView</span><span class="token punctuation">(</span>
                  children<span class="token punctuation">:</span><span class="token punctuation">[</span>
                    <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                        title<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;第二个tab页面&#39;</span></span><span class="token punctuation">)</span>
                    <span class="token punctuation">)</span><span class="token punctuation">,</span>
                  <span class="token punctuation">]</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://jitems.gitee.io/myblog/blog/bk422.png" alt="solar"><img src="https://jitems.gitee.io/myblog/blog/bk423.png" alt="solar">`,90);function o(u,k){return s(),a("div",null,[l,t(" more "),i])}const v=n(c,[["render",o],["__file","顶部导航栏选项卡TabBar.html.vue"]]);export{v as default};
