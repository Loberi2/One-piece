let preview = document.getElementById("imagen_oculta");
document.querySelectorAll(".lider").forEach(function(link) {
    link.addEventListener("mouseenter", function() {
        let imgSrc = link.getAttribute("data-img");
        let posicion = link.getAttribute("data-posicion");
        if (imgSrc) {
            preview.innerHTML = `<img src="${imgSrc}">`;
            preview.style.display = "block";
        if (posicion == "abajo") {
                preview.classList.add("abajo");
            } 
        else {
                preview.classList.remove("abajo");
            }
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