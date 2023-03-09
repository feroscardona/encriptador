var valorEncriptacion= document.querySelector(".texto");

var mensajeResivido = document.querySelector(".resivir");

var parrafo = document.querySelector(".mensjNoEncon")
var parrafo2 = document.querySelector(".mensjNoEncon2")

// activa el  boton encriptar
function clickBoton1() {
    const Entregar = encriptar(valorEncriptacion.value);
    mensajeResivido.value = Entregar;
    mensajeResivido.style.backgroundImage = "none";
    parrafo.style.display = "none"
    parrafo2.style.display = "none"
    valorEncriptacion.value = ""
}

// activa el boton desiencriptar
function clickBoton2() {
     const Entregar2 = desencriptar(valorEncriptacion.value)
    mensajeResivido.value = Entregar2
    mensajeResivido.style.backgroundImage = "none";
    parrafo.style.display= "none"
    parrafo2.style.display = "none"
    valorEncriptacion.value = ""
}

// activa el boton copiar
function copiar() {
   mensajeResivido.select();
   navigator.clipboard.writeText(mensajeResivido.value);
   parrafo.style.display= "block"
   parrafo2.style.display = "block"
   mensajeResivido.value = "";
   
   

}


let codigo = [["e","enter"],["i","imes"],["a","ia"],["o","ober"],["u","ufat"]];


function encriptar(string){
    
     for(let i = 0;i < codigo.length;i++){
        if(string.includes(codigo[i][0])){
            string = string.replaceAll(codigo[i][0],codigo[i][1]);
        }
    }

 return string
    
}

// funcion para desencriptar
function desencriptar(string){
    
    for(let i = 0;i < codigo.length;i++){
        if(string.includes(codigo[i][1])){
            console.log(codigo[i][1])
            string = string.replaceAll(codigo[i][1],codigo[i][0])
        }
    }

 
 return string
   
}

// esta funcion remplazar es utilizada con un onkeyup en el html para solo aceptar las letras permitidas. 
function remplazar(valorEncriptacion) {
    let texto = valorEncriptacion.value
    texto = texto.split(/[^a-z\ \ñ]+/g)
    texto = texto.join("")
    valorEncriptacion.value = texto
}