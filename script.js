var msgCaptura = document.getElementById("txt-captura");
var msgMensaje = document.getElementById("txt-mensaje");

var copiarBtn = document.querySelector(".copiar");
var encriptarBtn = document.querySelector(".encriptar");
var desencriptarBtn = document.querySelector(".desencriptar");

function ocultar(){
    document.querySelector(".no-mensaje").style.display = "none";
}

function mostrar(){
    document.querySelector(".mensaje").style.display = "block";
}

function btnEncriptar(){
    const textoEncriptado = encriptar(msgCaptura.value);
    msgMensaje.value = textoEncriptado;
    msgCaptura.value = "";
    ocultar();
    mostrar();
}
function btnDesencriptar(){
    const textoDesencriptado = desencriptar(msgCaptura.value);
    msgMensaje.value = textoDesencriptado;
    msgCaptura.value = "";
    ocultar();
    mostrar();
}

function btnCopiar(){
    msgMensaje.select();
    navigator.clipboard.writeText(msgMensaje.value);
    msgMensaje.value = "";
    alert("Texto Copiado");
}

function encriptar(stringCapturado) {
    var matrizEncriptadora = [["a", "ai"], ["i", "imes"], ["u", "ufat"], ["e", "enter"], ["o", "ober"]];
    stringCapturado = stringCapturado.toLowerCase();
    var stringCambiado = stringCapturado;

    for(var i = 0; i < matrizEncriptadora.length; i++){
        if(stringCapturado.includes(matrizEncriptadora[i][0])){
            stringCambiado = stringCambiado.replaceAll(matrizEncriptadora[i][0], matrizEncriptadora[i][1]);
        }
    }
    return stringCambiado;
}

function desencriptar(stringCapturado) {
    var matrizDesencriptadora = [["ai", "a"], ["imes", "i"], ["ufat", "u"], ["enter", "e"], ["ober", "o"]];
    stringCapturado = stringCapturado.toLowerCase();
    var stringCambiado = stringCapturado;

    for(var i = 0; i < matrizDesencriptadora.length; i++){
        if(stringCapturado.includes(matrizDesencriptadora[i][0])){
            stringCambiado = stringCambiado.replaceAll(matrizDesencriptadora[i][0], matrizDesencriptadora[i][1]);
        }
    }
    return stringCambiado;
}

encriptarBtn.onclick = btnEncriptar;
desencriptarBtn.onclick = btnDesencriptar;
copiarBtn.onclick = btnCopiar;