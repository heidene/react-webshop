import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from 'cors';
import { z } from "zod";
import { db } from "./db";
import { publicProcedure, router } from "./trpc";
 
const appRouter = router({
  productList: publicProcedure
    .query(async () => {
      const products = await db.product.findAll();
      return products;
    }),
  productById: publicProcedure
    .input(z.string())
    .query(async (opts) => {
      const { input } = opts;
      const product = await db.product.findById(input);
      return product;
    }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

var corsOptions = {
  origin: '*',
}

const server = createHTTPServer({
  middleware: cors(corsOptions),
  router: appRouter,
});
 
server.listen(3434);
