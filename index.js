// Stored Elements
const openCloseSymbol = document.getElementsByClassName("openCloseSymbol")[0];
const mobileToggleBackground = Array.from(document.getElementsByClassName("mobileToggleBackground"));
const navbarLinks = Array.from(document.getElementsByClassName("navbarLinks"));
const mobileToggleMenu = mobileToggleBackground.concat(navbarLinks);
const creations = Array.from(document.getElementsByClassName("creation"));
const button = document.getElementsByTagName("button")[0];

// Mobile Navigation Design
openCloseSymbol.addEventListener("click", function(){
  openCloseSymbol.classList.toggle("closeIcon");
  mobileToggleMenu.forEach(element => element.classList.toggle("hidden"));
})

// Creations Redirection (for now back to start)

creations.forEach(creation => creation.addEventListener("click", function(){
  window.location.href = "index.html";
}))

button.addEventListener("click", function(){
  window.location.href = "index.html";
})
