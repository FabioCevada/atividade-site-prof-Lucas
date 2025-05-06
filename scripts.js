// Função que será executada assim que o conteúdo da página for carregado
document.addEventListener('DOMContentLoaded', function () {
    // Definindo a data do evento
    var countDownDate = new Date("May 5, 2025 00:00:00").getTime();
    
    // Função para calcular o tempo restante até o evento
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        // Calculando os dias, horas, minutos e segundos restantes
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Atualizando o elemento com o id "countdown" com o tempo restante
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        // Se o tempo acabar, exibe "EXPIRED"
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
});
