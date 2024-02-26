import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,d as l,a as s,e as a}from"./app-oGr5u-1Z.js";const d={},v=s("p",null," ",-1),r=a(`<h1 id="set、map的基本使用" tabindex="-1"><a class="header-anchor" href="#set、map的基本使用" aria-hidden="true">#</a> Set、Map的基本使用</h1><p>Set与Map是都是Es6中提供的新的数据结构，Set 本身是一个构造函数，用来生成 Set 数据结构</p><h2 id="set实例的属性和方法" tabindex="-1"><a class="header-anchor" href="#set实例的属性和方法" aria-hidden="true">#</a> Set实例的属性和方法</h2><ul><li>Set的属性： <ul><li>size：返回集合所包含元素的数量</li></ul></li><li>Set的方法： <ul><li>操作方法 <ul><li>add(value)：向集合添加一个新的项</li><li>delete(value)：从集合中移除一个值</li><li>has(value)：如果值在集合中存在，返回true,否则false</li><li>clear(): 移除集合里所有的项</li></ul></li><li>遍历方法 <ul><li>keys()：返回一个包含集合中所有键的数组</li><li>values()：返回一个包含集合中所有值的数组</li><li>entries：返回一个包含集合中所有键值对的数组(感觉没什么用就不实现了)</li><li>forEach()：用于对集合成员执行某种操作，没有返回值</li></ul></li></ul></li></ul><h3 id="最常用来去重使用-去重方法有很多但是都没有它运行的快" tabindex="-1"><a class="header-anchor" href="#最常用来去重使用-去重方法有很多但是都没有它运行的快" aria-hidden="true">#</a> 最常用来去重使用，去重方法有很多但是都没有它运行的快</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr=[1,3,4,2,5,1,4]
// 这里原本是一个对象用了es6的语法 转化成了数组，就是转化数组之前已经过滤掉了重复的元素了
var arr2=[...new Set(arr)] //[1,3,4,2,5]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="set常用语法如下" tabindex="-1"><a class="header-anchor" href="#set常用语法如下" aria-hidden="true">#</a> Set常用语法如下</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//初始化一个Set ，需要一个Array数组，要么空Set
var set = new Set([1,2,3,5,6]) 
console.log(set)  // {1, 2, 3, 5, 6}

//添加元素到Set中
set.add(7) //{1, 2, 3, 5, 6, 7}

//删除Set中的元素
set.delete(3) // {1, 2, 5, 6, 7}

//检测是否含有此元素，有为true，没有则为false
set.has(2) //true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="map-字典" tabindex="-1"><a class="header-anchor" href="#map-字典" aria-hidden="true">#</a> Map 字典</h2><ul><li>Map的属性： <ul><li>size：返回字典所包含的元素个数</li></ul></li><li>Map的方法： <ul><li>操作方法 <ul><li>set(key, val): 向字典中添加新元素</li><li>get(key):通过键值查找特定的数值并返回</li><li>has(key):如果键存在字典中返回true,否则false</li><li>delete(key): 通过键值从字典中移除对应的数据</li><li>clear():将这个字典中的所有元素删除</li></ul></li><li>遍历方法： <ul><li>keys():将字典中包含的所有键名以数组形式返回</li><li>values():将字典中包含的所有数值以数组形式返回</li><li>forEach()：遍历字典的所有成员</li></ul></li></ul></li></ul><h3 id="map常用语法如下" tabindex="-1"><a class="header-anchor" href="#map常用语法如下" aria-hidden="true">#</a> Map常用语法如下</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//初始化\`Map\`需要一个二维数组(请看 Map 数据结构)，或者直接初始化一个空\`Map\` 
let map = new Map();

//添加key和value值
map.set(&#39;Amy&#39;,&#39;女&#39;)
map.set(&#39;liuQi&#39;,&#39;男&#39;)

//是否存在key，存在返回true,反之为false
map.has(&#39;Amy&#39;) //true
map.has(&#39;amy&#39;) //false

//根据key获取value
map.get(&#39;Amy&#39;) //女

//删除 key为Amy的value
map.delete(&#39;Amy&#39;)
map.get(&#39;Amy&#39;) //undefined  删除成功

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-keys" tabindex="-1"><a class="header-anchor" href="#object-keys" aria-hidden="true">#</a> Object.keys()</h2><p>Object.keys(obj) 静态方法返回一个由给定对象自身的可枚举的字符串键属性名组成的数组。</p><p>for...in 循环会枚举原型链中的属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 简单数组
const arr = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;];
console.log(Object.keys(arr)); // [&#39;0&#39;, &#39;1&#39;, &#39;2&#39;]

// 类数组对象
const obj = { 0: &quot;a&quot;, 1: &quot;b&quot;, 2: &quot;c&quot; };
console.log(Object.keys(obj)); // [&#39;0&#39;, &#39;1&#39;, &#39;2&#39;]

// 键的顺序随机的类数组对象
const anObj = { 100: &quot;a&quot;, 2: &quot;b&quot;, 7: &quot;c&quot; };
console.log(Object.keys(anObj)); // [&#39;2&#39;, &#39;7&#39;, &#39;100&#39;]

// getFoo 是一个不可枚举的属性
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = 1;
console.log(Object.keys(myObj)); // [&#39;foo&#39;]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>非对象参数会强制转换为对象</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 字符串具有索引作为可枚举的自有属性
console.log(Object.keys(&quot;foo&quot;)); // [&#39;0&#39;, &#39;1&#39;, &#39;2&#39;]

// 其他基本类型没有自有属性
console.log(Object.keys(100)); // []

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-values" tabindex="-1"><a class="header-anchor" href="#object-values" aria-hidden="true">#</a> Object.values()</h2><p>Object.values(obj) 静态方法返回一个给定对象的自有可枚举字符串键属性值组成的数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const obj = { foo: &quot;bar&quot;, baz: 42 };
console.log(Object.values(obj)); // [&#39;bar&#39;, 42]

// 类数组对象
const arrayLikeObj1 = { 0: &quot;a&quot;, 1: &quot;b&quot;, 2: &quot;c&quot; };
console.log(Object.values(arrayLikeObj1)); // [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]

// 具有随机键排序的类数组对象
// 使用数字键时，将按键的数字顺序返回值
const arrayLikeObj2 = { 100: &quot;a&quot;, 2: &quot;b&quot;, 7: &quot;c&quot; };
console.log(Object.values(arrayLikeObj2)); // [&#39;b&#39;, &#39;c&#39;, &#39;a&#39;]

// getFoo 是一个不可枚举的属性
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = &quot;bar&quot;;
console.log(Object.values(myObj)); // [&#39;bar&#39;]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>非对象参数会强制转换为对象</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 字符串具有索引作为可枚举的自有属性
console.log(Object.values(&quot;foo&quot;)); // [&#39;f&#39;, &#39;o&#39;, &#39;o&#39;]

// 其他基本类型没有自有属性
console.log(Object.values(100)); // []

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function u(t,c){return i(),n("div",null,[v,l(" more "),r])}const m=e(d,[["render",u],["__file","Set、Map的基本使用.html.vue"]]);export{m as default};
