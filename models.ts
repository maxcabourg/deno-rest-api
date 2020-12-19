import { Document } from "https://deno.land/x/filedb@0.0.5/mod.ts";

export interface User extends Document {
  id: string;
  username: string;
}

export interface Post extends Document {
  title: string;
  content: string;
  authorId: string;
}