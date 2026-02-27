import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Newspaper, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Newspaper className="h-8 w-8" />
              <h1 className="text-3xl md:text-4xl font-bold">Новости школы</h1>
            </div>
            <p className="text-center text-primary-foreground/90 max-w-2xl mx-auto">
              Последние события, достижения учеников и важные мероприятия нашей школы
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 flex justify-center">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow max-w-2xl w-full">
              <div className="aspect-video relative bg-muted">
                <img
                  src="/english-week.jpg"
                  alt="English Week"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 shrink-0">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Неделя английского языка</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Наша тематическая неделя подошла к концу, оставив массу ярких впечатлений и новых знаний.
                      Ребята проявили креативность в конкурсах стенгазет, блеснули знаниями на викторинах и попробовали себя в роли ораторов.
                      Благодарим всех за энтузиазм и погружение в атмосферу англоязычной культуры. Keep calm and learn English!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
