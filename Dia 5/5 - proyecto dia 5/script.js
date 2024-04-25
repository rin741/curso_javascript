function recomendar(genero){

        let edad = document.getElementById("edadCliente").value;
        let recomendacion = document.getElementById("recomendacion");

       switch(genero){
            case 'comedia':
               if(edad < 13){
                recomendacion.textContent = "Shrek";
               }else{
                if(edad < 16){
                    recomendacion.textContent = "Dando la nota";
                }else{
                    recomendacion.textContent = "American Pie";
                }

               }
               break;

                case 'drama':
                if(edad < 13){
                    recomendacion.textContent = "Como entrenar a tu dragon";
                }else{
                 if(edad < 16){
                     recomendacion.textContent = "Hancock";
                 }else{
                     recomendacion.textContent = "Pieles";
                 }
 
                }
                break;

                case 'musical':
                    if(edad < 13){
                        recomendacion.textContent = "La sirenita";
                    }else{
                     if(edad < 16){
                         recomendacion.textContent = "Encanto";
                     }else{
                         recomendacion.textContent = "Sin novedad en el frente";
                     }
     
                    }
                    break;

                case 'crimen':
                    if(edad < 13){
                        recomendacion.textContent = "Los Tipos Malos";
                    }else{
                    if(edad < 16){
                        recomendacion.textContent = "Pain Hustlers";
                    }else{
                        recomendacion.textContent = "John wick";
                }

               }
               break;
       } 

}