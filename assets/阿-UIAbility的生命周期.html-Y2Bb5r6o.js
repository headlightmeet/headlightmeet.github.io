import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as i,c as o,d as p,a as n,b as s,f as c,e as l}from"./app-PxqKmrwv.js";const d={},r=n("p",null," ",-1),u=n("h1",{id:"uiability的生命周期",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#uiability的生命周期","aria-hidden":"true"},"#"),s(" UIAbility的生命周期")],-1),k={href:"https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V3/uiability-lifecycle-0000001427902208-V3",target:"_blank",rel:"noopener noreferrer"},v=l(`<p><strong>概述</strong> 当用户打开、切换和返回到对应应用时，应用中的UIAbility实例会在其生命周期的不同状态之间转换。UIAbility类提供了一系列回调，通过这些回调可以知道当前UIAbility实例的某个状态发生改变，会经过UIAbility实例的创建和销毁，或者UIAbility实例发生了前后台的状态切换。</p><p>UIAbility的生命周期包括Create、Foreground、Background、Destroy四个状态，如下图所示。</p><p>UIAbility生命周期状态</p><img src="https://jitems.gitee.io/myblog/blog/bk648.png" alt="solar"><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> UIAbility <span class="token keyword">from</span> <span class="token string">&#39;@ohos.app.ability.UIAbility&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> hilog <span class="token keyword">from</span> <span class="token string">&#39;@ohos.hilog&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> window <span class="token keyword">from</span> <span class="token string">&#39;@ohos.window&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">EntryAbility</span> <span class="token keyword">extends</span> <span class="token class-name">UIAbility</span> <span class="token punctuation">{</span>
  <span class="token function">onCreate</span><span class="token punctuation">(</span>want<span class="token punctuation">,</span> launchParam<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 应用初始化</span>
  <span class="token punctuation">}</span>

  <span class="token function">onDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// onDestroy()在UIAbility实例销毁时触发</span>
    <span class="token comment">// 可以用于资源的释放，数据的保存等</span>
  <span class="token punctuation">}</span>

  <span class="token function">onWindowStageCreate</span><span class="token punctuation">(</span>windowStage<span class="token operator">:</span> window<span class="token punctuation">.</span>WindowStage<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 设置UI页面加载</span>
    <span class="token comment">// 设置WindowState的事件订阅（获焦/失焦、可见/不可见）</span>
    <span class="token comment">// Main window is created, set main page for this ability</span>
  
    <span class="token comment">// 使用 windowStage.loadContent设置要加载的页面，并根据需要订阅WindowState的事件</span>
    <span class="token comment">// windowStage.loadContent(&#39;pages/Index&#39;, (err, data) =&gt; {</span>
    windowStage<span class="token punctuation">.</span><span class="token function">loadContent</span><span class="token punctuation">(</span><span class="token string">&#39;pages/StudentListPage&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> data<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">.</span>code<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">onWindowStageDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 释放UI界面资源</span>
  <span class="token punctuation">}</span>

  <span class="token function">onForeground</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 申请系统需要的资源，或者重新申请在onBackground中释放的资源</span>
  <span class="token punctuation">}</span>

  <span class="token function">onBackground</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 释放UI页面不可见时无用的资源，或者在此回调中执行较为耗时的操作（例如状态保存等）</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="create状态" tabindex="-1"><a class="header-anchor" href="#create状态" aria-hidden="true">#</a> Create状态</h2><p>Create状态为在应用加载过程中,在UIAbility 实例创建时触发，系统会调用 onCreate() 回调，可以在 onCreate() 回调中进行相关初始化操作,例如变量定义资源加载等，用于后续的UI界面展示。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> UIAbility <span class="token keyword">from</span> <span class="token string">&#39;@ohos.app.ability.UIAbility&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> window <span class="token keyword">from</span> <span class="token string">&#39;@ohos.window&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">EntryAbility</span> <span class="token keyword">extends</span> <span class="token class-name">UIAbility</span> <span class="token punctuation">{</span>
    <span class="token function">onCreate</span><span class="token punctuation">(</span>want<span class="token punctuation">,</span> launchParam<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 应用初始化</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="windowstagecreate和windowstagedestroy状态" tabindex="-1"><a class="header-anchor" href="#windowstagecreate和windowstagedestroy状态" aria-hidden="true">#</a> WindowStageCreate和WindowStageDestroy状态</h2><p>UIAbility实例创建完成之后，在进入Foreground之前，系统会创建一个WindowStage。WindowStage创建完成后会进入onWindowStageCreate()回调，可以在该回调中设置UI界面加载、设置WindowStage的事件订阅。</p><p>图 WindowStageCreate和WindowStageDestroy状态</p><img src="https://jitems.gitee.io/myblog/blog/bk649.png" alt="solar"><p>在onWindowStageCreate()回调中通过loadContent()方法设置应用要加载的页面并根据需要订阅WindowStage的事件（获焦/失焦、可见/不可见）。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> UIAbility <span class="token keyword">from</span> <span class="token string">&#39;@ohos.app.ability.UIAbility&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Window <span class="token keyword">from</span> <span class="token string">&#39;@ohos.window&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">EntryAbility</span> <span class="token keyword">extends</span> <span class="token class-name">UIAbility</span> <span class="token punctuation">{</span>
    <span class="token function">onWindowStageCreate</span><span class="token punctuation">(</span>windowStage<span class="token operator">:</span> Window<span class="token punctuation">.</span>WindowStage<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 设置WindowStage的事件订阅（获焦/失焦、可见/不可见）</span>

        <span class="token comment">// 设置UI界面加载</span>
        windowStage<span class="token punctuation">.</span><span class="token function">loadContent</span><span class="token punctuation">(</span><span class="token string">&#39;pages/Index&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> data<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// ...</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应于onWindowStageCreate()回调。在UIAbility实例销毁之前，则会先进入onWindowStageDestroy()回调，可以在该回调中释放UI界面资源。例如在onWindowStageDestroy()中注销获焦/失焦等WindowStage事件。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> UIAbility <span class="token keyword">from</span> <span class="token string">&#39;@ohos.app.ability.UIAbility&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Window <span class="token keyword">from</span> <span class="token string">&#39;@ohos.window&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">EntryAbility</span> <span class="token keyword">extends</span> <span class="token class-name">UIAbility</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>

    <span class="token function">onWindowStageDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 释放UI界面资源</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="foreground和background状态" tabindex="-1"><a class="header-anchor" href="#foreground和background状态" aria-hidden="true">#</a> Foreground和Background状态</h2><p>Foreground和Background状态分别在UIAbility实例切换至前台和切换至后台时触发，对应于onForeground()回调和onBackground()回调。</p><p>onForeground()回调，在UIAbility的UI界面可见之前，如UIAbility切换至前台时触发。可以在onForeground()回调中申请系统需要的资源，或者重新申请在onBackground()中释放的资源。</p><p>onBackground()回调，在UIAbility的UI界面完全不可见之后，如UIAbility切换至后台时候触发。可以在onBackground()回调中释放UI界面不可见时无用的资源，或者在此回调中执行较为耗时的操作，例如状态保存等。</p><p>例如应用在使用过程中需要使用用户定位时，假设应用已获得用户的定位权限授权。在UI界面显示之前，可以在onForeground()回调中开启定位功能，从而获取到当前的位置信息。</p><p>当应用切换到后台状态，可以在onBackground()回调中停止定位功能，以节省系统的资源消耗。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> UIAbility <span class="token keyword">from</span> <span class="token string">&#39;@ohos.app.ability.UIAbility&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">EntryAbility</span> <span class="token keyword">extends</span> <span class="token class-name">UIAbility</span> <span class="token punctuation">{</span>
    <span class="token function">onForeground</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 申请系统需要的资源，或者重新申请在onBackground中释放的资源</span>
    <span class="token punctuation">}</span>

    <span class="token function">onBackground</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 释放UI界面不可见时无用的资源，或者在此回调中执行较为耗时的操作</span>
        <span class="token comment">// 例如状态保存等</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="destroy状态" tabindex="-1"><a class="header-anchor" href="#destroy状态" aria-hidden="true">#</a> Destroy状态</h2><p>Destroy状态在UIAbility实例销毁时触发。可以在onDestroy()回调中进行系统资源的释放、数据的保存等操作。</p><p>例如调用terminateSelf()方法停止当前UIAbility实例，从而完成UIAbility实例的销毁；或者用户使用最近任务列表关闭该UIAbility实例，完成UIAbility的销毁。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> UIAbility <span class="token keyword">from</span> <span class="token string">&#39;@ohos.app.ability.UIAbility&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Window <span class="token keyword">from</span> <span class="token string">&#39;@ohos.window&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">EntryAbility</span> <span class="token keyword">extends</span> <span class="token class-name">UIAbility</span> <span class="token punctuation">{</span>
    <span class="token function">onDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 系统资源的释放、数据的保存等</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function m(b,y){const a=t("ExternalLinkIcon");return i(),o("div",null,[r,p(" more "),u,n("p",null,[n("a",k,[s("UIAbility生命周期"),c(a)])]),v])}const h=e(d,[["render",m],["__file","阿-UIAbility的生命周期.html.vue"]]);export{h as default};
