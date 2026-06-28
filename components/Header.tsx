import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">汽车配件商城</Link>
        <nav className="flex items-center gap-4">
          <Link href="/catalog" className="text-sm">目录</Link>
          <Link href="/cart" className="text-sm">购物车</Link>
        </nav>
      </div>
    </header>
  )
}
