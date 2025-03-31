import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Subscription name is required"],
    trim: true,
    minLength: 2,
    maxLength: 100,
  },
  price: {
    type: Number,
    required: [true, "Subscription price is required"],
    min: [0, "Price can not be negative"],
  },
  currency: {
    type: String,
    required: [true, "Currency is required"],
    enum: ["USD", "EUR", "GBP", "INR"],
    default: "INR",
  },
  frequency: {
    type: String,
    required: [true, "Frequency is required"],
    enum: ["daily", "weekly", "monthly", "yearly"],
    default: "monthly",
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    enum: [
      "entertainment",
      "health",
      "education",
      "utilities",
      "technology",
      "finance",
      "others",
    ],
    default: "others",
  },
  paymentMethod: {
    type: String,
    required: [true, "Payment method is required"],
    trim: true,
  },
  status: {
    type: String,
    required: [true, "Status is required"],
    enum: ["active", "inactive", "cancelled", "expired"],
    default: "active",
  },
  startDate: {
    type: Date,
    required: [true, "Start date is required"],
    validate: {
      validator: function (value) {
        return value <= new Date();
      },
      message: "Start date can not be in the future",
    },
    default: Date.now,
  },
  renewalDate: {
    type: Date,
    validate: {
      validator: function (value) {
        return value > this.startDate;
      },
      message: "Renewal date must be after start date",
    },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

subscriptionSchema.pre("save", function (next) {
  // Auto calculate renewal date based on frequency
  if (!this.renewalDate) {
    const renewalPeriod = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365,
    };
    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(
      this.renewalDate.getDate() + renewalPeriod[this.frequency]
    );
  }

  // Auto update status if renewal date is in the past
  if (this.renewalDate < new Date()) {
    this.status = "expired";
  }
  next();
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
