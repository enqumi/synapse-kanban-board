"use client"

import { useState, useEffect } from "react"
import { LoginForm } from "@/todo/login-form"
import { Dashboard } from "@/todo/dashboard"
import { isAuthenticated } from "@/lib/api"

export default function Page() {
  const [auth, setAuth] = useState<boolean | null>(null)

  useEffect(() => {
    // Проверяем авторизацию при загрузке страницы
    setAuth(isAuthenticated())
  }, [])

  if (auth === null) return null // Ждем проверки

  if (!auth) {
    // ОШИБКА БЫЛА ТУТ: Просто вызываем компонент без лишних пропсов
    return <LoginForm />
  }

  return <Dashboard />
}