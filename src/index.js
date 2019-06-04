//Ocultando contenido de la página para mostrar inicio
document.getElementById("pantallaIngresar").style.display="none";
document.getElementById("pantallaDescifrar").style.display="none";
document.getElementById("pantallaCifrar").style.display="none";
document.getElementById("pantallaIngresarMsg").style.display="none";

//funcion boton ingresar resgistro de auto

function irAingresar(){
    document.getElementById("pantallaIngresar").style.display="block";
    document.getElementById("pantallaInicio").style.display="none";
    document.getElementById("pantallaDescifrar").style.display="none";
    document.getElementById("pantallaIngresarMsg").style.display="none";
}
//Validar enter falta investigar
//function validarEnter(){
        //if(event.wich== 13){
            //guardarHora();
        //} 
//}

//funcion para guardar dato de input cajaHora
function guardarHora(){
    
    let hora= document.getElementById("cajaHora").value;
    document.getElementById("valorPagHora").innerHTML= " "+hora;
}
//funcion para guardar dato de input cajaPlacas
function guardarPlacas(){
    
    let placas= document.getElementById("cajaPlacas").value;
    document.getElementById("valorPagPlacas").innerHTML= " "+placas;
}
//funcion para guardar dato de input cajaColor
function guardarColor(){
    let color= document.getElementById("cajaColor").value;
    document.getElementById("valorPagColor").innerHTML=" "+color;
}

//funcion para cifrar los datos ingresados
function cifrar(){   
    document.getElementById("header").style.display="block";
    document.getElementById("pantallaCifrar").style.display="block";
    document.getElementById("pantallaIngresar").style.display="none";
    document.getElementById("pantallaInicio").style.display="none";
    document.getElementById("pantallaDescifrar").style.display="none";
    document.getElementById("pantallaIngresarMsg").style.display="none";

    document.getElementById("mensajePagCifrado").innerHTML=
    "El mensaje CIFRADO es: "+"<br>"+cajaHora.value+"<br>"+cajaPlacas.value+"<br>"+cajaColor.value;
}

//funcion para volver a Inicio
function regresarHome(){
    document.getElementById("header").style.display="block";
    document.getElementById("pantallaInicio").style.display="block";
    document.getElementById("pantallaIngresar").style.display="none";
    document.getElementById("pantallaDescifrar").style.display="none";
    document.getElementById("pantallaCifrar").style.display="none";
    document.getElementById("pantallaIngresarMsg").style.display="none";
}

//funcion boton ir a ingresar mensaje a descifrar

function irAdescifrar(){
    document.getElementById("header").style.display="block";
    document.getElementById("pantallaIngresarMsg").style.display="block";
    document.getElementById("pantallaInicio").style.display="none";
    document.getElementById("pantallaIngresar").style.display="none";
    document.getElementById("pantallaCifrar").style.display="none";
    document.getElementById("pantallaDescifrar").style.display="none";
}

//funcion guardar el mensaje que se ingresó
function guardarMsg(){
    let mensajeIngresado= document.getElementById("cajaMsgDescifrado").value;
    document.getElementById("valorPagMsg").innerHTML= " "+mensajeIngresado;
}


//funcion para decodificar el mensaje que se ingresó
function descifrar(){
    document.getElementById("header").style.display="block";
    document.getElementById("pantallaDescifrar").style.display="block";
    document.getElementById("pantallaIngresar").style.display="none";
    document.getElementById("pantallaInicio").style.display="none";
    document.getElementById("pantallaCifrar").style.display="none";
    document.getElementById("pantallaIngresarMsg").style.display="none";


    document.getElementById("mensajePagDescifrado").innerHTML=
    "El mensaje DESCIFRADO es: "+"<br>"+cajaMsgDescifrado.value;
}

//------------------------------AQUI INICIA  LA PARTE DEL CIFRADO---------------

