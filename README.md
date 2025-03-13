# Тестовый проектик с swagger и docker 

Простое демонстрационное API с документацией Swagger UI в Docker-контейнере.

## Локальный запуск

### Предварительные требования

- Установленный Docker
- Git

### Пошаговый запуск

```bash
# Удаление старой версии проекта (если есть)
rm -rf hw-docker

# Клонирование проекта
git clone https://github.com/tkachev-artem/hw-docker.git
cd hw-docker

# Остановка всех запущенных контейнеров
docker kill $(docker ps -q 2>/dev/null) 2>/dev/null || true

# Очистка системы от старых контейнеров и образов
docker system prune -af --volumes --force

# Сборка образа
docker build -t swagger-demo .

# Запуск контейнера
docker run --name swagger-demo -p 3000:3000 -d swagger-demo

# Проверка статуса
docker ps | grep swagger-demo
```

### Остановка

```bash
# Остановка контейнера swagger-demo
docker stop swagger-demo
```

### Доступ
- API: http://localhost:3000
- Swagger UI: http://localhost:3000/api-docs

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

### На сервере
- API: http://31.130.151.110:3000
- Swagger UI: http://31.130.151.110:3000/api-docs
