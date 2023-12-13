import express from 'express';
import db from '../database.js';

const router = express.Router();

/**
 * Обработчик GET-запроса для поиска книги по ключевому слову.
 * @param {string} req.query.term Ключевое слово для поиска в названии или авторе книги.
 * @returns {Object[]} Массив объектов книг с полями id, title и author.
 */
router.get('/', (req, res) => {
    const searchTerm = req.query.term;

    // Поиск книг по ключевому слову в названии или авторе с использованием параметризированного запроса
    db.all(
        'SELECT id, title, author FROM books WHERE title LIKE $search OR author LIKE $search',
        { $search: `%${searchTerm}%` }, // Параметризированный запрос для безопасной передачи данных
        (err, rows) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(rows); // Отправка списка найденных книг в формате JSON
        }
    );
});

export default router;
