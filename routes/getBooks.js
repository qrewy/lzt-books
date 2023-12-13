import express from 'express';
import db from '../database.js';

const router = express.Router();

/**
 * Обработчик GET-запроса для получения списка всех книг.
 * @returns {Object[]} Массив объектов книг с полями id, title и author.
 */
router.get('/', (req, res) => {
    // Запрос на выбор всех книг из базы данных
    db.all('SELECT id, title, author FROM books', (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows); // Отправка списка книг в формате JSON
    });
});

export default router;
