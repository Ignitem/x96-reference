# x96 Assembly Tutorial

## Tools

To program in x96 Assembly, you need to use certain tools:

- An Assembler: [`as++`](https://github.com/Ignitem/aspp/)
- A Linker of your choice ([`ld`](https://www.gnu.org/software/binutils/), [MSVC Linker](https://visualstudio.microsoft.com/fr/downloads/#build-tools-for-visual-studio-2022), ...)
- A Debugger of your choice ([`gdb`](https://www.gnu.org/software/gdb/), [MSVC Debugger](https://visualstudio.microsoft.com/fr/downloads/#build-tools-for-visual-studio-2022), ...)

## Setup

In your favorite code editor/IDE, create a new `*.asm` file (like `main.asm`), and add the following content:

```asm title="main.asm"
global start

section .text
start:
    ; Start of the program (main function in C/C++, ...)
```

Now, let's make a simple Linux exit syscall:

```ams title="main.asm" {5-7}
global start

section .text
start:
    mov rao, 60 ; Linux exit syscall number
    mov rbo, 70 ; Custom exit code
    syscall     ; Executing the system call
```

## Building the executable

To build the executable file, we need first to assemble the assembly code:

```sh
as++ main.asm -o main -t x96
```

- `as++`: Ignitem's assembler
- `main.asm`: Our assembly source file
- `-o main`: The output object file
- `-t x96`: The output architecture (targer)

Then, 