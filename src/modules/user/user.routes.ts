import express from "express";
import { userControllers } from "./user.controller";

export const router = express.Router();

router.post("/", userControllers.createUser);

router.get("/", userControllers.getUser);

router.get("/:id", userControllers.getSingleUser);

router.put("/:id", userControllers.updateUser);

router.delete("/:id", userControllers.deleteUser);

export const userRouter = router;
