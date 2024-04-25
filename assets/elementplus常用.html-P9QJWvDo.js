import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as i,d as l,a as u,e as s}from"./app-PxqKmrwv.js";const d={},v=u("p",null," ",-1),t=s(`<h1 id="elementplus常用" tabindex="-1"><a class="header-anchor" href="#elementplus常用" aria-hidden="true">#</a> elementplus常用</h1><h2 id="分页修改背景色" tabindex="-1"><a class="header-anchor" href="#分页修改背景色" aria-hidden="true">#</a> 分页修改背景色</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>:deep(.el-pagination.is-background .el-pager li:not(.is-disabled).is-active) {
  background-color: #494893 !important;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="角色分配权限菜单" tabindex="-1"><a class="header-anchor" href="#角色分配权限菜单" aria-hidden="true">#</a> 角色分配权限菜单</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 角色管理 --&gt;
&lt;!-- 别删，多按钮分配的流程 --&gt;
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
// 编辑/新增数据
let ruleForm: any = ref({
    name: &quot;&quot;,//角色名称
    resource: &quot;&quot;,////菜单数组
    menuIds: &quot;&quot;
})
// 菜单选取
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
            &quot;view&quot;: &quot;供应商管理&quot;,
            &quot;modules&quot;: [
                {
                    &quot;name&quot;: &quot;SUPPLIER&quot;,
                    &quot;view&quot;: &quot;机票供应商管理&quot;,
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
                    &quot;view&quot;: &quot;机票供应商接口管理&quot;,
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
            &quot;view&quot;: &quot;机票政策管理&quot;,
            &quot;modules&quot;: [
                {
                    &quot;name&quot;: &quot;POLICY&quot;,
                    &quot;view&quot;: &quot;政策管理&quot;,
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
            &quot;view&quot;: &quot;报表中心&quot;,
            &quot;modules&quot;: [
                {
                    &quot;name&quot;: &quot;supplierFlowReport&quot;,
                    &quot;view&quot;: &quot;供应商流量报表&quot;,
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
            &quot;view&quot;: &quot;基本设置&quot;,
            &quot;modules&quot;: [
                {
                    &quot;name&quot;: &quot;ACCOUNT&quot;,
                    &quot;view&quot;: &quot;员工账号密码管理&quot;,
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
                    &quot;view&quot;: &quot;部门管理&quot;,
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
                    &quot;view&quot;: &quot;职位管理&quot;,
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
    // 数据组织
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果</p><img src="https://jitems.gitee.io/myblog/blog/bk577.png" alt="solar"><h2 id="element-plus的table合并单元格" tabindex="-1"><a class="header-anchor" href="#element-plus的table合并单元格" aria-hidden="true">#</a> element plus的table合并单元格</h2><p>就element+中的el-table中的span-method方法的使用和遇到的一些问题 如果想要将后一列挨着的单元格合并，return 1,2,但是得将后一个单元格设置为 0，0，不然会被推走</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
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
      return { //这里表示，单前单元格和后一列的单元格合并
        rowspan: 1,
        colspan: 2,
      }
    } 
    else { //返回11表示此单元显示
      return {
        rowspan: 1,
        colspan: 1,
      }
    }
  }else if(columnIndex === 1){
    if (rowIndex % 2 === 0) {
      return { //返回00表示此单元格移出
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
    id: &#39;合计&#39;,
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
    id: &#39;合计&#39;,
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
    id: &#39;合计&#39;,
    name: &#39;Tom&#39;,
    amount1: &#39;539&#39;,
    amount2: &#39;4.1&#39;,
    amount3: 15,
  },
]
&lt;/script&gt;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改el-input-的placeholder样式" tabindex="-1"><a class="header-anchor" href="#修改el-input-的placeholder样式" aria-hidden="true">#</a> 修改el-input 的placeholder样式</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>:deep(.el-input__inner::placeholder){
    font-size: 12px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按f12后动态监听窗口大小" tabindex="-1"><a class="header-anchor" href="#按f12后动态监听窗口大小" aria-hidden="true">#</a> 按F12后动态监听窗口大小</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div class=&quot;cont&quot; ref=&quot;contHeight&quot;&gt;
        
    &lt;/div&gt;
&lt;/template&gt;
&lt;script setup  lang=&quot;ts&quot;&gt;
import { onMounted,onUnmounted,ref } from &#39;vue&#39;;
// 页面高度
let contHeight = ref()

//这里监听页面大小
const updateWindowWidth = () =&gt; {
    let contHeights = contHeight.value?.clientHeight
}
onMounted(() =&gt; {
    // 整个页面高度
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function a(r,o){return e(),i("div",null,[v,l(" more "),t])}const b=n(d,[["render",a],["__file","elementplus常用.html.vue"]]);export{b as default};
