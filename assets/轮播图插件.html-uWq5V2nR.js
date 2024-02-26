import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as d,c as a,d as r,a as i,b as n,f as v,e as c}from"./app-oGr5u-1Z.js";const t={},u=i("p",null," ",-1),m=i("h1",{id:"轮播图插件",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#轮播图插件","aria-hidden":"true"},"#"),n(" 轮播图插件")],-1),o={href:"https://pub.dev/packages/carousel_slider",target:"_blank",rel:"noopener noreferrer"},b=c(`<p>新建一个custom_swiper_pagination.dart（flutter2.x+card_swiper 此库是flutter_swiper的空安全版）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import &#39;dart:developer&#39;;

import &#39;package:flutter/material.dart&#39;;
import &#39;package:card_swiper/card_swiper.dart&#39;;

/// 自定义页面指示器

class CustomSwiperPaginationBuilder extends SwiperPlugin {
  // 当滚动到此时的颜色
  late Color? activeColor;

  // 默认颜色
  late Color? color;

  // 每个圆点的间距
  final double space;

  // 每个圆点的大小
  final double size;

  // 特殊点的宽度
  final double activeSize;

  final Key? key;

  CustomSwiperPaginationBuilder(
      {this.color = Colors.grey,
      this.activeColor = Colors.blue,
      this.space = 3.0,
      this.size = 6.0,
      this.activeSize = 20.0,
      this.key});

  @override
  Widget build(BuildContext context, SwiperPluginConfig config) {
    // 处理边界情况
    if (config.itemCount &gt; 20) {
      log(
        &#39;The itemCount is too big, we suggest use FractionPaginationBuilder &#39;
        &#39;instead of DotSwiperPaginationBuilder in this situation&#39;,
      );
    }
    int activeIndex = config.activeIndex;
    // 用于存放小圆点
    List&lt;Widget&gt; list = [];
    for (var i = 0; i &lt; config.itemCount; ++i) {
      if (activeIndex == i) {
        list.add(Container(
            key: Key(&#39;pagination_$i&#39;),
            margin: EdgeInsets.all(space),
            child: PhysicalModel(
              color: Colors.transparent,
              borderRadius: BorderRadius.circular(10),
              clipBehavior: Clip.antiAlias,
              child: Container(
                color: activeColor,
                width: activeSize,
                height: size,
              ),
            )));
      } else {
        list.add(Container(
          key: Key(&#39;pagination_$i&#39;),
          margin: EdgeInsets.all(space),
          child: ClipOval(
            // 圆角组件
            child: Container(
              color: color,
              width: size,
              height: size,
            ),
          ),
        ));
      }
    }
    return Stack(
      clipBehavior: Clip.none,
      children: [
        Positioned(
            left: 0,
            right: 0,
            bottom: -35.0,
            child: Row(
              key: key,
              mainAxisSize: MainAxisSize.min,
              mainAxisAlignment: MainAxisAlignment.center,
              children: list,
            ))
      ],
    );
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用此方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>child: Swiper(
          itemBuilder: (BuildContext context, int index) {
            var swiperItem = swiperList[index];
            return PhysicalModel(
              color: Colors.transparent,
              borderRadius: BorderRadius.circular(10),
              clipBehavior: Clip.antiAlias,
              child: Image.network(
                swiperItem?.img ?? &#39;&#39;,
                fit: BoxFit.cover,
              ),
            );
          },
          viewportFraction: 0.85,
          scale: 0.9,
          autoplay: swiperList.isNotEmpty,
          itemCount: swiperList.length,
          pagination: SwiperPagination( // 此处使用自己编写的样式
            alignment: Alignment.bottomCenter,
            builder: CustomSwiperPaginationBuilder(),
          ),
          // control: const SwiperControl(),
        ),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>flutter_swiper默认是在图片内部的，因为我需要它显示在外面，因此使用了Stack组件</p><p>注意：autoplay: swiperList.isNotEmpty最好使用isNotEmpty而不是true</p><img src="https://jitems.gitee.io/myblog/bk362.png" alt="solar">`,7);function p(g,h){const e=s("ExternalLinkIcon");return d(),a("div",null,[u,r(" more "),m,i("p",null,[i("a",o,[n("carousel_slider"),v(e)]),n(" flutter_swiper的空安全版本 轮播图")]),b])}const x=l(t,[["render",p],["__file","轮播图插件.html.vue"]]);export{x as default};
