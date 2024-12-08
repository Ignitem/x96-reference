# x96 Assembly Tutorial

## Tools

To program in x96 Assembly, you need to use certain tools:

- An Assembler: [`as++`](https://github.com/DoorOS-Project/Binutilspp) (part of [Binutils++](https://github.com/DoorOS-Project/Binutilspp))
- A Linker of your choice ([`ld`](https://www.gnu.org/software/binutils/), [MSVC Linker](https://visualstudio.microsoft.com/fr/downloads/#build-tools-for-visual-studio-2022), ...)
- A Debugger of your choice ([`gdb`](https://www.gnu.org/software/gdb/), [MSVC Debugger](https://visualstudio.microsoft.com/fr/downloads/#build-tools-for-visual-studio-2022), ...)

## Setup

In your favorite code editor/IDE, create a new `*.asm` file (like `main.asm`), and add the following content:

```asm title="main.asm"
global start

section .text
start:
    ; Start of the program
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
as++ main.asm -o main.o -t x96
```

- `as++`: Ignitem's assembler
- `main.asm`: Our assembly source file
- `-o main.o`: The output object file
- `-t x96`: The output architecture (targer)

Then, we need to link our object file to produce the executable. For that, we'll use `ld`:

```sh
ld main.o -o main
```

## Execution

Finaly, on your x96 machine or using a x96 vCPU like `vCPU-Ignitem-Vector-v1`, you can execute the code:

```sh
./main                        # on x96 machine
vCPU-Ignitem-Vector-v1 ./main # using a vCPU
```

And now to check if it worked:

```sh
echo $? # $? = last error code
```

If everything worked, then it should show our error code in `rbo` (in that case, `70`).