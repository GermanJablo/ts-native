import * as fs from "fs";
import * as path from "path";

export function createGitignoredFiles() {
  const targetDir = path.join(process.cwd(), ".gitignored", "ts-native");
  fs.mkdirSync(targetDir, { recursive: true });

  const files = {
    "tsconfig.json": "foo",
    "package.json": "bar",
    "eslint.js": "baz",
  };

  Object.entries(files).forEach(([filename, content]) => {
    const filePath = path.join(targetDir, filename);
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Archivo creado: ${filePath}`);
  });

  console.log("Proceso completado con éxito");
}
