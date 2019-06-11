//Ocultando contenido de la página para mostrar inicio
document.getElementById('pantallaIngresar').style.display='none';
document.getElementById('pantallaDescifrar').style.display='none';
document.getElementById('pantallaCifrar').style.display='none';
document.getElementById('pantallaIngresarMsg').style.display='none';

//seccion ingresar datos de registro 
//nueva seccion  +++++
document.getElementById('botonIngresarData').addEventListener('click',irAingresarBtn);

function irAingresarBtn(){
    document.getElementById('pantallaIngresar').style.display='block';
    document.getElementById('pantallaInicio').style.display='none';
    document.getElementById('pantallaDescifrar').style.display='none';
    document.getElementById('pantallaIngresarMsg').style.display='none';
}


//funcion para guardar hora ingresada
document.getElementById('cajaHora').addEventListener('click',guardarHora);
document.getElementById('cajaMinuto').addEventListener('click',guardarHora);
function guardarHora(){
    let cajaHora=document.getElementById('cajaHora').value;
    let cajaMinuto=document.getElementById('cajaMinuto').value;
    document.getElementById('valorPagHora').innerHTML= cajaHora+':'+cajaMinuto+' horas';    
}

//funcion para guardar placas
document.getElementById('cajaPlacas').addEventListener('keyup',guardarPlacas);
function guardarPlacas(){
    let palabraIngresada= document.getElementById('cajaPlacas').value.toUpperCase();
    document.getElementById('valorPagPlacas').innerHTML='Placas: '+palabraIngresada;
    
}
//funcion para guardar color
document.getElementById('cajaColor').addEventListener('keyup',guardarColor);
function guardarColor(){
    let palabraIngresada= document.getElementById('cajaColor').value.toUpperCase();
    document.getElementById("valorPagColor").innerHTML='Color: '+palabraIngresada;
    
}

//Imprimir el desplazamiento seleccionado
document.getElementById('offsetInput').addEventListener('click',guardarOffset);

function guardarOffset(){
    const miDesplazamiento=parseInt(document.getElementById('offsetInput').value);
    document.getElementById('valorPagDesplazamiento').innerHTML= miDesplazamiento;
    console.log(miDesplazamiento);
}

//funcion para cifrar los datos ingresados
document.getElementById('cifrar').addEventListener('click',irCifrar);
function irCifrar(){   
    document.getElementById('header').style.display='block';
    document.getElementById('pantallaCifrar').style.display='block';
    document.getElementById('pantallaIngresar').style.display='none';
    document.getElementById('pantallaInicio').style.display='none';
    document.getElementById('pantallaDescifrar').style.display='none';
    document.getElementById('pantallaIngresarMsg').style.display='none';

    let hora=document.getElementById('cajaHora').value;
    let minuto=document.getElementById('cajaMinuto').value;
    let placas=document.getElementById('cajaPlacas').value.toUpperCase();
    let color= document.getElementById('cajaColor').value.toUpperCase();
    let palabraIngresada=hora+minuto+placas+color;
    console.log(palabraIngresada);
    const miOffset=parseInt(document.getElementById('offsetInput').value);
    console.log(miOffset);

    document.getElementById('mensajePagCifrado').innerHTML=
    'El mensaje CIFRADO es: '+'<br>'+ window.cipher.encode(palabraIngresada,miOffset)+ 
    '<br>'+'La clave es: '+miOffset;
}


//funcion para volver a Inicio
document.getElementById('regresarHome').addEventListener('click',regresarHome);
document.getElementById('regresarHome2').addEventListener('click',regresarHome);
document.getElementById('regresarHome3').addEventListener('click',regresarHome);
document.getElementById('regresarHome4').addEventListener('click',regresarHome);

function regresarHome(){
    document.getElementById('header').style.display='block';
    document.getElementById('pantallaInicio').style.display='block';
    document.getElementById('pantallaIngresar').style.display='none';
    document.getElementById('pantallaDescifrar').style.display='none';
    document.getElementById('pantallaCifrar').style.display='none';
    document.getElementById('pantallaIngresarMsg').style.display='none';
}

//boton ir a ingresar mensaje a descifrar
//nueva seccion +++++++++++++++++++++++++
document.getElementById('botonDescifrarData').addEventListener('click',irAdescifrarBtn);

function irAdescifrarBtn(){
    document.getElementById('header').style.display='block';
    document.getElementById('pantallaIngresarMsg').style.display='block';
    document.getElementById('pantallaInicio').style.display='none';
    document.getElementById('pantallaIngresar').style.display='none';
    document.getElementById('pantallaCifrar').style.display='none';
    document.getElementById('pantallaDescifrar').style.display='none';
}

//funcion guardar el mensaje que se ingresó
document.getElementById('cajaMsgDescifrado').addEventListener('keyup',guardarMsg);
function guardarMsg(){
    let mensajeIngresado= document.getElementById('cajaMsgDescifrado').value;
    document.getElementById('valorPagMsg').innerHTML='El código ingresado es: '+mensajeIngresado;
}
//funcion guardar clave desplazamiento
document.getElementById('offsetDecode').addEventListener('click',guardarClave);
function guardarClave(){
    const miDesplazamientoDecode=parseInt(document.getElementById('offsetDecode').value);
    document.getElementById('valorPagDesplazamientoDecode').innerHTML='La clave ingresada es: '
    + miDesplazamientoDecode;
    console.log(miDesplazamientoDecode);

}

//funcion para decodificar el mensaje que se ingresó
document.getElementById('descifrar').addEventListener('click',irDescifrar);
function irDescifrar(){
    document.getElementById("header").style.display="block";
    document.getElementById("pantallaDescifrar").style.display="block";
    document.getElementById("pantallaIngresar").style.display="none";
    document.getElementById("pantallaInicio").style.display="none";
    document.getElementById("pantallaCifrar").style.display="none";
    document.getElementById("pantallaIngresarMsg").style.display="none";

    let mensajeDecode= document.getElementById('cajaMsgDescifrado').value.toUpperCase();
    console.log(mensajeDecode);
    const miOffsetDecode=parseInt(document.getElementById('offsetDecode').value);
    console.log(miOffsetDecode);


    document.getElementById("mensajePagDescifrado").innerHTML=
    'El mensaje DESCIFRADO es: '+'<br>'+ window.cipher.decode(mensajeDecode,miOffsetDecode)+ 
    '<br>'+'La clave es: '+miOffsetDecode;
   
}