import { Router } from "https://deno.land/x/opine@0.27.0/mod.ts";
import db from '../db.ts'
import { User, Post } from "../models.ts";
import { uuid } from "https://deno.land/x/uuid/mod.ts";

const router = Router()

router.get('/', async (req, res) => {
  const posts = await db.getCollection<User>("users")
  res.json(posts.find(el => true).value())
})

router.get('/:id', async (req, res) => {
  const posts = await db.getCollection<User>("users")
  res.json(posts.find(el => el.id === req.params.id).value())
})

router.get('/:id/posts', async (req, res) => {
  const posts = await db.getCollection<Post>("posts")
  res.json(posts.find(el => el.authorId === req.params.id).value())
})

router.post('/', async (req, res) => {
  const users = await db.getCollection<User>("users")
  const user = req.parsedBody as User
  user.id = uuid()
  const createdUser = await users.insertOne(user)
  res.setStatus(201).json(createdUser);
})

router.delete('/:id', async (req, res) => {
  const users = await db.getCollection<User>("users")
  const posts = await db.getCollection<Post>("posts")
  await posts.deleteMany(el => el.authorId === req.params.id)
  await users.deleteOne(el => el.id === req.params.id)
  res.setStatus(200).send()
})

router.put('/:id', async (req, res) => {
  const users = await db.getCollection<User>("users")
  const updatedUser = await users.updateOne(el => el.id === req.params.id, req.parsedBody as User)
  res.setStatus(200).send(updatedUser)
})

export default router