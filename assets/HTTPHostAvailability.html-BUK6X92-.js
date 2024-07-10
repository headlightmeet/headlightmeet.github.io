import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,b as o,a,d as r,o as n}from"./app-MFCVIeoV.js";const i={},l=a("p",null," ",-1),s=r('<h1 id="信号灯超时时间已到" tabindex="-1"><a class="header-anchor" href="#信号灯超时时间已到"><span>信号灯超时时间已到</span></a></h1><p><a href="https://links.jianshu.com/go?to=https%3A%2F%2Fso.csdn.net%2Fso%2Fsearch%3Fq%3Dflutter%26spm%3D1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">flutter</a> 环境变量配置好之后，运行flutter doctor出现问题如下：</p><img src="https://jitems.gitee.io/myblog/blog/bk552.png" alt="solar"><p>HTTP Host Availability X HTTP host https://maven.google.com/ is not reachable. Reason: An error occurred while checking the HTTP host: 信号灯超时时间已到</p><p><strong>解决办法</strong></p><p>1、找到flutter sdk的文件目录，打开flutter\\packages\\flutter_tools\\lib\\src\\http_host_validator.dart</p><p>2、将<a href="https://links.jianshu.com/go?to=https%3A%2F%2Fmaven.google.com%2F" target="_blank" rel="noopener noreferrer">https://maven.google.com/</a> 修改为<a href="https://links.jianshu.com/go?to=https%3A%2F%2Fdl.google.com%2Fdl%2Fandroid%2Fmaven2%2F" target="_blank" rel="noopener noreferrer">https://dl.google.com/dl/android/maven2/</a></p><p>3、关闭cmd命令窗口，重新打开cmd窗口</p><p>4、去到flutter\\bin目录，删除cache文件夹</p><p>5、在cmd命令窗口重新运行flutter doctor,问题解决。</p>',10);function p(c,m){return n(),e("div",null,[l,o(" more "),s])}const g=t(i,[["render",p],["__file","HTTPHostAvailability.html.vue"]]),u=JSON.parse('{"path":"/flutter%E6%95%99%E7%A8%8B/%E9%97%AE%E9%A2%98%E8%A7%A3%E7%AD%94/HTTPHostAvailability.html","title":"信号灯超时时间已到","lang":"zh-CN","frontmatter":{"title":"信号灯超时时间已到","category":["前端"],"tag":["flutter"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/flutter%E6%95%99%E7%A8%8B/%E9%97%AE%E9%A2%98%E8%A7%A3%E7%AD%94/HTTPHostAvailability.html"}],["meta",{"property":"og:site_name","content":"遐想的猫"}],["meta",{"property":"og:title","content":"信号灯超时时间已到"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-10T06:11:54.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"flutter"}],["meta",{"property":"article:modified_time","content":"2024-04-10T06:11:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"信号灯超时时间已到\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-10T06:11:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1698994754000,"updatedTime":1712729514000,"contributors":[{"name":"LAPTOP-5H5RR9E6\\\\jinwa","email":"ljw1314","commits":3},{"name":"jinwang.liu","email":"jinwang.liu@wstair.com","commits":1}]},"readingTime":{"minutes":0.63,"words":190},"filePathRelative":"flutter教程/问题解答/HTTPHostAvailability.md","localizedDate":"2023年11月3日","excerpt":"<p>&nbsp;</p>\\n"}');export{g as comp,u as data};