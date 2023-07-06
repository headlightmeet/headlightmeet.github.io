import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,a as l}from"./app.3c425ae9.js";const d={},s=l(`<h1 id="pin-code-fields\u5BC6\u7801\u6846\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#pin-code-fields\u5BC6\u7801\u6846\u4F7F\u7528" aria-hidden="true">#</a> pin_code_fields\u5BC6\u7801\u6846\u4F7F\u7528</h1><p>\u5B89\u88C5\u63D2\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>flutter pub add pin_code_fields
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import &#39;dart:math&#39; as math;

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
      title: &#39;\u575A\u679C&#39;,
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
  String _title = &quot;\u575A\u679C\u516C\u4F17\u53F7&quot;;
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
                //\u8F93\u5165\u540E\u586B\u5145
                activeFillColor: Color(0xFFEAECF5),
                //\u8F93\u5165\u524D\u8FB9\u6846
                selectedColor: Color(0x42566789),
                //\u9009\u4E2D\u586B\u5145
                selectedFillColor: Color(0xFFEAECF5),
                //\u8F93\u5165\u540E\u7684\u8FB9\u6846
                activeColor: Color(0x42566789),
                //\u672A\u9009\u8FB9\u6846
                inactiveColor: Color(0x42566789),
                //\u672A\u9009\u586B\u5145
                inactiveFillColor: Color(0xFFEAECF5),
              ),
            //\u952E\u76D8\u7C7B\u578B
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=[s];function a(v,t){return i(),n("div",null,r)}var m=e(d,[["render",a],["__file","pin_code_fields\u5BC6\u7801\u6846\u4F7F\u7528.html.vue"]]);export{m as default};
