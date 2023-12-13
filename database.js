import sqlite3 from 'sqlite3';

/**
 * База данных SQLite для хранения информации о книгах.
 * @type {sqlite3.Database}
 */
const db = new sqlite3.Database(':memory:');

// Создание таблицы для хранения книг, если она не существует
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    author TEXT,
    description TEXT,
    genre TEXT
  )`);
});

export default db;
