import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient();             //to bypass too many prisma clent running
if (process.env.NODE_ENV === "production") global.prismadb = client;


export default client;