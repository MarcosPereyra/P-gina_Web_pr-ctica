var poemasElegidos = [3, 50, 76]


alert("Se han seleccionado 3 poemas de los 76 que tiene Trilce. Ingrese a continuación los tres números que considere fueron elegidos.")
var num1 = parseInt(prompt("1er número:"))
while(num1 < 1 || num1 > 76 || isNaN(num1)){
    var num1 = parseInt(prompt("Vuelva a ingresar el 1er número:"))
}

switch(num1){
    case poemasElegidos[0]:
        alert("¡Muy bien! El número " + num1 + " es correcto.")
    break;
    case poemasElegidos[1]:
        alert("¡Muy bien! El número " + num1 + " es correcto.")
    break;
    case poemasElegidos[2]:
        alert("¡Muy bien! El número " + num1 + " es correcto.")
    break;
    default:
        alert("El número " + num1 + " no es correcto.")
    break;
}

var num2 = parseInt(prompt("2do número:"))
while(num2 < 1 || num2 > 76 || num2 == num1 || isNaN(num2)){
    var num2 = parseInt(prompt("Vuelva a ingresar el 2do número:"))
}
switch(num2){
    case poemasElegidos[0]:
        alert("¡Muy bien! El número " + num2 + " es correcto.")
    break;
    case poemasElegidos[1]:
        alert("¡Muy bien! El número " + num2 + " es correcto.")
    break;
    case poemasElegidos[2]:
    alert("¡Muy bien! El número " + num2 + " es correcto.")
    break;
    default:
        alert("El número " + num2 + " no es correcto. ¿A ver el último?")
    break;
}

var num3 = parseInt(prompt("3er número:"))
while(num3 < 1 || num3 > 76 || num3 == num1 || num3 == num2 || isNaN(num3)){
    var num3 = parseInt(prompt("Vuelva a ingresar el 3er número:"))
}
switch(num3){
    case poemasElegidos[0]:
        alert("¡Muy bien! El número " + num3 + " es correcto.")
    break;
    case poemasElegidos[1]:
        alert("¡Muy bien! El número " + num3 + " es correcto.")
    break;
    case poemasElegidos[2]:
        alert("¡Muy bien! El número " + num3 + " es correcto.")
    break;
    default:
        alert("El último número no fue acertado. Lo sentimos.")
}


function cambiarFondo(){
    var fondo = document.getElementById("main")
    var boton = document.getElementById("botonFondo")

    switch(boton.value){
        case "Fondo oscuro":
            var acepta = confirm("¿Quiere cambiar el fondo a oscuro?")
            if(acepta){
                fondo.style.backgroundColor = "rgb(30, 30, 30, 12)"
                fondo.style.color = "#F1F1F1"
                boton.value = "Fondo claro"
            }
        break;
        case "Fondo claro":
            var acepta2 = confirm("¿Quiere cambiar el fondo a claro?")
        
            if(acepta2){
                fondo.style.backgroundColor = "#FDD5D5"
                fondo.style.color = "black"
                boton.value = "Fondo oscuro"
            }
        break;
    }
}


function mostrarVideo(){
    var video = document.getElementById("video_mostrado")
    video.style.display ="inline"

    var click = document.getElementById("recitado")
    click.style.visibility ="none"
}


