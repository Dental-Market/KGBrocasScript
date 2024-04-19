// Encontra a div com o ID "ctl00_HeaderAux_UpdatePanel3"
var divHeaderAux = document.getElementById("ctl00_HeaderAux_UpdatePanel3");

// Verifica se a div foi encontrada
if (divHeaderAux) {
    // Encontra a tag <header> dentro da div
    var headerTag = divHeaderAux.querySelector("header");

    // Verifica se a tag <header> foi encontrada dentro da div
    if (headerTag) {
        // Remove a tag <header> encontrada
        headerTag.parentNode.removeChild(headerTag);
        console.log("Tag <header> removida com sucesso.");

        // Cria uma nova requisição XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // Define a URL do header móvel
        var urlHeaderMobile = "https://dental-market.github.io/Scripts/HeaderMobile.html";

        // Abre a requisição para a URL do header móvel
        xhr.open("GET", urlHeaderMobile, true);

        // Configura a função a ser executada quando a requisição estiver pronta
        xhr.onload = function () {
            // Verifica se a requisição foi bem-sucedida (status 200)
            if (xhr.status === 200) {
                // Substitui o conteúdo do header encontrado pelo conteúdo carregado
                divHeaderAux.innerHTML += xhr.responseText;
                console.log("Conteúdo do header substituído com sucesso.");
            } else {
                console.error("Erro ao carregar o conteúdo do header: " + xhr.statusText);
            }
        };

        // Envia a requisição
        xhr.send();
    } else {
        console.log("Tag <header> não encontrada dentro da div 'ctl00_HeaderAux_UpdatePanel3'");
    }
} else {
    console.log("Div 'ctl00_HeaderAux_UpdatePanel3' não encontrada");
}
