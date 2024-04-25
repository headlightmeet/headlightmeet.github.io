import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,d,a as s,e as l}from"./app-PxqKmrwv.js";const r={},v=s("p",null," ",-1),a=l(`<h1 id="软键盘禁止上推底部" tabindex="-1"><a class="header-anchor" href="#软键盘禁止上推底部" aria-hidden="true">#</a> 软键盘禁止上推底部</h1><h2 id="方式一" tabindex="-1"><a class="header-anchor" href="#方式一" aria-hidden="true">#</a> 方式一</h2><p>在Scaffold或者CupertinoPageScaffold中设置resizeToAvoidBottomInset为false</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      resizeToAvoidBottomInset:false,
      body: ...,
    );
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方式二" tabindex="-1"><a class="header-anchor" href="#方式二" aria-hidden="true">#</a> 方式二</h2><p>不修改resizeToAvoidBottomInset属性的话，可以使用ListView、SingleChildScrollView、CustomScrollView等布局构建页面。</p><h3 id="登录页面完整代码" tabindex="-1"><a class="header-anchor" href="#登录页面完整代码" aria-hidden="true">#</a> 登录页面完整代码</h3><p>带删除和眼睛按钮的输入框控件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import &#39;package:flutter/cupertino.dart&#39;;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="登录页面" tabindex="-1"><a class="header-anchor" href="#登录页面" aria-hidden="true">#</a> 登录页面</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import &#39;dart:ui&#39;;

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

  // 软键盘高度
  double _keyboardHeight = 0;

  // 可控制ListView滑动
  final _scrollController = ScrollController();

  // 用于获取目标Widget的位置坐标
  final _targetWidgetKey = GlobalKey();

  @override
  void initState() {
    super.initState();
    // 添加监听，didChangeMetrics
    WidgetsBinding.instance.addObserver(this);
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  // 当应用程序的尺寸发生变化时会调用
  @override
  void didChangeMetrics() {
    // 获取页面高度
    var pageHeight = MediaQuery.of(context).size.height;
    if (pageHeight &lt;= 0) {
      return;
    }

    // 软键盘顶部  px
    final keyboardTopPixels =
        window.physicalSize.height - window.viewInsets.bottom;
    // 转换为 dp
    final keyboardTopPoints = keyboardTopPixels / window.devicePixelRatio;
    // 软键盘高度
    final keyboardHeight = pageHeight - keyboardTopPoints;

    setState(() {
      _keyboardHeight = keyboardHeight;
    });
    if (keyboardHeight &lt;= 0) {
      return;
    }
    // 获取目标位置的坐标
    RenderBox? renderBox =
        _targetWidgetKey.currentContext?.findRenderObject() as RenderBox?;
    if (renderBox == null) {
      return;
    }
    // 转换为全局坐标
    final bottomOffset =
        renderBox.localToGlobal(Offset(0, renderBox.size.height));
    final targetDy = bottomOffset.dy;
    // 获取要滚动的距离
    // 即被软键盘挡住的那段距离 加上 _scrollController.offset 已经滑动过的距离
    final offsetY =
        keyboardHeight - (pageHeight - targetDy) + _scrollController.offset;
    // 滑动到指定位置
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
                      &#39;你好，\\n欢迎使用Flutter App&#39;,
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
                      placeholder: &#39;请输入邮箱&#39;,
                    ),
                  ),
                  const SizedBox(height: 16.0),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    child: UserTextField(
                      controller: _passwordController,
                      keyboardType: TextInputType.visiblePassword,
                      usedInPassword: true,
                      placeholder: &#39;请输入密码&#39;,
                    ),
                  ),
                  const SizedBox(height: 16.0),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    child: UserTextField(
                      controller: _codeController,
                      keyboardType: TextInputType.number,
                      placeholder: &#39;请输入6位验证码&#39;,
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
                        &#39;登录&#39;,
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
                          &#39;忘记密码？&#39;,
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
                            const Text(&#39;立即注册&#39;, style: TextStyle(fontSize: 14)),
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
                  &#39;其它登录方式&#39;,
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function c(t,u){return n(),e("div",null,[v,d(" more "),a])}const b=i(r,[["render",c],["__file","软键盘禁止上推底部.html.vue"]]);export{b as default};
