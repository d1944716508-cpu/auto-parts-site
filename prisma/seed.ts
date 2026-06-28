import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const examples = [
    {
      name: '前刹车片 (Brake Pad) - 型号 A',
      description: '高性能陶瓷刹车片，耐高温，适配常见车型。',
      price: 4999,
      image: 'https://via.placeholder.com/512x512.png?text=Brake+Pad'
    },
    {
      name: '空气滤清器 (Air Filter) - 型号 B',
      description: '高效过滤，延长发动机寿命。',
      price: 1999,
      image: 'https://via.placeholder.com/512x512.png?text=Air+Filter'
    },
    {
      name: '雨刷 (Wiper) - 型号 C',
      description: '静音耐磨雨刷，提供良好视野。',
      price: 899,
      image: 'https://via.placeholder.com/512x512.png?text=Wiper'
    }
  ]

  for (const p of examples) {
    await prisma.product.upsert({
      where: { name: p.name },
      update: {},
      create: p
    })
  }

  const count = await prisma.product.count()
  console.log(`Seed finished. ${count} products in database.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
