let sectionElm1 = document.createElement("section");
sectionElm1.className = "movies1";

const urlShowing =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
const optionsShowing = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzM5NjI4MjE1NzUyNWZiYzJkOTUyZDdhYTZkNmRkZiIsIm5iZiI6MTc0MTAwMDc0My42NTEsInN1YiI6IjY3YzU5MDI3NmNhOTAzNWE2YTdhNzIyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U5_okfOSDI22-xA5WuNUPMHhsJEq0wKtA8gSg1aE5vQ",
  },
};

fetch(urlShowing, optionsShowing)
  .then((response) => response.json())
  .then((data) => {
    sectionElm1.innerHTML = `

    <div class="flex--between padding1">
        <h2>Now showing</h2>
        <button>See more</button>
    </div>
    
    <div class="movies1__list">
        
        ${data.results
          .map(function (movie) {
            return `
                <article class="card clickable-card">
                <figure class="movies1__card">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
                </figure>
                 <p><a class="movie__link" href="/detail.html?id=${
                   movie.id
                 }"></p></a>
                <p class="bold">${movie.title}</p>
                <p> star ${movie.vote_average.toFixed(1)}  / 10 IMDB</p>
                </article>
                `;
          })
          .join("")}
                </div>
                `;
  });

document.querySelector("main").append(sectionElm1);

const urlGenre = "https://api.themoviedb.org/3/genre/movie/list?language=en";
const optionsGenre = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzI4MjBjMjg1ZTExODI0NTE4YmQ2YmIxMDk2MTFlYSIsIm5iZiI6MTc0MDk4NjgxOC4zMTEsInN1YiI6IjY3YzU1OWMyODgxYzAxM2VkZTdhNmZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZrMpmSDPrfQXaE4MFgo8xAG45Qa1uHr9C3xtwehm910",
  },
};

let genreMap = {}; // skaber tomt object til at gemme genre id og name i

// første fetch til genre

fetch(urlGenre, optionsGenre)
  .then((response) => response.json())
  .then((data) => {
    data.genres.forEach((genre) => {
      genreMap[genre.id] = genre.name;
    });
  })
  .catch((err) => console.error("error fetching genres", err));

const urlPopular =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const optionsPopular = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzI4MjBjMjg1ZTExODI0NTE4YmQ2YmIxMDk2MTFlYSIsIm5iZiI6MTc0MDk4NjgxOC4zMTEsInN1YiI6IjY3YzU1OWMyODgxYzAxM2VkZTdhNmZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZrMpmSDPrfQXaE4MFgo8xAG45Qa1uHr9C3xtwehm910",
  },
};

fetch(urlPopular, optionsPopular)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err));

// Movies2 start

let sectionElm2 = document.createElement("section");
sectionElm2.className = "movies2";
fetch("https://api.themoviedb.org/3/movie/popular", optionsPopular)
  .then((response) => response.json())
  .then((data) => {
    sectionElm2.innerHTML = `
      <div class="movies2__popular flex--between gap1">
          <h2>Popular</h2>
          <button>See more</button>
      </div>
      <div class="movies2__list">
      ${data.results
        .map(function (movie) {
          return `
          <article class="card__2--columns gap1 ">
             
          <figure class="movies2__card">
              <a class="movie__link" href="/detail.html?id=${movie.id}">
              <img src="https://image.tmdb.org/t/p/w500${
                movie.poster_path
              }"></a>
          </figure>

          <p><a class="movie__link" href="/detail.html?id=${movie.id}"></a></p>
          
          <div class="card__info">
            <div class="flex--column gap1">
              <p class="bold">${movie.title}</p>
              <p> star ${movie.vote_average.toFixed(1)}  / 10 IMDB</p>
            </div> 
            <div class="genre-container">
             ${movie.genre_ids
               .map(function (id) {
                 return `
                     <span>${genreMap[id]}</span>
                     `;
               })
               .join(" ")}</div>


          </article>`;
        })
        .join("")}

      `;
  })
  .catch((err) => console.error(err));

sectionElm2.innerHTML = `
`;
document.querySelector("main").append(sectionElm2);
// Movies2 end
