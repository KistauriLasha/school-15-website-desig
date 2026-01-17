import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import NewsHeader from "@/components/news-header"

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <NewsHeader />
      </main>
      <Footer />
    </div>
  )
}
