# Operand Encodings

| Name      | Size                                        | Description                                                                         |
|-----------|---------------------------------------------|-------------------------------------------------------------------------------------|
| `RegAddr` | 18-bits                                     | [Internal address of a register](./registers.md#naming-scheme--internal-addressing) |
| `MemAddr` | 128-bits                                    | RAM address                                                                         |
| `ImmSize` | 8-bits                                      | Size of an immediate value                                                          |
| `ImmVal`  | 8-bits to 128-bits (depending on `ImmSize`) | Value of an immediate value                                                         |