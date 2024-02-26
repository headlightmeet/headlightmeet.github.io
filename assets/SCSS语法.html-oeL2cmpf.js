import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,d as e,a as p,e as t}from"./app-oGr5u-1Z.js";const c={},o=p("p",null," ",-1),l=t(`<h1 id="scss语法" tabindex="-1"><a class="header-anchor" href="#scss语法" aria-hidden="true">#</a> SCSS语法</h1><h2 id="一、scss语法" tabindex="-1"><a class="header-anchor" href="#一、scss语法" aria-hidden="true">#</a> 一、SCSS语法：</h2><p><strong>注释</strong></p><p>注释分为三种：/* */css中显示，//css中不显示，/<em>重要注释!</em>/压缩不会被删掉。</p><p>·@import 命令导入外部sass、scss、css文件</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code>&lt;style lang=<span class="token string">&quot;scss&quot;</span>&gt;
<span class="token keyword">@import</span> <span class="token string">&#39;./test.scss&#39;</span><span class="token punctuation">;</span> <span class="token comment">//导入外部scss文件</span>
<span class="token selector">.myText </span><span class="token punctuation">{</span>
   <span class="token property">border</span><span class="token punctuation">:</span>1px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>变量</strong></p><p>声明变量的语法是：$+变量名+：+变量值；如下</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span>red<span class="token punctuation">;</span> <span class="token comment">//声明变量 $color</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>区分默认变量：</p><p>默认变量只需要在变量值后加上 !default , 用来设置默认值 ，对默认变量进行重新声明可以实现覆盖默认值；如</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span>red <span class="token statement keyword">!default</span><span class="token punctuation">;</span> <span class="token comment">//声明默认变量 $color</span>
<span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span>purple<span class="token punctuation">;</span> <span class="token comment">//根据需求覆盖默认变量</span>
<span class="token selector">.father01 </span><span class="token punctuation">{</span>
   <span class="token property">color</span><span class="token punctuation">:</span><span class="token variable">$color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>区分全局变量和局部变量</p><p>全局变量是元素外声明的变量，局部变量是在元素里声明的变量，重复声明时局部变量会覆盖全局变量；</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$height</span></span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span> <span class="token comment">//全局变量声明不在大花括号内</span>
<span class="token property"><span class="token variable">$bgcolor</span></span><span class="token punctuation">:</span>blue<span class="token punctuation">;</span>
<span class="token selector">body </span><span class="token punctuation">{</span>
   <span class="token selector">.father01 </span><span class="token punctuation">{</span>  <span class="token comment">//嵌套</span>
      <span class="token property">width</span><span class="token punctuation">:</span><span class="token variable">$width</span><span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span><span class="token variable">$height</span><span class="token punctuation">;</span>
      <span class="token property"><span class="token variable">$border</span></span><span class="token punctuation">:</span>1px solid red<span class="token punctuation">;</span> <span class="token comment">//局部变量是声明在元素内的</span>
      <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">$border</span><span class="token punctuation">;</span>
      <span class="token property"><span class="token variable">$bgcolor</span></span><span class="token punctuation">:</span>purple<span class="token punctuation">;</span> <span class="token comment">//全局变量和局部变量名一致时，调用局部变量进行覆盖</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$bgcolor</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>局部变量值后加上 !global 关键词可以使得局部变量变成全局变量；</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">body </span><span class="token punctuation">{</span>
   <span class="token selector">.father01 </span><span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
      <span class="token property"><span class="token variable">$border</span></span><span class="token punctuation">:</span>1px solid red !global<span class="token punctuation">;</span> <span class="token comment">//使用global关键词将$border变为了全局变量</span>
      <span class="token property">border</span><span class="token punctuation">:</span><span class="token variable">$border</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token selector">.father02 </span><span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span><span class="token variable">$border</span><span class="token punctuation">;</span> <span class="token comment">//使用全局变量</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>变量嵌套引用：即字符串插值，需要使用 #{} 来进行包裹</strong></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$left</span></span><span class="token punctuation">:</span>left<span class="token punctuation">;</span>
<span class="token selector">.father02 </span><span class="token punctuation">{</span>
   <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
   <span class="token property">height</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
   <span class="token property">border</span><span class="token punctuation">:</span><span class="token variable">$border</span><span class="token punctuation">;</span> <span class="token comment">//使用全局变量</span>
   <span class="token property">border-<span class="token variable">#{$left}</span></span><span class="token punctuation">:</span>2px solid purple<span class="token punctuation">;</span> <span class="token comment">//使用字符串插值之前必须先声明</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>变量计算</strong></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$left</span></span><span class="token punctuation">:</span>left<span class="token punctuation">;</span>
<span class="token selector">.father02 </span><span class="token punctuation">{</span>
   <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
   <span class="token property">height</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
   <span class="token property">border</span><span class="token punctuation">:</span><span class="token variable">$border</span><span class="token punctuation">;</span> <span class="token comment">//使用全局变量</span>
   <span class="token property">border-<span class="token variable">#{$left}</span></span><span class="token punctuation">:</span>2px solid purple<span class="token punctuation">;</span> <span class="token comment">//使用字符串插值之前必须先声明</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>嵌套</strong></p><p>选择器嵌套不多说了</p><p>属性嵌套（有相同属性前缀）如下</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">border:</span><span class="token punctuation">{</span>
   <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
   <span class="token property">width</span><span class="token punctuation">:</span>5px<span class="token punctuation">;</span>
   <span class="token property">style</span><span class="token punctuation">:</span>solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在嵌套时候可以使用 &amp; 来引用父元素</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.container </span><span class="token punctuation">{</span>
   <span class="token selector"><span class="token parent important">&amp;</span>&gt;p </span><span class="token punctuation">{</span>   <span class="token comment">//可以编译成CSS的 .container&gt;p {} 效果</span>
      <span class="token property">color</span><span class="token punctuation">:</span>purple<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>继承</strong></p><p>继承 .class 使用 @extend</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.container </span><span class="token punctuation">{</span>
   <span class="token property">color</span><span class="token punctuation">:</span>purple<span class="token punctuation">;</span>
   <span class="token property">border</span><span class="token punctuation">:</span>2px dashed purple<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.myText </span><span class="token punctuation">{</span>
   <span class="token keyword">@extend</span> .container<span class="token punctuation">;</span> <span class="token comment">//这里将继承.container类的所有样式</span>
   <span class="token property">font-size</span><span class="token punctuation">:</span> 22px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>SCSS占位符 %</strong></p><p>使用% 声明的代码块，如果不被@extend调用的话就不会被编译。编译出来的代码会将相同的代码合并在一起，代码变得十分简洁。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector"><span class="token placeholder">%m5</span> </span><span class="token punctuation">{</span> <span class="token property">background-color</span><span class="token punctuation">:</span> lightblue<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">.P1 </span><span class="token punctuation">{</span> <span class="token keyword">@extend</span> <span class="token placeholder selector">%m5</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>重复代码块，使用混合@mixin命令定义，以及使用@include调用该mixin</strong></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">normalStyle </span><span class="token punctuation">{</span>
   <span class="token comment">//使用@mixin命令定义可重复使用的代码块</span>
   <span class="token property">width</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
   <span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
   <span class="token property">color</span><span class="token punctuation">:</span>black<span class="token punctuation">;</span>
   <span class="token property">background-color</span><span class="token punctuation">:</span>lightblue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
   <span class="token keyword">@include</span> normalStyle<span class="token punctuation">;</span>
   <span class="token comment">//使用@include 命令引用@mixin定义的代码块</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用@mixin和@include时，传入参数和默认值</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">normalStyle</span><span class="token punctuation">(</span><span class="token variable">$width</span><span class="token punctuation">,</span><span class="token variable">$height</span><span class="token punctuation">,</span><span class="token variable">$color</span><span class="token punctuation">,</span><span class="token property"><span class="token variable">$defaultValue</span></span><span class="token punctuation">:</span>orange<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token property">width</span><span class="token punctuation">:</span><span class="token variable">$width</span><span class="token punctuation">;</span>
   <span class="token property">height</span><span class="token punctuation">:</span><span class="token variable">$height</span><span class="token punctuation">;</span>
   <span class="token property">color</span><span class="token punctuation">:</span><span class="token variable">$color</span><span class="token punctuation">;</span>
   <span class="token property">background-color</span><span class="token punctuation">:</span><span class="token variable">$defaultValue</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
   <span class="token keyword">@include</span> <span class="token function">normalStyle</span><span class="token punctuation">(</span>300px<span class="token punctuation">,</span>100px<span class="token punctuation">,</span>green<span class="token punctuation">,</span>lightgray<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、scss使用编程式方法" tabindex="-1"><a class="header-anchor" href="#二、scss使用编程式方法" aria-hidden="true">#</a> 二、SCSS使用编程式方法</h2><p><strong>条件语句</strong></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.container </span><span class="token punctuation">{</span>
   <span class="token selector">p </span><span class="token punctuation">{</span>
      <span class="token keyword">@if</span> <span class="token selector">1+1&lt;3 </span><span class="token punctuation">{</span>
         <span class="token property">border</span><span class="token punctuation">:</span>1px solid blue<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span>
         <span class="token property">border</span><span class="token punctuation">:</span>1ps dashed palevioletred<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>SCSS中的三种循环</strong></p><p>1、for循环</p><p>在sass中的@for循环有两种方式：</p><p>① @for $i from through</p><p>② @for $i from to</p><p>其中$i表示变量，start表示开始值，end表示结束值；</p><p>through表示包括end这个数值；to表示不包括end这个数值；</p><p>2、while循环</p><p>只要@while后面的条件为true就会执行，直到表达式值为false时停止循环；</p><p>3、each in循环</p><p>就是去遍历一个列表，然后从列表中取出对用值；他的指令形式为：<code>@each $var in &lt;list&gt;</code>($var为变量值，list为sassscript表达式）</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">//for 循环</span>
<span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> <span class="token selector">1 to 5 </span><span class="token punctuation">{</span>
   <span class="token selector">.item-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
      <span class="token property">border</span><span class="token punctuation">:</span><span class="token variable">#{$i}</span>px solid<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//while 循环</span>
<span class="token property"><span class="token variable">$m</span></span><span class="token punctuation">:</span>8<span class="token punctuation">;</span>
<span class="token keyword">@while</span> <span class="token selector"><span class="token variable">$m</span> &gt; 0 </span><span class="token punctuation">{</span>
   <span class="token selector">.items-<span class="token variable">#{$m}</span> </span><span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span>2em*<span class="token variable">$m</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token property"><span class="token variable">$m</span></span><span class="token punctuation">:</span><span class="token variable">$m</span> <span class="token operator">-</span> 2 <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//这里可以对$m进行运算 让它每次都减去2</span>
<span class="token comment">//each 语法</span>
<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$item</span> in class01,class02 </span><span class="token punctuation">{</span> <span class="token comment">//$item就是遍历了in关键词后面的类名列</span>
   <span class="token selector">.<span class="token variable">#{$item}</span> </span><span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span>purple<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//会编译成 .class01 , .class02 {background-color:purple;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用@function 自定义函数及使用</strong></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@function</span> <span class="token function">double</span><span class="token punctuation">(</span><span class="token variable">$sn</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//SCSS允许自定义函数</span>
   <span class="token keyword">@return</span> <span class="token variable">$sn</span>*2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.myText </span><span class="token punctuation">{</span>
   <span class="token property">border</span><span class="token punctuation">:</span>1px solid red<span class="token punctuation">;</span>
   <span class="token property">width</span><span class="token punctuation">:</span><span class="token function">double</span><span class="token punctuation">(</span>200px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//使用在SCSS中自定义的函数</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可以直接使用SCSS内置的颜色函数</strong></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.myText </span><span class="token punctuation">{</span>
   <span class="token property">color</span><span class="token punctuation">:</span>black<span class="token punctuation">;</span>
   <span class="token selector"><span class="token parent important">&amp;</span>:hover</span><span class="token punctuation">{</span>
      <span class="token comment">//以下的lighten()、darken()等是SCSS内置的颜色函数</span>
      <span class="token property">color</span><span class="token punctuation">:</span><span class="token function">lighten</span><span class="token punctuation">(</span>#cc3<span class="token punctuation">,</span> 10%<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// #d6d65c颜色变浅</span>
      <span class="token property">color</span><span class="token punctuation">:</span><span class="token function">darken</span><span class="token punctuation">(</span>#cc3<span class="token punctuation">,</span> 10%<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// #a3a329颜色加深</span>
      <span class="token property">color</span><span class="token punctuation">:</span><span class="token function">grayscale</span><span class="token punctuation">(</span>#cc3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// #d6d65c</span>
      <span class="token property">color</span><span class="token punctuation">:</span><span class="token function">complement</span><span class="token punctuation">(</span>#cc3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// #a3a329</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,56);function i(u,r){return n(),a("div",null,[o,e(" more "),l])}const v=s(c,[["render",i],["__file","SCSS语法.html.vue"]]);export{v as default};
