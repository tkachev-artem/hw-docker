# Тестовый проектик с swagger и docker 

Простое демонстрационное API с документацией Swagger UI в Docker-контейнере.

## Локальный запуск

### Предварительные требования

- Установленный Docker
- Git

### Запуск через Docker

```bash
# Клонирование проекта
git clone https://github.com/tkachev-artem/hw-docker.git
cd hw-docker

# Сборка и запуск
docker build -t swagger-demo .
docker run -p 3000:3000 -d swagger-demo

# Остановка
docker stop swagger-demo
```

### Запуск через Docker Compose

```bash
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
