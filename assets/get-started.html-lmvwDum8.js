import{_ as t,c as d,a as i,o}from"./app-D3jPUFon.js";const r={};function a(c,e){return o(),d("div",null,e[0]||(e[0]=[i(`<h1 id="get-started" tabindex="-1"><a class="header-anchor" href="#get-started"><span>Get Started</span></a></h1><h2 id="x96-assembly-syntax" tabindex="-1"><a class="header-anchor" href="#x96-assembly-syntax"><span>x96 Assembly Syntax</span></a></h2><p>x96 Assembly can technically be written using AT&amp;T syntax or Intel syntax, but the prefered is Ignitem syntax.</p><p>Ignitem syntax is based on Intel syntax, and they share many in common so it&#39;s recommended to be accommoded with the Intel syntax.</p><h3 id="ignitem-syntax" tabindex="-1"><a class="header-anchor" href="#ignitem-syntax"><span>Ignitem Syntax</span></a></h3><ul><li>The instructions follow the scheme <code>mnemonic destination, source</code>, like in Intel syntax</li><li>Registers and immediate values aren&#39;t preceded by any prefix, like in Intel syntax</li><li>Write data directives: <ul><li><code>wb</code>: Write the following byte(s) (8-bit)</li><li><code>ww</code>: Write the following word(s) (16-bit)</li><li><code>wd</code>: Write the following dword(s) (32-bit)</li><li><code>wo</code>: Write the following octo(s) (64-bit)</li><li><code>ws</code>: Write the following sedecimbyte(s) (128-bit)</li></ul></li><li>Directives aren&#39;t preceded by any special character</li><li>Comments: <ul><li>Inline comments start with <code>;</code>, <code>//</code> or <code>#</code></li><li>Multi-line comments are surrounded by <code>;; ... ;;</code>, <code>/* ... */</code> or <code>#* ... *#</code></li></ul></li></ul><h2 id="registers" tabindex="-1"><a class="header-anchor" href="#registers"><span>Registers</span></a></h2><h3 id="main-registers" tabindex="-1"><a class="header-anchor" href="#main-registers"><span>Main Registers</span></a></h3><p>In x96, the register naming scheme and internal addressing is very different from x86, here are the main registers:</p><table><thead><tr><th>Name</th><th>Size</th><th style="text-align:right;">Internal Address (binary)</th></tr></thead><tbody><tr><td><code>ras</code></td><td>sedecimbyte (<code>s</code>, 128-bit)</td><td style="text-align:right;"><code>0b(00 1111111111111111)</code></td></tr><tr><td><code>rbs</code></td><td>sedecimbyte (<code>s</code>, 128-bit)</td><td style="text-align:right;"><code>0b(01 1111111111111111)</code></td></tr><tr><td><code>rcs</code></td><td>sedecimbyte (<code>s</code>, 128-bit)</td><td style="text-align:right;"><code>0b(10 1111111111111111)</code></td></tr><tr><td><code>rds</code></td><td>sedecimbyte (<code>s</code>, 128-bit)</td><td style="text-align:right;"><code>0b(11 1111111111111111)</code></td></tr><tr><td><code>rao</code></td><td>octo (<code>o</code>, 64-bit)</td><td style="text-align:right;"><code>0b(00 0000000011111111)</code></td></tr><tr><td><code>rbo</code></td><td>octo (<code>o</code>, 64-bit)</td><td style="text-align:right;"><code>0b(01 0000000011111111)</code></td></tr><tr><td><code>rco</code></td><td>octo (<code>o</code>, 64-bit)</td><td style="text-align:right;"><code>0b(10 0000000011111111)</code></td></tr><tr><td><code>rdo</code></td><td>octo (<code>o</code>, 64-bit)</td><td style="text-align:right;"><code>0b(11 0000000011111111)</code></td></tr><tr><td><code>rad</code></td><td>dword (<code>d</code>, 32-bit)</td><td style="text-align:right;"><code>0b(00 0000000000001111)</code></td></tr><tr><td><code>rbd</code></td><td>dword (<code>d</code>, 32-bit)</td><td style="text-align:right;"><code>0b(01 0000000000001111)</code></td></tr><tr><td><code>rcd</code></td><td>dword (<code>d</code>, 32-bit)</td><td style="text-align:right;"><code>0b(10 0000000000001111)</code></td></tr><tr><td><code>rdd</code></td><td>dword (<code>d</code>, 32-bit)</td><td style="text-align:right;"><code>0b(11 0000000000001111)</code></td></tr><tr><td><code>raw</code></td><td>word (<code>w</code>, 16-bit)</td><td style="text-align:right;"><code>0b(00 0000000000000011)</code></td></tr><tr><td><code>rbw</code></td><td>word (<code>w</code>, 16-bit)</td><td style="text-align:right;"><code>0b(01 0000000000000011)</code></td></tr><tr><td><code>rcw</code></td><td>word (<code>w</code>, 16-bit)</td><td style="text-align:right;"><code>0b(10 0000000000000011)</code></td></tr><tr><td><code>rdw</code></td><td>word (<code>w</code>, 16-bit)</td><td style="text-align:right;"><code>0b(11 0000000000000011)</code></td></tr><tr><td><code>rab</code></td><td>byte (<code>b</code>, 8-bit)</td><td style="text-align:right;"><code>0b(00 0000000000000001)</code></td></tr><tr><td><code>rbb</code></td><td>byte (<code>b</code>, 8-bit)</td><td style="text-align:right;"><code>0b(01 0000000000000001)</code></td></tr><tr><td><code>rcb</code></td><td>byte (<code>b</code>, 8-bit)</td><td style="text-align:right;"><code>0b(10 0000000000000001)</code></td></tr><tr><td><code>rdb</code></td><td>byte (<code>b</code>, 8-bit)</td><td style="text-align:right;"><code>0b(11 0000000000000001)</code></td></tr></tbody></table><h3 id="naming-scheme-internal-addressing" tabindex="-1"><a class="header-anchor" href="#naming-scheme-internal-addressing"><span>Naming Scheme &amp; Internal Addressing</span></a></h3><p>x96 standardize the naming scheme and make it scalable, with a simple formula to find it, while still being descriptive despite being concise.</p><p>The naming scheme follow this rule:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">regPart_prefix + regId + mainReg_sizeSuffix</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Where <code>regPart_prefix</code> is based on the location of the register in the main register, <code>regId</code> is the letter identifying the register (<code>a</code>, <code>b</code>, <code>c</code> and <code>d</code>) and <code>mainReg_sizeSuffix</code> is the suffix identifying the size of the main register.</p><p><code>regPart_prefix</code> follow these rules:</p><ul><li>If it&#39;s a main register (top-most register or lower bits of a top-most register) then it&#39;s <code>&quot;r&quot;</code></li><li>If it&#39;s the higher bits of its parent register, then it&#39;s first character is <code>&#39;h&#39;</code></li><li>If it&#39;s the lower bits of its parent register, then it&#39;s first character is <code>&#39;l&#39;</code></li><li>Then it follow a hierarchical structure by adding the <code>regPart_prefix</code> of it&#39;s parent register (for the higher part of main registers, the <code>&#39;r&#39;</code> is replaced by the <code>&#39;h&#39;</code>)</li></ul><p>These parts of main registers are called &quot;hierarchical registers&quot;.</p><p>This new naming convention reflect in the internal addresses, where the first 2 bits are <code>regId - &#39;a&#39;</code> and the next 16 bits are the 8-bit chunks of the top-most register affected by the hierarchical register.</p><p>Here&#39;s the schema of a x96 top-most register (<code>ras</code>) with its hierarchical registers, each row a deeper level:</p><table id="hierarchical-registers-schema"><tbody><tr><th class="sr-only">Top-most level - main register (128-bits)</th><td colspan="16" align="center"><code>ras</code></td></tr><tr><th class="sr-only">Second level - 64-bits</th><td colspan="8" align="center"><code>has</code></td><td colspan="8" align="center"><code>rao</code></td></tr><tr><th class="sr-only">Third level - 32-bits</th><td colspan="4" align="center"><code>hhas</code></td><td colspan="4" align="center"><code>lhas</code></td><td colspan="4" align="center"><code>hao</code></td><td colspan="4" align="center"><code>rad</code></td></tr><tr><th class="sr-only">Fourth level - 16-bits</th><td colspan="2" align="center"><code>hhhas</code></td><td colspan="2" align="center"><code>lhhas</code></td><td colspan="2" align="center"><code>hlhas</code></td><td colspan="2" align="center"><code>llhas</code></td><td colspan="2" align="center"><code>hhao</code></td><td colspan="2" align="center"><code>lhao</code></td><td colspan="2" align="center"><code>had</code></td><td colspan="2" align="center"><code>raw</code></td></tr><tr><th class="sr-only">Fifth (last) level - 8-bits</th><td align="center"><code>hhhhas</code></td><td align="center"><code>lhhhas</code></td><td align="center"><code>hlhhas</code></td><td align="center"><code>llhhas</code></td><td align="center"><code>hhlhas</code></td><td align="center"><code>lhlhas</code></td><td align="center"><code>hllhas</code></td><td align="center"><code>lllhas</code></td><td align="center"><code>hhhao</code></td><td align="center"><code>lhhao</code></td><td align="center"><code>hlhao</code></td><td align="center"><code>llhao</code></td><td align="center"><code>hhad</code></td><td align="center"><code>lhad</code></td><td align="center"><code>haw</code></td><td align="center"><code>rab</code></td></tr></tbody></table><h2 id="history" tabindex="-1"><a class="header-anchor" href="#history"><span>History</span></a></h2><h3 id="ignitem-s-history" tabindex="-1"><a class="header-anchor" href="#ignitem-s-history"><span>Ignitem&#39;s History</span></a></h3><p>Ignitem was founded with the goal of advancing processor technology by building upon the foundations of the x86 architecture. Their focus on innovative, scalable designs led to the creation of a new instruction set architecture, x96.</p><h3 id="x96-s-origin" tabindex="-1"><a class="header-anchor" href="#x96-s-origin"><span>x96&#39;s Origin</span></a></h3><p>x96 was developed to address some of the limitations found in existing ISAs, particularly x86. While maintaining compatibility with many legacy features, x96 introduces optimizations to streamline instruction execution, improve memory handling, and offer more flexibility in register access. Key improvements include support for embedded comments in binaries, streamlined data size handling (from bytes to sedecimbytes), and the elimination of outdated or redundant instructions. One of the key design principles behind x96 was to offer a cleaner, more efficient alternative while maintaining the versatility that made x86 a dominant ISA.</p><h3 id="the-future" tabindex="-1"><a class="header-anchor" href="#the-future"><span>The Future</span></a></h3><p>x96 is planned to be the core of Ignitem&#39;s future CPUs, including their upcoming Vector v series, which will target various market segments with editions:</p><ul><li>General Purpose (GP)</li><li>Gaming (GX)</li><li>Embedded (E)</li><li>Pro Embedded (PE)</li><li>Performance (PX)</li><li>AI-focused Performance (PX-AI)</li></ul><p>These CPUs will serve as the hardware foundation for x96&#39;s evolution.</p>`,30)]))}const s=t(r,[["render",a],["__file","get-started.html.vue"]]),l=JSON.parse(`{"path":"/get-started.html","title":"Get Started","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"x96 Assembly Syntax","slug":"x96-assembly-syntax","link":"#x96-assembly-syntax","children":[{"level":3,"title":"Ignitem Syntax","slug":"ignitem-syntax","link":"#ignitem-syntax","children":[]}]},{"level":2,"title":"Registers","slug":"registers","link":"#registers","children":[{"level":3,"title":"Main Registers","slug":"main-registers","link":"#main-registers","children":[]},{"level":3,"title":"Naming Scheme & Internal Addressing","slug":"naming-scheme-internal-addressing","link":"#naming-scheme-internal-addressing","children":[]}]},{"level":2,"title":"History","slug":"history","link":"#history","children":[{"level":3,"title":"Ignitem's History","slug":"ignitem-s-history","link":"#ignitem-s-history","children":[]},{"level":3,"title":"x96's Origin","slug":"x96-s-origin","link":"#x96-s-origin","children":[]},{"level":3,"title":"The Future","slug":"the-future","link":"#the-future","children":[]}]}],"git":{"updatedTime":1728042841000,"contributors":[{"name":"foxy pirate cove / Fnaf","email":"108185011+foxypiratecove37350@users.noreply.github.com","commits":1}]},"filePathRelative":"get-started.md"}`);export{s as comp,l as data};
