/* var bota = document.querySelector('span.material-icons');
        var itens = document.querySelector('nav.itens');

        bota.addEventListener('click', sumir);

        function sumir() {
            if (itens.style.display === 'flex') {
                itens.style.display = 'none';
            } else {
                itens.style.display = 'flex';
            }
        }*/

var itens = document.querySelector('nav.itens');
var botao = document.querySelector('span.material-icons');

botao.addEventListener('click', function() {
    itens.classList.toggle('ativo');
});
