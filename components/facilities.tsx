import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, Utensils, BookOpen, FlaskConical } from "lucide-react"

export function Facilities() {
  const facilities = [
    {
      icon: Dumbbell,
      title: "Спортивная площадка",
      description: "Современное спортивное оборудование для занятий физкультурой и спортивных секций",
      image: "/----------------------.jpg",
    },
  ]

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Современная инфраструктура</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Мы создали комфортную среду для обучения и развития каждого ученика
          </p>
        </div>

        <div className="flex justify-center">
          {facilities.map((facility, index) => {
            const Icon = facility.icon
            return (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow max-w-lg w-full">
                <div className="aspect-video relative bg-muted">
                  <img
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3 shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{facility.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
