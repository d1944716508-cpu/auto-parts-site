import ProductCard from '../../components/ProductCard'
import prisma from '../../lib/prisma'

export default async function CatalogPage() {
  const products = await prisma.product.findMany({ take: 20 })

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">配件目录</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
