import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let prices = document.querySelectorAll(".price");

  prices.forEach(p => {
    if(p.classList.contains("hot")){
      let text = p.innerHTML;
      // check for parentElement if cant pass
      p.innerHTML = `${text}&#128293;`;
    }
  })
});
