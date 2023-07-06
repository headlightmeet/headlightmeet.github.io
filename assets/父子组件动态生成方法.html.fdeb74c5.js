import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as t,a as e,b as n,e as i}from"./app.3c425ae9.js";const a={},d=e(`<h1 id="\u7236\u5B50\u7EC4\u4EF6\u52A8\u6001\u751F\u6210\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7236\u5B50\u7EC4\u4EF6\u52A8\u6001\u751F\u6210\u65B9\u6CD5" aria-hidden="true">#</a> \u7236\u5B50\u7EC4\u4EF6\u52A8\u6001\u751F\u6210\u65B9\u6CD5</h1><p>\u5728 Vue 3 \u4E2D\uFF0C\u7531\u4E8E\u7EC4\u5408\u5F0F API \u7684\u5F15\u5165\uFF0C\u6211\u4EEC\u9700\u8981\u5728\u7EC4\u5408\u5F0F API \u4E2D\u83B7\u53D6 $emit \u65B9\u6CD5\u5E76\u4F7F\u7528\u5B83\u6765\u89E6\u53D1\u4E8B\u4EF6\u3002\u5728 Setup \u51FD\u6570\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 getCurrentInstance \u65B9\u6CD5\u83B7\u53D6\u5F53\u524D\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u7136\u540E\u4ECE\u5B9E\u4F8B\u5BF9\u8C61\u4E2D\u83B7\u53D6 $emit \u65B9\u6CD5\u5E76\u4F7F\u7528\u5B83\u6765\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;template&gt;
  &lt;button @click=&quot;clickEvent&quot;&gt;\u70B9\u51FB\u89E6\u53D1\u4E8B\u4EF6&lt;/button&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { getCurrentInstance } from &#39;vue&#39;

function clickEvent() {
  const instance = getCurrentInstance()
  instance?.emit?.(&#39;event&#39;, &#39;\u53C2\u6570&#39;)
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),u=n("p",null,[i("\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528 getCurrentInstance \u65B9\u6CD5\u83B7\u53D6\u5F53\u524D\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u5E76\u901A\u8FC7 instance?.emit?.('event', '\u53C2\u6570') \u8BED\u53E5\u8C03\u7528\u5B9E\u4F8B\u7684 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"e"),n("mi",null,"m"),n("mi",null,"i"),n("mi",null,"t"),n("mtext",null,"\u65B9\u6CD5\u89E6\u53D1\u4E8B\u4EF6\u3002\u7531\u4E8E"),n("mi",null,"i"),n("mi",null,"n"),n("mi",null,"s"),n("mi",null,"t"),n("mi",null,"a"),n("mi",null,"n"),n("mi",null,"c"),n("mi",null,"e"),n("mtext",null,"\u548C"),n("mi",null,"i"),n("mi",null,"n"),n("mi",null,"s"),n("mi",null,"t"),n("mi",null,"a"),n("mi",null,"n"),n("mi",null,"c"),n("mi",null,"e"),n("mi",{mathvariant:"normal"},".")]),n("annotation",{encoding:"application/x-tex"},"emit \u65B9\u6CD5\u89E6\u53D1\u4E8B\u4EF6\u3002\u7531\u4E8E instance \u548C instance.")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6833em"}}),n("span",{class:"mord mathnormal"},"e"),n("span",{class:"mord mathnormal"},"mi"),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mord cjk_fallback"},"\u65B9\u6CD5\u89E6\u53D1\u4E8B\u4EF6\u3002\u7531\u4E8E"),n("span",{class:"mord mathnormal"},"in"),n("span",{class:"mord mathnormal"},"s"),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mord mathnormal"},"an"),n("span",{class:"mord mathnormal"},"ce"),n("span",{class:"mord cjk_fallback"},"\u548C"),n("span",{class:"mord mathnormal"},"in"),n("span",{class:"mord mathnormal"},"s"),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mord mathnormal"},"an"),n("span",{class:"mord mathnormal"},"ce"),n("span",{class:"mord"},".")])])]),i("emit \u53EF\u80FD\u4F1A\u4E3A\u7A7A\u503C\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86\u53EF\u9009\u94FE\u8BED\u6CD5\u6765\u907F\u514D\u7A0B\u5E8F\u629B\u51FA\u9519\u8BEF\u3002")],-1),v=e(`<h2 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h2><p>###\u7236\u7EC4\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;template&gt;
  &lt;div class=&quot;container&quot;&gt;
    &lt;button @click=&quot;dialogData.status = true&quot;&gt;\u70B9\u51FB&lt;/button&gt;
  &lt;/div&gt;
  &lt;ConfirmDialog :dialogData=&quot;dialogData&quot; @dialogConfirmFunc0=&quot;onDialogConfirmFunc0&quot; @dialogConfirmFunc1=&quot;onDialogConfirmFunc1&quot; @dialogConfirmFunc2=&quot;onDialogConfirmFunc2&quot; @dialogCancelFunc0=&quot;dialogData.status=false&quot;&gt;&lt;/ConfirmDialog&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import ConfirmDialog from &#39;@/components/confirmDialog.vue&#39;
import { ref, reactive, onMounted } from &#39;vue&#39;
import { Plus } from &#39;@element-plus/icons-vue&#39;
let dialogData = ref({
  status: false,
  type:&quot;YELLOW&quot;,
  title: &quot;\u8BF7\u786E\u8BA4\u662F\u5426\u6279\u91CF\u7ED3\u7B97&quot;,
  text: &quot;\u8BF7\u786E\u8BA4\u662F\u5426\u7ED3\u7B97\uFF1F\u70B9\u51FB\u786E\u8BA4\u540E\u5217\u8868\u4E2D\u7684\u5168\u90E8\u8D26\u5355\u5C06\u786E\u8BA4\u7ED3\u7B97\uFF0C\u786E\u5B9A\u540E\u5C06\u4E0D\u5141\u8BB8\u64A4\u9500&quot;,
  cancelText: [&quot;\u53D6\u6D88&quot;],
  confirmText: [&quot;\u786E\u5B9A&quot;,&quot;\u786E\u8BA41&quot;,&#39;\u786E\u8BA43&#39;]
})
onMounted(()=&gt;{
  
})
const onDialogConfirmFunc0 = ()=&gt;{
  console.log(&#39;1111111111&#39;)
}
const onDialogConfirmFunc1 = ()=&gt;{
  console.log(&#39;222222222222&#39;)
}
const onDialogConfirmFunc2 = ()=&gt;{
  console.log(&#39;33333333&#39;)
}
&lt;/script&gt;

&lt;style scoped lang=&quot;scss&quot;&gt;
.container {
  height: 100%;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>###\u5B50\u7EC4\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!-- \u901A\u7528\u786E\u8BA4\u5F39\u6846 --&gt;
&lt;template&gt;
    &lt;el-dialog v-model=&quot;dialogData.status&quot; :show-close=&quot;false&quot; :align-center=&quot;true&quot; width=&quot;400px&quot;&gt;
        &lt;template #header=&quot;{ close, titleId, titleClass }&quot;&gt;
            &lt;div class=&quot;dialog_header&quot;&gt;
                &lt;div :id=&quot;titleId&quot; class=&quot;dialogs&quot; :class=&quot;[dialogData.type]&quot;&gt;
                    &lt;!-- &lt;div src=&quot;@/assets/icon/dialog_1.png&quot; alt=&quot;&quot;&gt; --&gt;
                    &lt;div class=&quot;dialogs_img&quot;&gt;&lt;/div&gt;
                    &lt;div class=&quot;dialogs_title&quot;&gt;{{ dialogData.title }}&lt;/div&gt;
                &lt;/div&gt;
                &lt;el-icon color=&quot;#909399&quot; @click=&quot;dialogData.status = false&quot;&gt;
                    &lt;Close /&gt;
                &lt;/el-icon&gt;
            &lt;/div&gt;
        &lt;/template&gt;
        &lt;div class=&quot;dialog_text&quot;&gt;
            {{ dialogData.text }}
        &lt;/div&gt;
        &lt;template #footer&gt;
            &lt;span class=&quot;dialog-footer&quot;&gt;
                &lt;template v-for=&quot;(item, index) in dialogData.cancelText&quot; :key=&quot;index&quot;&gt;
                    &lt;el-button class=&quot;set_other_btn&quot; @click=&quot;onCancel(index)&quot;&gt;{{ item }}&lt;/el-button&gt;
                &lt;/template&gt;
                &lt;template v-for=&quot;(item, index) in dialogData.confirmText&quot; :key=&quot;index&quot;&gt;
                    &lt;el-button type=&quot;primary&quot; @click=&quot;onConfirm(index)&quot; :color=&quot;globalBtnColor&quot;&gt;
                        {{ item }}
                    &lt;/el-button&gt;
                &lt;/template&gt;
            &lt;/span&gt;
        &lt;/template&gt;
    &lt;/el-dialog&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { globalBtnColor } from &#39;@/constants&#39;
import { ref, reactive, onMounted, getCurrentInstance } from &#39;vue&#39;
const props = defineProps({
    dialogData: {
        type: Object,
        default: {
            status: false,//\u72B6\u6001
            type:&quot;&quot;,//\u989C\u8272\u7C7B\u578B\uFF0C\u679A\u4E3E\uFF1ARED\uFF0CYELLOW\uFF0CGREEN
            title: &quot;&quot;,//\u6807\u9898 
            text: &quot;&quot;,//\u5185\u5BB9
            cancelText: [&quot;&quot;],//\u786E\u8BA4\u7EC4
            confirmText: [&quot;&quot;]//\u53D6\u6D88\u7EC4
        }
    },
})
let btnList: any = []
const instance = getCurrentInstance()

props.dialogData.cancelText.forEach((item: any, index: number) =&gt; {
    btnList.push(&quot;dialogCancelFunc&quot; + index)
})
props.dialogData.confirmText.forEach((item: any, index: number) =&gt; {
    btnList.push(&quot;dialogConfirmFunc&quot; + index)
})

const onConfirm = (index: number) =&gt; {
    instance?.emit?.(&quot;dialogConfirmFunc&quot; + index, &#39;&#39;)
}
const onCancel = (index: number) =&gt; {
    instance?.emit?.(&quot;dialogCancelFunc&quot; + index, &#39;&#39;)
}
&lt;/script&gt;

&lt;style scoped lang=&quot;scss&quot;&gt;
.dialog_header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.dialogs{
    display: flex;
    align-items: center;

    .dialogs_img {
        width: 24px;
        height: 24px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }

    .dialogs_title {
        margin-left: 8px;
        color: #F59300;
        font-size: $fontSizeSixteen;
        font-weight: bold;
    }
}
.YELLOW {
    .dialogs_img {
        background-image: url(&#39;@/assets/icon/dialog_1.png&#39;);
    }

    .dialogs_title {
        color: #F59300;
    }
}
.RED {
    .dialogs_img {
        background-image: url(&#39;@/assets/icon/dialog_2.png&#39;);
    }

    .dialogs_title {
        color: #F56C6C;
    }
}
.GREEN {
    .dialogs_img {
        background-image: url(&#39;@/assets/icon/dialog_3.png&#39;);
    }

    .dialogs_title {
        color: #67C23A;
    }
}

.dialog_text {
    margin-left: 32px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[d,u,v];function o(r,m){return s(),t("div",null,c)}var p=l(a,[["render",o],["__file","\u7236\u5B50\u7EC4\u4EF6\u52A8\u6001\u751F\u6210\u65B9\u6CD5.html.vue"]]);export{p as default};
