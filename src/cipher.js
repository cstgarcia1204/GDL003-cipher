window.cipher = {

  // ...
  
  encode: (offset,string) => {
    console.log('La palabra ingresada fue: '+string);
    let cifraCesar='';

    for(let i=0;i<string.length;i++){
      //validacion que cuando encuentre un caracter, lo regrese igual sin codificar
      if(string.charCodeAt(i) > 31 && string.charCodeAt(i) < 48 
        || string.charCodeAt(i)>57 && string.charCodeAt(i) <65
        || string.charCodeAt(i)>90 && string.charCodeAt(i) <97
        || string.charCodeAt(i)>122 && string.charCodeAt(i) <=255){
        let palabraAscii=string.charCodeAt(i);
        let nuevaLetra =String.fromCharCode(palabraAscii);
        cifraCesar+= nuevaLetra;
      }else{
        //validacion para que cuando encuentre numero entre a la fórmula
        if(string.charCodeAt(i) > 47 && string.charCodeAt(i) < 58){
          let palabraAscii=(string.charCodeAt(i)-48+offset)%10+48;
          let nuevaLetra =String.fromCharCode(palabraAscii);
          cifraCesar+= nuevaLetra;
        }else{
          //condicional para que aplique la formula para letras mayúsculas del abecedario
          if(string.charCodeAt(i) >64 && string.charCodeAt(i) <91){
            let palabraAscii=(string.charCodeAt(i)-65+offset)%26+65;
            let nuevaLetra =String.fromCharCode(palabraAscii);
            cifraCesar+= nuevaLetra;
          }else{
            //validacion para que aplique la formula correspondiente a letras minúsculas
            let palabraAscii=(string.charCodeAt(i)-97+offset)%26+97;
            let nuevaLetra =String.fromCharCode(palabraAscii);
            cifraCesar+= nuevaLetra;
            
        }
      }
    }
      
    }
    console.log('La palabra cifrada es : '+cifraCesar);
    return cifraCesar;
  },//termina funcion encode




  //inicia la funcion Descifrar
  decode: (offset,string) =>{
    console.log(string);
    let cadenaDescifrada='';

  
    for(let i=0;i<string.length;i++){
      //validacion que cuando encuentre un caracter, lo regrese igual  
      if(string.charCodeAt(i) > 31 && string.charCodeAt(i) < 48 
        || string.charCodeAt(i)>57 && string.charCodeAt(i) <65
        || string.charCodeAt(i)>90 && string.charCodeAt(i) <97
        || string.charCodeAt(i)>122 && string.charCodeAt(i) <=255){
        let palabraAscii=string.charCodeAt(i);
        let nuevaLetra =String.fromCharCode(palabraAscii);
        cadenaDescifrada+= nuevaLetra;
      }else{
        //validacion para que cuando encuentre un número entre a la fórmula descifrar
        if(string.charCodeAt(i) > 47 && string.charCodeAt(i) < 58){
          let palabraAscii=string.charCodeAt(i)-(offset%10);
            //validacion para que cuando el dígito cero sea recorrido hacia la izquierda
            //es decir valor menor al número 0 en ascii se regrese a 9
            if (palabraAscii< 48){
              palabraAscii=string.charCodeAt(i)+(10-(offset%10));
            }
          let nuevaLetra =String.fromCharCode(palabraAscii);
          cadenaDescifrada+= nuevaLetra;
        }else{
          //formulaoas letras mayusculas
          if(string.charCodeAt(i) >64 && string.charCodeAt(i) <91){
            //condicional para que aplique la formula para letras mayúsculas del abecedario
            let palabraAscii=(string.charCodeAt(i)+65-offset)%26+65;
            let nuevaLetra =String.fromCharCode(palabraAscii);
            cadenaDescifrada+= nuevaLetra;
          }else{
            //validacion para que aplique la formula correspondiente a letras minúsculas de abecedario
            let palabraAscii=(string.charCodeAt(i)+97+offset)%26+97;
            let nuevaLetra =String.fromCharCode(palabraAscii);
            cadenaDescifrada+= nuevaLetra;
        

          }
          
        }
      }
       
    }
    console.log(cadenaDescifrada);
    return cadenaDescifrada;

  }//finaliza funcion decode


};//termina objeto global
