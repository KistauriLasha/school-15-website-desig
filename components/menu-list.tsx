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
  // Выпечка и еда
  { name: "Булочка с пудрой", price: 30, category: "Выпечка и еда", icon: Sandwich },
  { name: "Булочка с повидлом", price: 40, category: "Выпечка и еда", icon: Sandwich },
  { name: "Булочка с творогом", price: 40, category: "Выпечка и еда", icon: Sandwich },
  { name: "Булочка со сгущенкой", price: 40, category: "Выпечка и еда", icon: Sandwich },
  { name: "Пирожок с картошкой", price: 40, category: "Выпечка и еда", icon: Sandwich },
  { name: "Булочка с сосиской", price: 55, category: "Выпечка и еда", icon: Sandwich },
  { name: "Булочка с котлетой", price: 55, category: "Выпечка и еда", icon: Sandwich },
  { name: "Бургер", price: 60, category: "Выпечка и еда", icon: Sandwich },
  { name: "Хачапур «Лодочка»", price: 60, category: "Выпечка и еда", icon: Sandwich },
  { name: "Пицца", price: 60, category: "Выпечка и еда", icon: Sandwich },

  // Напитки
  { name: "Компот", price: 30, category: "Напитки", icon: Coffee },
  { name: "Какао", price: 30, category: "Напитки", icon: Coffee },
  { name: "Чай", price: 30, category: "Напитки", icon: Coffee },
]

const categories = ["Выпечка и еда", "Напитки"]

export function MenuList() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {categories.map((category) => {
        const items = menuItems.filter((item) => item.category === category)
        return (
          <Card key={category}>
            <CardHeader>
              <CardTitle className="text-2xl text-center">{category}</CardTitle>
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
