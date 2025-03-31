import dayjs from "dayjs";
import { serve } from "@upstash/workflow/express";

import Subscription from "../models/subscription.model.js";

const REMINDERS = [7, 5, 2, 1]

export const sendReminders = serve(async (context) => {
  const { subscriptionId } = context.requestPayload;
  const subscription = await fetchSubscription(context, subscriptionId);

  if (!subscription || subscription.status !== "active") return;

  const renewalDate = dayjs(subscription.renewalDate);

  if(renewalDate.isBefore(dayjs())){
    console.log(`Renewal date has passed for subscription ${subscription._id}. Stopping reminders.`);
    return;
  }

  for(const daysBefore of REMINDERS){
    const reminderDate = renewalDate.subtract(daysBefore, "day");
    
  }

});

const fetchSubscription = async (context, subscriptionId) => {
  return await context.run("get subscription", () => {
    return Subscription.findById(subscriptionId).populate("user", "name email");
  });
};
