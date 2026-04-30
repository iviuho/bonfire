import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import { Pool } from "pg";

import { PrismaClient } from "../lib/generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "iviuho@gmail.com" },
    create: {
      email: "iviuho@gmail.com",
      name: "iviuho",
      type: "ADMIN",
      messages: {
        create: {
          type: "PARENT",
          sentence: {
            create: {
              label: "~~ is ~~",
              translations: {
                create: {
                  content: "{0}은(는) {1}(이)다.",
                  locale: "ko-KR",
                },
              },
            },
          },
          words: {
            create: [
              {
                label: "you",
                translations: {
                  create: {
                    content: "너",
                    locale: "ko-KR",
                  },
                },
              },
              {
                label: "fool",
                translations: {
                  create: {
                    content: "바보",
                    locale: "ko-KR",
                  },
                },
              },
            ],
          },
        },
      },
    },
    update: {},
  });

  console.log(admin);
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });
