let divElm = document.createElement("div");
divElm.id = "root";

divElm.innerHTML = `
<header class="header-index">
    </header>
    <main>
      <div class="switch-container gap2 space-between absolute">
        <button onclick="history.back()">Back</button>
        <label class="switch" id="switch">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>


  </main>
  <footer>
      <img src="https://placehold.co/24x24" alt="" srcset="">
      <img src="https://placehold.co/24x24" alt="" srcset="">
      <img src="https://placehold.co/24x24" alt="" srcset="">
  </footer>
`;

document.querySelector("body").append(divElm);
