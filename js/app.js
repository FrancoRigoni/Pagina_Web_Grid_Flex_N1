// Seleccion y iteracion de colores
let botones = document.querySelectorAll(".botones-switch");
let section = document.getElementsByClassName("main__presentacion")
// Ocultar cuadro de colores
let Ajustes = document.getElementsByClassName("color-switch_Ajuste")
let caja_ajustes = document.getElementsByClassName("color-switch")
// Reset
let guardar_section = window.getComputedStyle(section[0])
let guardar_section_background = guardar_section.getPropertyValue("background")
//let array = ["green","yellow","red","pink","gray","blue"]

let contador = 0;
Ajustes[0].addEventListener("click", function() {
    if (contador == 0) {
        caja_ajustes[0].style.right = "0"
        contador++
    }else if (contador == 1) {
        caja_ajustes[0].style.right = "-175px"
        contador--
    }
})

botones.forEach ((colores, indice) => {
    console.log(colores)
    let guardar = botones[indice].attributes[0].value
    colores.style.background = guardar                 //array[indice]
})

botones.forEach( (color) => {
    color.addEventListener ("click", () => {
        let guardar = color.attributes[0].value
        section[0].style.background = guardar
        })
    })


