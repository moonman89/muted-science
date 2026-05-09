import express, { type Express, type Request, type Response, type NextFunction } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";
import { WebhookHandlers } from "./webhookHandlers";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);

app.use(cors());

// Webhook must receive raw body — register BEFORE express.json()
app.post(
  "/api/stripe/webhook",
  express.raw({ type: "application/json" }),
  async (req: Request, res: Response, _next: NextFunction) => {
    const sig = req.headers["stripe-signature"] as string;
    try {
      await WebhookHandlers.processWebhook(req.body as Buffer, sig);
      res.json({ received: true });
    } catch (err: any) {
      logger.error({ err }, "Webhook error");
      res.status(400).send(`Webhook Error: ${err.message}`);
    }
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
