import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as i,d as a}from"./app-CO007g7-.js";const l={},n=a('<h1 id="tcp三次握手和四次挥手" tabindex="-1"><a class="header-anchor" href="#tcp三次握手和四次挥手"><span>TCP三次握手和四次挥手</span></a></h1><h2 id="tcp连接-三次握手" tabindex="-1"><a class="header-anchor" href="#tcp连接-三次握手"><span>TCP连接“三次握手”</span></a></h2><img src="https://jitems.github.io/docs/zs10.png" alt="solar"><p>简单示意图：</p><ul><li>1、一次握手：客户端==&gt;服务端，发送带有 SYN 标志的数据包</li><li>2、二次握手：服务端==&gt;客户端，发送带有 SYN/ACK 标志的数据包</li><li>3、三次握手：客户端==&gt;服务端，发送带有带有 ACK 标志的数据包</li></ul><h2 id="为什么要三次握手" tabindex="-1"><a class="header-anchor" href="#为什么要三次握手"><span>为什么要三次握手？</span></a></h2><p>三次握手的目的是建立可靠的通信信道</p><h2 id="为什么tcp客户端最后还要发送一次确认呢" tabindex="-1"><a class="header-anchor" href="#为什么tcp客户端最后还要发送一次确认呢"><span>为什么TCP客户端最后还要发送一次确认呢？</span></a></h2><p>一句话，主要防止已经失效的连接请求报文突然又传送到了服务器，从而产生错误</p><h2 id="tcp-断开-四次挥手" tabindex="-1"><a class="header-anchor" href="#tcp-断开-四次挥手"><span>TCP 断开“四次挥手”</span></a></h2><img src="https://jitems.github.io/docs/zs11.png" alt="solar"><p>简单示意图：</p><ul><li>1、一次挥手：客户端==&gt;服务端，发送一个 FIN，用来关闭客户端到服务器的数据传送</li><li>2、二次挥手：服务端==&gt;客户端，收到这个 FIN，它发回一 个 ACK，确认序号为收到的序号加1 。和 SYN 一样，一个 FIN 将占用一个序号</li><li>3、三次挥手：服务端==&gt;客户端，关闭与客户端的连接，发送一个FIN给客户端</li><li>4、四次挥手：客户端==&gt;服务端，发回 ACK 报文确认，并将确认序号设置为收到序号加。</li></ul><h2 id="为什么要四次挥手" tabindex="-1"><a class="header-anchor" href="#为什么要四次挥手"><span>为什么要四次挥手？</span></a></h2><p>任何一方都可以在数据传送结束后发出连接释放的通知，待对方确认后进入半关闭状态。当另一方也没有数据再发送的时候，则发出连接释放通知，对方确认后就完全关闭了TCP连接。</p>',15),r=[n];function p(o,s){return i(),e("div",null,r)}const d=t(l,[["render",p],["__file","TCP三次握手和四次挥手.html.vue"]]),m=JSON.parse('{"path":"/%E7%9F%A5%E8%AF%86%E5%BA%93/JS/TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%92%8C%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B.html","title":"TCP三次握手和四次挥手","lang":"zh-CN","frontmatter":{"description":"TCP三次握手和四次挥手 TCP连接“三次握手” solar 简单示意图： 1、一次握手：客户端==>服务端，发送带有 SYN 标志的数据包 2、二次握手：服务端==>客户端，发送带有 SYN/ACK 标志的数据包 3、三次握手：客户端==>服务端，发送带有带有 ACK 标志的数据包 为什么要三次握手？ 三次握手的目的是建立可靠的通信信道 为什么TCP...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%9F%A5%E8%AF%86%E5%BA%93/JS/TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%92%8C%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B.html"}],["meta",{"property":"og:site_name","content":"暖阳的博客"}],["meta",{"property":"og:title","content":"TCP三次握手和四次挥手"}],["meta",{"property":"og:description","content":"TCP三次握手和四次挥手 TCP连接“三次握手” solar 简单示意图： 1、一次握手：客户端==>服务端，发送带有 SYN 标志的数据包 2、二次握手：服务端==>客户端，发送带有 SYN/ACK 标志的数据包 3、三次握手：客户端==>服务端，发送带有带有 ACK 标志的数据包 为什么要三次握手？ 三次握手的目的是建立可靠的通信信道 为什么TCP..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-18T06:56:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:modified_time","content":"2025-02-18T06:56:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TCP三次握手和四次挥手\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-18T06:56:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"TCP连接“三次握手”","slug":"tcp连接-三次握手","link":"#tcp连接-三次握手","children":[]},{"level":2,"title":"为什么要三次握手？","slug":"为什么要三次握手","link":"#为什么要三次握手","children":[]},{"level":2,"title":"为什么TCP客户端最后还要发送一次确认呢？","slug":"为什么tcp客户端最后还要发送一次确认呢","link":"#为什么tcp客户端最后还要发送一次确认呢","children":[]},{"level":2,"title":"TCP 断开“四次挥手”","slug":"tcp-断开-四次挥手","link":"#tcp-断开-四次挥手","children":[]},{"level":2,"title":"为什么要四次挥手？","slug":"为什么要四次挥手","link":"#为什么要四次挥手","children":[]}],"git":{"createdTime":1720591787000,"updatedTime":1739861786000,"contributors":[{"name":"test","email":"email","commits":2},{"name":"jitems","email":"3119125794@qq.com","commits":1}]},"readingTime":{"minutes":1.39,"words":417},"filePathRelative":"知识库/JS/TCP三次握手和四次挥手.md","localizedDate":"2024年7月10日","excerpt":"\\n<h2>TCP连接“三次握手”</h2>\\n<img src=\\"https://jitems.github.io/docs/zs10.png\\" alt=\\"solar\\">\\n<p>简单示意图：</p>\\n<ul>\\n<li>1、一次握手：客户端==&gt;服务端，发送带有 SYN 标志的数据包</li>\\n<li>2、二次握手：服务端==&gt;客户端，发送带有 SYN/ACK 标志的数据包</li>\\n<li>3、三次握手：客户端==&gt;服务端，发送带有带有 ACK 标志的数据包</li>\\n</ul>\\n<h2>为什么要三次握手？</h2>\\n<p>三次握手的目的是建立可靠的通信信道</p>\\n<h2>为什么TCP客户端最后还要发送一次确认呢？</h2>","autoDesc":true}');export{d as comp,m as data};
