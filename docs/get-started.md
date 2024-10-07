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

## Major changes

x96 as a modernized version of x86 introduce major changes on the x86 base:

- [New register naming scheme & internal addressing](./registers.md)
- Comments embedded in machine code
- Removed unused and legacy instructions
- x86 compatibility mode
- Unified data sizes (from bytes to sedecimbytes)
- [New operand encodings](./operand_encodings.md)

x96 has also a lot of integration in [`as++`](https://github.com/Ignitem/aspp), [`as++repl`](https://github.com/Ignitem/aspprepl) and [`x86tox96`](https://github.com/Ignitem/x86tox96).

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