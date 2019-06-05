function check(){
  let pregunta1 = document.preguntasH.respuesta1.value;
  let pregunta2 = document.preguntasH.respuesta2.value;
  let pregunta3 = document.preguntasH.respuesta3.value;
  let respuestaCorrecta= 0;

  if(pregunta1 == "Miguel"){
    respuestaCorrecta++;
  }
  if(pregunta2 == "Victoria"){
    respuestaCorrecta++;
  }
  if(pregunta3 == "Josefa"){
    respuestaCorrecta++;
  }
  document.getElementById("respuesta").style.visibility="visible";
  document.getElementById("respuesta").innerHTML="Tienes "+ respuestaCorrecta + " correctas";
}
