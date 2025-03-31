import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { getUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => {
  return res.json({ message: "Create a new user" });
});

userRouter.put("/:id", (req, res) => {
  return res.json({ message: `Update user with id ${req.params.id}` });
});

userRouter.delete("/:id", (req, res) => {
  return res.json({ message: `Delete user with id ${req.params.id}` });
});

export default userRouter;
