// ENTRADA
const email = document.getElementById("txtEmail");
const error = document.getElementById("emailVal");
const btnEnviar = document.getElementById("btnEnviar");
let mensaje = "";
btnEnviar.onclick = function (){
    let vemail = email.value;
    let arroba = 0;
    //PROCESOS

    arroba = vemail.indexOf("@");
    if(arroba < 0){
        mensaje = "Email inválido";
    }else{
        window.location.replace("index.html");
    }
    //SALIDA
    error.innerText = mensaje;
}