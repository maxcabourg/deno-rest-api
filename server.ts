import { opine, json } from "https://deno.land/x/opine@0.27.0/mod.ts";
import { FileDB, Document } from "https://deno.land/x/filedb@0.0.5/mod.ts";
import posts from './routes/post.routes.ts';
import users from './routes/user.routes.ts'

const app = opine()

app.use(json())
app.use('/posts', posts)
app.use('/users', users)

app.get('/', (req, res) => {
  res.send("Hello World")
});

app.listen(3000)
console.log("Opine started on port 3000")
