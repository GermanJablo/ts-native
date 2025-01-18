## Configuring the Global Bin Directory for PNPM

If `pnpm` cannot find the global bin directory and you encounter the error:

> ERR_PNPM_NO_GLOBAL_BIN_DIR  Unable to find the global bin directory

Follow these steps to manually configure the global bin directory:

### 1. Choose a Directory for Global Executables
We recommend using `~/.local/bin` (standard for Unix-like systems), but you can choose any directory you prefer.

### 2. Set the Global Bin Directory in PNPM
Run the following command to configure the global bin directory:

```bash
pnpm config set global-bin-dir ~/.local/bin
```

### 3. Add the Directory to Your PATH
Edit your shell configuration file (~/.zshrc, ~/.bashrc, or similar) and add the following line:

```bash
export PATH="$HOME/.local/bin:$PATH"
```

After editing, reload your shell configuration:

```bash
source ~/.zshrc  # Replace with ~/.bashrc if using Bash
````

### 4. Verify the Global Bin Directory

```bash
pnpm config get global-bin-dir
```

It should output the directory you set, e.g., ~/.local/bin.

### 5. Link your package globally

```bash
pnpm link -g
```

Now, any executables defined in your package's bin field will be globally available.

