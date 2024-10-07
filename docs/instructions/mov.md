# `MOV`

Move data from a location to another.

## Encoding

| Opcode  | Instruction      | [Operand encoding](../operand_encodings.md) | Description           |
|---------|------------------|---------------------------------------------|-----------------------|
| `B8 /0` | `mov reg, imm`   | `RegAddr:ImmSize:ImmVal`                    | Move `imm` to `reg`   |
| `B7 /0` | `mov reg2, reg1` | `RegAddr:RegAddr`                           | Move `reg1` to `reg2` |
| `B6 /0` | `mov reg, mem`   | `RegAddr:MemAddr`                           | Move `mem` to `reg`   |
| `B5 /0` | `mov mem, imm`   | `MemAddr:ImmSize:ImmVal`                    | Move `imm` to `mem`   |
| `B4 /0` | `mov mem, reg`   | `MemAddr:RegAddr`                           | Move `reg` to `mem`   |
| `B3 /0` | `mov mem2, mem1` | `MemAddr:MemAddr`                           | Move `mem1` to `mem2` |