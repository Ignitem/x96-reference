# x86 Compatibility Mode

## Activation

There's two way to activate the x86 Compatibility mode:

1. Launching a x86 binary (deducted based on [statistical analysis](./compatibility_mode.md#x86-binary-detection))
2. Booting the CPU in x86 Compatibility Mode

### Launching a x86 Binary

#### x86 Binary Detection

x96 Microsoftware uses statistical analysis to find if a binary is a x86 binary or x96:

- No x96-specific encoding ([embedded comments](./embedded_comments.md), [x96 operend encodings](./operand_encodings.md), ...)
- Presence of x86 prefixes (`REX`, `REX.W`, ...)
- Presence of x86 operand encodings

#### x86 Binary Execution

To execute x86 binaries, the x96 Microsoftware reboot the CPU in x86 Compatibility Mode and then execute the binary.

#### Limitations

- Add a little overhead with the [x86 binary detection](./compatibility_mode.md#x86-binary-detection) and the x86 to x96 translation at runtime.

### Booting in x86 Compatibility Mode

The x86 Compatibility Mode can be activated by setting the `x86_compat` flag in the BIOS.

#### Limitations

- x96-specific instructions are not available
- x96-specific encodings are not available
- x96-specific registers are not available
- x96-specific data sizes are not available
- x96-specific features are not available