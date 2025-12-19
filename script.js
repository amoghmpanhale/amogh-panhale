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

/* Toggling Topics on the main research page */
function toggleTopic(header) {
    var dropdown = header.nextElementSibling;
    var arrow = header.querySelector('.arrow');
    
    if (dropdown.style.maxHeight) {
        dropdown.style.maxHeight = null;
        arrow.textContent = '▶';
    } else {
        dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
        arrow.textContent = '▼';
    }
}