/*
//haciendo la funcion de obtener la conversion de mi Abcdario segun la posicion de letra en mi abcdario al valor en Ascii
function conociendoNumeroAscii(){
    //ascci inicia A=65 ... Z=90
    let miAbcdario= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let nRecorrer=4;    
    //obteniendo el valor ascii de la letra con posicion "x" en nuestro alfabeto
    let calisDeBusqueda=miAbcdario.charCodeAt(9);

    //obteniendo el nuevo valor ascii cifrado en cesar, recorriendo "n" posiciones en nuestro alfabeto
    let elNuevoValor=(calisDeBusqueda-65+nRecorrer)%26+65;
    let letraenCesar= String.fromCharCode(elNuevoValor);


    //imprimiendo el numero que corresponde en ascii y la nueva letra con el cifrado
    document.getElementById("calis").innerHTML=
    "El valor en ascii es: "+calisDeBusqueda+"<br>"+"El valor Cifrado Cesar es: "+letraenCesar;
    
}
*/
//tratando de agregar la version no solo de una letra sino de un string
//haciendo la funcion de obtener la conversion de mi Abcdario segun la posicion de letra en mi abcdario al valor en Ascii
function codificandoCalis(){
    //invocar valor color
    let color1= document.getElementById("cajaColor").value;
    //ascci inicia A=65 ... Z=90
    let misAbcs= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
    "O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    //llave
    let nRecorrer=4;

    //convertir el dato que se introdujo a un array de letras blanco= [b l a n c o]
    let colorLetra= color1.toUpperCase().split("");
    console.log(colorLetra);

    //recorrer el array
    for (let i=0; i<misAbcs.length;i++){
        let impresionIndiceColor =(misAbcs[i]);
        console.log(impresionIndiceColor+" hola");
        document.getElementById("calis2").innerHTML=impresionIndiceColor+" hola"+"<br>";

     
        
        for (let j=0; i<colorLetra.length;j++){
            let impresionIndiceColor =(colorLetra[j]);
            console.log(impresionIndiceColor+" adios");
            document.getElementById("calis2").innerHTML=impresionIndiceColor+" adios"+"<br>";
    
            // comparar array deletras con abecedario propio y haciendo conversion en cifrado cesar    
            if(misAbcs[i]== colorLetra[j]){
                let recolectandoValor;
        
            //obteniendo el valor ascii de la letra con posicion "x" en nuestro alfabeto
            let calisDeBusquedaColor=misAbcs.charCodeAt(recolectandoValor);
            let elNuevoValorColor=(calisDeBusquedaColor-65+nRecorrer)%26+65;
            let letraEnCesarColor= String.fromCharCode(elNuevoValorColor);
            //imprimiendo el numero que corresponde en ascii y la nueva letra con el cifrado 
            console.log(letraEnCesarColor);
            document.getElementById("calis2").innerHTML=impresionIndiceColor+" queonda";
            }
        }
    }
        
    

    
}

//CHECAR LA FUNCION JOING QUE ES PARA PEGAR UN ARREGLO Y ESO LO GUARDARIA EN UNA VARIABLE

/* Idea de Funcion en numero
//let nRecorrelo=parseInt(hora)*3*2;    
    //obteniendo el valor ascii de la letra con posicion "x" en nuestro alfabeto
    //let encuentrame=misAbcs.charCodeAt(0);

    //obteniendo el nuevo valor ascii cifrado en cesar, recorriendo "n" posiciones en nuestro alfabeto
    //let niuValue=(encuentrame-65+nRecorrelo)%26+65;
    //let letraCes= String.fromCharCode(niuValue);

    //imprimiendo el numero que corresponde en ascii y la nueva letra con el cifrado
    //document.getElementById("segundoCalis").innerHTML=
    //"El valor en ascii es: "+encuentrame+"<br>"+"El valor Cifrado Cesar es: "+letraCes;
    
    //encontrar la longitud de la cadena
    //let longituddeCadena=hora.length;
    //es el numero de veces que vas a pasar por el proceso de comparar 
*/