import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e,a as i,e as t}from"./app-oGr5u-1Z.js";const l={},d=i("p",null," ",-1),c=t(`<h1 id="银行卡插件" tabindex="-1"><a class="header-anchor" href="#银行卡插件" aria-hidden="true">#</a> 银行卡插件</h1><p>1.npm下载（我们以银行卡卡号查询银行类型和卡类型插件：bankcardinfo为例）： npm install bankcardinfo --save-dev 2.下载后，你可以在package.json文件里面来查看是否下载成功（如果有就成功了） <img src="https://jitems.gitee.io/myblog/bk233.png" alt="solar"></p><p>注意：你如果在文件中找不到package.json文件：请在项目根目录执行命令初始化npm工程：</p><p>npm init -y uniapp中 根据银行卡卡号查询银行类型和卡类型(javascript也可以用)</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>import BIN from &#39;bankcardinfo&#39;
methods:{
	// 卡号获取
	numberCard(e){
	const self = this;
	// 获取银行卡类型
	BIN.getBankBin(self.cardNumber).then(function(res){
		self.cardNum = res.bankName+&#39;   &#39;+res.cardTypeName
			console.log(res)
		}).catch(function(err){
			self.cardNum = &#39;储蓄卡&#39;
			// console.log(err)
		})
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
	<span class="token string">&quot;bankName&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;中国建设银行&quot;</span>,
	<span class="token string">&quot;bankCode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;CCB&quot;</span>,
	<span class="token string">&quot;cardType&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;DC&quot;</span>,
	<span class="token string">&quot;cardTypeName&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;储蓄卡&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>根据银行代码获取银行logo</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>https://apimg.alipay.com/combo.png?d<span class="token operator">=</span>cashier<span class="token operator">&amp;</span><span class="token assign-left variable">t</span><span class="token operator">=</span>CMB
 
CCB是指银行代码，也就是上面获取到的bankCode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function r(o,p){return s(),a("div",null,[d,e(" more "),c])}const v=n(l,[["render",r],["__file","银行卡插件.html.vue"]]);export{v as default};
