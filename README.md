# Развертывание Swagger 

Простое демонстрационное API с документацией Swagger UI в Docker-контейнере.

### Запуск через Docker

```bash
# Сборка и запуск
docker build -t swagger-demo .
docker run -p 3000:3000 -d swagger-demo

# Остановка
docker stop swagger-demo
```

### Запуск Через Docker Compose

```bash
# Запуск
docker-compose up -d

# Остановка
docker-compose down
```

## Доступ

- API: http://31.130.151.110:3000/ (или localhost ^^)
- Swagger UI: http://31.130.151.110:3000/api-docs/ (или localhost ^^)
