//As variáveis fixas
var div = document.getElementById(`box`),
estilo = window.getComputedStyle(div),
zoomAtual = 0

//Funções
//Função aumentar zoom
let maisZoom = zoom => {
    //pega o nivel de zoom atual da div
    zoomAtt()

    //verifica se o zoom atual ultrapassou o limite (5)
    if (Number(zoomAtual)+Number(zoom) >= 5) {
        div.style.zoom = 5
    }else{
        div.style.zoom = Number(zoomAtual)+Number(zoom)
        //console.log(zoomAtual)
    }
}

//Função diminuir zoom
let menosZoom = zoom => {
    zoomAtt()

    //Verifica se o zoom atual é menor que o limite (0.1)
    if (Number(zoomAtual)-Number(zoom) <= 0) {
        div.style.zoom = 0.1
        //console.log(zoomAtual)
    } else {
        div.style.zoom = Number(zoomAtual)-Number(zoom)
    }
}

//Função que pega o zoom atual da div
let zoomAtt = a =>{ return zoomAtual = estilo.getPropertyValue('zoom')}

//Função que pega a div
//let d = a => {return div = document.getElementById(`${a}`)}

//EVENTOS
//Evento de clicar no + ou no -
window.addEventListener('keydown', event => {
    let tecla = event.key
    if (tecla === '+') {
        maisZoom(0.2)
    } else if(tecla === '-'){
        menosZoom(0.2)
    }
})

//Evento de rodar o scroll do mouse
div.addEventListener('wheel', event => {
    const delta = Math.sign(event.deltaY)
    if (delta < 0) {
        maisZoom(0.1)
    } else {
        menosZoom(0.1)
    }
})