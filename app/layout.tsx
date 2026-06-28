import './globals.css'
import { ReactNode } from 'react'
import Header from '../components/Header'

export const metadata = {
  title: '汽车配件商城',
  description: '示例汽车配件网站 (MVP)'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  )
}
