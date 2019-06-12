//Ocultando contenido de la página para mostrar inicio
document.getElementById('pantallaIngresar').style.display='none';
document.getElementById('pantallaDescifrar').style.display='none';
document.getElementById('pantallaCifrar').style.display='none';
document.getElementById('pantallaIngresarMsg').style.display='none';

//seccion ingresar datos de registro 
//nueva seccion  +++++
const irAingresarBtn=()=>{
    document.getElementById('pantallaIngresar').style.display='block';
    document.getElementById('pantallaInicio').style.display='none';
    document.getElementById('pantallaDescifrar').style.display='none';
    document.getElementById('pantallaIngresarMsg').style.display='none';
};
document.getElementById('botonIngresarData').addEventListener('click',irAingresarBtn);



//funcion para guardar hora ingresada
const guardarHora=()=>{
    let cajaHora=document.getElementById('cajaHora').value;
    let cajaMinuto=document.getElementById('cajaMinuto').value;
    document.getElementById('valorPagHora').innerHTML= cajaHora+':'+cajaMinuto+' horas';    
};
document.getElementById('cajaHora').addEventListener('click',guardarHora);
document.getElementById('cajaMinuto').addEventListener('click',guardarHora);

//funcion para guardar placas
const guardarPlacas= ()=>{
    let palabraIngresada= document.getElementById('cajaPlacas').value;
    document.getElementById('valorPagPlacas').innerHTML='Placas: '+palabraIngresada;    
};
document.getElementById('cajaPlacas').addEventListener('keyup',guardarPlacas);


//funcion para guardar color
const guardarColor= ()=>{
    let palabraIngresada= document.getElementById('cajaColor').value;
    document.getElementById("valorPagColor").innerHTML='Color: '+palabraIngresada;
};
document.getElementById('cajaColor').addEventListener('keyup',guardarColor);

//Imprimir el desplazamiento seleccionado
const guardarOffset= ()=>{
    const miDesplazamiento=parseInt(document.getElementById('offsetInput').value);
    document.getElementById('valorPagDesplazamiento').innerHTML= miDesplazamiento;
    console.log(miDesplazamiento);
};
document.getElementById('offsetInput').addEventListener('click',guardarOffset);
document.getElementById('offsetInput').addEventListener('keyup',guardarOffset);

//funcion para cifrar los datos ingresados
const irCifrar= () =>{   
    document.getElementById('header').style.display='block';
    document.getElementById('pantallaCifrar').style.display='block';
    document.getElementById('pantallaIngresar').style.display='none';
    document.getElementById('pantallaInicio').style.display='none';
    document.getElementById('pantallaDescifrar').style.display='none';
    document.getElementById('pantallaIngresarMsg').style.display='none';

    let hora=document.getElementById('cajaHora').value;
    let minuto=document.getElementById('cajaMinuto').value;
    let placas=document.getElementById('cajaPlacas').value;
    let color= document.getElementById('cajaColor').value;
    let palabraIngresada=hora+':'+minuto+placas+color;
    console.log(palabraIngresada);
    const miOffset=parseInt(document.getElementById('offsetInput').value);
    console.log(miOffset);

    document.getElementById('mensajePagCifrado').innerHTML=
    'El mensaje CIFRADO es: '+'<br>'+ window.cipher.encode(miOffset,palabraIngresada)+ 
    '<br>'+'La clave es: '+miOffset;
};
document.getElementById('cifrar').addEventListener('click',irCifrar);


//funcion para volver a Inicio
const regresarHome= ()=>{
    document.getElementById('header').style.display='block';
    document.getElementById('pantallaInicio').style.display='block';
    document.getElementById('pantallaIngresar').style.display='none';
    document.getElementById('pantallaDescifrar').style.display='none';
    document.getElementById('pantallaCifrar').style.display='none';
    document.getElementById('pantallaIngresarMsg').style.display='none';
};
document.getElementById('regresarHome').addEventListener('click',regresarHome);
document.getElementById('regresarHome2').addEventListener('click',regresarHome);
document.getElementById('regresarHome3').addEventListener('click',regresarHome);
document.getElementById('regresarHome4').addEventListener('click',regresarHome);

//boton ir a ingresar mensaje a descifrar
//nueva seccion +++++++++++++++++++++++++
const irAdescifrarBtn= ()=>{
    document.getElementById('header').style.display='block';
    document.getElementById('pantallaIngresarMsg').style.display='block';
    document.getElementById('pantallaInicio').style.display='none';
    document.getElementById('pantallaIngresar').style.display='none';
    document.getElementById('pantallaCifrar').style.display='none';
    document.getElementById('pantallaDescifrar').style.display='none';
};
document.getElementById('botonDescifrarData').addEventListener('click',irAdescifrarBtn);

//funcion guardar el mensaje que se ingresó
const guardarMsg= ()=>{
    let mensajeIngresado= document.getElementById('cajaMsgDescifrado').value;
    document.getElementById('valorPagMsg').innerHTML='El código ingresado es: '+mensajeIngresado;
};
document.getElementById('cajaMsgDescifrado').addEventListener('keyup',guardarMsg);
//funcion guardar clave desplazamiento
const guardarClave= ()=>{
    const miDesplazamientoDecode=parseInt(document.getElementById('offsetDecode').value);
    document.getElementById('valorPagDesplazamientoDecode').innerHTML='La clave ingresada es: '
    + miDesplazamientoDecode;
    console.log(miDesplazamientoDecode);
};
document.getElementById('offsetDecode').addEventListener('click',guardarClave);
document.getElementById('offsetDecode').addEventListener('keyup',guardarClave);
//funcion para decodificar el mensaje que se ingresó
const irDescifrar= ()=>{
    document.getElementById("header").style.display="block";
    document.getElementById("pantallaDescifrar").style.display="block";
    document.getElementById("pantallaIngresar").style.display="none";
    document.getElementById("pantallaInicio").style.display="none";
    document.getElementById("pantallaCifrar").style.display="none";
    document.getElementById("pantallaIngresarMsg").style.display="none";

    let mensajeDecode= document.getElementById('cajaMsgDescifrado').value;
    console.log(mensajeDecode);
    const miOffsetDecode=parseInt(document.getElementById('offsetDecode').value);
    console.log(miOffsetDecode);


    document.getElementById("mensajePagDescifrado").innerHTML=
    'El mensaje DESCIFRADO es: '+'<br>'+ window.cipher.decode(miOffsetDecode,mensajeDecode)+ 
    '<br>'+'La clave es: '+miOffsetDecode;
   
};
document.getElementById('descifrar').addEventListener('click',irDescifrar);

