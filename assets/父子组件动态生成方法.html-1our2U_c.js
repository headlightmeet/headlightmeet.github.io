import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,d as l,a as s,e as t}from"./app-oGr5u-1Z.js";const d={},a=s("p",null," ",-1),v=t(`<h1 id="父子组件动态生成方法" tabindex="-1"><a class="header-anchor" href="#父子组件动态生成方法" aria-hidden="true">#</a> 父子组件动态生成方法</h1><p>在 Vue 3 中，由于组合式 API 的引入，我们需要在组合式 API 中获取 $emit 方法并使用它来触发事件。在 Setup 函数中，我们可以通过 getCurrentInstance 方法获取当前组件实例，然后从实例对象中获取 $emit 方法并使用它来触发事件，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;button @click=&quot;clickEvent&quot;&gt;点击触发事件&lt;/button&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { getCurrentInstance } from &#39;vue&#39;

function clickEvent() {
  const instance = getCurrentInstance()
  instance?.emit?.(&#39;event&#39;, &#39;参数&#39;)
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><p>###父组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 在这个例子中，我们使用 getCurrentInstance 方法获取当前组件实例，并通过 instance?.emit?.(&#39;event&#39;, &#39;参数&#39;) 语句调用实例的 $emit 方法触发事件。由于 instance 和 instance.$emit 可能会为空值，我们使用了可选链语法来避免程序抛出错误。 --&gt;
&lt;template&gt;
  &lt;div class=&quot;container&quot;&gt;
    &lt;button @click=&quot;dialogData.status = true&quot;&gt;点击&lt;/button&gt;
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
  title: &quot;请确认是否批量结算&quot;,
  text: &quot;请确认是否结算？点击确认后列表中的全部账单将确认结算，确定后将不允许撤销&quot;,
  cancelText: [&quot;取消&quot;],
  confirmText: [&quot;确定&quot;,&quot;确认1&quot;,&#39;确认3&#39;]
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>###子组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 通用确认弹框 --&gt;
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
            status: false,//状态
            type:&quot;&quot;,//颜色类型，枚举：RED，YELLOW，GREEN
            title: &quot;&quot;,//标题 
            text: &quot;&quot;,//内容
            cancelText: [&quot;&quot;],//确认组
            confirmText: [&quot;&quot;]//取消组
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function u(c,o){return n(),e("div",null,[a,l(" more "),v])}const b=i(d,[["render",u],["__file","父子组件动态生成方法.html.vue"]]);export{b as default};
