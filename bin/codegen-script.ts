import * as fs from "fs";
import * as path from "path";

export function createGitignoredFiles() {
  const targetDir = path.join(process.cwd(), ".gitignored", "ts-native");
  fs.mkdirSync(targetDir, { recursive: true });
  const tsNativeJsonPath = path.join(process.cwd(), "ts-native.json");
  const packageJson = fs.existsSync(tsNativeJsonPath)
    ? fs.readFileSync(tsNativeJsonPath, "utf-8")
    : null;

  if (!packageJson || packageJson.trim() === "") {
    console.error("The ts-native.json file is required and cannot be empty");
    process.exit(1);
  }

  const files = {
    "tsconfig.json": "foo",
    "package.json": packageJson,
    "eslint.js": "baz",
  };

  Object.entries(files).forEach(([filename, content]) => {
    const filePath = path.join(targetDir, filename);
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Archivo creado: ${filePath}`);
  });

  console.log("Codegen files created successfully");
}
