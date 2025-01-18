import { expect, test } from "vitest";
import { exec } from "child_process";
import { promisify } from "util";
import { promises as fs } from "fs";

test("expect files to be created", async () => {
  const execPromise = promisify(exec);
  await execPromise("pnpm check");

  // Verify that the file contains the string "foo"
  const filePath = ".gitignored/ts-native/tsconfig.json";
  const fileContent = await fs.readFile(filePath, "utf-8");
  expect(fileContent).toContain("foo");

  await execPromise("rm -rf .gitignored");
});

test("ts-native.json file is required", async () => {
  const tsNativeContent = await fs.readFile("ts-native.json", "utf-8");
  // delete file
  const execPromise = promisify(exec);
  await execPromise("rm -f ts-native.json");
  const fn = async () => await execPromise("pnpm check");
  await expect(fn).rejects.toThrowError(
    "The ts-native.json file is required and cannot be empty"
  );

  await fs.writeFile("ts-native.json", tsNativeContent);
});
