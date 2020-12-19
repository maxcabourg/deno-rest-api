import { Router } from "https://deno.land/x/opine@0.27.0/mod.ts"
import db from '../db.ts'
import { Post } from "../models.ts"
import { uuid } from "https://deno.land/x/uuid/mod.ts"

const router = Router()

router.get('/', async (req, res) => {
  const posts = await db.getCollection<Post>("posts")
  res.json(posts.find(el => true).value())
})

router.post('/', async (req, res) => {
  const posts = await db.getCollection<Post>("posts")
  const post = req.parsedBody as Post
  post.id = uuid();
  const createdPost = await posts.insertOne(post)
  res.setStatus(201).json(createdPost);
})

router.delete('/:id', async (req, res) => {
  const posts = await db.getCollection<Post>("posts")
  await posts.deleteOne(el => el.id === req.params.id)
  res.setStatus(200).send()
})

router.put('/:id', async (req, res) => {
  const posts = await db.getCollection<Post>("posts")
  const updatedPost = await posts.updateOne(el => el.id === req.params.id, req.parsedBody as Post)
  res.setStatus(200).send(updatedPost)
})

export default router