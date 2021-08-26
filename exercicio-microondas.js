console.log('----MENU----');
console.log('Selecione a opção desejada');
console.log('1 - Pipoca');
console.log('2 - Macarrão');
console.log('3 - Carne');
console.log('4 - Feijão');
console.log('5 - Brigadeiro');

function esquentarComida (alimento, tempo){
    switch(alimento){
        case 1:
            let tempoPipoca = 10;
            return selecionaTempo (tempoPipoca, tempo);
        case 2:
            let tempoMacarrao = 8;
            return selecionaTempo (tempoMacarrao, tempo);
        case 3:
            let tempoCarne = 15;
            return selecionaTempo (tempoCarne, tempo);
        case 4:
            let tempoFeijao = 12;
            return selecionaTempo (tempoFeijao, tempo);
        case 5:
            let tempoBrigadeiro = 8; 
            return selecionaTempo (tempoBrigadeiro, tempo);
        default: 
            return 'Prato inexistente.';
    }
}

function selecionaTempo(tempoPadrao, tempoSelecionado){

    if ((tempoSelecionado > tempoPadrao*2) && (tempoSelecionado < 3*tempoPadrao)){
    return "Seu prato queimou."}

    else if (tempoSelecionado > (tempoPadrao*3)){
    return "Kabum!"
    }
    else if (tempoSelecionado < tempoPadrao){
        return "Tempo insuficiente."
    }
    else if ((tempoSelecionado == tempoPadrao) || (tempoSelecionado <= tempoPadrao*2)){
        return "Seu prato está pronto. Bom apetite!"
    }
}

console.log((esquentarComida(1,5000)))
