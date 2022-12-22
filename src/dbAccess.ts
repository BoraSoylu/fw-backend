import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getWallet() {
  // ... you will write your Prisma Client queries here
}

export async function createWallet(createWallet: CreateWallet) {
  const wallet = await prisma.wallet.create({
    data: createWallet,
  });
  return wallet;
}

export async function getWalletsFromEmail() {
  // ... you will write your Prisma Client queries here
}
export async function createEmailNotification() {
  // ... you will write your Prisma Client queries here
}
export async function deleteEmailNotifications() {
  // ... you will write your Prisma Client queries here
}

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })

//   .catch(async (e) => {
//     console.error(e);

//     await prisma.$disconnect();

//     process.exit(1);
//   });
