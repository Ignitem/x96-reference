# `CPUID`

## Encoding

| Opcode  | Instruction | Description                                                                                       |
|---------|-------------|---------------------------------------------------------------------------------------------------|
| `0F A2` | `cpuid`     | Fetch informations in `rad`, `rbd`, `rcd` and `rdd` about the CPU & features based on `rad` value |

## Result

| Start `rad` value | Result `rad` value | Result `rbd` value      | Result `rcd` value      | Result `rdd` value      | Description                                             |
|-------------------|--------------------|-------------------------|-------------------------|-------------------------|---------------------------------------------------------|
| `0`               | Reserved           | `0x6967654c` (`"Legi"`) | `0x6d657469` (`"item"`) | `0x6e674974` (`"tIgn"`) | Vendor string (`rbd` + `rdd` + `rcd`; `"LegitIgnitem"`) |
| ...               | ...                | ...                     | ...                     | ...                     | ...                                                     |