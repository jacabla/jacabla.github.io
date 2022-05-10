const mensajeEncriptar = document.querySelector(".mensajeEncriptar")

const mensaje = document.querySelector(".mensajeEncriptar2")

function btencriptar(){
    const textoEncriptado = encriptar(mensajeEncriptar.value);
    mensaje.value = textoEncriptado
}

function encriptar(StringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    for (let i = 0; i < matrizCodigo.length; i++){
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringParaEncriptar;

}

function btDesencriptar(){
    const textoEncriptado = desencriptar(mensajeEncriptar.value);
    mensaje.value = textoEncriptado
}

function desencriptar(StringParaDesencriptar){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    for (let i = 0; i < matrizCodigo.length; i++){
        if(StringParaDesencriptar.includes(matrizCodigo[i][0])){
            StringParaDesencriptar = StringParaDesencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringParaDesencriptar;
}