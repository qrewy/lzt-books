import express from 'express';
import cors from 'cors';
import addBookRouter from './routes/addBook.js';
import getBooksRouter from './routes/getBooks.js';
import searchBooksRouter from './routes/searchBooks.js';
import deleteBooksRouter from './routes/deleteBooks.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Подключаем использование CORS
app.use(cors());

// Подключение маршрутов для управления книгами
// Маршрут для добавления новой книги
app.use('/books/add', addBookRouter);

// Маршрут для получения списка всех книг
app.use('/books/get', getBooksRouter);

// Маршрут для поиска книги по ключевому слову
app.use('/books/search', searchBooksRouter);

// Маршрут для удаления книги по ID
app.use('/books/delete', deleteBooksRouter);

// Запуск сервера на указанном порту
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
