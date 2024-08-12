import{_ as s,o as i,c as a,R as n}from"./chunks/framework.Bs_Q0j17.js";const o=JSON.parse('{"title":"Feign 相关内容","description":"","frontmatter":{},"headers":[],"relativePath":"java/feign-global-config.md","filePath":"java/feign-global-config.md","lastUpdated":1703841519000}'),l={name:"java/feign-global-config.md"},e=n(`<h1 id="feign-相关内容" tabindex="-1">Feign 相关内容 <a class="header-anchor" href="#feign-相关内容" aria-label="Permalink to &quot;Feign 相关内容&quot;">​</a></h1><h2 id="为feign添加全局配置和接口调用失败的后处理" tabindex="-1">为Feign添加全局配置和接口调用失败的后处理 <a class="header-anchor" href="#为feign添加全局配置和接口调用失败的后处理" aria-label="Permalink to &quot;为Feign添加全局配置和接口调用失败的后处理&quot;">​</a></h2><h4 id="编写配置类" tabindex="-1">编写配置类 <a class="header-anchor" href="#编写配置类" aria-label="Permalink to &quot;编写配置类&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@Configuration</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">public </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GlobalFeignConfiguration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> final String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">AUTHORIZATION</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Authorization&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fianl String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">TOKEN_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Bearer &quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @Bean</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RequestInterceptor </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">headerInterceptor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> template </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Map&lt;String, Collection&lt;String&gt;&gt; headers </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ImmutableMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AUTHORIZATION</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Lists.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">newArrayList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">valueOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TOKEN_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;123553453dasdad&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            template.headers(headers);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h4 id="接口调用失败的后处理" tabindex="-1">接口调用失败的后处理 <a class="header-anchor" href="#接口调用失败的后处理" aria-label="Permalink to &quot;接口调用失败的后处理&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 实现TestFeignFeign接口的方法并编写对应处理即可</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@Slf4j</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@Component</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">public </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TestFeignFallBack</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TestFeign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="为feign接口添加全局配置和失败后处理" tabindex="-1">为Feign接口添加全局配置和失败后处理 <a class="header-anchor" href="#为feign接口添加全局配置和失败后处理" aria-label="Permalink to &quot;为Feign接口添加全局配置和失败后处理&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FeignClient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;test-demo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        configuration </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GlobalFeignConfiguration.class, fallback </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TestFeign.class)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">public </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TestFeign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,8),p=[e];function t(h,k,r,E,d,g){return i(),a("div",null,p)}const b=s(l,[["render",t]]);export{o as __pageData,b as default};