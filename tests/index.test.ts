import {expect, test} from "vitest";
import { exec } from "child_process";
import { promisify } from 'util';


test("test", async () => {
  expect(1 + 1).toBe(2);
  const execPromise = promisify(exec);
  const { stdout } = await execPromise("pnpm check");
  console.log(stdout);
});