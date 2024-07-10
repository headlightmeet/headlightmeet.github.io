import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as a,a as s,d as n,o as l}from"./app-MFCVIeoV.js";const t={},r=s("p",null," ",-1),d=n(`<h1 id="热重载" tabindex="-1"><a class="header-anchor" href="#热重载"><span>热重载</span></a></h1><h2 id="如何进行热重载" tabindex="-1"><a class="header-anchor" href="#如何进行热重载"><span>如何进行热重载</span></a></h2><p>1、在支持 Flutter 编辑器 或终端窗口运行应用程序，物理机或虚拟器都可以。 Flutter 应用程序只有在 DEBUG 模式下才能被热重载。 2、修改项目中的一个 Dart 文件。大多数类型的代码更改可以热重载，然而一些 特别情况 需要热重启应用程序以生效。 3、如果你在支持 Flutter 的 IDE 或编辑器中工作，请选择 Save All (Command + S/Ctrl + S)，或单击工具栏上的 Hot Reload 按钮。 如果你正在使用命令行 flutter run 运行应用程序，请在终端窗口输入 r。</p><p>成功执行热重载后，你将在控制台中看到类似于以下内容的消息：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>Performing hot reload...</span></span>
<span class="line"><span>Reloaded 1 of 448 libraries in 978ms.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>应用程序将以你的更改进行更新，并保留应用程序当前的状态。你的应用程序将继续从之前运行热重载命令的位置开始执行。代码被更新并继续执行。</p><h2 id="热重载、热重启和完全重启之间有什么区别" tabindex="-1"><a class="header-anchor" href="#热重载、热重启和完全重启之间有什么区别"><span>热重载、热重启和完全重启之间有什么区别？</span></a></h2><p>1、热重载 会将代码更改转入 VM，重建 widget 树并保持应用的状态，整个过程不会重新运行 main() 或者 initState()。（在 IDEA 中的快捷键是 ⌘\\，在 VSCode 中是 ⌃F5） 2、热重启 会将代码更改转入 VM，重启 Flutter 应用，不保留应用状态。（在 IDEA 中的快捷键是 ⇧⌘\\，在 VSCode 中是 ⇧⌘F5） 3、完全重启 将会完全重新运行应用。该进程较为耗时，因为它会重新编译原生部分代码。在 Web 平台上，它同时会重启 Dart 开发编译器。完全重启并没有既定的快捷键，你需要手动停止后重新运行。</p><p><strong>Flutter web 目前仅支持热重启，不支持热重载。</strong><img src="https://jitems.gitee.io/myblog/blog/bk551.png" alt="solar"> Android Studio 中的运行、运行调试、热重载和热重启的控件位置</p><p>只有修改后的 Dart 代码再次运行时，代码更改才会产生可见效果。具体来说，热重载会导致所有现有的 widgets 重新构建。只有与 widgets 重新构建相关的代码才会自动重新执行。 main() and initState() 方法则不会再次运行。</p><h2 id="热重启失效类型" tabindex="-1"><a class="header-anchor" href="#热重启失效类型"><span>热重启失效类型</span></a></h2><h3 id="热重载对-cupertinotabview-的-builder-不起作用" tabindex="-1"><a class="header-anchor" href="#热重载对-cupertinotabview-的-builder-不起作用"><span>热重载对 CupertinoTabView 的 builder 不起作用</span></a></h3><h3 id="枚举类型" tabindex="-1"><a class="header-anchor" href="#枚举类型"><span>枚举类型</span></a></h3><p>热重载会在应用被强制停止之后断开连接。比如一直在后台运行的应用（会被系统强制停止）。 <strong>更改前:</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>enum Color {</span></span>
<span class="line"><span>  red,</span></span>
<span class="line"><span>  green,</span></span>
<span class="line"><span>  blue,</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>更改后:</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>class Color {</span></span>
<span class="line"><span>  Color(this.i, this.j);</span></span>
<span class="line"><span>  final int i;</span></span>
<span class="line"><span>  final int j;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译错误" tabindex="-1"><a class="header-anchor" href="#编译错误"><span>编译错误</span></a></h3><p>当代码更改导致编译错误时，热重载会生成类似于以下内容的错误消息：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>Hot reload was rejected:</span></span>
<span class="line"><span>&#39;/path/to/project/lib/main.dart&#39;: warning: line 16 pos 38: unbalanced &#39;{&#39; opens here</span></span>
<span class="line"><span>  Widget build(BuildContext context) {</span></span>
<span class="line"><span>                                     ^</span></span>
<span class="line"><span>&#39;/path/to/project/lib/main.dart&#39;: error: line 33 pos 5: unbalanced &#39;)&#39;</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>    ^</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种情况下，只需更正上述代码的错误，即可以继续使用热重载。</p><h3 id="字体修改" tabindex="-1"><a class="header-anchor" href="#字体修改"><span>字体修改</span></a></h3><p>热重载支持资源的变更的大部分场景。然而如果你改变了字体，你需要进行热重启。</p><h3 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型"><span>泛型</span></a></h3><p>在泛型发生改变时，热重载不会生效。下面的例子将不会有效果： <strong>更改前：</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>content_copy</span></span>
<span class="line"><span>class A&lt;T&gt; {</span></span>
<span class="line"><span>  T? i;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>更改后：</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>content_copy</span></span>
<span class="line"><span>class A&lt;T, V&gt; {</span></span>
<span class="line"><span>  T? i;</span></span>
<span class="line"><span>  V? v;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原生代码" tabindex="-1"><a class="header-anchor" href="#原生代码"><span>原生代码</span></a></h3><p>如果你更改了原生代码（例如 Kotlin、Java、Swift 或 Objective-C），你必须要进行完全重启（停止后重新运行应用）才能让更改生效。</p><h3 id="新的代码与旧的状态结合" tabindex="-1"><a class="header-anchor" href="#新的代码与旧的状态结合"><span>新的代码与旧的状态结合</span></a></h3><p>Flutter 有状态的热重载将保持你的应用的状态。这项特性让你能够在不丢失状态的情况下，预览代码作出的改动。例如，如果你的应用需要用户登录，你可以调整路由相关的内容重载几次，而不需要重新进入登录流程。过程中状态是保持的，一般与预期相符。</p><p>如果代码改动会影响你的应用的状态（或应用的依赖），则应用里正在使用的数据可能与从一开始执行的数据不完全一致。热重载和热重启的结果可能不一致。</p><h2 id="android-studio-intellij-中自动格式化代码" tabindex="-1"><a class="header-anchor" href="#android-studio-intellij-中自动格式化代码"><span>Android Studio / IntelliJ 中自动格式化代码</span></a></h2><p>在 Windows 和 Linux 系统里使用 Ctrl+Alt+L，在 Mac 系统里使用 Cmd+Alt+L</p><h2 id="末尾处添加逗号" tabindex="-1"><a class="header-anchor" href="#末尾处添加逗号"><span>末尾处添加逗号</span></a></h2><p>Flutter 代码经常会构建一定深度的树形数据结构，如在 build 方法中。为了有更好的自动格式化效果，我们推荐在末尾处添加逗号，尽管也可以不这样做。规则也比较简单：总是在函数、普通方法、构造方法参数列表的末尾处添加逗号。这样做会使格式化工具自动插入一些换行符，使代码更具有 Flutter 风格。</p><p>自动格式化的时候，末尾处 加入 逗号的例子： <img src="https://jitems.gitee.io/myblog/blog/bk539.png" alt="solar"> 同样的代码在进行自动格式化的时候，末尾处没有逗号的例子： <img src="https://jitems.gitee.io/myblog/blog/bk540.png" alt="solar"></p>`,38);function p(c,h){return l(),i("div",null,[r,a(" more "),d])}const b=e(t,[["render",p],["__file","热重载.html.vue"]]),m=JSON.parse('{"path":"/flutter%E6%95%99%E7%A8%8B/%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/%E7%83%AD%E9%87%8D%E8%BD%BD.html","title":"热重载","lang":"zh-CN","frontmatter":{"title":"热重载","category":["前端"],"tag":["flutter"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/flutter%E6%95%99%E7%A8%8B/%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/%E7%83%AD%E9%87%8D%E8%BD%BD.html"}],["meta",{"property":"og:site_name","content":"遐想的猫"}],["meta",{"property":"og:title","content":"热重载"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-10T06:11:54.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"flutter"}],["meta",{"property":"article:modified_time","content":"2024-04-10T06:11:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"热重载\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-10T06:11:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"如何进行热重载","slug":"如何进行热重载","link":"#如何进行热重载","children":[]},{"level":2,"title":"热重载、热重启和完全重启之间有什么区别？","slug":"热重载、热重启和完全重启之间有什么区别","link":"#热重载、热重启和完全重启之间有什么区别","children":[]},{"level":2,"title":"热重启失效类型","slug":"热重启失效类型","link":"#热重启失效类型","children":[{"level":3,"title":"热重载对 CupertinoTabView 的 builder 不起作用","slug":"热重载对-cupertinotabview-的-builder-不起作用","link":"#热重载对-cupertinotabview-的-builder-不起作用","children":[]},{"level":3,"title":"枚举类型","slug":"枚举类型","link":"#枚举类型","children":[]},{"level":3,"title":"编译错误","slug":"编译错误","link":"#编译错误","children":[]},{"level":3,"title":"字体修改","slug":"字体修改","link":"#字体修改","children":[]},{"level":3,"title":"泛型","slug":"泛型","link":"#泛型","children":[]},{"level":3,"title":"原生代码","slug":"原生代码","link":"#原生代码","children":[]},{"level":3,"title":"新的代码与旧的状态结合","slug":"新的代码与旧的状态结合","link":"#新的代码与旧的状态结合","children":[]}]},{"level":2,"title":"Android Studio / IntelliJ 中自动格式化代码","slug":"android-studio-intellij-中自动格式化代码","link":"#android-studio-intellij-中自动格式化代码","children":[]},{"level":2,"title":"末尾处添加逗号","slug":"末尾处添加逗号","link":"#末尾处添加逗号","children":[]}],"git":{"createdTime":1698994754000,"updatedTime":1712729514000,"contributors":[{"name":"LAPTOP-5H5RR9E6\\\\jinwa","email":"ljw1314","commits":3},{"name":"jinwang.liu","email":"jinwang.liu@wstair.com","commits":1}]},"readingTime":{"minutes":4.29,"words":1287},"filePathRelative":"flutter教程/环境搭建/热重载.md","localizedDate":"2023年11月3日","excerpt":"<p>&nbsp;</p>\\n"}');export{b as comp,m as data};
