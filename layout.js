let divElm = document.createElement("div");
divElm.id = "root";

divElm.innerHTML = `
<header class="header-index">
  <h1 class="header__title">MyMovies</h1>
  <div class="switch-container">
    <label class="switch" id="switch">
      <input type="checkbox">
      <span class="slider round"></span>
    </label>
  </div>
</header>
  <main>

  </main>
  <footer>
      <img src="https://placehold.co/24x24" alt="" srcset="">
      <img src="https://placehold.co/24x24" alt="" srcset="">
      <img src="https://placehold.co/24x24" alt="" srcset="">
  </footer>
`;

document.querySelector("body").append(divElm);
