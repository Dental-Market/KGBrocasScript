if (window.innerWidth < 768) {
    var divHeaderAux = document.getElementById("ctl00_HeaderAux_UpdatePanel3");

    if (divHeaderAux) {
        var headerTag = divHeaderAux.querySelector("header");

        if (headerTag) {
            headerTag.parentNode.removeChild(headerTag);

            var xhr = new XMLHttpRequest();
            var urlHeaderMobile = "https://dental-market.github.io/Scripts/HeaderMobile.html";

            xhr.open("GET", urlHeaderMobile, true);

            xhr.onload = function () {
                if (xhr.status === 200) {
                    divHeaderAux.innerHTML += xhr.responseText;
                }
            };

            xhr.send();
        }
    }
}
