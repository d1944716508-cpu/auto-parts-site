import Link from 'next/link'

export default function ProductCard({ product }: any) {
  return (
    <div className="bg-white rounded shadow-sm overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-2">¥{(product.price / 100).toFixed(2)}</p>
        <div className="mt-4">
          <Link href={`/product/${product.id}`} className="text-blue-600">查看详情</Link>
        </div>
      </div>
    </div>
  )
}
