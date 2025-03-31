const video = document.getElementById('video_fundo');
video.playbackRate = 0.7; // Velocidade do vídeo de fundo

function minimizar(tipo) { //minimizar o uiux e o frontend ao serem clicados e irá aparecer atividades realizadas
    let uiuxBox = document.getElementById("uiux-box");
    let uiuxAtividades = document.getElementById("atividades");

    let frontendBox = document.getElementById("frontend-box");
    let frontendAtividades = document.getElementById("atividades2");

    let conteudoInicial = document.getElementById("content_page");

    if (tipo === "uiux") {
        let uiuxAberto = !uiuxAtividades.classList.contains("hidden");
        uiuxAtividades.classList.add("hidden");
        frontendAtividades.classList.add("hidden2");
        conteudoInicial.classList.remove("hidden");

        uiuxBox.classList.remove("minimized");
        frontendBox.classList.remove("minimized2");

        if (!uiuxAberto) {
            uiuxAtividades.classList.remove("hidden");
            conteudoInicial.classList.add("hidden");
            uiuxBox.classList.add("minimized");
            frontendBox.classList.remove("minimized2");
        }
    } else if (tipo === "frontend") {
        let frontendAberto = !frontendAtividades.classList.contains("hidden2");
        uiuxAtividades.classList.add("hidden");
        frontendAtividades.classList.add("hidden2");
        conteudoInicial.classList.remove("hidden");

        uiuxBox.classList.remove("minimized");
        frontendBox.classList.remove("minimized2");

        if (!frontendAberto) {
            frontendAtividades.classList.remove("hidden2");
            conteudoInicial.classList.add("hidden");
            frontendBox.classList.add("minimized2");
            uiuxBox.classList.remove("minimized");
        }
    }
}
