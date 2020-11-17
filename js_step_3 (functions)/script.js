/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// 1
let numberOfFilms;

function start() {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

    /* While a user submits an empty string or сlicks cancel or enters a non-number */
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", ""); 
    }
}

start(); // function call 

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const   title = prompt("Один из последних просмотренных фильмов?", ""),
                rating = prompt("На сколько оцените его?", ""); 
    
        // 2
        if (title != null && rating != null && title != '' && rating != '' && title.length < 50) {
            personalMovieDB.movies[title] = rating;
            console.log("Done!");
        } else {
            console.log("Error");
            i--;
        }
    }
}

rememberMyFilms(); // function call

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel(); // function call

// 2
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat); // function call

// 3
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();