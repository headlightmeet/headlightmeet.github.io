import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,b as a,a as i,d as l,o as n}from"./app-Bi9sAhmd.js";const r={},s=i("p",null," ",-1),o=l('<h1 id="高效开发" tabindex="-1"><a class="header-anchor" href="#高效开发"><span>高效开发</span></a></h1><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h2><p>打开IDE后，在IDE上边栏有个Help入口，里面有一个Quick Start快速开始入口，点击进去就会进入到快速开始面板。在这个面板中会有一些快速入门的实验指导和一些常用的链接。快速开始相当于一个收藏夹，把最常用的一些学习资源呈现给了各位开发者，帮助开发者更好的学习HarmonyOS应用开发。 <img src="https://jitems.github.io/blog/bk658.png" alt="solar"></p><h2 id="编辑器的使用" tabindex="-1"><a class="header-anchor" href="#编辑器的使用"><span>编辑器的使用</span></a></h2><p>DevEco Studio支持使用多种语言进行应用/服务的开发，包括ArkTS、JS和C/C++。在编写应用/服务阶段，可以通过掌握代码编写的各种常用技巧，来提升编码效率。</p><h3 id="代码自动补齐" tabindex="-1"><a class="header-anchor" href="#代码自动补齐"><span>代码自动补齐</span></a></h3><p>提供代码的智能补齐能力，编辑器工具会分析上下文并理解项目内容，并根据输入的内容，提示可补齐的类、方法、字段和关键字的名称等。</p><p>自动补齐功能默认按照最近使用过的类、方法、字段和关键字等名称进行排序，如仅需要按最短路径提供补齐内容排序，可以在<strong>Settings&gt;Editor&gt;General&gt;Code Completion</strong> 中取消勾选&quot;Sort suggestions by recently used&quot;。</p><p><strong>若已勾选代码补齐按最近使用排序但未生效，请检查Code Completion页面，确保“Sort suggestions alphabetically”已取消勾选。</strong></p><h3 id="代码错误检查" tabindex="-1"><a class="header-anchor" href="#代码错误检查"><span>代码错误检查</span></a></h3><p>如果输入的语法不符合编码规范，或者出现语义语法错误，编辑器会实时的进行代码分析，并在代码中突出显示错误或警告，将鼠标放置在错误代码处，会提示详细的错误信息。</p><img src="https://jitems.github.io/blog/bk659.png" alt="solar"><h3 id="代码自动跳转" tabindex="-1"><a class="header-anchor" href="#代码自动跳转"><span>代码自动跳转</span></a></h3><p>在编辑器中，可以按住Ctrl键，鼠标单击代码中引用的类、方法、参数、变量等名称，自动跳转到定义处。若单击定义处的类、变量等名称，当仅有一处引用时，可直接跳转到引用位置；若有多处引用，在弹窗中可以选择想要查看的引用位置。</p><h3 id="跨语言跳转" tabindex="-1"><a class="header-anchor" href="#跨语言跳转"><span>跨语言跳转</span></a></h3><p>DevEco Studio支持在JS/ArkTS函数上跨语言跳转其对应的C/C++函数，从而提升混合语言开发时的开发效率。您可以在编辑器中右击，在弹出的菜单中选择Go To &gt; Implementation(s)实现跨语言跳转。 <img src="https://jitems.github.io/blog/bk660.png" alt="solar"></p><h3 id="代码折叠" tabindex="-1"><a class="header-anchor" href="#代码折叠"><span>代码折叠</span></a></h3><p>支持对代码块的快速折叠和展开，既可以单击编辑器左侧边栏的折叠和展开按钮对代码块进行折叠和展开操作，还可以对选中的代码块单机鼠标右键选择折叠方式，包括折叠、递归折叠、全部折叠等操作。</p><h3 id="代码快速注释" tabindex="-1"><a class="header-anchor" href="#代码快速注释"><span>代码快速注释</span></a></h3><p>支持对选择的代码块进行快速注释，使用快捷键Ctrl+/（macOS为Command+/）进行快速注释。对于已注释的代码块，再次使用快捷键Ctrl+/（macOS为Command+/）取消注释。</p><h3 id="代码结构树" tabindex="-1"><a class="header-anchor" href="#代码结构树"><span>代码结构树</span></a></h3><p>使用快捷键Alt + 7 / Ctrl + F12（macOS为Command+7）打开代码结构树，快速查看文件代码的结构树，包括全局变量和函数，类成员变量和方法等，并可以跳转到对应代码行。 <img src="https://jitems.github.io/blog/bk661.png" alt="solar"></p><h3 id="代码引用查找" tabindex="-1"><a class="header-anchor" href="#代码引用查找"><span>代码引用查找</span></a></h3><p>提供Find Usages代码引用查找功能，帮助开发者快速查看某个对象(变量、函数或者类等)被引用的地方，用于后续的代码重构，可以极大的提升开发者的开发效率。</p><p>使用方法：在要查找的对象上，单击鼠标右键 &gt; Find Usages或使用快捷键Alt +F7（macOS为Command + F7）。</p><p>数，类成员变量和方法等，并可以跳转到对应代码行。 <img src="https://jitems.github.io/blog/bk662.png" alt="solar"></p><h3 id="代码查找" tabindex="-1"><a class="header-anchor" href="#代码查找"><span>代码查找</span></a></h3><p>通过对符号、类或文件的即时导航来查找代码。检查调用或类型层次结构，轻松地搜索工程里的所有内容。通过连续按压两次Shift快捷键，打开代码查找界面，双击查找的结果可以快速打开所在文件的位置。 <img src="https://jitems.github.io/blog/bk663.png" alt="solar"></p><h2 id="快速查阅api接口及组件参考文档" tabindex="-1"><a class="header-anchor" href="#快速查阅api接口及组件参考文档"><span>快速查阅API接口及组件参考文档</span></a></h2><p>在编辑器中调用ArkTS API接口或ArkTS/JS组件时，支持在编辑器中快速、精准调取出对应的参考文档。</p><p>可在编辑器中，选中需要查阅的接口或组件，单击鼠标右键 &gt; Show in API Reference，便可以快速查阅。</p><h2 id="代码检查和修复" tabindex="-1"><a class="header-anchor" href="#代码检查和修复"><span>代码检查和修复</span></a></h2><p>代码编辑完成后，我们再来学习一下，IDE中是如何进行代码快速修复和代码质量检查的。</p><h3 id="代码快速修复" tabindex="-1"><a class="header-anchor" href="#代码快速修复"><span>代码快速修复</span></a></h3><p>DevEco Studio支持Quick Fix能力，辅助开发者快速修复代码问题。查看告警信息：使用双击Shift快捷键打开文件查询框，输入problems打开问题工具面板；单击对应告警信息，可以查看告警的具体位置及原因。</p><p>快速修复：将光标放在错误告警的位置，可在弹出的悬浮窗中查看问题描述和对应修复方式；单击more actions可查看更多修复方法。</p><img src="https://jitems.github.io/blog/bk664.gif" alt="solar"><h3 id="代码质量检查" tabindex="-1"><a class="header-anchor" href="#代码质量检查"><span>代码质量检查</span></a></h3><p>为了保证大家的代码上库质量，编辑器中嵌入了代码质量检查的相关工具，目前已经支持了HarmonyOS规范代码检查以及JS/TS核心的通用规范代码检查能力。可以单击鼠标右键-&gt;Code Linter，来完成代码质量检查。例如这个案例中，提示checkNullInput没有添加函数的返回值，代码质量检查提示如下：</p><img src="https://jitems.github.io/blog/bk665.png" alt="solar"><p>给函数添加了一个boolean类型的返回值后，代码告警消失。</p><img src="https://jitems.github.io/blog/bk666.png" alt="solar">',42);function p(h,c){return n(),t("div",null,[s,a(" more "),o])}const g=e(r,[["render",p],["__file","阿-高效开发.html.vue"]]),u=JSON.parse('{"path":"/HarmonyOS/%E6%96%B9%E8%88%9F%E5%BC%80%E5%8F%91%E6%95%99%E7%A8%8B/%E9%98%BF-%E9%AB%98%E6%95%88%E5%BC%80%E5%8F%91.html","title":"高效开发","lang":"zh-CN","frontmatter":{"title":"高效开发","order":1,"category":["前端"],"tag":["HarmonyOS"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/HarmonyOS/%E6%96%B9%E8%88%9F%E5%BC%80%E5%8F%91%E6%95%99%E7%A8%8B/%E9%98%BF-%E9%AB%98%E6%95%88%E5%BC%80%E5%8F%91.html"}],["meta",{"property":"og:site_name","content":"遐想的猫"}],["meta",{"property":"og:title","content":"高效开发"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-10T06:34:54.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"HarmonyOS"}],["meta",{"property":"article:modified_time","content":"2024-07-10T06:34:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"高效开发\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-10T06:34:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"快速开始","slug":"快速开始","link":"#快速开始","children":[]},{"level":2,"title":"编辑器的使用","slug":"编辑器的使用","link":"#编辑器的使用","children":[{"level":3,"title":"代码自动补齐","slug":"代码自动补齐","link":"#代码自动补齐","children":[]},{"level":3,"title":"代码错误检查","slug":"代码错误检查","link":"#代码错误检查","children":[]},{"level":3,"title":"代码自动跳转","slug":"代码自动跳转","link":"#代码自动跳转","children":[]},{"level":3,"title":"跨语言跳转","slug":"跨语言跳转","link":"#跨语言跳转","children":[]},{"level":3,"title":"代码折叠","slug":"代码折叠","link":"#代码折叠","children":[]},{"level":3,"title":"代码快速注释","slug":"代码快速注释","link":"#代码快速注释","children":[]},{"level":3,"title":"代码结构树","slug":"代码结构树","link":"#代码结构树","children":[]},{"level":3,"title":"代码引用查找","slug":"代码引用查找","link":"#代码引用查找","children":[]},{"level":3,"title":"代码查找","slug":"代码查找","link":"#代码查找","children":[]}]},{"level":2,"title":"快速查阅API接口及组件参考文档","slug":"快速查阅api接口及组件参考文档","link":"#快速查阅api接口及组件参考文档","children":[]},{"level":2,"title":"代码检查和修复","slug":"代码检查和修复","link":"#代码检查和修复","children":[{"level":3,"title":"代码快速修复","slug":"代码快速修复","link":"#代码快速修复","children":[]},{"level":3,"title":"代码质量检查","slug":"代码质量检查","link":"#代码质量检查","children":[]}]}],"git":{"createdTime":1720591787000,"updatedTime":1720593294000,"contributors":[{"name":"test","email":"email","commits":2}]},"readingTime":{"minutes":5.03,"words":1508},"filePathRelative":"HarmonyOS/方舟开发教程/阿-高效开发.md","localizedDate":"2024年7月10日","excerpt":"<p>&nbsp;</p>\\n"}');export{g as comp,u as data};
