
document.getElementById("pesquisa_pesquisar").addEventListener("click", function () {
    
    const searchTerm = prompt("O que você deseja pesquisar?");

    if (searchTerm) {
        
        sessionStorage.setItem("searchTerm", searchTerm);

        window.location.href = "resultado_pesquisa_resistenciacafe.html"; 
    }
});