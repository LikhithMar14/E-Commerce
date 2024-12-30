import { PrismaClient } from '@prisma/client';
import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;

// Define the singleton function for Prisma client
const prismaClientSingleton = () => {
  const connectionString = `${process.env.DATABASE_URL}`;
  const pool = new Pool({ connectionString });
  const adapter = new PrismaNeon(pool);

  // Create a PrismaClient instance and apply the extensions for the product model only
  const prisma = new PrismaClient({ adapter }).$extends({
    result: {
      product: {
        price: {
          compute(product) {
            return product.price.toString();
          },
        },
        rating: {
          compute(product) {
            return product.rating.toString();
          },
        },
      },
    },
  });

  return prisma;
};

// Define the type for the PrismaClient singleton
type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

// Global variable for Prisma singleton
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

// Initialize the Prisma client or use the existing singleton
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

// Export the Prisma client
export default prisma;

// For non-production environments, store the Prisma client globally to avoid re-initialization
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
