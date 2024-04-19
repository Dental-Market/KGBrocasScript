document.createElement('ficha');

document.addEventListener('DOMContentLoaded', function () {
    var elementosMeuTexto = document.querySelectorAll('ficha');
    elementosMeuTexto.forEach(function (elemento) {
        elemento.innerHTML = '<div class="ficha-tecnica"> <table class="bordered striped centered" width="100%c"> <thead> <tr class="animate__animated animate__fadeInDown"><th>Perguntas Frequentes:</th></tr> </thead> <tbody> <tr class="animate__animated animate__fadeInUp "><td style="font-weight: bold;">1) O produto é novo?</td></tr> <tr class="animate__animated animate__fadeInUp "><td>R: Só trabalhamos com produtos novos e todas as vendas acompanham nota fiscal, produtos com garantia, procedência, fabricação e validade atuais</td></tr> <tr class="animate__animated animate__fadeInUp "><td style="font-weight: bold;">2) O produto é a pronta entrega?</td></tr> <tr class="animate__animated animate__fadeInUp "><td>R: Todos nossos produtos tem estoque para envio imediato.</td></tr> <tr class="animate__animated animate__fadeInUp "><td style="font-weight: bold;">3) Em quanto tempo o pedido é entregue?</td></tr> <tr class="animate__animated animate__fadeInUp "><td>R: Em até 24 horas da confirmação de pagamento já enviaremos seu produto, o prazo para entrega é o mesmo informado no anúncio.</td></tr> <tr class="animate__animated animate__fadeInUp "><td style="font-weight: bold;">NOTA FISCAL:</td></tr> <tr class="animate__animated animate__fadeInUp "><td>Emitimos nota fiscal em todas nossas vendas.</td></tr> <tr class="animate__animated animate__fadeInUp "><td style="font-weight: bold;">FRETE GRÁTIS:</td></tr> <tr class="animate__animated animate__fadeInUp "><td>Este produto pode ter frete grátis, consulte as condições.</td></tr> </tbody> </table> </div>';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var divInfos = document.querySelector('[data-id="infos"]');

    if (divInfos) {
        var parentElement = divInfos.parentElement;

        if (parentElement && parentElement.getAttribute("data-id") === "descricao") {
            parentElement.parentNode.insertBefore(divInfos, parentElement);
        }
    }
});
