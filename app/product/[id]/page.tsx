import prisma from '../../../lib/prisma'

interface Params { params: { id: string } }

export default async function ProductPage({ params }: Params) {
  const id = Number(params.id)
  const product = await prisma.product.findUnique({ where: { id } })

  if (!product) return <div>未找到产品</div>

  return (
    <div className="space-y-6">
      <div className="flex gap-6">
        <img src={product.image} alt={product.name} className="w-64 h-64 object-cover rounded" />
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-xl text-red-600">¥{(product.price / 100).toFixed(2)}</p>
          <p className="mt-4">{product.description}</p>
        </div>
      </div>
      <button className="px-4 py-2 bg-green-600 text-white rounded">加入购物车（示例）</button>
    </div>
  )
}
