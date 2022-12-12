var preguntas=["¿En qué año fue entregado el primer balón de oro?",
"¿Qué jugador se llevó el balón de oro este año 2022?",
"¿Qué país gano los Juegos Asunción 2022 en la categoría vóley?",
"¿Cómo se llama la capitana del equipo de vóley peruano?",
"¿En que país se creó el basquetbol?",
"¿Cuántos puntos valen una encestada dentro de la línea?",
"¿Cuánto es el tiempo del record mundial en natación?",
"¿Cuántos participantes Se calcula que participan en natación?",
"¿Cómo se traduce el primer nombre del tenis “sphairistiké”?",
"¿Cuántos puntos se puede obtener en el tenis?"
]

var opciones = [
    ["1950", 
    "1952", 
    "1954", 
    "1956"],
    ["Harry Kane",
    "Karim Benzem",
    "Virgil Van Dijk",
    "Antonio Rudiger",],
    ["Argentina",
    "Brasil",
    "Perú",
    "Venezuela"],
    ["Karla Ortiz",
    "Jade Cuya",
    "Aixa Vigil",
    "Angela Barboza"],
    ["Estados Unidos",
    "Alemania",
    "Francia",
    "Colombia"],
    ["1",
    "2",
    "3",
    "4"],
    ["43,49” ",
    "46,86”	",
    "46,91” ",
    "49,37”	"],
    ["650 y 700",
    "700 y 750",
    "750 y 800",
    "800 y 850"],
    ["Jugando con la bola",
    "Habilidad de jugar con la bola",
    "Juego de pelota",
    "Arte de jugar con la pelota"],
    ["15 / 25 / 30",
    "15 / 30 / 40 ",
    "10 / 20 / 30 ",
    "20 / 30 / 40 "]
   ]

   var puntajePorOpción=[
    [0,0,0,2],
    [0,2,0,0],
    [0,0,2,0],
    [2,0,0,0],
    [2,0,0,0],
    [0,2,0,0],
    [0,2,0,0],
    [0,0,2,0],
    [0,0,0,2],
    [0,2,0,0],
    
];

var i=0;

function siguientePregunta(){

    document.getElementById("preguntas").innerHTML=preguntas[i];

    document.getElementById("op1").innerHTML=opciones[i][0];

     document.getElementById("op2").innerHTML=opciones[i][1];
     document.getElementById("op3").innerHTML=opciones[i][2];
     document.getElementById("op4").innerHTML=opciones[i][3];
   }

siguientePregunta();
    
var actualizado=0;

    function actualizarPuntaje(alternativa){

        actualizado = puntajePorOpción[i][alternativa]+actualizado; 
        i++;

        if (i<10){
            siguientePregunta(); 
        } 


    if (i<10){
        siguientePregunta(); 
         if(i==1) {
            document.getElementsByClassName("imagen1")[0].innerHTML="";
        
            var img1=document.createElement('img');
            img1.id=("primero");
            img1.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8G8jndx49IhaGPDYKz4k_GjGxCPXYHtdOwg&usqp=CAU")
            document.getElementsByClassName("imagen1")[0].appendChild(img1);
              }
            
        else if(i==2) {
            document.getElementsByClassName("imagen1")[0].innerHTML="";

            var img1=document.createElement('img');
            img1.id=("segundo");
            img1.setAttribute("src","https://pbs.twimg.com/profile_images/1519743728507838464/DozRi887_400x400.jpg")
            document.getElementsByClassName("imagen1")[0].appendChild(img1);
        }

        else if(i==3) {
            document.getElementsByClassName("imagen1")[0].innerHTML="";

            var img1=document.createElement('img');
            img1.id=("tercero");
            img1.setAttribute("src","https://elcomercio.pe/resizer/YTUaAK5wpXFqOavrFNp88vb5RaE=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/2WF7LPP7QRF7ZKMLTITQDOKJWY.jpg")
            document.getElementsByClassName("imagen1")[0].appendChild(img1);
        }


        else if(i==4) {
            document.getElementsByClassName("imagen1")[0].innerHTML="";

            var img1=document.createElement('img');
            img1.id=("cuarto");
            img1.setAttribute("src","https://depor.com/resizer/IkyhEYU4e9uEFGqSmuiNqKeh9DE=/234x161/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/J5SDKRT65NFX3BJEOH3RON6YFQ.jpg")
            document.getElementsByClassName("imagen1")[0].appendChild(img1);
        }

        else if(i==5) {
            document.getElementsByClassName("imagen1")[0].innerHTML="";

            var img1=document.createElement('img');
            img1.id=("quinto");
            img1.setAttribute("src","https://e00-marca.uecdn.es/albumes/2015/05/23/2015_nba_kobe/1432370657_extras_albumes_0_980.jpg")
            document.getElementsByClassName("imagen1")[0].appendChild(img1);

        }

        else if(i==6) {
            document.getElementsByClassName("imagen1")[0].innerHTML="";

            var img1=document.createElement('img');
            img1.id=("sexto");
            img1.setAttribute("src","https://ichef.bbci.co.uk/news/640/cpsprodpb/92F0/production/_126061673_899.jpg")
            document.getElementsByClassName("imagen1")[0].appendChild(img1);
        }

        else if(i==7) {
            document.getElementsByClassName("imagen1")[0].innerHTML="";

            var img1=document.createElement('img');
            img1.id=("septimo");
            img1.setAttribute("src","https://swimswam.com/wp-content/uploads/2020/08/A89F2A24-8C71-4244-A167-C7B067558148.jpeg")
            document.getElementsByClassName("imagen1")[0].appendChild(img1);
        }

        else if(i==8) {
            document.getElementsByClassName("imagen1")[0].innerHTML="";

            var img1=document.createElement('img');
            img1.id=("octavo");
            img1.setAttribute("src","https://edufisicap.files.wordpress.com/2017/12/cropped-tennis-ball-1162631_960_7201.jpg")
            document.getElementsByClassName("imagen1")[0].appendChild(img1);
        }
        else if(i==9) {
            document.getElementsByClassName("imagen1")[0].innerHTML="";

            var img1=document.createElement('img');
            img1.id=("noveno");
            img1.setAttribute("src","https://somostenis.com.ar/wp-content/uploads/2021/05/tennis-3815381_1920.jpg")
            document.getElementsByClassName("imagen1")[0].appendChild(img1);
        }      
    }

               

        else{
            
            mostrarResultado();
        }
    }


     document.getElementById("op1").addEventListener("click",function(){actualizarPuntaje(0)}) 
        document.getElementById("op2").addEventListener("click",function(){actualizarPuntaje(1)})
        document.getElementById("op3").addEventListener("click",function(){actualizarPuntaje(2)})
        document.getElementById("op4").addEventListener("click",function(){actualizarPuntaje(3)})
    
    function mostrarResultado(){

        document.getElementById("TITULO").innerHTML="RESULTADOS"
        document.getElementById("preguntas").innerHTML="EL PUNTAJE OBTENIDO ES: "+actualizado;
        document.getElementsByClassName("pregunta_alternativa")[0].innerHTML="";
    
    }

