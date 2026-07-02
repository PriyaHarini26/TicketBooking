import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express';
import { serve } from "inngest/express";
import { inngest, functions } from './inngest/index.js';
import showRouter from './routes/showRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';
import adminRouter from './routes/adminRoutes.js';
import userRouter from './routes/userRoutes.js';
import stripeWebhooks from './controllers/stripeWebhooks.js';

const app = express();
app.use((req, res, next) => {
  console.log("➡️ Incoming:", req.method, req.url);
  next();
});
const PORT = process.env.PORT || 3000;

await connectDB();

// Stripe webhook
app.use(
  "/api/stripe",
  express.raw({ type: "application/json" }),
  stripeWebhooks
);

app.use(express.json());
app.use(cors());

// Log Authorization header
app.use((req, res, next) => {
  console.log("Authorization Header:", req.headers.authorization);
  next();
});

app.use("/api/inngest", (req, res, next) => {
  console.log("✅ Reached Inngest route");
  next();
});

// ✅ Move Inngest BEFORE Clerk
app.use('/api/inngest', serve({
  client: inngest,
  functions
}));

// ✅ Clerk AFTER Inngest
app.use(clerkMiddleware());

app.get('/', (req, res) => res.send('Server is Live!'));

app.use('/api/show', showRouter);
app.use('/api/booking', bookingRouter);
app.use('/api/admin', adminRouter);
app.use('/api/user', userRouter);

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);