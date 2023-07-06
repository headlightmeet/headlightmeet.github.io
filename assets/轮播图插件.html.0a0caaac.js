import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as d,c as r,b as i,d as a,e as n,a as v}from"./app.3c425ae9.js";var c="/assets/bk362.1e5b8041.png";const t={},u=i("h1",{id:"\u8F6E\u64AD\u56FE\u63D2\u4EF6",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#\u8F6E\u64AD\u56FE\u63D2\u4EF6","aria-hidden":"true"},"#"),n(" \u8F6E\u64AD\u56FE\u63D2\u4EF6")],-1),m={href:"https://pub.dev/packages/carousel_slider",target:"_blank",rel:"noopener noreferrer"},o=n("carousel_slider"),b=n(" flutter_swiper\u7684\u7A7A\u5B89\u5168\u7248\u672C \u8F6E\u64AD\u56FE"),p=v(`<p>\u65B0\u5EFA\u4E00\u4E2Acustom_swiper_pagination.dart\uFF08flutter2.x+card_swiper \u6B64\u5E93\u662Fflutter_swiper\u7684\u7A7A\u5B89\u5168\u7248\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import &#39;dart:developer&#39;;

import &#39;package:flutter/material.dart&#39;;
import &#39;package:card_swiper/card_swiper.dart&#39;;

/// \u81EA\u5B9A\u4E49\u9875\u9762\u6307\u793A\u5668

class CustomSwiperPaginationBuilder extends SwiperPlugin {
  // \u5F53\u6EDA\u52A8\u5230\u6B64\u65F6\u7684\u989C\u8272
  late Color? activeColor;

  // \u9ED8\u8BA4\u989C\u8272
  late Color? color;

  // \u6BCF\u4E2A\u5706\u70B9\u7684\u95F4\u8DDD
  final double space;

  // \u6BCF\u4E2A\u5706\u70B9\u7684\u5927\u5C0F
  final double size;

  // \u7279\u6B8A\u70B9\u7684\u5BBD\u5EA6
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
    // \u5904\u7406\u8FB9\u754C\u60C5\u51B5
    if (config.itemCount &gt; 20) {
      log(
        &#39;The itemCount is too big, we suggest use FractionPaginationBuilder &#39;
        &#39;instead of DotSwiperPaginationBuilder in this situation&#39;,
      );
    }
    int activeIndex = config.activeIndex;
    // \u7528\u4E8E\u5B58\u653E\u5C0F\u5706\u70B9
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
            // \u5706\u89D2\u7EC4\u4EF6
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u6B64\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>child: Swiper(
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
          pagination: SwiperPagination( // \u6B64\u5904\u4F7F\u7528\u81EA\u5DF1\u7F16\u5199\u7684\u6837\u5F0F
            alignment: Alignment.bottomCenter,
            builder: CustomSwiperPaginationBuilder(),
          ),
          // control: const SwiperControl(),
        ),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>flutter_swiper\u9ED8\u8BA4\u662F\u5728\u56FE\u7247\u5185\u90E8\u7684\uFF0C\u56E0\u4E3A\u6211\u9700\u8981\u5B83\u663E\u793A\u5728\u5916\u9762\uFF0C\u56E0\u6B64\u4F7F\u7528\u4E86Stack\u7EC4\u4EF6</p><p>\u6CE8\u610F\uFF1Aautoplay: swiperList.isNotEmpty\u6700\u597D\u4F7F\u7528isNotEmpty\u800C\u4E0D\u662Ftrue</p><img src="`+c+'" alt="solar">',7);function g(h,_){const e=l("ExternalLinkIcon");return d(),r("div",null,[u,i("p",null,[i("a",m,[o,a(e)]),b]),p])}var C=s(t,[["render",g],["__file","\u8F6E\u64AD\u56FE\u63D2\u4EF6.html.vue"]]);export{C as default};
