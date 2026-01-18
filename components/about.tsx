import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">В честь кого названа наша школа</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p>
                Школа носит имя героя Великой Отечественной войны Александры Константиновны Назадзе.Александра
                Константиновна Назадзе (1913—1941) — советский офицер, участница Великой Отечественной войны, политрук
                3-й пулемётной роты 1151-го стрелкового полка 343-й стрелковой дивизии 56-й армии.
              </p>
              <p>
                21 ноября 1941 года в ходе Ростовской операции передовой отряд дивизии захватил плацдарм в станице
                Нижне-Гниловской (ныне в черте Железнодорожного района Ростова-на-Дону). Когда командир был убит, а она
                сама — ранена, не покинула поле боя и вела бойцов в атаку. Погибла в ходе штурма станицы. В её честь на
                первом этаже школы стоит бюст героя.
              </p>
            </div>
          </div>
          <div className="relative">
            <Card className="overflow-hidden">
              <img src="/Aleksandra_Nozadze.jpg" alt="А. К. Назадзе" className="w-full h-auto object-cover" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
