import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as a,a as e,d as i,o as l}from"./app-DeYunnnJ.js";const p={},d=e("p",null," ",-1),c=i(`<h1 id="pin-code-fields密码框使用" tabindex="-1"><a class="header-anchor" href="#pin-code-fields密码框使用"><span>pin_code_fields密码框使用</span></a></h1><p>安装插件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>flutter pub add pin_code_fields</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>import &#39;dart:math&#39; as math;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &#39;package:flutter/cupertino.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter/material.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:async/async.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:pin_code_fields/pin_code_fields.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:url_strategy/url_strategy.dart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void main() {</span></span>
<span class="line"><span>  setPathUrlStrategy();</span></span>
<span class="line"><span>  runApp(MyApp());</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class MyApp extends StatelessWidget {</span></span>
<span class="line"><span>  const MyApp({Key? key}) : super(key: key);</span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  Widget build(BuildContext context) {</span></span>
<span class="line"><span>    return MaterialApp(</span></span>
<span class="line"><span>      // Hide the debug banner</span></span>
<span class="line"><span>      debugShowCheckedModeBanner: false,</span></span>
<span class="line"><span>      title: &#39;坚果&#39;,</span></span>
<span class="line"><span>      theme: ThemeData(</span></span>
<span class="line"><span>        primarySwatch: Colors.indigo,</span></span>
<span class="line"><span>      ),</span></span>
<span class="line"><span>      home: const HomeScreen(),</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class HomeScreen extends StatefulWidget {</span></span>
<span class="line"><span>  const HomeScreen({Key? key}) : super(key: key);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  State&lt;HomeScreen&gt; createState() =&gt; _HomeScreenState();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class _HomeScreenState extends State&lt;HomeScreen&gt; {</span></span>
<span class="line"><span>  String _imageUrl =&#39;https://luckly007.oss-cn-beijing.aliyuncs.com/image/image-20211124085239175.png&#39;;</span></span>
<span class="line"><span>  double _fontSize = 20;</span></span>
<span class="line"><span>  String _title = &quot;坚果公众号&quot;;</span></span>
<span class="line"><span>  // 4 text editing controllers that associate with the 4 input fields</span></span>
<span class="line"><span>  TextEditingController textEditingController = TextEditingController();</span></span>
<span class="line"><span>  String currentText = &quot;&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  Widget build(BuildContext context) {</span></span>
<span class="line"><span>    return Scaffold(</span></span>
<span class="line"><span>      appBar: AppBar(</span></span>
<span class="line"><span>        title: Text(_title),</span></span>
<span class="line"><span>      ),</span></span>
<span class="line"><span>      body: Padding(</span></span>
<span class="line"><span>        padding: const EdgeInsets.all(30),</span></span>
<span class="line"><span>        child: Center(</span></span>
<span class="line"><span>          child: PinCodeTextField(</span></span>
<span class="line"><span>              length: 4,</span></span>
<span class="line"><span>              obscureText: false,</span></span>
<span class="line"><span>              animationType: AnimationType.fade,</span></span>
<span class="line"><span>              pinTheme: PinTheme(</span></span>
<span class="line"><span>                shape: PinCodeFieldShape.box,</span></span>
<span class="line"><span>                borderRadius: BorderRadius.circular(5),</span></span>
<span class="line"><span>                fieldHeight: 70.h,</span></span>
<span class="line"><span>                fieldWidth: 60.w,</span></span>
<span class="line"><span>                //输入后填充</span></span>
<span class="line"><span>                activeFillColor: Color(0xFFEAECF5),</span></span>
<span class="line"><span>                //输入前边框</span></span>
<span class="line"><span>                selectedColor: Color(0x42566789),</span></span>
<span class="line"><span>                //选中填充</span></span>
<span class="line"><span>                selectedFillColor: Color(0xFFEAECF5),</span></span>
<span class="line"><span>                //输入后的边框</span></span>
<span class="line"><span>                activeColor: Color(0x42566789),</span></span>
<span class="line"><span>                //未选边框</span></span>
<span class="line"><span>                inactiveColor: Color(0x42566789),</span></span>
<span class="line"><span>                //未选填充</span></span>
<span class="line"><span>                inactiveFillColor: Color(0xFFEAECF5),</span></span>
<span class="line"><span>              ),</span></span>
<span class="line"><span>            //键盘类型</span></span>
<span class="line"><span>            keyboardType: TextInputType.number,</span></span>
<span class="line"><span>            animationDuration:</span></span>
<span class="line"><span>                const Duration(milliseconds: 300),</span></span>
<span class="line"><span>            // backgroundColor: Colors.blue.shade50,</span></span>
<span class="line"><span>            enableActiveFill: true,</span></span>
<span class="line"><span>            controller: textEditingController,</span></span>
<span class="line"><span>            onCompleted: (v) {</span></span>
<span class="line"><span>              debugPrint(&quot;Completed&quot;);</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            onChanged: (value) {</span></span>
<span class="line"><span>              debugPrint(value);</span></span>
<span class="line"><span>              setState(() {</span></span>
<span class="line"><span>                currentText = value;</span></span>
<span class="line"><span>              });</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            beforeTextPaste: (text) {</span></span>
<span class="line"><span>              return true;</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            appContext: context,</span></span>
<span class="line"><span>          ),</span></span>
<span class="line"><span>        ),</span></span>
<span class="line"><span>      ),</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function t(r,v){return l(),s("div",null,[d,a(" more "),c])}const u=n(p,[["render",t],["__file","pin_code_fields密码框使用.html.vue"]]),b=JSON.parse('{"path":"/flutter%E6%95%99%E7%A8%8B/%E6%8F%92%E4%BB%B6%E4%BD%BF%E7%94%A8/pin_code_fields%E5%AF%86%E7%A0%81%E6%A1%86%E4%BD%BF%E7%94%A8.html","title":"pin_code_fields密码框使用","lang":"zh-CN","frontmatter":{"title":"pin_code_fields密码框使用","category":["前端"],"tag":["flutter"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/flutter%E6%95%99%E7%A8%8B/%E6%8F%92%E4%BB%B6%E4%BD%BF%E7%94%A8/pin_code_fields%E5%AF%86%E7%A0%81%E6%A1%86%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"向前有光的博客"}],["meta",{"property":"og:title","content":"pin_code_fields密码框使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-10T06:09:47.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"flutter"}],["meta",{"property":"article:modified_time","content":"2024-07-10T06:09:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"pin_code_fields密码框使用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-10T06:09:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1669804876000,"updatedTime":1720591787000,"contributors":[{"name":"test","email":"email","commits":1}]},"readingTime":{"minutes":0.9,"words":270},"filePathRelative":"flutter教程/插件使用/pin_code_fields密码框使用.md","localizedDate":"2022年11月30日","excerpt":"<p>&nbsp;</p>\\n"}');export{u as comp,b as data};
