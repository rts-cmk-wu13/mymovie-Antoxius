let search = window.location.search;
let params = new URLSearchParams(search);
let movieId = params.get("id");
console.log(movieId);

const url = `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=credits,videos&language=en-US`;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzM5NjI4MjE1NzUyNWZiYzJkOTUyZDdhYTZkNmRkZiIsIm5iZiI6MTc0MTAwMDc0My42NTEsInN1YiI6IjY3YzU5MDI3NmNhOTAzNWE2YTdhNzIyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U5_okfOSDI22-xA5WuNUPMHhsJEq0wKtA8gSg1aE5vQ",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((movie) => {
    console.log(movie);

    let sectionElm = document.createElement("section");
    sectionElm.className = "movie-detail";
    sectionElm.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${
              movie.backdrop_path
            }" alt="">
            <div class="title flex--between padding-top2">
              <h1 class="bold">${movie.title}</h1>
              <button><img src="/img/bookmark.png" alt="" srcset=""></button>
            </div>
            <p class="margin-inline2"> star ${movie.vote_average.toFixed(
              1
            )}  / 10 IMDB</p>
            <div class="genre-container gap1">
            ${movie.genres
              .map(function (genre) {
                return `
                <span> 
                  ${genre.name}
                </span>
                `;
              })
              .join("")}
            </div>    
    `;
    document.querySelector("main").append(sectionElm);
  });

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error(err));
