import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.96fe74fa.js";const m=JSON.parse('{"title":"解决Centos下安装Nginx安装错误：No package nginx available 问题","description":"","frontmatter":{},"headers":[],"relativePath":"sundry/centos-install-nginx.md","filePath":"sundry/centos-install-nginx.md","lastUpdated":1694403565000}'),o={name:"sundry/centos-install-nginx.md"},l=n('<h1 id="解决centos下安装nginx安装错误-no-package-nginx-available-问题" tabindex="-1">解决Centos下安装Nginx安装错误：No package nginx available 问题 <a class="header-anchor" href="#解决centos下安装nginx安装错误-no-package-nginx-available-问题" aria-label="Permalink to &quot;解决Centos下安装Nginx安装错误：No package nginx available 问题&quot;">​</a></h1><h2 id="备份repo-防止修改错误还能还原" tabindex="-1">备份repo(防止修改错误还能还原) <a class="header-anchor" href="#备份repo-防止修改错误还能还原" aria-label="Permalink to &quot;备份repo(防止修改错误还能还原)&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/yum.repos.d/CentOS-Base.repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/yum.repos.d/CentOS-Base.repo.backup</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/yum.repos.d/CentOS-Base.repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/yum.repos.d/CentOS-Base.repo.backup</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="下载新的centos-base-repo到-etc-yum-repos-d" tabindex="-1">下载新的<code>CentOS-Base.repo</code>到 <code>/etc/yum.repos.d/</code> <a class="header-anchor" href="#下载新的centos-base-repo到-etc-yum-repos-d" aria-label="Permalink to &quot;下载新的`CentOS-Base.repo`到 `/etc/yum.repos.d/`&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">wget</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-O</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/yum.repos.d/CentOS-Base.repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://mirrors.aliyun.com/repo/Centos-[system-version].repo</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">wget</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-O</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/yum.repos.d/CentOS-Base.repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://mirrors.aliyun.com/repo/Centos-[system-version].repo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>或者</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-o</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/yum.repos.d/CentOS-Base.repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://mirrors.aliyun.com/repo/Centos-[system-version].repo</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-o</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/yum.repos.d/CentOS-Base.repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://mirrors.aliyun.com/repo/Centos-[system-version].repo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="把服务器的包信息下载到本地电脑缓存起来-makecache建立一个缓存" tabindex="-1">把服务器的包信息下载到本地电脑缓存起来，<code>makecache</code>建立一个缓存 <a class="header-anchor" href="#把服务器的包信息下载到本地电脑缓存起来-makecache建立一个缓存" aria-label="Permalink to &quot;把服务器的包信息下载到本地电脑缓存起来，`makecache`建立一个缓存&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">makecache</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">makecache</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="运行安装rpel源命令-安装完成之后你就可以直接使用yum来安装额外的软件包-也就是epel源" tabindex="-1">运行安装<code>rpel</code>源命令，安装完成之后你就可以直接使用<code>yum</code>来安装额外的软件包，也就是<code>epel</code>源 <a class="header-anchor" href="#运行安装rpel源命令-安装完成之后你就可以直接使用yum来安装额外的软件包-也就是epel源" aria-label="Permalink to &quot;运行安装`rpel`源命令，安装完成之后你就可以直接使用`yum`来安装额外的软件包，也就是`epel`源&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">epel-release</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">epel-release</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="运行安装命令" tabindex="-1">运行安装命令 <a class="header-anchor" href="#运行安装命令" aria-label="Permalink to &quot;运行安装命令&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',13),p=[l];function r(t,c,i,d,y,h){return a(),e("div",null,p)}const b=s(o,[["render",r]]);export{m as __pageData,b as default};