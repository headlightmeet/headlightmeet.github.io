import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,a as l}from"./app.3c425ae9.js";const s={},d=l(`<h1 id="\u7F16\u8BD1\u5361\u5728assembledebug" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5361\u5728assembledebug" aria-hidden="true">#</a> \u7F16\u8BD1\u5361\u5728assembleDebug</h1><p>Gradle\u6E90\u5728\u56FD\u5916\uFF0C\u56FD\u5185\u6784\u5EFA\u9879\u76EE\u7684\u65F6\u5019\u7ECF\u5E38\u62A5\u9519\u8FDE\u63A5\u8D85\u65F6\uFF0C\u4FEE\u6539\u56FD\u5185\u955C\u50CF\u53EF\u4EE5\u89E3\u51B3\u3002 \u65B9\u6CD5 \u914D\u7F6E\u65B9\u5F0F\u6709\u4EC5\u5BF9\u5355\u4E2A\u9879\u76EE\u751F\u6548\u548C\u5BF9\u6240\u6709\u9879\u76EE\u751F\u6548\u4E24\u79CD\u65B9\u5F0F</p><p>\u5BF9\u5355\u4E2A\u9879\u76EE\u751F\u6548 1.\u6253\u5F00Android Studio\u5DE5\u7A0B\u6587\u4EF6\uFF0C\u627E\u5230build.gradle</p><p>2.\u4F7F\u7528\u6587\u672C\u7F16\u8F91\u5668\u6253\u5F00\uFF0C\u9ED8\u8BA4\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Top-level build file where you can add configuration options common to all sub-projects/modules.

buildscript {
    repositories {
        google()
        jcenter()
        
    }
    dependencies {
        classpath &#39;com.android.tools.build:gradle:3.5.1&#39;
        
        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}

allprojects {
    repositories {
        google()
        jcenter()
        
    }
}

task clean(type: Delete) {
    delete rootProject.buildDir
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uFF13.\u4FEE\u6539\u4E3A\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Top-level build file where you can add configuration options common to all sub-projects/modules.

buildscript {
    repositories {
        maven {
            url &#39;https://maven.aliyun.com/repository/google&#39;
        }
        maven {
            url &#39;https://maven.aliyun.com/repository/public&#39;
        }
        maven {
            url &#39;https://maven.aliyun.com/repository/jcenter&#39;
        }
    }
    dependencies {
        classpath &#39;com.android.tools.build:gradle:3.5.1&#39;


        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}

allprojects {
    repositories {
        maven {
            url &#39;https://maven.aliyun.com/repository/google&#39;
        }
        maven {
            url &#39;https://maven.aliyun.com/repository/public&#39;
        }
        maven {
            url &#39;https://maven.aliyun.com/repository/jcenter&#39;
        }
    }
}

task clean(type: Delete) {
    delete rootProject.buildDir
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u6240\u6709\u9879\u76EE\u751F\u6548 1.\u6253\u5F00\u7CFB\u7EDF\u7528\u6237\u7684Gradle\u914D\u7F6E\u76EE\u5F55\uFF1AC:\\Users\\xxx.gradle</p><p>2.\u65B0\u5EFA\u6587\u4EF6init.gradle\uFF08\u6CE8\u610F\u6587\u4EF6\u540E\u7F00\u540D\u4E3Agradle\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>allprojects{
    repositories {
        def ALIYUN_REPOSITORY_URL = &#39;https://maven.aliyun.com/repository/public&#39;
        def ALIYUN_JCENTER_URL = &#39;https://maven.aliyun.com/repository/jcenter&#39;
        all { ArtifactRepository repo -&gt;
            if (repo instanceof MavenArtifactRepository){
                def url = repo.url.toString()
                if (url.startsWith(&#39;https://repo1.maven.org/maven2&#39;)) {
                    project.logger.lifecycle &quot;Repository \${repo.url} replaced by $ALIYUN_REPOSITORY_URL.&quot;
                    remove repo
                }
                if (url.startsWith(&#39;https://jcenter.bintray.com/&#39;)) {
                    project.logger.lifecycle &quot;Repository \${repo.url} replaced by $ALIYUN_JCENTER_URL.&quot;
                    remove repo
                }
            }
        }
        maven {
            url ALIYUN_REPOSITORY_URL
            url ALIYUN_JCENTER_URL
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),r=[d];function v(a,c){return i(),n("div",null,r)}var o=e(s,[["render",v],["__file","\u7F16\u8BD1\u5361\u5728assembleDebug.html.vue"]]);export{o as default};
