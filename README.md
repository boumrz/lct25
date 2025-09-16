# LCT25 - React + Next.js + TypeScript + Mantine UI + Rspack

Базовый проект на React с Next.js, TypeScript, дизайн-системой Mantine UI и быстрым сборщиком Rspack.

## Технологии

- **React 18** - библиотека для создания пользовательских интерфейсов
- **Next.js 14** - React фреймворк для продакшена
- **TypeScript** - типизированный JavaScript
- **Mantine UI** - современная дизайн-система для React
- **CSS Modules** - модульные стили
- **Rspack** - быстрый Rust-based сборщик

## Структура проекта

```
src/
├── app/
│   ├── layout.tsx          # Корневой layout с Mantine провайдером
│   ├── page.tsx            # Главная страница
│   ├── page.module.css     # Стили для главной страницы
│   └── globals.css         # Глобальные стили
├── components/             # Переиспользуемые компоненты
└── styles/                 # Общие стили
```

## Особенности

- ✅ Настроенная темизация Mantine
- ✅ CSS модули для стилизации
- ✅ TypeScript конфигурация
- ✅ Адаптивный дизайн
- ✅ Современная структура Next.js App Router
- ✅ Rspack для быстрой сборки
- ✅ Turbo режим для ускорения разработки

## Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен версии
npm start
```

## Команды

- `npm run dev` - запуск в режиме разработки с Rspack (Turbo)
- `npm run build` - сборка проекта с Rspack (Turbo)
- `npm run start` - запуск продакшен версии
- `npm run lint` - проверка кода линтером

## Rspack конфигурация

Проект настроен для использования Rspack через Next.js Turbo режим:

- Быстрая сборка благодаря Rust-based архитектуре
- Hot Module Replacement (HMR) для быстрой разработки
- Оптимизированная обработка TypeScript и CSS модулей
- Автоматическое разделение кода (code splitting)
