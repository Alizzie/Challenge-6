// Stored Elements
const openCloseSymbol = document.getElementsByClassName("openCloseSymbol")[0];
const mobileToggleBackground = Array.from(document.getElementsByClassName("mobileToggleBackground"));
const navbarLinks = Array.from(document.getElementsByClassName("navbarLinks"));
const mobileToggleMenu = mobileToggleBackground.concat(navbarLinks);

// Mobile Navigation Design
openCloseSymbol.addEventListener("click", function(){
  openCloseSymbol.classList.toggle("closeIcon");
  mobileToggleMenu.forEach(element => element.classList.toggle("hidden"));
})
