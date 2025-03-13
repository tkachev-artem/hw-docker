# Тестовый проектик с swagger и docker 

Простое демонстрационное API с документацией Swagger UI в Docker-контейнере.

## Быстрый старт (одной командой)

```bash
rm -rf hw-docker && git clone https://github.com/tkachev-artem/hw-docker.git && cd hw-docker && docker kill $(docker ps -q 2>/dev/null) 2>/dev/null || true && docker system prune -af --volumes --force && docker build -t swagger-demo . && docker run --name swagger-demo -p 3000:3000 -d swagger-demo
```

После запуска:
- API: http://localhost:3000
- Swagger UI: http://localhost:3000/api-docs

## Остановка (одной командой)

```bash
docker stop swagger-demo 2>/dev/null || docker kill swagger-demo 2>/dev/null || docker kill $(docker ps -q) 2>/dev/null || true && docker system prune -af --volumes --force
```

## Проверка работы

```bash
# Статус контейнера
docker ps | grep swagger-demo

# Логи контейнера
docker logs swagger-demo
```

## Локальный запуск

### Предварительные требования

- Установленный Docker
- Git

### Запуск через Docker

```bash
# Клонирование проекта
git clone https://github.com/tkachev-artem/hw-docker.git
cd hw-docker

# Остановка всех контейнеров перед запуском
docker kill $(docker ps -q)

# Сборка и запуск
docker build -t swagger-demo .
docker run -p 3000:3000 -d swagger-demo

# Остановка
docker stop swagger-demo
```

### Запуск через Docker Compose

```bash
# Остановка всех контейнеров перед запуском
docker kill $(docker ps -q)

# Запуск
docker-compose up -d

# Остановка
docker-compose down

```

## Развертывание на сервере

```bash
# Подключение к серверу
ssh tkachevartem@31.130.151.110

# Клонирование репозитория
git clone https://github.com/tkachev-artem/hw-docker.git
cd hw-docker

# Установка Docker (если не установлен)
sudo apt update
sudo apt install -y docker.io

# Установка Docker Compose (если не установлен)
sudo apt install -y docker-compose

# Запуск проекта
docker-compose up -d

# Проверка статуса
docker ps
```

## Доступ

### Локально
- API: http://localhost:3000
- Swagger UI: http://localhost:3000/api-docs

### На сервере
- API: http://31.130.151.110:3000
- Swagger UI: http://31.130.151.110:3000/api-docs
