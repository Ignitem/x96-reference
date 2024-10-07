# Registers

## Main Registers

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

## Naming Scheme & Internal Addressing

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