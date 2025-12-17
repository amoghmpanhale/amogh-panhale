/* Open */
function openNav() {
    document.getElementById("navOverlay").style.width = "250px";
    document.querySelector(".hamburger").style.display = "none";
}
  
/* Close */
function closeNav() {
    document.getElementById("navOverlay").style.width = "0";
    document.querySelector(".hamburger").style.display = "block";
}