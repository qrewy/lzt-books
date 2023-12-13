import express from 'express';
import db from '../database.js';

const router = express.Router();

/**
 * Обработчик DELETE-запроса для удаления книги по ID.
 * @param {string} req.params.id Идентификатор удаляемой книги.
 * @returns {Object} JSON с сообщением о статусе удаления книги.
 */
router.delete('/:id', (req, res) => {
    const bookId = req.params.id;

    // Удаление книги из базы данных по указанному ID
    db.run('DELETE FROM books WHERE id = ?', bookId, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Book deleted', changes: this.changes }); // Отправка сообщения об успешном удалении книги
    });
});

export default router;

