"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const classes = [
  "5А",
  "5Б",
  "5В",
  "6А",
  "6Б",
  "6В",
  "7А",
  "7Б",
  "7В",
  "8А",
  "8Б",
  "8В",
  "9А",
  "9Б",
  "9В",
  "10А",
  "10Б",
  "11А",
  "11Б",
]

const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"]

const timeSlots = [
  "9:00-9:45",
  "9:50-10:35",
  "10:40-11:25",
  "11:35-12:20",
  "12:25-13:10",
  "13:15-14:00",
  "14:10-14:55",
]

// Примерное расписание для разных классов
const scheduleData: Record<string, Record<string, string[]>> = {
  "5А": {
    Понедельник: ["Математика", "Русский язык", "Литература", "Физкультура", "Английский язык", "-", "-"],
    Вторник: ["Английский язык", "Математика", "История", "Биология", "Музыка", "-", "-"],
    Среда: ["Русский язык", "Литература", "Математика", "География", "ИЗО", "-", "-"],
    Четверг: ["Математика", "Английский язык", "Русский язык", "Физкультура", "Технология", "-", "-"],
    Пятница: ["История", "Математика", "Биология", "Русский язык", "Литература", "-", "-"],
  },
  "6А": {
    Понедельник: ["Математика", "Русский язык", "Английский язык", "История", "Физкультура", "-", "-"],
    Вторник: ["Биология", "Математика", "Литература", "География", "Музыка", "-", "-"],
    Среда: ["Русский язык", "Математика", "Английский язык", "Обществознание", "ИЗО", "-", "-"],
    Четверг: ["Математика", "Физкультура", "Русский язык", "История", "Технология", "-", "-"],
    Пятница: ["Английский язык", "Литература", "Математика", "Биология", "География", "-", "-"],
  },
  "7А": {
    Понедельник: ["Алгебра", "Русский язык", "Английский язык", "Физика", "Физкультура", "История", "-"],
    Вторник: ["Геометрия", "Литература", "Биология", "География", "Информатика", "Музыка", "-"],
    Среда: ["Русский язык", "Алгебра", "Английский язык", "История", "Обществознание", "ИЗО", "-"],
    Четверг: ["Физика", "Геометрия", "Русский язык", "Физкультура", "Биология", "Технология", "-"],
    Пятница: ["Английский язык", "Литература", "Алгебра", "География", "История", "Информатика", "-"],
  },
  "8А": {
    Понедельник: ["Алгебра", "Русский язык", "Химия", "Английский язык", "Физкультура", "История", "-"],
    Вторник: ["Геометрия", "Физика", "Литература", "Биология", "География", "ОБЖ", "-"],
    Среда: ["Русский язык", "Алгебра", "Английский язык", "Информатика", "Обществознание", "Химия", "-"],
    Четверг: ["Физика", "Геометрия", "Русский язык", "Физкультура", "История", "Технология", "-"],
    Пятница: ["Английский язык", "Литература", "Алгебра", "Биология", "География", "Химия", "-"],
  },
  "9А": {
    Понедельник: ["Алгебра", "Русский язык", "Химия", "Физика", "Английский язык", "Физкультура", "История"],
    Вторник: ["Геометрия", "Литература", "Биология", "География", "Информатика", "Обществознание", "-"],
    Среда: ["Русский язык", "Алгебра", "Английский язык", "Химия", "История", "Физика", "-"],
    Четверг: ["Геометрия", "Физкультура", "Русский язык", "Биология", "Литература", "ОБЖ", "-"],
    Пятница: ["Английский язык", "Алгебра", "Физика", "География", "История", "Обществознание", "-"],
  },
  "10А": {
    Понедельник: ["Алгебра", "Русский язык", "Физика", "Химия", "Английский язык", "История", "Обществознание"],
    Вторник: ["Геометрия", "Литература", "Биология", "География", "Информатика", "Физкультура", "-"],
    Среда: ["Русский язык", "Алгебра", "Английский язык", "Физика", "Химия", "История", "-"],
    Четверг: ["Геометрия", "Биология", "Русский язык", "Физкультура", "Литература", "Обществознание", "-"],
    Пятница: ["Английский язык", "Алгебра", "Физика", "География", "История", "ОБЖ", "Информатика"],
  },
  "11А": {
    Понедельник: ["Алгебра", "Русский язык", "Физика", "Химия", "Английский язык", "История", "Обществознание"],
    Вторник: ["Геометрия", "Литература", "Биология", "Информатика", "География", "Физкультура", "-"],
    Среда: ["Русский язык", "Алгебра", "Английский язык", "Физика", "История", "Обществознание", "-"],
    Четверг: ["Геометрия", "Химия", "Русский язык", "Биология", "Литература", "Физкультура", "-"],
    Пятница: ["Английский язык", "Алгебра", "Физика", "История", "География", "ОБЖ", "Астрономия"],
  },
}

// Создаем расписание для остальных классов на основе базового
classes.forEach((className) => {
  if (!scheduleData[className]) {
    const baseClass = className.charAt(0) + "А"
    scheduleData[className] = { ...scheduleData[baseClass] }
  }
})

export function ScheduleTable() {
  const [selectedClass, setSelectedClass] = useState("5А")

  const grades = [
    { label: "5 класс", classes: ["5А", "5Б", "5В"] },
    { label: "6 класс", classes: ["6А", "6Б", "6В"] },
    { label: "7 класс", classes: ["7А", "7Б", "7В"] },
    { label: "8 класс", classes: ["8А", "8Б", "8В"] },
    { label: "9 класс", classes: ["9А", "9Б", "9В"] },
    { label: "10 класс", classes: ["10А", "10Б"] },
    { label: "11 класс", classes: ["11А", "11Б"] },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-6 bg-muted/30 rounded-lg">
        <span className="text-xl font-semibold">Выберите ваш класс:</span>
        <Select value={selectedClass} onValueChange={setSelectedClass}>
          <SelectTrigger className="w-[200px] h-12 text-lg">
            <SelectValue placeholder="Выберите класс" />
          </SelectTrigger>
          <SelectContent>
            {grades.map((grade) => (
              <SelectGroup key={grade.label}>
                <SelectLabel>{grade.label}</SelectLabel>
                {grade.classes.map((cls) => (
                  <SelectItem key={cls} value={cls}>
                    {cls}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Card className="border-2">
        <CardHeader className="bg-primary/5 border-b">
          <CardTitle className="text-2xl text-center">Расписание уроков для {selectedClass} класса</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-bold text-sm bg-muted/50 uppercase tracking-wider">Время</th>
                  {days.map((day) => (
                    <th key={day} className="text-center p-4 font-bold text-sm bg-muted/50 uppercase tracking-wider">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((time, timeIndex) => (
                  <tr key={timeIndex} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="p-4 text-sm font-bold text-muted-foreground whitespace-nowrap bg-muted/10">{time}</td>
                    {days.map((day) => {
                      const lesson = scheduleData[selectedClass]?.[day]?.[timeIndex] || "-"
                      return (
                        <td key={day} className="p-4 text-center">
                          {lesson !== "-" ? (
                            <div className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-foreground text-sm font-semibold shadow-sm border border-primary/20">
                              {lesson}
                            </div>
                          ) : (
                            <span className="text-muted-foreground text-sm italic">—</span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
