import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e,a as t,e as i}from"./app-oGr5u-1Z.js";const p={},c=t("p",null," ",-1),l=i(`<h1 id="flutter移动开发常用" tabindex="-1"><a class="header-anchor" href="#flutter移动开发常用" aria-hidden="true">#</a> flutter移动开发常用</h1><h2 id="获取状态栏高度" tabindex="-1"><a class="header-anchor" href="#获取状态栏高度" aria-hidden="true">#</a> 获取状态栏高度</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&quot;dart:ui&quot;</span></span><span class="token punctuation">;</span>
<span class="token class-name">MediaQueryData</span><span class="token punctuation">.</span><span class="token function">fromWindow</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span>padding<span class="token punctuation">.</span>top<span class="token punctuation">;</span>

<span class="token comment">/// ToolBar的高度</span>
<span class="token keyword">const</span> double kToolbarHeight <span class="token operator">=</span> <span class="token number">56.0</span><span class="token punctuation">;</span>

<span class="token comment">/// 底部导航栏的高度</span>
<span class="token keyword">const</span> double kBottomNavigationBarHeight <span class="token operator">=</span> <span class="token number">56.0</span><span class="token punctuation">;</span>

<span class="token comment">/// 包含文本的标签栏的高度</span>
<span class="token keyword">const</span> double kTextTabBarHeight <span class="token operator">=</span> <span class="token number">48.0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置沉浸式状态栏" tabindex="-1"><a class="header-anchor" href="#设置沉浸式状态栏" aria-hidden="true">#</a> 设置沉浸式状态栏</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:io&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/services.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">runApp</span><span class="token punctuation">(</span><span class="token class-name">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Platform</span><span class="token punctuation">.</span>isAndroid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">SystemUiOverlayStyle</span> systemUiOverlayStyle <span class="token operator">=</span>
        <span class="token class-name">SystemUiOverlayStyle</span><span class="token punctuation">(</span>statusBarColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>transparent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">SystemChrome</span><span class="token punctuation">.</span><span class="token function">setSystemUIOverlayStyle</span><span class="token punctuation">(</span>systemUiOverlayStyle<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="app设置横屏" tabindex="-1"><a class="header-anchor" href="#app设置横屏" aria-hidden="true">#</a> APP设置横屏</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">WidgetsFlutterBinding</span><span class="token punctuation">.</span><span class="token function">ensureInitialized</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">SystemChrome</span><span class="token punctuation">.</span><span class="token function">setPreferredOrientations</span><span class="token punctuation">(</span>
      <span class="token punctuation">[</span><span class="token class-name">DeviceOrientation</span><span class="token punctuation">.</span>landscapeLeft<span class="token punctuation">,</span> <span class="token class-name">DeviceOrientation</span><span class="token punctuation">.</span>landscapeRight<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">runApp</span><span class="token punctuation">(</span><span class="token class-name">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="渐变标题栏" tabindex="-1"><a class="header-anchor" href="#渐变标题栏" aria-hidden="true">#</a> 渐变标题栏</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
    extendBodyBehindAppBar<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>   <span class="token comment">// 将body至于Appbar下</span>
    appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
        flexibleSpace<span class="token punctuation">:</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>
            decoration<span class="token punctuation">:</span> <span class="token class-name">BoxDecoration</span><span class="token punctuation">(</span>
                gradient<span class="token punctuation">:</span> <span class="token class-name">LinearGradient</span><span class="token punctuation">(</span>
                    colors<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                        <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xffc2e59c</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                        <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xff64b3f4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    begin<span class="token punctuation">:</span>  <span class="token class-name">Alignment</span><span class="token punctuation">.</span>topLeft<span class="token punctuation">,</span>
                    end<span class="token punctuation">:</span>  <span class="token class-name">Alignment</span><span class="token punctuation">.</span>bottomRight<span class="token punctuation">,</span>
                <span class="token punctuation">)</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// 设置AppBar形状</span>
        shape<span class="token punctuation">:</span> <span class="token class-name">RoundedRectangleBorder</span><span class="token punctuation">(</span>
          borderRadius<span class="token punctuation">:</span> <span class="token class-name">BorderRadius</span><span class="token punctuation">.</span><span class="token function">vertical</span><span class="token punctuation">(</span>bottom<span class="token punctuation">:</span> <span class="token class-name">Radius</span><span class="token punctuation">.</span><span class="token function">circular</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置底部虚拟按键颜色" tabindex="-1"><a class="header-anchor" href="#设置底部虚拟按键颜色" aria-hidden="true">#</a> 设置底部虚拟按键颜色</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:io&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/services.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">runApp</span><span class="token punctuation">(</span><span class="token class-name">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Platform</span><span class="token punctuation">.</span>isAndroid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">SystemUiOverlayStyle</span> style <span class="token operator">=</span> <span class="token class-name">SystemUiOverlayStyle</span><span class="token punctuation">(</span>
      systemNavigationBarColor<span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFFFFF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>   <span class="token comment">// 背景色</span>
      systemNavigationBarIconBrightness<span class="token punctuation">:</span> <span class="token class-name">Brightness</span><span class="token punctuation">.</span>dark<span class="token punctuation">,</span>   <span class="token comment">// 图标色</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">SystemChrome</span><span class="token punctuation">.</span><span class="token function">setSystemUIOverlayStyle</span><span class="token punctuation">(</span>systemUiOverlayStyle<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在runapp-前初始方法" tabindex="-1"><a class="header-anchor" href="#在runapp-前初始方法" aria-hidden="true">#</a> 在runApp()前初始方法</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">WidgetsFlutterBinding</span><span class="token punctuation">.</span><span class="token function">ensureInitialized</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="更改某一页状态栏导航栏颜色" tabindex="-1"><a class="header-anchor" href="#更改某一页状态栏导航栏颜色" aria-hidden="true">#</a> 更改某一页状态栏导航栏颜色</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">AnnotatedRegion</span><span class="token punctuation">(</span>
      value<span class="token punctuation">:</span> <span class="token class-name">SystemUiOverlayStyle</span><span class="token punctuation">.</span>light<span class="token punctuation">,</span>
      child<span class="token punctuation">:</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>body<span class="token punctuation">:</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;页面&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更改某一页状态栏或导航栏显示样式后其他页面改回去" tabindex="-1"><a class="header-anchor" href="#更改某一页状态栏或导航栏显示样式后其他页面改回去" aria-hidden="true">#</a> 更改某一页状态栏或导航栏显示样式后其他页面改回去</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">WillPopScope</span><span class="token punctuation">(</span>
    onWillPop<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
      <span class="token class-name">SystemChrome</span><span class="token punctuation">.</span><span class="token function">setEnabledSystemUIMode</span><span class="token punctuation">(</span><span class="token class-name">SystemUiMode</span><span class="token punctuation">.</span>manual<span class="token punctuation">,</span>
          overlays<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">SystemUiOverlay</span><span class="token punctuation">.</span>top<span class="token punctuation">,</span> <span class="token class-name">SystemUiOverlay</span><span class="token punctuation">.</span>bottom<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">SystemChrome</span><span class="token punctuation">.</span><span class="token function">setSystemUIOverlayStyle</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token class-name">SystemUiOverlayStyle</span><span class="token punctuation">(</span>
          systemNavigationBarColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>white<span class="token punctuation">,</span>
          systemNavigationBarIconBrightness<span class="token punctuation">:</span> <span class="token class-name">Brightness</span><span class="token punctuation">.</span>dark<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  child<span class="token punctuation">:</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="监听app生命周期" tabindex="-1"><a class="header-anchor" href="#监听app生命周期" aria-hidden="true">#</a> 监听APP生命周期</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token comment">///前后台应用测试</span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">runApp</span><span class="token punctuation">(</span><span class="token class-name">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  _MyAppState <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">_MyAppState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _MyAppState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MyApp</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">with</span> <span class="token class-name">WidgetsBindingObserver</span><span class="token punctuation">{</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">WidgetsBinding</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//添加观察者</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;YM--------dispose&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">WidgetsBinding</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span><span class="token function">removeObserver</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//添加观察者</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">MaterialApp</span><span class="token punctuation">(</span>
      title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;Material App&#39;</span></span><span class="token punctuation">,</span>
      home<span class="token punctuation">:</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
        appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
          title<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Material App Bar&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        body<span class="token punctuation">:</span> <span class="token class-name">Center</span><span class="token punctuation">(</span>
          child<span class="token punctuation">:</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>
            child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Hello World&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">didChangeAppLifecycleState</span><span class="token punctuation">(</span><span class="token class-name">AppLifecycleState</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">didChangeAppLifecycleState</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token class-name">AppLifecycleState</span><span class="token punctuation">.</span>inactive<span class="token punctuation">:</span>
    <span class="token comment">//  应用程序处于闲置状态并且没有收到用户的输入事件。</span>
      <span class="token comment">//注意这个状态，在切换到后台时候会触发，所以流程应该是先冻结窗口，然后停止UI</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;YM-----&gt;AppLifecycleState.inactive&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token class-name">AppLifecycleState</span><span class="token punctuation">.</span>paused<span class="token punctuation">:</span>
<span class="token comment">//      应用程序处于不可见状态</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;YM-----&gt;AppLifecycleState.paused&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token class-name">AppLifecycleState</span><span class="token punctuation">.</span>resumed<span class="token punctuation">:</span>
    <span class="token comment">//    进入应用时候不会触发该状态</span>
    <span class="token comment">//  应用程序处于可见状态，并且可以响应用户的输入事件。它相当于 Android 中Activity的onResume。</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;YM-----&gt;AppLifecycleState.resumed&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token class-name">AppLifecycleState</span><span class="token punctuation">.</span>detached<span class="token punctuation">:</span>
        <span class="token comment">//当前页面即将退出</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;YM-----&gt;AppLifecycleState.detached&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">///当前系统改变了一些访问性活动的回调</span>
  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">didChangeAccessibilityFeatures</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">didChangeAccessibilityFeatures</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;YM-----@@@@@@@@@ didChangeAccessibilityFeatures&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">///低内存回调</span>
  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">didHaveMemoryPressure</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">didHaveMemoryPressure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;YM-----@@@@@@@@@ didHaveMemoryPressure&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">///用户本地设置变化时调用，如系统语言改变</span>
  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">didChangeLocales</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Locale</span><span class="token punctuation">&gt;</span></span> locale<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">didChangeLocales</span><span class="token punctuation">(</span>locale<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;YM-----@@@@@@@@@ didChangeLocales&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">///应用尺寸改变时回调，例如旋转</span>
  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">didChangeMetrics</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">didChangeMetrics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Size</span> size <span class="token operator">=</span> <span class="token class-name">WidgetsBinding</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span>window<span class="token punctuation">.</span>physicalSize<span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;YM-----@@@@@@@@@ didChangeMetrics  ：宽：</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">size<span class="token punctuation">.</span>width</span><span class="token punctuation">}</span></span><span class="token string"> 高：</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">size<span class="token punctuation">.</span>height</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>


  <span class="token metadata function">@override</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span>bool<span class="token punctuation">&gt;</span></span> <span class="token function">didPopRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;YM--------didPopRoute&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//页面弹出</span>
    <span class="token keyword">return</span> <span class="token class-name">Future</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true为拦截，false不拦截</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span>bool<span class="token punctuation">&gt;</span></span> <span class="token function">didPushRoute</span><span class="token punctuation">(</span><span class="token class-name">String</span> route<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;YM--------PushRoute&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">Future</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span>bool<span class="token punctuation">&gt;</span></span> <span class="token function">didPushRouteInformation</span><span class="token punctuation">(</span><span class="token class-name">RouteInformation</span> routeInformation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;YM--------didPushRouteInformation&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">Future</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//文字大小改变时候的监听</span>
  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">didChangeTextScaleFactor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;YM--------@@@@@@@@@ didChangeTextScaleFactor  ：</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token class-name">WidgetsBinding</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span>window<span class="token punctuation">.</span>textScaleFactor</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">didChangePlatformBrightness</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> window <span class="token operator">=</span> <span class="token class-name">WidgetsBinding</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span>window<span class="token punctuation">;</span>
    <span class="token keyword">final</span> brightness <span class="token operator">=</span> window<span class="token punctuation">.</span>platformBrightness<span class="token punctuation">;</span>
    <span class="token comment">// Brightness.light 亮色</span>
    <span class="token comment">// Brightness.dark 暗色</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;YM----平台主题改变----didChangePlatformBrightness</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">brightness</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// window.onPlatformBrightnessChanged = () {</span>
    <span class="token comment">//   // This callback gets invoked every time brightness changes</span>
    <span class="token comment">//   final brightness = window.platformBrightness;</span>
    <span class="token comment">//   print(&#39;YM----平台亮度改变----didChangePlatformBrightness$brightness&#39;);</span>
    <span class="token comment">// };</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gridview-和-listview嵌套问题" tabindex="-1"><a class="header-anchor" href="#gridview-和-listview嵌套问题" aria-hidden="true">#</a> GridView 和 ListView嵌套问题</h2><p>由于 GridView 和 ListView 都是可以滚动的组件，所以嵌套的时候要注意把里面的组件改为不可滚动组件。</p><p>重要属性：</p><p><strong>shrinkWrap: true, //解决无限高度问题</strong></p><p><strong>physics:NeverScrollableScrollPhysics(), //禁用滑动事件</strong></p><h2 id="elevatedbutton设置圆角" tabindex="-1"><a class="header-anchor" href="#elevatedbutton设置圆角" aria-hidden="true">#</a> ElevatedButton设置圆角</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">ElevatedButton</span><span class="token punctuation">(</span>
  onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Button&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  style<span class="token punctuation">:</span> <span class="token class-name">ElevatedButton</span><span class="token punctuation">.</span><span class="token function">styleFrom</span><span class="token punctuation">(</span>shape<span class="token punctuation">:</span> <span class="token class-name">StadiumBorder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="点击空白处取消textfield焦点收起键盘" tabindex="-1"><a class="header-anchor" href="#点击空白处取消textfield焦点收起键盘" aria-hidden="true">#</a> 点击空白处取消TextField焦点收起键盘</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">GestureDetector</span><span class="token punctuation">(</span>
    <span class="token comment">// 空白处点击生效</span>
    behavior<span class="token punctuation">:</span> <span class="token class-name">HitTestBehavior</span><span class="token punctuation">.</span>translucent<span class="token punctuation">,</span>
    onTap<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 触摸收起键盘</span>
        <span class="token class-name">FocusScope</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">requestFocus</span><span class="token punctuation">(</span><span class="token class-name">FocusNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    child<span class="token punctuation">:</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>视图内容<span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内容不随键盘滚动-防止出现软键盘内容溢出" tabindex="-1"><a class="header-anchor" href="#内容不随键盘滚动-防止出现软键盘内容溢出" aria-hidden="true">#</a> 内容不随键盘滚动,防止出现软键盘内容溢出</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Scafflod</span><span class="token punctuation">(</span>
	<span class="token comment">// 已删除resizeToAvoidBottomPadding: false</span>
    resizeToAvoidBottomInset<span class="token punctuation">:</span> <span class="token boolean">false</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="软键盘弹出遮挡住内容" tabindex="-1"><a class="header-anchor" href="#软键盘弹出遮挡住内容" aria-hidden="true">#</a> 软键盘弹出遮挡住内容</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">AnimatedPadding</span><span class="token punctuation">(</span>
  padding<span class="token punctuation">:</span> <span class="token class-name">MediaQuery</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span>viewInsets<span class="token punctuation">,</span>
  duration<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Duration</span><span class="token punctuation">(</span>milliseconds<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  child<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="滑动删除列表" tabindex="-1"><a class="header-anchor" href="#滑动删除列表" aria-hidden="true">#</a> 滑动删除列表</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Dismissible</span><span class="token punctuation">(</span>
    key<span class="token punctuation">:</span> <span class="token class-name">Key</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">,</span>
    onDismissed<span class="token punctuation">:</span> <span class="token punctuation">(</span>direction<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            items<span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">final</span> snackbar <span class="token operator">=</span> <span class="token class-name">SnackBar</span><span class="token punctuation">(</span>content<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">item</span><span class="token punctuation">}</span></span><span class="token string">已移除&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Scaffold</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showSnackBar</span><span class="token punctuation">(</span>snackbar<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    background<span class="token punctuation">:</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>
        alignment<span class="token punctuation">:</span> <span class="token class-name">Alignment</span><span class="token punctuation">.</span>center<span class="token punctuation">,</span>
        child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;左滑删除&quot;</span></span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>white<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    child<span class="token punctuation">:</span> <span class="token class-name">ListTile</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="双击退出效果" tabindex="-1"><a class="header-anchor" href="#双击退出效果" aria-hidden="true">#</a> 双击退出效果</h2><p>要想实现双击退出效果，必须把 <strong>WillPopScope</strong> 控件放在最外围</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">TheWillPopScope</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token class-name">DateTime</span> _lastQUitTime<span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">WillPopScope</span><span class="token punctuation">(</span>
      child<span class="token punctuation">:</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
        body<span class="token punctuation">:</span> <span class="token class-name">Center</span><span class="token punctuation">(</span>
          child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;点击退出按钮，询问是否退出&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      onWillPop<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>_lastQUitTime <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token class-name">DateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">difference</span><span class="token punctuation">(</span>_lastQUitTime<span class="token punctuation">)</span><span class="token punctuation">.</span>inSeconds <span class="token operator">&gt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          _lastQUitTime <span class="token operator">=</span> <span class="token class-name">DateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
          <span class="token comment">// 推出页面</span>
          <span class="token keyword">await</span> <span class="token class-name">Navigator</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">// 退出程序  </span>
          <span class="token comment">// await SystemChannels.platform.invokeMethod(&#39;SystemNavigator.pop&#39;);</span>
          <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="去掉顶部默认padding" tabindex="-1"><a class="header-anchor" href="#去掉顶部默认padding" aria-hidden="true">#</a> 去掉顶部默认Padding</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">MediaQUery</span><span class="token punctuation">.</span><span class="token function">removePadding</span><span class="token punctuation">(</span>
	removeTop<span class="token punctuation">:</span> <span class="token boolean">true</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="去掉textfield下划线" tabindex="-1"><a class="header-anchor" href="#去掉textfield下划线" aria-hidden="true">#</a> 去掉TextField下划线</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">TextField</span><span class="token punctuation">(</span>
  decoration<span class="token punctuation">:</span> <span class="token class-name">InputDecoration</span><span class="token punctuation">(</span>
    border<span class="token punctuation">:</span> <span class="token class-name">InputBorder</span><span class="token punctuation">.</span>none<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="textfield文本内容不居中问题" tabindex="-1"><a class="header-anchor" href="#textfield文本内容不居中问题" aria-hidden="true">#</a> TextField文本内容不居中问题</h2><p>我们通常在使用textField的时候默认将其border设置为 InputBorder.none，如果我们给textField设置外边框，你会发现，内容竟然居中了</p><img src="https://jitems.gitee.io/myblog/bk533.png" alt="solar"><p>由此可见，当我们给textField设置了外边框，textField的内容就会居中显示，那么剩下的问题就简单了，将外边框设置为透明色即可</p><p>有一点很重要 contentPadding一定要设置上下边距为0</p><p><strong>contentPadding:EdgeInsets.only(top:0,bottom:0)</strong></p><img src="https://jitems.gitee.io/myblog/bk534.png" alt="solar"><p>结果如下：</p><img src="https://jitems.gitee.io/myblog/bk535.png" alt="solar"><h2 id="监听滑动通知" tabindex="-1"><a class="header-anchor" href="#监听滑动通知" aria-hidden="true">#</a> 监听滑动通知</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">NotificationListener</span><span class="token punctuation">(</span>
	onNotification<span class="token punctuation">:</span> <span class="token punctuation">(</span>scrollNotification<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>scrollNotification <span class="token operator">is</span> <span class="token class-name">ScrollUpdateNotification</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    child<span class="token punctuation">:</span> 
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看图片" tabindex="-1"><a class="header-anchor" href="#查看图片" aria-hidden="true">#</a> 查看图片</h2><p>可以通过拖动以平移、缩放和拖放子组件</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">InteractiveViewer</span><span class="token punctuation">(</span>
  child<span class="token punctuation">:</span> <span class="token class-name">Image</span><span class="token punctuation">.</span><span class="token function">asset</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;assets/images/go_board_09x09.png&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="左滑返回" tabindex="-1"><a class="header-anchor" href="#左滑返回" aria-hidden="true">#</a> 左滑返回</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MaterialApp</span><span class="token punctuation">(</span>
      home<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">HomePage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      theme<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">ThemeData</span><span class="token punctuation">(</span>platform<span class="token punctuation">:</span> <span class="token class-name">TargetPlatform</span><span class="token punctuation">.</span>iOS<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="退出应用" tabindex="-1"><a class="header-anchor" href="#退出应用" aria-hidden="true">#</a> 退出应用</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">SystemChannels</span><span class="token punctuation">.</span>platform<span class="token punctuation">.</span><span class="token function">invokeMethod</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;SystemNavigator.pop&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="子元素被父元素限制宽高" tabindex="-1"><a class="header-anchor" href="#子元素被父元素限制宽高" aria-hidden="true">#</a> 子元素被父元素限制宽高</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">UnconstrainedBox</span><span class="token punctuation">{</span>
  constrainedAxis<span class="token punctuation">:</span> <span class="token class-name">Axis</span><span class="token punctuation">.</span>vertical<span class="token punctuation">,</span>
  child<span class="token punctuation">:</span> <span class="token class-name">SizedBox</span><span class="token punctuation">(</span>
  	width<span class="token punctuation">:</span> width<span class="token punctuation">;</span>
    child<span class="token punctuation">:</span> <span class="token class-name">Dialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="container背景渐变" tabindex="-1"><a class="header-anchor" href="#container背景渐变" aria-hidden="true">#</a> Container背景渐变</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Container(
  width: 1.sw,
  height: 1.sh,
  padding: EdgeInsets.all(20.w),
  decoration: BoxDecoration(
    //页面背景渐变色
    gradient: LinearGradient(
      begin: Alignment.topCenter,
      end: Alignment.bottomCenter,
      colors: colorsList,
    ),
  ),
  child: ListView(
    children: [
    ],
  ),
),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内阴影效果" tabindex="-1"><a class="header-anchor" href="#内阴影效果" aria-hidden="true">#</a> 内阴影效果</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>decoration: BoxDecoration(
  //内阴影效果
  boxShadow: [
    BoxShadow(
      color: Color(0xFF252939),
    ),
    BoxShadow(
      color: Color(0x40FFFFFF),
      offset: Offset(0, -24.w),
      spreadRadius: -2.0,
      blurRadius: 20.0,
    ),
  ]
),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="外阴影效果" tabindex="-1"><a class="header-anchor" href="#外阴影效果" aria-hidden="true">#</a> 外阴影效果</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>decoration: BoxDecoration(
  //内阴影效果
  boxShadow: [
    BoxShadow(
      color: Color(0xFF252939),
    ),
    BoxShadow(
      color: Color(0x40FFFFFF),
      offset: Offset(0, 6),
      blurRadius: 8,
      blurRadius: 0,
    ),
  ]
),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="textfield使用" tabindex="-1"><a class="header-anchor" href="#textfield使用" aria-hidden="true">#</a> TextField使用</h2><h3 id="基本属性" tabindex="-1"><a class="header-anchor" href="#基本属性" aria-hidden="true">#</a> 基本属性</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const TextField({
    Key key,
    this.controller,//控制器
    this.focusNode,//焦点
    this.obscureText = false,//是否隐藏文本，即显示密码类型
    this.maxLines = 1,//最多行数，高度与行数同步
    this.autofocus = false,//自动聚焦
    this.decoration = const InputDecoration(),//装饰
    TextInputType keyboardType,//键盘类型，即输入类型
    this.onChanged,//输入改变回调

    //以下属性不常用,用到再来查看
    this.textInputAction,//键盘按钮
    this.textCapitalization = TextCapitalization.none,//大小写
    this.style,//样式
    this.strutStyle,
    this.textAlign = TextAlign.start,//对齐方式
    this.textDirection,
    this.autocorrect = true,//自动更正
    this.minLines,//最小行数
    this.expands = false,
    this.maxLength,//最多输入数，有值后右下角就会有一个计数器
    this.maxLengthEnforced = true,
    this.onEditingComplete,//输入完成时，配合TextInputAction.done使用
    this.onSubmitted,//提交时,配合TextInputAction
    this.inputFormatters,//输入校验
    this.enabled,//是否可用
    this.cursorWidth = 2.0,//光标宽度
    this.cursorRadius,//光标圆角
    this.cursorColor,//光标颜色
    this.keyboardAppearance,
    this.scrollPadding = const EdgeInsets.all(20.0),
    this.dragStartBehavior = DragStartBehavior.start,
    this.enableInteractiveSelection,
    this.onTap,//点击事件
    this.buildCounter,
    this.scrollPhysics,
  }) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="inputdecoration-装饰器" tabindex="-1"><a class="header-anchor" href="#inputdecoration-装饰器" aria-hidden="true">#</a> InputDecoration 装饰器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>InputDecoration({
    this.icon,    //位于装饰器外部和输入框前面的图片
    this.labelText,  //用于描述输入框，例如这个输入框是用来输入用户名还是密码的，当输入框获取焦点时默认会浮动到上方，
    this.labelStyle,  // 控制labelText的样式,接收一个TextStyle类型的值
    this.helperText, //辅助文本，位于输入框下方，如果errorText不为空的话，则helperText不会显示
    this.helperStyle, //helperText的样式
    this.hintText,  //提示文本，位于输入框内部
    this.hintStyle, //hintText的样式
    this.hintMaxLines, //提示信息最大行数
    this.errorText,  //错误信息提示
    this.errorStyle, //errorText的样式
    this.errorMaxLines,   //errorText最大行数
    this.hasFloatingPlaceholder = true,  //labelText是否浮动，默认为true，修改为false则labelText在输入框获取焦点时不会浮动且不显示
    this.isDense,   //改变输入框是否为密集型，默认为false，修改为true时，图标及间距会变小
    this.contentPadding, //内间距
    this.prefixIcon,  //位于输入框内部起始位置的图标。
    this.prefix,   //预先填充的Widget,跟prefixText同时只能出现一个
    this.prefixText,  //预填充的文本，例如手机号前面预先加上区号等
    this.prefixStyle,  //prefixText的样式
    this.suffixIcon, //位于输入框后面的图片,例如一般输入框后面会有个眼睛，控制输入内容是否明文
    this.suffix,  //位于输入框尾部的控件，同样的不能和suffixText同时使用
    this.suffixText,//位于尾部的填充文字
    this.suffixStyle,  //suffixText的样式
    this.counter,//位于输入框右下方的小控件，不能和counterText同时使用
    this.counterText,//位于右下方显示的文本，常用于显示输入的字符数量
    this.counterStyle, //counterText的样式
    this.filled,  //如果为true，则输入使用fillColor指定的颜色填充
    this.fillColor,  //相当于输入框的背景颜色
    this.errorBorder,   //errorText不为空，输入框没有焦点时要显示的边框
    this.focusedBorder,  //输入框有焦点时的边框,如果errorText不为空的话，该属性无效
    this.focusedErrorBorder,  //errorText不为空时，输入框有焦点时的边框
    this.disabledBorder,  //输入框禁用时显示的边框，如果errorText不为空的话，该属性无效
    this.enabledBorder,  //输入框可用时显示的边框，如果errorText不为空的话，该属性无效
    this.border, //正常情况下的border
    this.enabled = true,  //输入框是否可用
    this.semanticCounterText,  
    this.alignLabelWithHint,
  })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文本框初始化时显示默认值" tabindex="-1"><a class="header-anchor" href="#文本框初始化时显示默认值" aria-hidden="true">#</a> 文本框初始化时显示默认值</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class _FooState extends State&lt;Foo&gt; {
  TextEditingController _controller;

  @override
  void initState() {
    super.initState();
    _controller = new TextEditingController(text: &#39;初始化内容&#39;);
  }

  @override
  Widget build(BuildContext context) {
    return new Column(
      children: &lt;Widget&gt;[
        new TextField(
          // 当TextField 第一次创建时，controller会包含初始值，
          // 当用户修改文本框内容时，会修改controller的值。
          controller: _controller,
        ),
        new RaisedButton(
          onPressed: () {
            // 通过clear()可以清空controller的值。
            _controller.clear();
          },
          child: new Text(&#39;清空&#39;),
        ),
      ],
    );
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题1:动态创建文本框初始值 一般情况下，直接使用这种方式，没有任何问题。但是现在有一种情况：</p><p>**问题1: **当页面文本框中的初始值是动态的，从后台获取到的时候，应该怎么办呢？</p><p>这种情况下，说明创建TextEditingController时，并不知道文本内容。这个时候如果动态修改controller的话，会报错，根本没法使用。</p><p>这种情况我根本没遇到过，但是我觉得Flutter肯定有解决方法。所以我去找了一下Flutter的文档，总算是没有白找，找到了一个(https://api.flutter.dev/flutter/material/TextFormField-class.html)[组件] TextFormField。</p><p>意思就是说，当不指定controller时，initialValue 就可以自动生成controller的初始值。</p><p>既然有解决方案，那么就是修改一下代码即可。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class _FooState extends State&lt;Foo&gt; {

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return new Column(
      children: &lt;Widget&gt;[
        new TextFormField(
          initialValue: &quot;初始值&quot;
        ),
      ],
    );
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>问题2: TextField和TextFormField的区别？</strong></p><p>总结： 如果需要使用保存、重置、验证用户输入的情况下，使用TextFormField。 如果只需要简单的捕获用户的输入行为，只需要使用TextField组件即可。</p><h3 id="textfield-设置高度后文本无法居中" tabindex="-1"><a class="header-anchor" href="#textfield-设置高度后文本无法居中" aria-hidden="true">#</a> TextField 设置高度后文本无法居中</h3><p>推荐的方式是使用isCollapsed: true来修正：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TextField(
  decoration: InputDecoration(
    isCollapsed: true,//去除自带内边距
    ...
  )
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="textfield-去除边框" tabindex="-1"><a class="header-anchor" href="#textfield-去除边框" aria-hidden="true">#</a> TextField 去除边框</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   border: InputBorder.none,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="定位组件居中" tabindex="-1"><a class="header-anchor" href="#定位组件居中" aria-hidden="true">#</a> 定位组件居中</h2><h3 id="水平居中" tabindex="-1"><a class="header-anchor" href="#水平居中" aria-hidden="true">#</a> 水平居中</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Positioned( 
  left:0,
  right:0,
  child: Center(
    child: Image.asset(
      &quot;assets/images/ic_arrow.png&quot;,
      fit: BoxFit.contain,
      width: 20.w,
      height: 12.w,
    ),
  ),
),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="垂直居中" tabindex="-1"><a class="header-anchor" href="#垂直居中" aria-hidden="true">#</a> 垂直居中</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Positioned(
  top: 0,
  bottom: 0,
  child: Center(
    child: Image.asset(
      &quot;assets/images/ic_arrow.png&quot;,
      fit: BoxFit.contain,
      width: 20.w,
      height: 12.w,
    ),
  ),
),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="水平垂直居中" tabindex="-1"><a class="header-anchor" href="#水平垂直居中" aria-hidden="true">#</a> 水平垂直居中</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Positioned(
  left:0,
  right:0,
  top: 0,
  bottom: 0,
  child: Center(
    child: Image.asset(
      &quot;assets/images/ic_arrow.png&quot;,
      fit: BoxFit.contain,
      width: 20.w,
      height: 12.w,
    ),
  ),
),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h2><p>Divider 水平分割线 VerticalDivider 垂直分割线</p><h2 id="给某个边角设置" tabindex="-1"><a class="header-anchor" href="#给某个边角设置" aria-hidden="true">#</a> 给某个边角设置</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> Container(
   decoration: BoxDecoration(
     borderRadius: BorderRadius.only(
       topLeft: Radius.circular(30),
       bottomRight: Radius.circular(30),
     ),
  ),
),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="封装的评星" tabindex="-1"><a class="header-anchor" href="#封装的评星" aria-hidden="true">#</a> 封装的评星</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">StarRating</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> double rating<span class="token punctuation">;</span>
  <span class="token keyword">final</span> double maxRating<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">Widget</span> unselectedImage<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">Widget</span> selectedImage<span class="token punctuation">;</span>
  <span class="token keyword">final</span> int count<span class="token punctuation">;</span>
  <span class="token keyword">final</span> double size<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">Color</span> unselectedColor<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">Color</span> selectedColor<span class="token punctuation">;</span>

  <span class="token class-name">StarRating</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token metadata function">@required</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rating<span class="token punctuation">,</span>  <span class="token comment">// 当前评分</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>maxRating <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span>  <span class="token comment">// 最高评分</span>
    <span class="token class-name">Widget</span> unselectedImage<span class="token punctuation">,</span>
    <span class="token class-name">Widget</span> selectedImage<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span>  <span class="token comment">// 星星的个数</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>unselectedColor <span class="token operator">=</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>grey<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>selectedColor <span class="token operator">=</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>orange
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> unselectedImage <span class="token operator">=</span> unselectedImage <span class="token operator">?</span><span class="token operator">?</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>star<span class="token punctuation">,</span> color<span class="token punctuation">:</span> unselectedColor<span class="token punctuation">,</span> size<span class="token punctuation">:</span> size<span class="token punctuation">)</span><span class="token punctuation">,</span>
        selectedImage <span class="token operator">=</span> selectedImage <span class="token operator">?</span><span class="token operator">?</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>star<span class="token punctuation">,</span> color<span class="token punctuation">:</span> selectedColor<span class="token punctuation">,</span> size<span class="token punctuation">:</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>


  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Stack</span><span class="token punctuation">(</span>
      children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token class-name">UnSelectStar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name">SelectedStar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>


  <span class="token comment">// 宽度 = 评分 / 每个星星代表的分数 * 星星的大小</span>
  <span class="token comment">// var width = ping / (total / count) * size;</span>


  <span class="token class-name">Widget</span> <span class="token class-name">UnSelectStar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Row</span><span class="token punctuation">(</span>
      mainAxisSize<span class="token punctuation">:</span> <span class="token class-name">MainAxisSize</span><span class="token punctuation">.</span>min<span class="token punctuation">,</span>
      children<span class="token punctuation">:</span> <span class="token class-name">List</span><span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span> <span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span>
        unselectedImage
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">Widget</span> <span class="token class-name">SelectedStar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    double width <span class="token operator">=</span> rating <span class="token operator">/</span> <span class="token punctuation">(</span>maxRating <span class="token operator">/</span> count<span class="token punctuation">)</span> <span class="token operator">*</span> size<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">ClipRect</span><span class="token punctuation">(</span>
      clipper<span class="token punctuation">:</span> <span class="token class-name">MyClipRect</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> width<span class="token punctuation">)</span><span class="token punctuation">,</span>
      child<span class="token punctuation">:</span> <span class="token class-name">Row</span><span class="token punctuation">(</span>
        mainAxisSize<span class="token punctuation">:</span> <span class="token class-name">MainAxisSize</span><span class="token punctuation">.</span>min<span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token class-name">List</span><span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span>
            selectedImage
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MyClipRect</span> <span class="token keyword">extends</span> <span class="token class-name">CustomClipper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Rect</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>
  double width<span class="token punctuation">;</span>
  <span class="token class-name">MyClipRect</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>width<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token metadata function">@override</span>
  <span class="token function">getClip</span><span class="token punctuation">(</span><span class="token class-name">Size</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token class-name">Rect</span><span class="token punctuation">.</span><span class="token function">fromLTRB</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">,</span> size<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  bool <span class="token function">shouldReclip</span><span class="token punctuation">(</span><span class="token class-name">MyClipRect</span> oldClipper<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> width <span class="token operator">!=</span> oldClipper<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,101);function o(u,d){return s(),a("div",null,[c,e(" more "),l])}const v=n(p,[["render",o],["__file","flutter移动开发常用.html.vue"]]);export{v as default};
