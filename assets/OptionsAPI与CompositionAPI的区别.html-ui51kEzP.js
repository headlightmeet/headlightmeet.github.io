import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o,d as e}from"./app-MFCVIeoV.js";const n={},p=e('<h1 id="optionsapi-与-compositionapi-的区别" tabindex="-1"><a class="header-anchor" href="#optionsapi-与-compositionapi-的区别"><span>OptionsAPI 与 CompositionAPI 的区别</span></a></h1><h2 id="optionsapi" tabindex="-1"><a class="header-anchor" href="#optionsapi"><span>OptionsAPI：</span></a></h2><ul><li>选项式API，通过定义data、computed、watch、method等属性与方法，共同处理页面逻辑；</li><li>缺点： <ul><li>当组件变得复杂的时候，导致对应属性的列表也会增长，可能会导致组件难以阅读和后期维护成本变高；</li></ul></li></ul><h2 id="compositionapi" tabindex="-1"><a class="header-anchor" href="#compositionapi"><span>CompositionAPI：</span></a></h2><ul><li>组合式API，组件根据逻辑功能来组织，一个功能所定义的所有API会放在一起（高内聚，低耦合）；</li><li>优点： <ul><li>内部的功能容易碎片化，像某一个功能相关的数据放在一块，容易阅读和维护（不用翻来翻去找）；</li><li>将某个逻辑关注点相关的代码全都放在一个函数里，这样，当需要修改一个功能时，就不再需要在文件中跳来跳去；</li><li>逻辑复用： <ul><li>在Vue2中，当混入多个mixin会存在两个非常明显的问题：命名冲突，数据来源不清晰；</li><li>而组合式API可以通过编写多个函数就很好的解决了；</li></ul></li></ul></li></ul>',5),l=[p];function a(s,m){return o(),t("div",null,l)}const A=i(n,[["render",a],["__file","OptionsAPI与CompositionAPI的区别.html.vue"]]),h=JSON.parse('{"path":"/%E7%9F%A5%E8%AF%86%E5%BA%93/vue3/OptionsAPI%E4%B8%8ECompositionAPI%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"OptionsAPI 与 CompositionAPI 的区别","lang":"zh-CN","frontmatter":{"description":"OptionsAPI 与 CompositionAPI 的区别 OptionsAPI： 选项式API，通过定义data、computed、watch、method等属性与方法，共同处理页面逻辑； 缺点： 当组件变得复杂的时候，导致对应属性的列表也会增长，可能会导致组件难以阅读和后期维护成本变高； CompositionAPI： 组合式API，组件根据逻...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%9F%A5%E8%AF%86%E5%BA%93/vue3/OptionsAPI%E4%B8%8ECompositionAPI%E7%9A%84%E5%8C%BA%E5%88%AB.html"}],["meta",{"property":"og:site_name","content":"遐想的猫"}],["meta",{"property":"og:title","content":"OptionsAPI 与 CompositionAPI 的区别"}],["meta",{"property":"og:description","content":"OptionsAPI 与 CompositionAPI 的区别 OptionsAPI： 选项式API，通过定义data、computed、watch、method等属性与方法，共同处理页面逻辑； 缺点： 当组件变得复杂的时候，导致对应属性的列表也会增长，可能会导致组件难以阅读和后期维护成本变高； CompositionAPI： 组合式API，组件根据逻..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-10T03:35:50.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:modified_time","content":"2024-07-10T03:35:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"OptionsAPI 与 CompositionAPI 的区别\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-10T03:35:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"OptionsAPI：","slug":"optionsapi","link":"#optionsapi","children":[]},{"level":2,"title":"CompositionAPI：","slug":"compositionapi","link":"#compositionapi","children":[]}],"git":{"createdTime":1720582550000,"updatedTime":1720582550000,"contributors":[{"name":"test","email":"email","commits":1}]},"readingTime":{"minutes":0.87,"words":262},"filePathRelative":"知识库/vue3/OptionsAPI与CompositionAPI的区别.md","localizedDate":"2024年7月10日","excerpt":"\\n<h2>OptionsAPI：</h2>\\n<ul>\\n<li>选项式API，通过定义data、computed、watch、method等属性与方法，共同处理页面逻辑；</li>\\n<li>缺点：\\n<ul>\\n<li>当组件变得复杂的时候，导致对应属性的列表也会增长，可能会导致组件难以阅读和后期维护成本变高；</li>\\n</ul>\\n</li>\\n</ul>\\n<h2>CompositionAPI：</h2>\\n<ul>\\n<li>组合式API，组件根据逻辑功能来组织，一个功能所定义的所有API会放在一起（高内聚，低耦合）；</li>\\n<li>优点：\\n<ul>\\n<li>内部的功能容易碎片化，像某一个功能相关的数据放在一块，容易阅读和维护（不用翻来翻去找）；</li>\\n<li>将某个逻辑关注点相关的代码全都放在一个函数里，这样，当需要修改一个功能时，就不再需要在文件中跳来跳去；</li>\\n<li>逻辑复用：\\n<ul>\\n<li>在Vue2中，当混入多个mixin会存在两个非常明显的问题：命名冲突，数据来源不清晰；</li>\\n<li>而组合式API可以通过编写多个函数就很好的解决了；</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{A as comp,h as data};
