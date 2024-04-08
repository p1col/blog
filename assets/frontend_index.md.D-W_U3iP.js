import{_ as s,c as a,o as i,a4 as e}from"./chunks/framework.CoXrbPD0.js";const u=JSON.parse('{"title":"指引","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/index.md","filePath":"frontend/index.md","lastUpdated":1712543805000}'),n={name:"frontend/index.md"},t=e(`<h1 id="指引" tabindex="-1">指引 <a class="header-anchor" href="#指引" aria-label="Permalink to &quot;指引&quot;">​</a></h1><h2 id="vitepress" tabindex="-1">VitePress <a class="header-anchor" href="#vitepress" aria-label="Permalink to &quot;VitePress&quot;">​</a></h2><h3 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h3><p>VitePress 的配置文件默认放在项目根目录下：<code>.vitepress/config.[mts|mjs|js|ts]</code></p><h3 id="图片显示不出来" tabindex="-1">图片显示不出来 <a class="header-anchor" href="#图片显示不出来" aria-label="Permalink to &quot;图片显示不出来&quot;">​</a></h3><p>图片需要放在 <code>public</code> 目录下，<code>public</code> 目录应放在<a href="#配置文件">配置文件</a>中的 <code>srcDir</code> 指定的目录下，如 <code>src</code>。</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  srcDir: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;src&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 此时 public 目录应放在 src 目录下</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="部署找不到静态资源" tabindex="-1">部署找不到静态资源 <a class="header-anchor" href="#部署找不到静态资源" aria-label="Permalink to &quot;部署找不到静态资源&quot;">​</a></h3><p>检查<a href="#配置文件">配置文件</a>中的 <code>base</code> 字段是否正确。</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  base: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如果需要部署在子路径下，如 <code>https://foo.github.io/bar/</code>，则应将 <code>base</code> 设为 <code>/bar/</code>。</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  base: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/bar/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,12),l=[t];function p(r,h,d,c,o,k){return i(),a("div",null,l)}const E=s(n,[["render",p]]);export{u as __pageData,E as default};
