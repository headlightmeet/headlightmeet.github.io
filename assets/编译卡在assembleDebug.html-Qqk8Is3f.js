import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,d as l,a as s,e as d}from"./app-PxqKmrwv.js";const r={},a=s("p",null," ",-1),v=d(`<h1 id="编译卡在assembledebug" tabindex="-1"><a class="header-anchor" href="#编译卡在assembledebug" aria-hidden="true">#</a> 编译卡在assembleDebug</h1><p>Gradle源在国外，国内构建项目的时候经常报错连接超时，修改国内镜像可以解决。 方法 配置方式有仅对单个项目生效和对所有项目生效两种方式</p><p>对单个项目生效 1.打开Android Studio工程文件，找到build.gradle</p><p>2.使用文本编辑器打开，默认格式如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Top-level build file where you can add configuration options common to all sub-projects/modules.

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>３.修改为以下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Top-level build file where you can add configuration options common to all sub-projects/modules.

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对所有项目生效 1.打开系统用户的Gradle配置目录：C:\\Users\\xxx.gradle</p><p>2.新建文件init.gradle（注意文件后缀名为gradle）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>allprojects{
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function c(u,o){return i(),n("div",null,[a,l(" more "),v])}const b=e(r,[["render",c],["__file","编译卡在assembleDebug.html.vue"]]);export{b as default};
