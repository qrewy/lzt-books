import express from 'express';
import db from '../database.js';

const router = express.Router();

/**
 * Обработчик POST-запроса для добавления новой книги в базу данных.
 * @param {string} req.body.title Название книги.
 * @param {string} req.body.author Автор книги.
 * @param {string} req.body.description Описание книги.
 * @param {string} req.body.genre Жанр книги.
 * @returns {Object} JSON с идентификатором добавленной книги.
 */
router.post('/', (req, res) => {
    const { title, author, description, genre } = req.body;

    // Проверка наличия обязательных полей в запросе
    if (!title || !author || !genre) {
        return res.status(400).json({ error: 'Please provide title, author, and genre for the book' });
    }

    // Вставка данных в таблицу книг
    db.run(
        'INSERT INTO books (title, author, description, genre) VALUES (?, ?, ?, ?)',
        [title, author, description, genre],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ id: this.lastID });
        }
    );
});

export default router;
