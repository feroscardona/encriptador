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
}

// activa el boton desiencriptar
function clickBoton2() {
     const Entregar2 = desencriptar(valorEncriptacion.value)
    mensajeResivido.value = Entregar2
    mensajeResivido.style.backgroundImage = "none";
    parrafo.style.display= "none"
    parrafo2.style.display = "none"
    
}

// activa el boton copiar
function copiar() {
   mensajeResivido.select();
   navigator.clipboard.writeText(mensajeResivido.value);
   mensajeResivido.value = "";
   
   

}





function encriptar(valorEncriptacion){
 
    

  valorEncriptacion = valorEncriptacion.toLowerCase()
   
  if( valorEncriptacion.includes("e")){
        valorEncriptacion= valorEncriptacion.replaceAll("e","enter")
    }
    
    if( valorEncriptacion.includes("i")){
        valorEncriptacion= valorEncriptacion.replaceAll("i","imes")
    }
  
    
    if( valorEncriptacion.includes("a")){
        valorEncriptacion= valorEncriptacion.replaceAll("a","ia")
    }
    
    if( valorEncriptacion.includes("o")){
        valorEncriptacion= valorEncriptacion.replaceAll("o","ober")
    }
    
    if( valorEncriptacion.includes("u")){
        valorEncriptacion= valorEncriptacion.replaceAll("u","ufat")
    } 
  return valorEncriptacion
    
}

// funcion para desencriptar
function desencriptar(valorEncriptacion){
 

 valorEncriptacion = valorEncriptacion.toLowerCase()
  
 if( valorEncriptacion.includes("enter")){
       valorEncriptacion= valorEncriptacion.replaceAll("enter","e")
   }
   
   if( valorEncriptacion.includes("imes")){
       valorEncriptacion= valorEncriptacion.replaceAll("imes","i")
   }
 
   
   if( valorEncriptacion.includes("ia")){
       valorEncriptacion= valorEncriptacion.replaceAll("ia","a")
   }
   
   if( valorEncriptacion.includes("ober")){
       valorEncriptacion= valorEncriptacion.replaceAll("ober","o")
   }
   
   if( valorEncriptacion.includes("ufat")){
       valorEncriptacion= valorEncriptacion.replaceAll("ufat","u")
   } 
 return valorEncriptacion
   
}
// esta funcion remplazar es utilizada con un onkeyup en el html para solo aceptar las letras permitidas. 
function remplazar(valorEncriptacion) {
    let texto = valorEncriptacion.value
    texto = texto.split(/[^a-z\ \ñ]+/g)
    texto = texto.join("")
    valorEncriptacion.value = texto
}