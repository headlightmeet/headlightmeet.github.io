import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as e,a as d}from"./app.3c425ae9.js";const s={},l=d(`<h1 id="\u8F6F\u952E\u76D8\u7981\u6B62\u4E0A\u63A8\u5E95\u90E8" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u952E\u76D8\u7981\u6B62\u4E0A\u63A8\u5E95\u90E8" aria-hidden="true">#</a> \u8F6F\u952E\u76D8\u7981\u6B62\u4E0A\u63A8\u5E95\u90E8</h1><h2 id="\u65B9\u5F0F\u4E00" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E00" aria-hidden="true">#</a> \u65B9\u5F0F\u4E00</h2><p>\u5728Scaffold\u6216\u8005CupertinoPageScaffold\u4E2D\u8BBE\u7F6EresizeToAvoidBottomInset\u4E3Afalse</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      resizeToAvoidBottomInset:false,
      body: ...,
    );
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B9\u5F0F\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E8C" aria-hidden="true">#</a> \u65B9\u5F0F\u4E8C</h2><p>\u4E0D\u4FEE\u6539resizeToAvoidBottomInset\u5C5E\u6027\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4F7F\u7528ListView\u3001SingleChildScrollView\u3001CustomScrollView\u7B49\u5E03\u5C40\u6784\u5EFA\u9875\u9762\u3002</p><h3 id="\u767B\u5F55\u9875\u9762\u5B8C\u6574\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u767B\u5F55\u9875\u9762\u5B8C\u6574\u4EE3\u7801" aria-hidden="true">#</a> \u767B\u5F55\u9875\u9762\u5B8C\u6574\u4EE3\u7801</h3><p>\u5E26\u5220\u9664\u548C\u773C\u775B\u6309\u94AE\u7684\u8F93\u5165\u6846\u63A7\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import &#39;package:flutter/cupertino.dart&#39;;
import &#39;package:flutter/material.dart&#39;;

class UserTextField extends StatefulWidget {
  final TextEditingController controller;
  final TextInputType? keyboardType;
  final String? placeholder;
  final bool usedInPassword;
  final Widget? suffixWidget;
  final int? maxLength;

  const UserTextField({
    Key? key,
    required this.controller,
    this.keyboardType,
    this.placeholder,
    this.usedInPassword = false,
    this.suffixWidget,
    this.maxLength,
  }) : super(key: key);

  @override
  State&lt;StatefulWidget&gt; createState() =&gt; _UserTextFieldState();
}

class _UserTextFieldState extends State&lt;UserTextField&gt; {
  var _showClearIcon = false;
  var _showEyeIcon = false;
  late bool _obscurePassword;

  @override
  void initState() {
    super.initState();
    _obscurePassword = widget.usedInPassword;

    widget.controller.addListener(() {
      var isNotEmpty = widget.controller.text.isNotEmpty;
      setState(() {
        _showEyeIcon = isNotEmpty;
        _showClearIcon = isNotEmpty;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return CupertinoTextField(
      controller: widget.controller,
      keyboardType: widget.keyboardType,
      onChanged: (_) {},
      placeholder: widget.placeholder,
      style: const TextStyle(color: Colors.black),
      placeholderStyle: const TextStyle(color: Colors.grey),
      maxLength: widget.maxLength,
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
      decoration: BoxDecoration(
        color: Colors.white,
        border: Border.all(color: Colors.grey, width: 0.5),
        borderRadius: BorderRadius.circular(26),
      ),
      obscureText: _obscurePassword,
      obscuringCharacter: &quot;*&quot;,
      suffix: widget.suffixWidget ??
          (widget.usedInPassword ? _buildPasswordEyeIcon() : _buildClearIcon()),
    );
  }

  Widget _buildClearIcon() {
    return _showClearIcon
        ? CupertinoButton(
            padding: const EdgeInsets.fromLTRB(0, 0, 8, 0),
            child: const Icon(Icons.clear, size: 18),
            onPressed: () =&gt; widget.controller.clear(),
          )
        : const SizedBox(width: 8.0);
  }

  Widget _buildPasswordEyeIcon() {
    return _showEyeIcon
        ? CupertinoButton(
            padding: const EdgeInsets.fromLTRB(0, 0, 8, 0),
            child: Icon(
              _obscurePassword ? Icons.visibility_off : Icons.visibility,
              size: 18,
            ),
            onPressed: () {
              setState(() =&gt; _obscurePassword = !_obscurePassword);
            },
          )
        : const SizedBox(width: 8.0);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u767B\u5F55\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u767B\u5F55\u9875\u9762" aria-hidden="true">#</a> \u767B\u5F55\u9875\u9762</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import &#39;dart:ui&#39;;

import &#39;package:flutter/cupertino.dart&#39;;
import &#39;package:flutter/material.dart&#39;;
import &#39;user_text_field.dart&#39;;

void main() =&gt; runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const CupertinoApp(
      theme: CupertinoThemeData(
        primaryColor: Colors.red,
        scaffoldBackgroundColor: Colors.white,
      ),
      debugShowCheckedModeBanner: false,
      home: LoginPage(),
    );
  }
}

class LoginPage extends StatefulWidget {
  const LoginPage({Key? key}) : super(key: key);

  @override
  State&lt;StatefulWidget&gt; createState() =&gt; _LoginPageState();
}

class _LoginPageState extends State&lt;LoginPage&gt; with WidgetsBindingObserver {
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final _codeController = TextEditingController();

  // \u8F6F\u952E\u76D8\u9AD8\u5EA6
  double _keyboardHeight = 0;

  // \u53EF\u63A7\u5236ListView\u6ED1\u52A8
  final _scrollController = ScrollController();

  // \u7528\u4E8E\u83B7\u53D6\u76EE\u6807Widget\u7684\u4F4D\u7F6E\u5750\u6807
  final _targetWidgetKey = GlobalKey();

  @override
  void initState() {
    super.initState();
    // \u6DFB\u52A0\u76D1\u542C\uFF0CdidChangeMetrics
    WidgetsBinding.instance.addObserver(this);
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  // \u5F53\u5E94\u7528\u7A0B\u5E8F\u7684\u5C3A\u5BF8\u53D1\u751F\u53D8\u5316\u65F6\u4F1A\u8C03\u7528
  @override
  void didChangeMetrics() {
    // \u83B7\u53D6\u9875\u9762\u9AD8\u5EA6
    var pageHeight = MediaQuery.of(context).size.height;
    if (pageHeight &lt;= 0) {
      return;
    }

    // \u8F6F\u952E\u76D8\u9876\u90E8  px
    final keyboardTopPixels =
        window.physicalSize.height - window.viewInsets.bottom;
    // \u8F6C\u6362\u4E3A dp
    final keyboardTopPoints = keyboardTopPixels / window.devicePixelRatio;
    // \u8F6F\u952E\u76D8\u9AD8\u5EA6
    final keyboardHeight = pageHeight - keyboardTopPoints;

    setState(() {
      _keyboardHeight = keyboardHeight;
    });
    if (keyboardHeight &lt;= 0) {
      return;
    }
    // \u83B7\u53D6\u76EE\u6807\u4F4D\u7F6E\u7684\u5750\u6807
    RenderBox? renderBox =
        _targetWidgetKey.currentContext?.findRenderObject() as RenderBox?;
    if (renderBox == null) {
      return;
    }
    // \u8F6C\u6362\u4E3A\u5168\u5C40\u5750\u6807
    final bottomOffset =
        renderBox.localToGlobal(Offset(0, renderBox.size.height));
    final targetDy = bottomOffset.dy;
    // \u83B7\u53D6\u8981\u6EDA\u52A8\u7684\u8DDD\u79BB
    // \u5373\u88AB\u8F6F\u952E\u76D8\u6321\u4F4F\u7684\u90A3\u6BB5\u8DDD\u79BB \u52A0\u4E0A _scrollController.offset \u5DF2\u7ECF\u6ED1\u52A8\u8FC7\u7684\u8DDD\u79BB
    final offsetY =
        keyboardHeight - (pageHeight - targetDy) + _scrollController.offset;
    // \u6ED1\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E
    if (offsetY &gt; 0) {
      _scrollController.animateTo(
        offsetY,
        duration: kTabScrollDuration,
        curve: Curves.ease,
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      resizeToAvoidBottomInset: false,
      body: GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTap: () =&gt; FocusManager.instance.primaryFocus?.unfocus(),
        child: Column(
          children: [
            Expanded(
              child: ListView(
                controller: _scrollController,
                children: [
                  SafeArea(
                    child: Align(
                      alignment: Alignment.centerRight,
                      child: CupertinoButton(
                        onPressed: () {},
                        child: const Icon(CupertinoIcons.clear, size: 24),
                      ),
                    ),
                  ),
                  const Padding(
                    padding: EdgeInsets.fromLTRB(16, 16, 16, 16),
                    child: Text(
                      &#39;\u4F60\u597D\uFF0C\\n\u6B22\u8FCE\u4F7F\u7528Flutter App&#39;,
                      style: TextStyle(
                        fontSize: 24,
                        color: Colors.black,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ),
                  const SizedBox(height: 40),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    child: UserTextField(
                      controller: _emailController,
                      keyboardType: TextInputType.emailAddress,
                      placeholder: &#39;\u8BF7\u8F93\u5165\u90AE\u7BB1&#39;,
                    ),
                  ),
                  const SizedBox(height: 16.0),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    child: UserTextField(
                      controller: _passwordController,
                      keyboardType: TextInputType.visiblePassword,
                      usedInPassword: true,
                      placeholder: &#39;\u8BF7\u8F93\u5165\u5BC6\u7801&#39;,
                    ),
                  ),
                  const SizedBox(height: 16.0),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    child: UserTextField(
                      controller: _codeController,
                      keyboardType: TextInputType.number,
                      placeholder: &#39;\u8BF7\u8F93\u51656\u4F4D\u9A8C\u8BC1\u7801&#39;,
                    ),
                  ),
                  const SizedBox(height: 16.0),
                  CupertinoButton(
                    padding: const EdgeInsets.all(16),
                    child: Container(
                      height: 44,
                      width: double.infinity,
                      alignment: Alignment.center,
                      decoration: const BoxDecoration(
                        color: Colors.red,
                        borderRadius: BorderRadius.all(Radius.circular(22)),
                      ),
                      child: const Text(
                        &#39;\u767B\u5F55&#39;,
                        style: TextStyle(color: Colors.white),
                      ),
                    ),
                    onPressed: () {},
                  ),
                  Row(
                    key: _targetWidgetKey,
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      CupertinoButton(
                        minSize: 24,
                        alignment: Alignment.topCenter,
                        padding: const EdgeInsets.symmetric(
                            horizontal: 18, vertical: 0),
                        onPressed: () {},
                        child: const Text(
                          &#39;\u5FD8\u8BB0\u5BC6\u7801\uFF1F&#39;,
                          style: TextStyle(fontSize: 14),
                        ),
                      ),
                      CupertinoButton(
                        minSize: 24,
                        alignment: Alignment.topCenter,
                        padding: const EdgeInsets.symmetric(
                            horizontal: 18, vertical: 0),
                        onPressed: () {},
                        child:
                            const Text(&#39;\u7ACB\u5373\u6CE8\u518C&#39;, style: TextStyle(fontSize: 14)),
                      ),
                    ],
                  ),
                  SizedBox(height: _keyboardHeight)
                ],
              ),
            ),
            Row(
              children: const [
                SizedBox(width: 16),
                Expanded(child: Divider()),
                SizedBox(width: 8),
                Text(
                  &#39;\u5176\u5B83\u767B\u5F55\u65B9\u5F0F&#39;,
                  style: TextStyle(fontSize: 13, color: Colors.grey),
                ),
                SizedBox(width: 8),
                Expanded(child: Divider()),
                SizedBox(width: 16),
              ],
            ),
            Row(
              crossAxisAlignment: CrossAxisAlignment.center,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                CupertinoButton(
                  onPressed: () {},
                  child: const Icon(Icons.facebook, size: 44),
                ),
                const SizedBox(width: 32),
                CupertinoButton(
                  onPressed: () {},
                  child: const Icon(Icons.apple, size: 44),
                ),
              ],
            ),
            const SizedBox(height: 12),
          ],
        ),
      ),
    );
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),r=[l];function v(a,c){return n(),e("div",null,r)}var o=i(s,[["render",v],["__file","\u8F6F\u952E\u76D8\u7981\u6B62\u4E0A\u63A8\u5E95\u90E8.html.vue"]]);export{o as default};
