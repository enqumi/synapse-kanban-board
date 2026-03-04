export type Priority = "low" | "medium" | "high"
// 1. ИСПРАВЛЕНО: Меняем "planned" на "todo"
export type Status = "todo" | "in-progress" | "done"

export interface Task {
  id: string | number; 
  name: string;        // 2. ИСПРАВЛЕНО: Было title, теперь name (как в API)
  description: string;
  status: Status;      // Используем наш тип Status
  priority: Priority;
  deadline?: string; 
  assigned_to?: string | null; // Добавили для совместимости
}

// Конфигурация колонок (цвета и заголовки)
export const columnConfig = {
  // 3. ИСПРАВЛЕНО: Ключ теперь "todo", чтобы KanbanColumn его нашел
  todo: {
    title: "В планах",
    color: "hsl(240 5% 55%)",
  },
  "in-progress": {
    title: "В работе",
    color: "hsl(250 80% 65%)",
  },
  done: {
    title: "Готово",
    color: "hsl(142 71% 45%)",
  },
} as const

// Начальные данные (можешь оставить для тестов или очистить)
export const initialTasks: Task[] = [
  {
    id: "SYN-101",
    name: "Настроить CI/CD пайплайн", // Заменил title на name
    description: "Автоматизировать сборку и деплой через GitHub Actions",
    priority: "high",
    status: "todo", // Заменил planned на todo
  },
  {
    id: "SYN-104",
    name: "Оптимизация запросов к БД",
    description: "Добавить индексы и кэширование",
    priority: "high",
    status: "in-progress",
  },
]