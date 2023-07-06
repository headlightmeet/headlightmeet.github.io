import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as i,a as l}from"./app.3c425ae9.js";var u="/assets/bk577.fc9971bb.png";const s={},d=l(`<h1 id="elementplus\u5E38\u7528" tabindex="-1"><a class="header-anchor" href="#elementplus\u5E38\u7528" aria-hidden="true">#</a> elementplus\u5E38\u7528</h1><h2 id="\u5206\u9875\u4FEE\u6539\u80CC\u666F\u8272" tabindex="-1"><a class="header-anchor" href="#\u5206\u9875\u4FEE\u6539\u80CC\u666F\u8272" aria-hidden="true">#</a> \u5206\u9875\u4FEE\u6539\u80CC\u666F\u8272</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>:deep(.el-pagination.is-background .el-pager li:not(.is-disabled).is-active) {
  background-color: #494893 !important;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u89D2\u8272\u5206\u914D\u6743\u9650\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#\u89D2\u8272\u5206\u914D\u6743\u9650\u83DC\u5355" aria-hidden="true">#</a> \u89D2\u8272\u5206\u914D\u6743\u9650\u83DC\u5355</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!-- \u89D2\u8272\u7BA1\u7406 --&gt;
&lt;!-- \u522B\u5220\uFF0C\u591A\u6309\u94AE\u5206\u914D\u7684\u6D41\u7A0B --&gt;
&lt;template&gt;
    &lt;div class=&quot;positions&quot; ref=&quot;supHeight&quot;&gt;
        &lt;el-tree class=&quot;positions_row_right&quot; v-model=&quot;ruleForm.menuIds&quot; default-expand-all :data=&quot;dataList&quot; show-checkbox
            node-key=&quot;id&quot; @check=&quot;setUseCheck&quot; :default-checked-keys=&quot;ruleForm.menuIds&quot;
            :props=&quot;{ ...defaultProps, class: customNodeClass }&quot; /&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { ref, reactive, onMounted } from &#39;vue&#39;
import type Node from &#39;element-plus/es/components/tree/src/model/node&#39;
// \u7F16\u8F91/\u65B0\u589E\u6570\u636E
let ruleForm: any = ref({
    name: &quot;&quot;,//\u89D2\u8272\u540D\u79F0
    resource: &quot;&quot;,////\u83DC\u5355\u6570\u7EC4
    menuIds: &quot;&quot;
})
// \u83DC\u5355\u9009\u53D6
const setUseCheck = (checkedNodes: any, e: any) =&gt; {
    console.log(e.checkedKeys)
    e.checkedKeys.map((item: any, index: any) =&gt; {
        if (item == null) {
            e.checkedKeys.splice(index, 1)
        }
    })
    ruleForm.value.menuIds = e.checkedKeys
}
const customNodeClass: any = (dataList: any, node: Node) =&gt; {
    if (dataList.enable==true || dataList.enable==false) {
        return &#39;is-penultimate&#39;
    }
    return null
}
const defaultProps = {
    children: &#39;modules&#39;,
    label: &#39;view&#39;,
    class: &#39;is-penultimate&#39;
}
let dataList = ref&lt;any&gt;()
onMounted(() =&gt; {
    dataList.value = [

        {
            &quot;view&quot;: &quot;\u4F9B\u5E94\u5546\u7BA1\u7406&quot;,
            &quot;modules&quot;: [
                {
                    &quot;name&quot;: &quot;SUPPLIER&quot;,
                    &quot;view&quot;: &quot;\u673A\u7968\u4F9B\u5E94\u5546\u7BA1\u7406&quot;,
                    &quot;enable&quot;: true,
                    &quot;actions&quot;: [
                        {
                            &quot;name&quot;: &quot;CREATE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;DELETE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;EDIT&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;VIEW&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;CREATE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;DELETE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;EDIT&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;VIEW&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;CREATE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;DELETE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;EDIT&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;VIEW&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;CREATE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;DELETE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;EDIT&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;VIEW&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        }
                    ]
                },
                {
                    &quot;name&quot;: &quot;SUPPLIER_INTERFACE&quot;,
                    &quot;view&quot;: &quot;\u673A\u7968\u4F9B\u5E94\u5546\u63A5\u53E3\u7BA1\u7406&quot;,
                    &quot;enable&quot;: false,
                    &quot;actions&quot;: [
                        {
                            &quot;name&quot;: &quot;CREATE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;DELETE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;EDIT&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;VIEW&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        }
                    ]
                }
            ]
        },
        {
            &quot;view&quot;: &quot;\u673A\u7968\u653F\u7B56\u7BA1\u7406&quot;,
            &quot;modules&quot;: [
                {
                    &quot;name&quot;: &quot;POLICY&quot;,
                    &quot;view&quot;: &quot;\u653F\u7B56\u7BA1\u7406&quot;,
                    &quot;enable&quot;: true,
                    &quot;actions&quot;: [
                        {
                            &quot;name&quot;: &quot;CREATE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;DELETE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;EDIT&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;VIEW&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        }
                    ]
                }
            ]
        },
        {
            &quot;view&quot;: &quot;\u62A5\u8868\u4E2D\u5FC3&quot;,
            &quot;modules&quot;: [
                {
                    &quot;name&quot;: &quot;supplierFlowReport&quot;,
                    &quot;view&quot;: &quot;\u4F9B\u5E94\u5546\u6D41\u91CF\u62A5\u8868&quot;,
                    &quot;enable&quot;: true,
                    &quot;actions&quot;: [
                        {
                            &quot;name&quot;: &quot;CREATE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;DELETE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;EDIT&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;VIEW&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        }
                    ]
                }
            ]
        },
        {
            &quot;view&quot;: &quot;\u57FA\u672C\u8BBE\u7F6E&quot;,
            &quot;modules&quot;: [
                {
                    &quot;name&quot;: &quot;ACCOUNT&quot;,
                    &quot;view&quot;: &quot;\u5458\u5DE5\u8D26\u53F7\u5BC6\u7801\u7BA1\u7406&quot;,
                    &quot;enable&quot;: false,
                    &quot;actions&quot;: [
                        {
                            &quot;name&quot;: &quot;CREATE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;DELETE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;EDIT&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;VIEW&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        }
                    ]
                },
                {
                    &quot;name&quot;: &quot;deptMgmt&quot;,
                    &quot;view&quot;: &quot;\u90E8\u95E8\u7BA1\u7406&quot;,
                    &quot;enable&quot;: true,
                    &quot;actions&quot;: [
                        {
                            &quot;name&quot;: &quot;CREATE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;DELETE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;EDIT&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;VIEW&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        }
                    ]
                },
                {
                    &quot;name&quot;: &quot;positionMgmt&quot;,
                    &quot;view&quot;: &quot;\u804C\u4F4D\u7BA1\u7406&quot;,
                    &quot;enable&quot;: false,
                    &quot;actions&quot;: [
                        {
                            &quot;name&quot;: &quot;CREATE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;DELETE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;EDIT&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;VIEW&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        }
                    ]
                }
            ]
        }
    ]
    // \u6570\u636E\u7EC4\u7EC7
    dataList.value.map((item: any, index: number) =&gt; {
        item.id = index + 1
        item.name = item.view
        item.modules.map((items: any, indexs: any) =&gt; {
            items.id = Number(item.id + &#39;&#39; + (indexs + 1))
            items.actions.map((itemt: any, indext: number) =&gt; {
                itemt.view = itemt.name
                itemt.id = Number(items.id + &#39;&#39; + (indext + 1))
            })
            items.modules = items.actions
        })
    })
    console.log(dataList.value)
})


&lt;/script&gt;
&lt;style lang=&quot;scss&quot;&gt;
.is-penultimate &gt; .el-tree-node__content {
  color: #626aef;
}

.el-tree-node.is-expanded.is-penultimate &gt; .el-tree-node__children {
  display: flex;
  flex-wrap: wrap;
}
.is-penultimate &gt; .el-tree-node__children &gt; div {
  width: 25%;
}
.is-penultimate  &gt;.el-collapse-transition-leave-active{
    display: flex !important;
}
.is-penultimate  &gt;.el-collapse-transition-enter-active{
      flex-direction: row !important;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C</p><img src="`+u+`" alt="solar"><h2 id="element-plus\u7684table\u5408\u5E76\u5355\u5143\u683C" tabindex="-1"><a class="header-anchor" href="#element-plus\u7684table\u5408\u5E76\u5355\u5143\u683C" aria-hidden="true">#</a> element plus\u7684table\u5408\u5E76\u5355\u5143\u683C</h2><p>\u5C31element+\u4E2D\u7684el-table\u4E2D\u7684span-method\u65B9\u6CD5\u7684\u4F7F\u7528\u548C\u9047\u5230\u7684\u4E00\u4E9B\u95EE\u9898 \u5982\u679C\u60F3\u8981\u5C06\u540E\u4E00\u5217\u6328\u7740\u7684\u5355\u5143\u683C\u5408\u5E76\uFF0Creturn 1,2,\u4F46\u662F\u5F97\u5C06\u540E\u4E00\u4E2A\u5355\u5143\u683C\u8BBE\u7F6E\u4E3A 0\uFF0C0\uFF0C\u4E0D\u7136\u4F1A\u88AB\u63A8\u8D70</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;el-table
      :data=&quot;tableData&quot;
      :span-method=&quot;arraySpanMethod&quot;
      border
      style=&quot;width: 100%&quot;
    &gt;
      &lt;el-table-column prop=&quot;id&quot; label=&quot;ID&quot; width=&quot;180&quot; /&gt;
      &lt;el-table-column prop=&quot;name&quot; label=&quot;Name&quot; /&gt;
      &lt;el-table-column prop=&quot;amount1&quot; sortable label=&quot;Amount 1&quot; /&gt;
      &lt;el-table-column prop=&quot;amount2&quot; sortable label=&quot;Amount 2&quot; /&gt;
      &lt;el-table-column prop=&quot;amount3&quot; sortable label=&quot;Amount 3&quot; /&gt;
    &lt;/el-table&gt;

    &lt;el-table
      :data=&quot;tableData&quot;
      :span-method=&quot;objectSpanMethod&quot;
      border
      style=&quot;width: 100%; margin-top: 20px&quot;
    &gt;
      &lt;el-table-column prop=&quot;id&quot; label=&quot;ID&quot; width=&quot;180&quot; /&gt;
      &lt;el-table-column prop=&quot;name&quot; label=&quot;Name&quot; /&gt;
      &lt;el-table-column prop=&quot;amount1&quot; label=&quot;Amount 1&quot; /&gt;
      &lt;el-table-column prop=&quot;amount2&quot; label=&quot;Amount 2&quot; /&gt;
      &lt;el-table-column prop=&quot;amount3&quot; label=&quot;Amount 3&quot; /&gt;
    &lt;/el-table&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import type { TableColumnCtx } from &#39;element-plus&#39;

interface User {
  id: string
  name: string
  amount1: string
  amount2: string
  amount3: number
}

interface SpanMethodProps {
  row: User
  column: TableColumnCtx&lt;User&gt;
  rowIndex: number
  columnIndex: number
}

const arraySpanMethod = ({
  row,
  column,
  rowIndex,
  columnIndex,
}: SpanMethodProps) =&gt; {
  if (rowIndex % 2 === 0) {
    if (columnIndex === 0) {
      return [1, 2]
    } else if (columnIndex === 1) {
      return [0, 0]
    }
  }
}

const objectSpanMethod = ({
  row,
  column,
  rowIndex,
  columnIndex,
}: SpanMethodProps) =&gt; {
  if (columnIndex === 0) {
    if (rowIndex % 2 === 0) {
      return { //\u8FD9\u91CC\u8868\u793A\uFF0C\u5355\u524D\u5355\u5143\u683C\u548C\u540E\u4E00\u5217\u7684\u5355\u5143\u683C\u5408\u5E76
        rowspan: 1,
        colspan: 2,
      }
    } 
    else { //\u8FD4\u56DE11\u8868\u793A\u6B64\u5355\u5143\u663E\u793A
      return {
        rowspan: 1,
        colspan: 1,
      }
    }
  }else if(columnIndex === 1){
    if (rowIndex % 2 === 0) {
      return { //\u8FD4\u56DE00\u8868\u793A\u6B64\u5355\u5143\u683C\u79FB\u51FA
        rowspan: 0,
        colspan: 0,
      }
    } 
    else {
      return {
        rowspan: 1,
        colspan: 1,
      }
    }
  }
}

const tableData: User[] = [
  {
    id: &#39;\u5408\u8BA1&#39;,
    name: &#39;Tom&#39;,
    amount1: &#39;234&#39;,
    amount2: &#39;3.2&#39;,
    amount3: 10,
  },
  {
    id: &#39;12987123&#39;,
    name: &#39;Tom&#39;,
    amount1: &#39;165&#39;,
    amount2: &#39;4.43&#39;,
    amount3: 12,
  },
  {
    id: &#39;\u5408\u8BA1&#39;,
    name: &#39;Tom&#39;,
    amount1: &#39;324&#39;,
    amount2: &#39;1.9&#39;,
    amount3: 9,
  },
  {
    id: &#39;12987125&#39;,
    name: &#39;Tom&#39;,
    amount1: &#39;621&#39;,
    amount2: &#39;2.2&#39;,
    amount3: 17,
  },
  {
    id: &#39;\u5408\u8BA1&#39;,
    name: &#39;Tom&#39;,
    amount1: &#39;539&#39;,
    amount2: &#39;4.1&#39;,
    amount3: 15,
  },
]
&lt;/script&gt;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4FEE\u6539el-input-\u7684placeholder\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539el-input-\u7684placeholder\u6837\u5F0F" aria-hidden="true">#</a> \u4FEE\u6539el-input \u7684placeholder\u6837\u5F0F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>:deep(.el-input__inner::placeholder){
    font-size: 12px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6309f12\u540E\u52A8\u6001\u76D1\u542C\u7A97\u53E3\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#\u6309f12\u540E\u52A8\u6001\u76D1\u542C\u7A97\u53E3\u5927\u5C0F" aria-hidden="true">#</a> \u6309F12\u540E\u52A8\u6001\u76D1\u542C\u7A97\u53E3\u5927\u5C0F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;template&gt;
    &lt;div class=&quot;cont&quot; ref=&quot;contHeight&quot;&gt;
        
    &lt;/div&gt;
&lt;/template&gt;
&lt;script setup  lang=&quot;ts&quot;&gt;
import { onMounted,onUnmounted,ref } from &#39;vue&#39;;
// \u9875\u9762\u9AD8\u5EA6
let contHeight = ref()

//\u8FD9\u91CC\u76D1\u542C\u9875\u9762\u5927\u5C0F
const updateWindowWidth = () =&gt; {
    let contHeights = contHeight.value?.clientHeight
}
onMounted(() =&gt; {
    // \u6574\u4E2A\u9875\u9762\u9AD8\u5EA6
    let contHeights = contHeight.value?.clientHeight
    window.addEventListener(&#39;resize&#39;, updateWindowWidth)
    getQueryOrder()
})
onUnmounted(() =&gt; {
    window.removeEventListener(&#39;resize&#39;, updateWindowWidth)
})


&lt;/script&gt;
&lt;style scoped lang=&quot;scss&quot;&gt;

&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),v=[d];function t(a,r){return e(),i("div",null,v)}var c=n(s,[["render",t],["__file","elementplus\u5E38\u7528.html.vue"]]);export{c as default};
