let avaliacaoFeita = localStorage.getItem("avaliacao");

if (avaliacaoFeita !== null) {
    let valorAvaliacao = Number(avaliacaoFeita);
    for (let posEstrela = 0; posEstrela < 5; posEstrela++) {
        let estrela = document.getElementById("i" + posEstrela);

        if (posEstrela <= valorAvaliacao) {
            estrela.classList.remove("fa-regular");
            estrela.classList.add("fa-solid");
        } else {
            estrela.classList.remove("fa-solid");
            estrela.classList.add("fa-regular");
        }
    }
}

function avaliar(pos) {
    for (let posEstrela = 0; posEstrela < 5; posEstrela++) {
        localStorage.setItem("avaliacao", pos);
        let estrela = document.getElementById("i" + posEstrela);

        if (posEstrela <= pos) {
            estrela.classList.remove("fa-regular");
            estrela.classList.add("fa-solid");
        } else {
            estrela.classList.remove("fa-solid");
            estrela.classList.add("fa-regular");
        }
    }
}