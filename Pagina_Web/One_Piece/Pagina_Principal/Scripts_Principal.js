const preview = document.getElementById("imagen_oculta");
document.querySelectorAll(".lider").forEach(function(link) {
    link.addEventListener("mouseenter", function() {
        const imgSrc = link.getAttribute("data-img");
        if (imgSrc) {
            preview.innerHTML = `<img src="${imgSrc}">`;
        preview.style.display = "block";
    }  
    });
    link.addEventListener("mousemove", function(e) {
        preview.style.left = e.clientX + "px";
        preview.style.top = e.clientY + "px";
    });
      link.addEventListener("mouseleave", function() {
        preview.style.display = "none";
}); 
});