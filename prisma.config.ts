import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // The CLI needs the DIRECT_URL (Port 5432) to modify the database tables
    url: process.env.DIRECT_URL,
  },
});