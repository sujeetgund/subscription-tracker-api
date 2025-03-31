import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserScubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  return res.json({ message: "Get all subscriptions" });
});

subscriptionRouter.get("/:id", (req, res) => {
  return res.json({ message: `Get subscription with id ${req.params.id}` });
});

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (req, res) => {
  return res.json({ message: `Update subscription with id ${req.params.id}` });
});

subscriptionRouter.delete("/:id", (req, res) => {
  return res.json({ message: `Delete subscription with id ${req.params.id}` });
});

subscriptionRouter.get("/user/:id", authorize, getUserScubscriptions);

subscriptionRouter.put("/:id/cancel", (req, res) => {
  return res.json({
    message: `Cancel subscription with id ${req.params.id}`,
  });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  return res.json({ message: "Get all upcoming renewals" });
});

export default subscriptionRouter;
