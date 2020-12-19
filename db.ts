import { FileDB, Document } from "https://deno.land/x/filedb@0.0.5/mod.ts";

const db = new FileDB({
  rootDir: './data',
  isAutosave: true
});

export default db