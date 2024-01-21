let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    // Desafio 2: Impedir inclusão do mesmo nome
    if (amigos.includes(amigo.value)) {
        alert("Este amigo já foi incluído anteriormente.");
        return;
    }

    amigos.push(amigo.value);

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    amigo.value = '';

    atualizarLista();
}

function sortear() {
    // Desafio 1: Sortear e exibir pareamentos
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    let amigosSorteados = [...amigos];
    embaralharArray(amigosSorteados);

    for (let i = 0; i < amigos.length; i++) {
        let linhaSorteio = document.createElement('p');
        linhaSorteio.textContent = amigos[i] + ' --> ' + amigosSorteados[i];
        sorteio.appendChild(linhaSorteio);
    }
}

function excluirAmigo(index) {
    // Desafio 3: Confirmar exclusão com alert
    let confirmacao = confirm("Deseja excluir este amigo?");
    if (confirmacao) {
        amigos.splice(index, 1);
        atualizarLista();
    }
}

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Desafio 2: Impedir inclusão do mesmo nome
function validarNome() {
    let amigo = document.getElementById('nome-amigo');
    if (amigos.includes(amigo.value)) {
        alert("Este amigo já foi incluído anteriormente.");
        return false;
    }
    return true;
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];

        // Desafio 3: Marcar amigo selecionado
        paragrafo.addEventListener('click', function () {
            // Desafio 4: Exibir alerta de confirmação para excluir amigo
            let confirmacao = confirm("Deseja excluir este amigo?");
            if (confirmacao) {
                excluirAmigo(i);
            }
        });

        lista.appendChild(paragrafo);
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
