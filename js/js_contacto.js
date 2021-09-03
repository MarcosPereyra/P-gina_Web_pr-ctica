var nombre = document.getElementById("nombreIngresado")
var apellido = document.getElementById("apellidoIngresado")
var email = document.getElementById("emailIngresado")
var submit = document.getElementById("submit")
var contacto = document.getElementById("contacto")

function validarNombre(){
    if(nombre.value.trim() == ""){
        nombre.setCustomValidity("Campo obligatorio")
        nombre.style.backgroundColor = "rgba(255, 179, 179, 0.678)"
    } else {
        nombre.setCustomValidity("")
        nombre.style.backgroundColor = "white"
    }
}

function validarApellido(){
    if(apellido.value.trim() == ""){
        apellido.setCustomValidity("Campo obligatorio")
        apellido.style.backgroundColor = "rgba(255, 179, 179, 0.678)"
    } else {
        apellido.setCustomValidity("")
        apellido.style.backgroundColor = "white"
    }
}

function validarEmail(){
    if(email.value.trim() == ""){
        email.setCustomValidity("Campo obligatorio")
        email.style.backgroundColor = "rgba(255, 179, 179, 0.678)"
    } else {
        email.setCustomValidity("")
        email.style.backgroundColor = "white"
    }
}



function validarDatos(){
    nombre.addEventListener("input", validarNombre)
    apellido.addEventListener("input", validarApellido)
    email.addEventListener("input", validarEmail)

    validarNombre()
    validarApellido()
    validarEmail()
}

function confirmarEnvio(){
    var aceptar = confirm("¿Está seguro de querer enviar sus datos?")
    if(aceptar){
        alert("¡Datos enviados con éxito!")
    }
}

window.addEventListener("load", validarDatos)
