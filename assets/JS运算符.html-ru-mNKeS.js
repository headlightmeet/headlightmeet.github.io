import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e,a as t,e as i}from"./app-oGr5u-1Z.js";const p={},o=t("p",null," ",-1),l=i(`<h1 id="js运算符" tabindex="-1"><a class="header-anchor" href="#js运算符" aria-hidden="true">#</a> JS运算符</h1><h2 id="幂运算" tabindex="-1"><a class="header-anchor" href="#幂运算" aria-hidden="true">#</a> 幂运算</h2><p>幂运算符**，相当于Math.pow()</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>5 ** 2                  // 25
Math.pow(5, 2)          // 25
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="空值合并操作符" tabindex="-1"><a class="header-anchor" href="#空值合并操作符" aria-hidden="true">#</a> 空值合并操作符（??）</h2><p>空值合并操作符（??）是一个逻辑操作符，当左边的操作数为 null 或 undefined 的时候，返回其右侧操作符，否则返回左侧操作符。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>undefined ?? &#39;foo&#39;  // &#39;foo&#39;
null ?? &#39;foo&#39;  // &#39;foo&#39;
&#39;foo&#39; ?? &#39;bar&#39; // &#39;foo&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="逻辑或操作符" tabindex="-1"><a class="header-anchor" href="#逻辑或操作符" aria-hidden="true">#</a> 逻辑或操作符（||）</h2><p>逻辑或操作符（||），会在左侧操作数为假值时返回右侧操作数，也就是说如果使用 || 来为某些变量设置默认值，可能会出现意料之外的情况。比如 0、&#39;&#39;、NaN、false：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0 || 1  // 1
0 ?? 1  // 0

&#39;&#39; || &#39;bar&#39;  // &#39;bar&#39;
&#39;&#39; ?? &#39;bar&#39;  // &#39;&#39;

NaN || 1  // 1
NaN ?? 1  // NaN

false || &#39;bar&#39;  // &#39;bar&#39;
false ?? &#39;bar&#39;  // false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong> 不可以将 ?? 与 AND（&amp;&amp;）OR（||）一起使用，会报错。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>null || undefined ?? &quot;foo&quot;; // 抛出 SyntaxError
true || undefined ?? &quot;foo&quot;; // 抛出 SyntaxError
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可选链操作符" tabindex="-1"><a class="header-anchor" href="#可选链操作符" aria-hidden="true">#</a> 可选链操作符(?.)</h2><p>可选链操作符（?.）允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用都是否有效。 ?. 操作符的功能类似于.链式操作符，不同之处在于，在引用为 null 或 undefined 时不会报错，该链路表达式返回值为 undefined。</p><p><strong>以前写法</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const street = user &amp;&amp; user.address &amp;&amp; user.address.street;
const num = user &amp;&amp; user.address &amp;&amp; user.address.getNum &amp;&amp; user.address.getNum();
console.log(street, num);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>现在写法</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const street2 = user?.address?.street;
const num2 = user?.address?.getNum?.();
console.log(street2, num2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong> 可选链不能用于赋值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let object = {};
object?.property = 1; // Uncaught SyntaxError: Invalid left-hand side in assignment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="逻辑运算符和赋值表达式" tabindex="-1"><a class="header-anchor" href="#逻辑运算符和赋值表达式" aria-hidden="true">#</a> 逻辑运算符和赋值表达式（&amp;&amp;=，||=，??=）</h2><p><strong>&amp;&amp;=</strong> 逻辑与赋值运算符 x &amp;&amp;= y 等价于 x &amp;&amp; (x=y)：意思是当 x 为真时，x = y。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

a <span class="token operator">&amp;&amp;=</span> <span class="token number">2</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>

b <span class="token operator">&amp;&amp;=</span> <span class="token number">2</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>||=</strong> 逻辑或赋值运算符 x ||= y 等价于 x || (x = y)：意思是仅在 x 为 false 的时候，x = y。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

a<span class="token punctuation">.</span>duration <span class="token operator">||=</span> <span class="token number">10</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>duration<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 50</span>

a<span class="token punctuation">.</span>title <span class="token operator">||=</span> <span class="token string">&#39;title is empty.&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// &quot;title is empty&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>??=</strong> 逻辑空赋值运算符 x ??= y 等价于 x ?? (x = y)：意思是仅在 x 为 null 或 undefined 的时候，x = y。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

a<span class="token punctuation">.</span>duration <span class="token operator">??=</span> <span class="token number">10</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>duration<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 50</span>

a<span class="token punctuation">.</span>speed <span class="token operator">??=</span> <span class="token number">25</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>speed<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 25</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function c(d,r){return s(),a("div",null,[o,e(" more "),l])}const m=n(p,[["render",c],["__file","JS运算符.html.vue"]]);export{m as default};
