import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-[url('/-------------------------------------.jpg')] opacity-10 bg-cover bg-center" />
      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl text-balance">
            Школа №15 имени А. К. Назадзе
          </h1>
          <p className="mb-8 text-lg md:text-xl text-primary-foreground/90 leading-relaxed text-balance">
            Мы рады приветствовать вас на официальном сайте Средней школы №15 имени Александры Константиновны Назадзе. Наша школа – это не просто образовательное учреждение, это дружная семья с богатой историей, где каждый ученик и учитель – уникальная личность.
          </p>
        </div>
      </div>
    </section>
  )
}
