import { compile } from "./compile.js";
import { writeFileSync, readFileSync } from "fs";

setTimeout(() => {
  const result = compile(readFileSync("in/in.ts", "utf-8"));
  writeFileSync("out/locals.ts", result.locals);
  writeFileSync("out/main.ts", result.main);
});
