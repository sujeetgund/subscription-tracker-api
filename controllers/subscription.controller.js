import mongoose from "mongoose";
import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res, next) => {
  // Start a session to handle potential errors
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Create a new subscription
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });

    // Commit the transaction
    session.commitTransaction();
    session.endSession();

    // Send the response
    return res.status(201).json({ success: true, data: subscription });
  } catch (error) {
    // Rollback the transaction and end the session
    session.abortTransaction();
    session.endSession();

    next(error);
  }
};

export const getUserScubscriptions = async (req, res, next) => {
  try {
    // console.log(req.user._id);
    // console.log(req.params.id)
    // Check if user and the token user are the same
    if (req.user._id.toString() !== req.params.id) {
      return res.status(403).json({ success: false, message: "Forbidden" });
    }
    // Find all subscriptions for the user
    const subscriptions = await Subscription.find({ user: req.params.id });

    // Send the response
    return res.status(200).json({ success: true, data: subscriptions });
  } catch (error) {
    next(error);
  }
};
