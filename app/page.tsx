export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">欢迎来到汽车配件商城</h1>
      <p>示例项目：可从目录浏览产品，查看详情并添加支付（后续集成 Stripe）。</p>
      <a href="/catalog" className="inline-block px-4 py-2 bg-blue-600 text-white rounded">查看配件目录</a>
    </div>
  )
}
