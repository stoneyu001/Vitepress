import{_ as a,c as e,o as r,a2 as t}from"./chunks/framework.Cw_AIpAc.js";const b=JSON.parse('{"title":"浅浅记录下文明6的苦逼联机：","description":"","frontmatter":{"tags":["游戏/游戏bug攻略"]},"headers":[],"relativePath":"文明6.md","filePath":"文明6.md"}'),i={name:"文明6.md"},o=t(`<p>![[Pasted image 20230912125703.png]]![[Pasted image 20230913161726.png]]</p><h1 id="浅浅记录下文明6的苦逼联机" tabindex="-1">浅浅记录下文明6的苦逼联机： <a class="header-anchor" href="#浅浅记录下文明6的苦逼联机" aria-label="Permalink to &quot;浅浅记录下文明6的苦逼联机：&quot;">​</a></h1><h4 id="出现过的问题" tabindex="-1">出现过的问题： <a class="header-anchor" href="#出现过的问题" aria-label="Permalink to &quot;出现过的问题：&quot;">​</a></h4><p>1.局域网联机搜不到房间 2.我能搜到他，他搜不到我 3.数据不同步，过回合加入房间的人重新加载（会导致溢出瓶使用bug，即上回合用溢出瓶解锁的科技被退回，所有操作也退回）</p><h2 id="已解决" tabindex="-1">已解决： <a class="header-anchor" href="#已解决" aria-label="Permalink to &quot;已解决：&quot;">​</a></h2><p>1.禁用除了所用局域网的其他网络 在某些扯淡网站找到法子说，见证奇迹（帖子原话）。事实上，效果拔群，确实能搜到了。 2.修改所用网络跃点，保证网络优先度 解决了第一个问题后与之而来的就是第二个问题，我搜不到他，我们检查了很多地方，改了很多设置，一直怀疑防火墙有问题,然后甚至改了最宽松的入站出站规则（不太懂）都不行。最后是在b站专栏（真的有佬）找到的解决。 原文有点[[专业]]名词，我能理解的是我的wifi优先度过低，跟局域网不处于同一网段（这里好像跟今天学的计算机网络很有关系！9.14） 另外有大佬做的小工具WinIPBroadcast软件可以强制发送广播包到每个网卡。 原帖： <a href="https://www.bilibili.com/read/cv15558454/?from=search&amp;spm_id_from=333.337.0.0" target="_blank" rel="noreferrer">文明6多人局域网刷新不出房间的解决方法 - 哔哩哔哩 (bilibili.com)</a> 另一个<a href="https://www.bilibili.com/read/cv14633088/?from=search&amp;spm_id_from=333.337.0.0" target="_blank" rel="noreferrer">文明6等游戏虚拟局域网联机搜不到房间的解决办法 - 哔哩哔哩 (bilibili.com)</a></p><h2 id="未解决" tabindex="-1">未解决： <a class="header-anchor" href="#未解决" aria-label="Permalink to &quot;未解决：&quot;">​</a></h2><pre><code>数据不同步，重载问题
原本以为是网络乃至硬件问题，实际上
</code></pre>`,8),n=[o];function s(c,l,_,d,h,m){return r(),e("div",null,n)}const f=a(i,[["render",s]]);export{b as __pageData,f as default};
