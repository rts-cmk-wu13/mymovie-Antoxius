let rootElm = document.documentElement;
let switchElm = document.querySelector(".switch input");
let isDarkMode = readFromLocalStorage("isDarkMode");
let browserDark = window.matchMedia("(prefer-color-scheme: dark)").matches;
console.log("matchMedia", browserDark);
console.log("localStorage", isDarkMode);



if (isDarkMode || browserDark) {
  switchElm.checked = true;
  rootElm.setAttribute("data-dark", switchElm.checked);
} else {
  rootElm.setAttribute("data-dark", switchElm.checked);
}
switchElm.addEventListener("change", function () {
  //   console.log(switchElm.checked);
  saveToLocalStorage("isDarkMode", switchElm.checked);

  if (switchElm.checked) {
    rootElm.setAttribute("data-dark", switchElm.checked);
  } else {
    rootElm.setAttribute("data-dark", switchElm.checked);
  }
});
