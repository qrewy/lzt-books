# Библиотека: Управление книгами

Это приложение представляет собой систему управления книгами в библиотеке. Пользователь может добавлять, удалять и искать книги по названию или автору.

## Установка

1. Клонируйте репозиторий:

    ```bash
    git clone https://github.com/qrewy/lzt-books.git
    ```

2. Перейдите в директорию проекта:

    ```bash
    cd lzt-books
    ```

3. Установите зависимости:

    ```bash
    npm install
    ```

4. Запустите приложение:

    ```bash
    npm start
    ```

## Использование

### Добавление новой книги

Отправьте POST-запрос на `/books/add` с JSON-объектом, содержащим название, автора, описание и жанр книги.

Пример:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"title":"Book Title","author":"Author Name","description":"Book Description","genre":"Fiction"}' http://localhost:3000/books/add
