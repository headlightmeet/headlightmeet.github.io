import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t,a as e,e as p}from"./app-PxqKmrwv.js";const i={},c=e("p",null," ",-1),l=p(`<h1 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h1><p>Flutter 中有两个主要的 Widget：<strong>StatelessWidget（无状态）</strong> 和 <strong>StatefulWidget（有状态）</strong></p><h3 id="statelesswidget" tabindex="-1"><a class="header-anchor" href="#statelesswidget" aria-hidden="true">#</a> StatelessWidget</h3><p>无状态组件是不可变的，这意味着它们的属性不能变化，所有的值都是最终的。可以理解为将外部传入的数据转化为界面展示的内容，只会渲染一次。 对于无状态组件生命周期只有 build 这个过程。无状态组件的构建方法通常只在三种情况下会被调用：小组件第一次被插入树中，小组件的父组件改变其配置，以及它所依赖的 InheritedWidget 发生变化时。</p><h3 id="statefulwidget" tabindex="-1"><a class="header-anchor" href="#statefulwidget" aria-hidden="true">#</a> StatefulWidget</h3><p>有状态组件持有的状态可能在 Widget 生命周期中发生变化，是定义交互逻辑和业务逻辑。可以理解为具有动态可交互的内容界面，会根据数据的变化进行多次渲染。实现一个 StatefulWidget 至少需要两个类：</p><ul><li>一个是 StatefulWidget 类。</li><li>另一个是 Sate 类。StatefulWidget 类本身是不可变的，但是 State 类在 Widget 生命周期中始终存在。StatefulWidget 将其可变的状态存储在由 createState 方法创建的 State 对象中，或者存储在该 State 订阅的对象中。</li></ul><h4 id="statefulwidget-生命周期" tabindex="-1"><a class="header-anchor" href="#statefulwidget-生命周期" aria-hidden="true">#</a> StatefulWidget 生命周期</h4><p><strong>createState()</strong></p><p>Framework 调用会通过调用 <code>StatefulWidget.createState()</code> 来创建一个 State。</p><p><strong>initState()</strong></p><p>新创建的 State 会和一个 <strong>BuildContext</strong> 产生关联，此时认为 State 已经被安装好了，<code>initState()</code> 函数将会被调用。</p><p>通常，我们可以重写这个函数，进行初始化操作。</p><p><strong>didChangeDependencies()</strong></p><p>在 <code>initState()</code> 调用结束后，这个函数会被调用。</p><p>事实上，当 State 对象的依赖关系发生变化时，这个函数总会被 Framework 调用。</p><p><strong>build()</strong></p><p>经过以上步骤，系统认为一个 State 已经准备好了，就会调用 <code>build()</code> 来构建视图。</p><p>我们需要在这个函数中，返回一个 Widget。</p><p><strong>deactivate()</strong></p><p>当 State 被暂时从视图树中移除时，会调用这个函数。</p><p>页面切换时，也会调用它，因为此时 State 在视图树中的位置发生了变化，需要先暂时移除后添加。</p><p>⚠️注意，重写的时候必须要调用 <code>super.deactivate()</code>。</p><p><strong>dispose()</strong></p><p>当 State 被永久的从视图树中移除，Framework 会调用该函数。</p><p>在销毁前触发，我们可以在这里进行最终的资源释放。</p><p>在调用这个函数之前，总会先调用 <code>deactivate()</code>。</p><p>⚠️注意，重写的时候必须要调用 <code>super.dispose()</code>。</p><p><strong>didUpdateWidget()</strong></p><p>当 widget 的配置发生变化时，会调用这个函数。</p><p>比如，<strong>Hot-reload</strong> 的时候就会调用这个函数。</p><p>这个函数调用后，会调用 <code>build()</code>。</p><p><strong>setState()</strong></p><p>当我需要更新 State 的视图时，需要手动调用这个函数，它会触发 <code>build()</code> 。</p><h4 id="大致分为四个阶段" tabindex="-1"><a class="header-anchor" href="#大致分为四个阶段" aria-hidden="true">#</a> 大致分为四个阶段</h4><ol><li>初始化阶段，包括两个生命周期函数 createState 和 initState；</li><li>组件创建阶段，包括 didChangeDependencies 和 build；</li><li>触发组件多次 build ，这个阶段有可能是因为 didChangeDependencies、 setState 或者 didUpdateWidget 而引发的组件重新 build ，在组件运行过程中会多次触发，这也是优化过程中需要着重注意的点；</li><li>最后是组件销毁阶段，deactivate 和 dispose。</li></ol><h4 id="不是生命周期但是却非常重要的几个概念" tabindex="-1"><a class="header-anchor" href="#不是生命周期但是却非常重要的几个概念" aria-hidden="true">#</a> 不是生命周期但是却非常重要的几个概念</h4><p>下面这些并不是生命周期的一部分，但是在生命周期中起到了很重要的作用。</p><ul><li><strong>mounted</strong>：是 State 中的一个重要属性，相当于一个标识，用来表示当前组件是否在树中。在 createState 后 initState 前，mounted 会被置为 true，表示当前组件已经在树中。调用 dispose 时，mounted 被置为 false，表示当前组件不在树中。</li><li><strong>dirty</strong>：表示当前组件为脏状态，下一帧时将会执行 build 函数，调用 setState 方法或者执行 didUpdateWidget 方法后，组件的状态为 dirty。</li><li><strong>clean</strong>：与 dirty 相对应，clean 表示组件当前的状态为干净状态，clean 状态下组件不会执行 build 函数。</li></ul><img src="https://jitems.gitee.io/myblog/blog/bk553.png" alt="solar"><p>上图为 flutter 生命周期流程图</p><h4 id="大致分为四个阶段-1" tabindex="-1"><a class="header-anchor" href="#大致分为四个阶段-1" aria-hidden="true">#</a> 大致分为四个阶段</h4><ol><li>初始化阶段，包括两个生命周期函数 createState 和 initState；</li><li>组件创建阶段，包括 didChangeDependencies 和 build；</li><li>触发组件多次 build ，这个阶段有可能是因为 didChangeDependencies、 setState 或者 didUpdateWidget 而引发的组件重新 build ，在组件运行过程中会多次触发，这也是优化过程中需要着重注意的点；</li><li>最后是组件销毁阶段，deactivate 和 dispose。</li></ol><h4 id="组件首次加载执行过程" tabindex="-1"><a class="header-anchor" href="#组件首次加载执行过程" aria-hidden="true">#</a> 组件首次加载执行过程</h4><p>首先我们来实现下面这段代码（类似于 flutter 自己的计数器项目），康康组件首次创建是否按照上述流程图中的顺序来执行的。</p><ol><li>创建一个 flutter 项目；</li><li>创建 count_widget.dart 中添加以下代码；</li></ol><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">CountWidget</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token class-name">CountWidget</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  _CountWidgetState <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;count createState&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">_CountWidgetState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _CountWidgetState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CountWidget</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  int _count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">_incrementCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;count setState&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      _count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;count initState&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">didChangeDependencies</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;count didChangeDependencies&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">didChangeDependencies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">didUpdateWidget</span><span class="token punctuation">(</span><span class="token class-name">CountWidget</span> oldWidget<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;count didUpdateWidget&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">didUpdateWidget</span><span class="token punctuation">(</span>oldWidget<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">deactivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;count deactivate&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">deactivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;count dispose&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">reassemble</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;count reassemble&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">reassemble</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;count build&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">Center</span><span class="token punctuation">(</span>
      child<span class="token punctuation">:</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
        mainAxisAlignment<span class="token punctuation">:</span> <span class="token class-name">MainAxisAlignment</span><span class="token punctuation">.</span>center<span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Widget</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span>
          <span class="token class-name">Text</span><span class="token punctuation">(</span>
            <span class="token string-literal"><span class="token string">&#39;</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">_count</span></span><span class="token string">&#39;</span></span><span class="token punctuation">,</span>
            style<span class="token punctuation">:</span> <span class="token class-name">Theme</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span>textTheme<span class="token punctuation">.</span>headline4<span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token class-name">Padding</span><span class="token punctuation">(</span>
            padding<span class="token punctuation">:</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">only</span><span class="token punctuation">(</span>top<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            child<span class="token punctuation">:</span> <span class="token class-name">IconButton</span><span class="token punctuation">(</span>
              icon<span class="token punctuation">:</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span>
                <span class="token class-name">Icons</span><span class="token punctuation">.</span>add<span class="token punctuation">,</span>
                size<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
              onPressed<span class="token punctuation">:</span> _incrementCounter<span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码把 StatefulWidget 的一些生命周期都进行了重写，并且在执行中都打印了标识，方便看到函数的执行顺序。</p><ol><li>在 main.dart 中加载该组件。代码如下：</li></ol><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;./pages/count_widget.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">MaterialApp</span><span class="token punctuation">(</span>
      title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;Flutter Demo&#39;</span></span><span class="token punctuation">,</span>
      theme<span class="token punctuation">:</span> <span class="token class-name">ThemeData</span><span class="token punctuation">(</span>
        primarySwatch<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>blue<span class="token punctuation">,</span>
        visualDensity<span class="token punctuation">:</span> <span class="token class-name">VisualDensity</span><span class="token punctuation">.</span>adaptivePlatformDensity<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      home<span class="token punctuation">:</span> <span class="token class-name">MyHomePage</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;Flutter Demo Home Page&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MyHomePage</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token class-name">MyHomePage</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span> key<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">final</span> <span class="token class-name">String</span> title<span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  _MyHomePageState <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">_MyHomePageState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _MyHomePageState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MyHomePage</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
      appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
        title<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>widget<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      body<span class="token punctuation">:</span> <span class="token class-name">CountWidget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时 <strong>CountWidget</strong> 作为 <strong>MyHomePage</strong> 的子组件。我们打开模拟器，开始运行。在控制台可以看到如下日志，可以看出 StatefulWidget 在第一次被创建的时候是调用下面四个函数。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>flutter<span class="token punctuation">:</span> count createState
flutter<span class="token punctuation">:</span> count initState
flutter<span class="token punctuation">:</span> count didChangeDependencies
flutter<span class="token punctuation">:</span> count build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击屏幕上的 ➕ 按钮，<strong>_count</strong> 增加 1，模拟器上的数字由 0 变为 1，日志如下。也就是说在状态发生变化的时候，会调用 <code>setState</code> 和 <code>build</code> 两个函数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flutter: count setState
flutter: count build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>command + s 热重载后，日志如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flutter: count reassemble
flutter: count didUpdateWidget
flutter: count build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注释掉 main.dart 中的 CountWidget，command + s 热重载后，这时 CountWidget 消失在模拟器上，日志如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class _MyHomePageState extends State&lt;MyHomePage&gt; {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      // body: CountWidget(),
    );
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flutter: count reassemble
flutter: count deactivate
flutter: count dispose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>经过上述一系列操作之后，通过日志打印并结合生命周期流程图，我们可以很清晰的看出各生命周期函数的作用以及理解生命周期的几个阶段。 相信很多细心的同学已经发现了一个细节，那就是 <code>build</code> 方法在不同的操作中都被调用了，下面我们来介绍什么情况下会触发组件再次 build。</p><h4 id="触发组件再次-build" tabindex="-1"><a class="header-anchor" href="#触发组件再次-build" aria-hidden="true">#</a> 触发组件再次 build</h4><p>触发组件再次 build 的方式有三种，分别是 <code>setState</code>、<code>didChangeDependencies</code>、<code>didUpdateWidget</code>。</p><p>1.<code>setState</code> 很好理解，只要组件状态发生变化时，就会触发组件 build。在上述的操作过程中，点击 ➕ 按钮，_count 会加 1，结果如下图：</p><img src="https://jitems.gitee.io/myblog/blog/bk554.png" alt="solar"><p>2.<code>didChangeDependencies</code>，组件依赖的全局 state 发生了变化时，也会调用 build。例如系统语言等、主题色等。</p><p>3.<code>didUpdateWidget</code>，我们以下方代码为例。在 main.dart 中，同样的重写生命周期函数，并打印。在 CountWidget 外包一层 Column ，并创建同级的 RaisedButton 做为父 Widget 中的计数器。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">MyHomePage</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token class-name">MyHomePage</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span> key<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">final</span> <span class="token class-name">String</span> title<span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  _MyHomePageState <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;main createState&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">_MyHomePageState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _MyHomePageState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MyHomePage</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  int mainCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">void</span> <span class="token function">_changeMainCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;main setState&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      mainCount<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;main initState&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">didChangeDependencies</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;main didChangeDependencies&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">didChangeDependencies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">didUpdateWidget</span><span class="token punctuation">(</span><span class="token class-name">MyHomePage</span> oldWidget<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;main didUpdateWidget&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">didUpdateWidget</span><span class="token punctuation">(</span>oldWidget<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">deactivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;main deactivate&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">deactivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;main dispose&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">reassemble</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;main reassemble&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">reassemble</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;main build&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
      appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
        title<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>widget<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      body<span class="token punctuation">:</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
        children<span class="token punctuation">:</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Widget</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span>
          <span class="token class-name">RaisedButton</span><span class="token punctuation">(</span>
            onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">_changeMainCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;mainCount = </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">mainCount</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token class-name">CountWidget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新加载 app，可以看到打印日志如下：</p><img src="https://jitems.gitee.io/myblog/blog/bk555.png" alt="solar"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flutter: main createState
flutter: main initState
flutter: main didChangeDependencies
flutter: main build
flutter: count createState
flutter: count initState
flutter: count didChangeDependencies
flutter: count build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现：</p><ul><li>父组件也经历了 <code>createState</code>、 <code>initState</code>、 <code>didChangeDependencies</code>、 <code>build</code> 这四个过程。</li><li>并且父组件要在 <code>build</code> 之后才会创建子组件。</li></ul><p>点击 MyHomePage（父组件）的 mainCount 按钮 ，打印如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flutter: main setState
flutter: main build
flutter: count didUpdateWidget
flutter: count build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击 CountWidget 的 ➕ 按钮，打印如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flutter: count setState
flutter: count build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可以说明父组件的 State 变化会引起子组件的 didUpdateWidget 和 build，子组件自己的状态变化不会引起父组件的状态改变</strong>。</p><h4 id="组件销毁" tabindex="-1"><a class="header-anchor" href="#组件销毁" aria-hidden="true">#</a> 组件销毁</h4><p>我们重复上面的操作，为 CountWidget 添加一个子组件 CountSubWidget，并用 count sub 前缀打印日志。重新加载 app。</p><p>注释掉 CountWidget 中的 CountSubWidget，打印日志如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flutter: main reassemble
flutter: count reassemble
flutter: count sub reassemble
flutter: main didUpdateWidget
flutter: main build
flutter: count didUpdateWidget
flutter: count build
flutter: count sub deactivate
flutter: count sub dispose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>恢复到注释前，注释掉 MyHomePage 中的 CountWidget，打印如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flutter: main reassemble
flutter: count reassemble
flutter: count sub reassemble
flutter: main didUpdateWidget
flutter: main build
flutter: count deactivate
flutter: count sub deactivate
flutter: count sub dispose
flutter: count dispose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为是热重载，所以会调用 <code>reassemble</code>、 <code>didUpdateWidget</code>、 <code>build</code>，我们可以忽略带有这几个函数的打印日志。可以得出结论： <strong>父组件移除，会先移除节点，然后子组件移除节点，子组件被永久移除，最后是父组件被永久移除。</strong></p><h3 id="flutter-app-lifecycle" tabindex="-1"><a class="header-anchor" href="#flutter-app-lifecycle" aria-hidden="true">#</a> Flutter App Lifecycle</h3><p>上面我们介绍的生命周期主要是 StatefulWidget 组件的生命周期，下面我们来简单介绍一下和 app 平台相关的生命周期，比如退出到后台。</p><p>我们创建 app_lifecycle_state.dart 文件并创建 AppLifecycle，他是一个 StatefulWidget，但是他要继承 WidgetsBindingObserver。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">AppLifecycle</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token class-name">AppLifecycle</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  _AppLifecycleState <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;sub createState&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">_AppLifecycleState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _AppLifecycleState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">AppLifecycle</span><span class="token punctuation">&gt;</span></span>
    <span class="token keyword">with</span> <span class="token class-name">WidgetsBindingObserver</span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">WidgetsBinding</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;sub initState&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">didChangeAppLifecycleState</span><span class="token punctuation">(</span><span class="token class-name">AppLifecycleState</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO: implement didChangeAppLifecycleState</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">didChangeAppLifecycleState</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;didChangeAppLifecycleState&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>state <span class="token operator">==</span> <span class="token class-name">AppLifecycleState</span><span class="token punctuation">.</span>resumed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;resumed：&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>state <span class="token operator">==</span> <span class="token class-name">AppLifecycleState</span><span class="token punctuation">.</span>inactive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;inactive&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>state <span class="token operator">==</span> <span class="token class-name">AppLifecycleState</span><span class="token punctuation">.</span>paused<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;paused&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>state <span class="token operator">==</span> <span class="token class-name">AppLifecycleState</span><span class="token punctuation">.</span>detached<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;detached&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;sub build&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>
      child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;data&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>didChangeAppLifecycleState 方法是重点，AppLifecycleState 中的状态包括：<strong>resumed</strong>、<strong>inactive</strong>、<strong>paused</strong>、<strong>detached</strong> 四种。</p><p>didChangeAppLifecycleState 方法的依赖于系统的通知（notifications），正常情况下，App是可以接收到这些通知，但有个别情况下是无法接收到通知的，比如用户关机等。它的四种生命周期状态枚举源码中有详细的介绍和说明。</p><ul><li>resumed：该应用程序是可见的，并对用户的输入作出反应。也就是应用程序进入前台。</li><li>inactive：应用程序处于非活动状态，没有接收用户的输入。在 iOS 上，这种状态对应的是应用程序或 Flutter 主机视图在前台非活动状态下运行。当处于电话呼叫、响应 TouchID 请求、进入应用切换器或控制中心时，或者当 UIViewController 托管的 Flutter 应用程序正在过渡。在 Android 上，这相当于应用程序或 Flutter 主机视图在前台非活动状态下运行。当另一个活动被关注时，如分屏应用、电话呼叫、画中画应用、系统对话框或其他窗口，应用会过渡到这种状态。也就是应用进入后台。</li><li>pause：该应用程序目前对用户不可见，对用户的输入没有反应，并且在后台运行。当应用程序处于这种状态时，引擎将不会调用。也就是说应用进入非活动状态。</li><li>detached：应用程序仍然被托管在flutter引擎上，但与任何主机视图分离。处于此状态的时机：引擎首次加载到附加到一个平台 View 的过程中，或者由于执行 Navigator pop，view 被销毁。</li></ul><p>除了 app 生命周期的方法，Flutter 还有一些其他不属于生命周期，但是也会在一些特殊时机被观察到的方法，如 **didChangeAccessibilityFeatures（当前系统改变了一些访问性活动的回调） 、didHaveMemoryPressure（低内存回调）、didChangeLocales（用户本地设置变化时调用，如系统语言改变）、didChangeTextScaleFactor（文字系数变化）**等。</p>`,92);function o(u,d){return s(),a("div",null,[c,t(" more "),l])}const v=n(i,[["render",o],["__file","index.html.vue"]]);export{v as default};
