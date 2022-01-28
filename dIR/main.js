"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
console.log(numberOfFilms);
let moviess = prompt("Один из последних просмотренных фильмов?");
let film = prompt("На сколько оценили его?");
let personalMovieDB = {
  count: numberOfFilms,
  movies: {
      [moviess]: film
  },
  actors: {},
  genres: [],
  privat: false
}
console.log(personalMovieDB)
console.log(moviess);
console.log(film);

for (let i = 0; i < 1; i++) {

  const a = prompt("Один из последних просмотренных фильмов?"),
  b = prompt("На сколько его оцените?");

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
  personalMovieDB[a] = b;
  } else {
  console.log('Error!');
      
  i--;
  }

}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
  } else {
  console.log("Произошла ошибка");
}

console.log(personalMovieDB);