import Stripe from "stripe";
import Booking from "../models/Booking.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function stripeWebhooks(req, res) {
  const sig = req.headers["stripe-signature"];

  try {
    const event = stripe.webhooks.constructEvent(
      req.body, // use req.body directly
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    console.log("🔥 WEBHOOK HIT:", event.type);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const bookingId = session.metadata?.bookingId;

      if (bookingId) {
        await Booking.findByIdAndUpdate(bookingId, {
          isPaid: true,
          paymentLink: "",
        });

        console.log("✅ Booking marked paid:", bookingId);
      }
    }

    res.json({ received: true });

  } catch (err) {
    console.error("Webhook error:", err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
}