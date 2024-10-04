# Get Started

## x96 Assembly Syntax

x96 Assembly can technically be written using AT&T syntax or Intel syntax, but the prefered is Ignitem syntax.

Ignitem syntax is based on Intel syntax, and they share many in common so it's recommended to be accommoded with the Intel syntax.

### Ignitem Syntax

- The instructions follow the scheme `mnemonic destination, source`, like in Intel syntax
- Registers and immediate values aren't preceded by any prefix, like in Intel syntax
- Write data directives:
	- `wb`: Write the following byte(s) (8-bit)
	- `ww`: Write the following word(s) (16-bit)
	- `wd`: Write the following dword(s) (32-bit)
	- `wo`: Write the following octo(s) (64-bit)
	- `ws`: Write the following sedecimbyte(s) (128-bit)
- Directives aren't preceded by any special character
- Comments:
	- Inline comments start with `;`, `//` or `#`
	- Multi-line comments are surrounded by `;; ... ;;`, `/* ... */` or `#* ... *#`

## Registers

### Main Registers

In x96, the register naming scheme and internal addressing is very different from x86, here are the main registers:

| Name  | Size                       | Internal Address (binary) |
|-------|----------------------------|--------------------------:|
| `ras` | sedecimbyte (`s`, 128-bit) | `0b(00 1111111111111111)` |
| `rbs` | sedecimbyte (`s`, 128-bit) | `0b(01 1111111111111111)` |
| `rcs` | sedecimbyte (`s`, 128-bit) | `0b(10 1111111111111111)` |
| `rds` | sedecimbyte (`s`, 128-bit) | `0b(11 1111111111111111)` |
| `rao` | octo (`o`, 64-bit)         | `0b(00 0000000011111111)` |
| `rbo` | octo (`o`, 64-bit)         | `0b(01 0000000011111111)` |
| `rco` | octo (`o`, 64-bit)         | `0b(10 0000000011111111)` |
| `rdo` | octo (`o`, 64-bit)         | `0b(11 0000000011111111)` |
| `rad` | dword (`d`, 32-bit)        | `0b(00 0000000000001111)` |
| `rbd` | dword (`d`, 32-bit)        | `0b(01 0000000000001111)` |
| `rcd` | dword (`d`, 32-bit)        | `0b(10 0000000000001111)` |
| `rdd` | dword (`d`, 32-bit)        | `0b(11 0000000000001111)` |
| `raw` | word (`w`, 16-bit)         | `0b(00 0000000000000011)` |
| `rbw` | word (`w`, 16-bit)         | `0b(01 0000000000000011)` |
| `rcw` | word (`w`, 16-bit)         | `0b(10 0000000000000011)` |
| `rdw` | word (`w`, 16-bit)         | `0b(11 0000000000000011)` |
| `rab` | byte (`b`, 8-bit)          | `0b(00 0000000000000001)` |
| `rbb` | byte (`b`, 8-bit)          | `0b(01 0000000000000001)` |
| `rcb` | byte (`b`, 8-bit)          | `0b(10 0000000000000001)` |
| `rdb` | byte (`b`, 8-bit)          | `0b(11 0000000000000001)` |

### Naming Scheme & Internal Addressing

x96 standardize the naming scheme and make it scalable, with a simple formula to find it, while still being descriptive despite being concise.

The naming scheme follow this rule:

```
regPart_prefix + regId + mainReg_sizeSuffix
```

Where `regPart_prefix` is based on the location of the register in the main register, `regId` is the letter identifying the register (`a`, `b`, `c` and `d`) and `mainReg_sizeSuffix` is the suffix identifying the size of the main register.

`regPart_prefix` follow these rules:

- If it's a main register (top-most register or lower bits of a top-most register) then it's `"r"`
- If it's the higher bits of its parent register, then it's first character is `'h'`
- If it's the lower bits of its parent register, then it's first character is `'l'`
- Then it follow a hierarchical structure by adding the `regPart_prefix` of it's parent register (for the higher part of main registers, the `'r'` is replaced by the `'h'`)

These parts of main registers are called "hierarchical registers".

This new naming convention reflect in the internal addresses, where the first 2 bits are `regId - 'a'` and the next 16 bits are the 8-bit chunks of the top-most register affected by the hierarchical register.

Here's the schema of a x96 top-most register (`ras`) with its hierarchical registers, each row a deeper level:

<table id="hierarchical-registers-schema">
	<tbody>
		<tr>
			<th class="sr-only">Top-most level - main register (128-bits)</th>
			<td colspan="16" align="center"><code>ras</code></td>
		</tr>
		<tr>
			<th class="sr-only">Second level - 64-bits</th>
			<td colspan="8" align="center"><code>has</code></td>
			<td colspan="8" align="center"><code>rao</code></td>
		</tr>
		<tr>
			<th class="sr-only">Third level - 32-bits</th>
			<td colspan="4" align="center"><code>hhas</code></td>
			<td colspan="4" align="center"><code>lhas</code></td>
			<td colspan="4" align="center"><code>hao</code></td>
			<td colspan="4" align="center"><code>rad</code></td>
		</tr>
		<tr>
			<th class="sr-only">Fourth level - 16-bits</th>
			<td colspan="2" align="center"><code>hhhas</code></td>
			<td colspan="2" align="center"><code>lhhas</code></td>
			<td colspan="2" align="center"><code>hlhas</code></td>
			<td colspan="2" align="center"><code>llhas</code></td>
			<td colspan="2" align="center"><code>hhao</code></td>
			<td colspan="2" align="center"><code>lhao</code></td>
			<td colspan="2" align="center"><code>had</code></td>
			<td colspan="2" align="center"><code>raw</code></td>
		</tr>
		<tr>
			<th class="sr-only">Fifth (last) level - 8-bits</th>
			<td align="center"><code>hhhhas</code></td>
			<td align="center"><code>lhhhas</code></td>
			<td align="center"><code>hlhhas</code></td>
			<td align="center"><code>llhhas</code></td>
			<td align="center"><code>hhlhas</code></td>
			<td align="center"><code>lhlhas</code></td>
			<td align="center"><code>hllhas</code></td>
			<td align="center"><code>lllhas</code></td>
			<td align="center"><code>hhhao</code></td>
			<td align="center"><code>lhhao</code></td>
			<td align="center"><code>hlhao</code></td>
			<td align="center"><code>llhao</code></td>
			<td align="center"><code>hhad</code></td>
			<td align="center"><code>lhad</code></td>
			<td align="center"><code>haw</code></td>
			<td align="center"><code>rab</code></td>
		</tr>
	</tbody>
</table>

## History

### Ignitem's History

Ignitem was founded with the goal of advancing processor technology by building upon the foundations of the x86 architecture. Their focus on innovative, scalable designs led to the creation of a new instruction set architecture, x96.

### x96's Origin

x96 was developed to address some of the limitations found in existing ISAs, particularly x86. While maintaining compatibility with many legacy features, x96 introduces optimizations to streamline instruction execution, improve memory handling, and offer more flexibility in register access. Key improvements include support for embedded comments in binaries, streamlined data size handling (from bytes to sedecimbytes), and the elimination of outdated or redundant instructions. One of the key design principles behind x96 was to offer a cleaner, more efficient alternative while maintaining the versatility that made x86 a dominant ISA.

### The Future

x96 is planned to be the core of Ignitem's future CPUs, including their upcoming Vector v series, which will target various market segments with editions:

- General Purpose (GP)
- Gaming (GX)
- Embedded (E)
- Pro Embedded (PE)
- Performance (PX)
- AI-focused Performance (PX-AI)

These CPUs will serve as the hardware foundation for x96's evolution.