const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = process.env.PORT || 3000;

// Настройка Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Тестовый Swagger Ткачев Артём',
      version: '1.0.0',
      description: 'Впусти в себя Docker',
      contact: {
        name: 'Демо'
      },
      servers: [
        {
          url: `http://localhost:${port}`
        }
      ]
    }
  },
  apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Маршруты
const exampleRoutes = require('./routes/example');
app.use('/api', exampleRoutes);

// Базовый маршрут
app.get('/', (req, res) => {
  res.send('Добро пожаловать в API с документацией Swagger! Перейдите на <a href="/api-docs">/api-docs</a> для просмотра документации.');
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
  console.log(`Swagger UI доступен по адресу: http://localhost:${port}/api-docs`);
}); 