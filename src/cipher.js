window.cipher = {

  // ...
  
  encode: (string,offset) => {
    console.log(string);
    let cifraCesar='';

    for(let i=0;i<string.length;i++){

      if(string.charCodeAt(i) > 47 && string.charCodeAt(i) < 58){
          let palabraAscii=(string.charCodeAt(i)-48+offset)%10+48;
          let nuevaLetra =String.fromCharCode(palabraAscii);
          cifraCesar+= nuevaLetra;
      }else{
        //validacion que cuando encuentre un espacio, lo regrese como espacio
        if(string[i] == ' '){
          cifraCesar+= ' ';
        }else{
          //condicional para que aplique la formula para letras del abecedario
          let palabraAscii=(string.charCodeAt(i)-65+offset)%26+65;
          let nuevaLetra =String.fromCharCode(palabraAscii);
          cifraCesar+= nuevaLetra;
        }
      }
      
      
    }
    console.log(cifraCesar);
    return cifraCesar;
  },//termina funcion encode




  //inicia la funcion Descifrar
  decode: (string,offset) =>{
    console.log(string);
    let cadenaDescifrada='';

  
    for(let i=0;i<string.length;i++){
     
      //condicional para que reconozca si el caracter que recorre es un número en Ascii
      if(string.charCodeAt(i) > 47 && string.charCodeAt(i) < 58){
          let palabraAscii=string.charCodeAt(i)-(offset%10);
          if (palabraAscii< 48){
            palabraAscii=string.charCodeAt(i)+(10-(offset%10));
          }
          let nuevaLetra =String.fromCharCode(palabraAscii);
          cadenaDescifrada+= nuevaLetra;
      }else{
        //validacion que cuando encuentre un espacio, lo regrese como espacio
        if(string[i] == ' '){
          cadenaDescifrada+=' ';
        }else{
          //condicional para que aplique la formula para letras del abecedario
          let palabraAscii=(string.charCodeAt(i)+65-offset)%26+65;
          let nuevaLetra =String.fromCharCode(palabraAscii);
          cadenaDescifrada+= nuevaLetra;
        }
      }
      
      
    }
    console.log(cadenaDescifrada);
    return cadenaDescifrada;

  }//finaliza funcion decode


};//termina objeto global
  
   