import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, Sandwich, Soup, Dessert, Beef, Salad } from "lucide-react"

interface MenuItem {
  name: string
  price: number
  category: string
  icon: typeof Coffee
}

const menuItems: MenuItem[] = [
  // Выпечка
  { name: "Пирожок с мясом", price: 40, category: "Выпечка", icon: Sandwich },
  { name: "Пирожок с капустой", price: 35, category: "Выпечка", icon: Sandwich },
  { name: "Булочка с маком", price: 30, category: "Выпечка", icon: Sandwich },
  { name: "Ватрушка с творогом", price: 45, category: "Выпечка", icon: Sandwich },
  { name: "Пицца школьная", price: 65, category: "Выпечка", icon: Sandwich },

  // Напитки и десерты
  { name: "Чай", price: 15, category: "Напитки и десерты", icon: Coffee },
  { name: "Какао", price: 35, category: "Напитки и десерты", icon: Coffee },
  { name: "Компот", price: 20, category: "Напитки и десерты", icon: Coffee },
  { name: "Сок", price: 40, category: "Напитки и десерты", icon: Coffee },
  { name: "Йогурт", price: 50, category: "Напитки и десерты", icon: Dessert },
  { name: "Фрукты (яблоко/банан)", price: 35, category: "Напитки и десерты", icon: Dessert },
  { name: "Печенье", price: 25, category: "Напитки и десерты", icon: Dessert },
]

const categories = ["Выпечка", "Напитки и десерты"]

export function MenuList() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {categories.map((category) => {
        const items = menuItems.filter((item) => item.category === category)
        return (
          <Card key={category}>
            <CardHeader>
              <CardTitle className="text-2xl">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {items.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className="rounded-md bg-primary/10 p-2 shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{item.name}</span>
                      </div>
                      <Badge variant="secondary" className="shrink-0 text-base font-bold px-3 py-1">
                        {item.price} ₽
                      </Badge>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
