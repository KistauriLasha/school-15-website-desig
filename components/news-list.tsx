import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Trophy, Users, BookOpen, Award, PartyPopper } from "lucide-react"

interface NewsItem {
  id: number
  title: string
  date: string
  category: "Достижения" | "Мероприятия" | "Объявления" | "Спорт"
  description: string
  image?: string
  icon: typeof Trophy
}

const newsItems: NewsItem[] = []

export function NewsList() {
  const getCategoryColor = (category: NewsItem["category"]) => {
    switch (category) {
      case "Достижения":
        return "bg-accent/10 text-accent border-accent/20"
      case "Мероприятия":
        return "bg-primary/10 text-primary border-primary/20"
      case "Спорт":
        return "bg-chart-1/10 text-chart-1 border-chart-1/20"
      case "Объявления":
        return "bg-chart-2/10 text-chart-2 border-chart-2/20"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid gap-6">
        {newsItems.map((news) => {
          const Icon = news.icon
          return (
            <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-[300px_1fr] gap-6">
                <div className="relative aspect-video md:aspect-square bg-muted">
                  <img src={news.image || "/placeholder.svg"} alt={news.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader className="pb-0">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <Badge variant="outline" className={getCategoryColor(news.category)}>
                      {news.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{news.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="rounded-lg bg-primary/10 p-2.5 shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 leading-tight text-balance">{news.title}</h3>
                      <CardContent className="p-0">
                        <p className="text-muted-foreground leading-relaxed">{news.description}</p>
                      </CardContent>
                    </div>
                  </div>
                </CardHeader>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
