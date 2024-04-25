import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,d as l,a as d,e as s}from"./app-PxqKmrwv.js";const r={},a=d("p",null," ",-1),v=s(`<h1 id="pin-code-fields密码框使用" tabindex="-1"><a class="header-anchor" href="#pin-code-fields密码框使用" aria-hidden="true">#</a> pin_code_fields密码框使用</h1><p>安装插件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flutter pub add pin_code_fields
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import &#39;dart:math&#39; as math;

import &#39;package:flutter/cupertino.dart&#39;;
import &#39;package:flutter/material.dart&#39;;
import &#39;package:async/async.dart&#39;;
import &#39;package:pin_code_fields/pin_code_fields.dart&#39;;
import &#39;package:url_strategy/url_strategy.dart&#39;;

void main() {
  setPathUrlStrategy();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // Hide the debug banner
      debugShowCheckedModeBanner: false,
      title: &#39;坚果&#39;,
      theme: ThemeData(
        primarySwatch: Colors.indigo,
      ),
      home: const HomeScreen(),
    );
  }
}

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State&lt;HomeScreen&gt; createState() =&gt; _HomeScreenState();
}

class _HomeScreenState extends State&lt;HomeScreen&gt; {
  String _imageUrl =&#39;https://luckly007.oss-cn-beijing.aliyuncs.com/image/image-20211124085239175.png&#39;;
  double _fontSize = 20;
  String _title = &quot;坚果公众号&quot;;
  // 4 text editing controllers that associate with the 4 input fields
  TextEditingController textEditingController = TextEditingController();
  String currentText = &quot;&quot;;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(_title),
      ),
      body: Padding(
        padding: const EdgeInsets.all(30),
        child: Center(
          child: PinCodeTextField(
              length: 4,
              obscureText: false,
              animationType: AnimationType.fade,
              pinTheme: PinTheme(
                shape: PinCodeFieldShape.box,
                borderRadius: BorderRadius.circular(5),
                fieldHeight: 70.h,
                fieldWidth: 60.w,
                //输入后填充
                activeFillColor: Color(0xFFEAECF5),
                //输入前边框
                selectedColor: Color(0x42566789),
                //选中填充
                selectedFillColor: Color(0xFFEAECF5),
                //输入后的边框
                activeColor: Color(0x42566789),
                //未选边框
                inactiveColor: Color(0x42566789),
                //未选填充
                inactiveFillColor: Color(0xFFEAECF5),
              ),
            //键盘类型
            keyboardType: TextInputType.number,
            animationDuration:
                const Duration(milliseconds: 300),
            // backgroundColor: Colors.blue.shade50,
            enableActiveFill: true,
            controller: textEditingController,
            onCompleted: (v) {
              debugPrint(&quot;Completed&quot;);
            },
            onChanged: (value) {
              debugPrint(value);
              setState(() {
                currentText = value;
              });
            },
            beforeTextPaste: (text) {
              return true;
            },
            appContext: context,
          ),
        ),
      ),
    );
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function t(c,u){return i(),n("div",null,[a,l(" more "),v])}const b=e(r,[["render",t],["__file","pin_code_fields密码框使用.html.vue"]]);export{b as default};
