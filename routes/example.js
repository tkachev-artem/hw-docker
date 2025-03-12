const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/example:
 *   get:
 *     summary: Получить пример данных
 *     description: Возвращает пример данных для демонстрации API
 *     responses:
 *       200:
 *         description: Успешный ответ
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Успешно получены данные
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: Тестовый элемент
 */
router.get('/example', (req, res) => {
  res.json({
    message: 'Успешно получены данные',
    data: [
      { id: 1, name: 'Тестовый элемент 1' },
      { id: 2, name: 'Тестовый элемент 2' }
    ]
  });
});

/**
 * @swagger
 * /api/example:
 *   post:
 *     summary: Создать новую запись
 *     description: Создает новую запись на основе предоставленных данных
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Новый элемент
 *     responses:
 *       201:
 *         description: Запись успешно создана
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Запись успешно создана
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 3
 *                     name:
 *                       type: string
 *                       example: Новый элемент
 */
router.post('/example', (req, res) => {
  const { name } = req.body;
  // В реальном приложении здесь была бы логика сохранения в БД
  res.status(201).json({
    message: 'Запись успешно создана',
    data: { id: 3, name: name || 'Новый элемент' }
  });
});

module.exports = router; 