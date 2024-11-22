document.addEventListener("DOMContentLoaded", function () {

    const searchTerm = sessionStorage.getItem("searchTerm");

    if (searchTerm) {

        document.querySelectorAll("h2, p").forEach((element) => {
            element.textContent = searchTerm;
        });
    } else {
        
        window.location.href = "tela_pesquisar.html";
    }
});