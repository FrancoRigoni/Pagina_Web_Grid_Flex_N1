// Seleccion y iteracion de colores
let botones = document.querySelectorAll(".botones-switch");
let section = document.getElementsByClassName("main__presentacion")
// Ocultar cuadro de colores
let Ajustes = document.getElementsByClassName("color-switch_Ajuste")
let caja_ajustes = document.getElementsByClassName("color-switch")
// Icono del Gear ajustes
let icono = document.getElementById("Gear")
//letras del Switch
let h3 = document.getElementsByClassName("h3_cambiar_color")
// Reset
let guardar_section = window.getComputedStyle(section[0])
let guardar_section_background = guardar_section.getPropertyValue("background")
//let array = ["green","yellow","red","pink","gray","blue"]

// Agregamos interacion a la rueda para cuando apretemos se oculte y se abra.
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

// ForEach Para que con cada iteracion de los indices de los botones querySelectorAll[indices]
// Se valla aplicando con cada iteracion el color del atributo del html Entonces con solo cambiar,
// El Js-color del html se cambiara los botones, el texto y la rueda de ajustes.

botones.forEach ((colores, indice) => {
    //console.log(colores)
    let guardar = botones[indice].attributes[0].value
    colores.style.background = guardar                 //array[indice]

})

// ForEach Para El evento de cuando hagas clic en el boton redondo

botones.forEach( (color) => {
    color.addEventListener ("click", () => {
        let guardar = color.attributes[0].value
        section[0].style.background = guardar
        icono.style.color = guardar
        h3[0].style.color = guardar
        })
    })


