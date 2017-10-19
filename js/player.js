var botaoPlay = document.querySelector('.botao-play');
var audio = document.querySelector('#player audio');

botaoPlay.onclick = function() {
            
                if(audio.paused) {
                    botaoPlay.classList.add("paused");
                    botaoPlay.classList.remove("play");
                    audio.play();
                } else {
                    botaoPlay.classList.remove("paused");
                    botaoPlay.classList.add("play");
                    audio.pause();
                }  
            }

 audio.onplay = function() {
    console.log('DEU PLAY!!!!'); 
    botaoPlay
}
 audio.onpause = function() {
    console.log('DEU PAUSE!!!!'); 
}

audio.ontimeupdate = function() {
    console.log(audio.currentTime);
    var porcentagem = (audio.currentTime / audio.duration) * 100;
    var tocado = document.querySelector('.tocado');
    tocado.style.width = porcentagem + '%';

    var duracaoAtual = Math.round(audio.currentTime);
    var spanTempoAtual = document.querySelector('.tempo-atual');
    spanTempoAtual.innerText = duracaoAtual;

    var data = new Date(2017, 0, 1)
    data.setSeconds(duracaoAtual);

    spanTempoAtual.innerText = 
        data.getMinutes ().toString().padStart(2, '0')
        + ':' + data.getSeconds().toString().padStart(2, '0');
}


