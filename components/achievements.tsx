import { Card, CardContent } from "@/components/ui/card"
import { Medal } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      icon: Medal,
      title: "Олимпиады",
      year: "",
      description: "Победители городских предметных олимпиад в 2026 году",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Наши достижения</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Мы гордимся успехами наших учеников и педагогов
          </p>
        </div>

        <div className="flex justify-center">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow max-w-md w-full">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-accent/10 p-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  {achievement.year && (
                    <div className="text-sm font-medium text-accent mb-2">{achievement.year}</div>
                  )}
                  <h3 className="text-lg font-bold mb-2 text-balance">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground text-balance">{achievement.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
