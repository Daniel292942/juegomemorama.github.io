
const url1 = "https://sketchok.com/images/articles/01-cartoons/007-rick-and-morty/07/11.jpg";
const url2 = "https://static.wikia.nocookie.net/doblaje/images/1/1e/Rick_Sanchez_AS.png/revision/latest?cb=20210716131839&path-prefix=es"
const url3 = "https://static.wikia.nocookie.net/p__/images/5/56/MortySmith.png/revision/latest?cb=20221123223211&path-prefix=protagonist"
const url4 = "https://static.wikia.nocookie.net/rick-y-morty-espanol/images/a/ad/Sr_pantalones_de_popo.png/revision/latest?cb=20170427132711&path-prefix=es"
const url5 = "https://e1.pngegg.com/pngimages/500/378/png-clipart-rick-and-morty-hq-resource-man-with-angel-wings-animated-character.png"
const url6 = "https://static.wikia.nocookie.net/rick-y-morty-espanol/images/8/8b/Evil_morty.png/revision/latest?cb=20171025215747&path-prefix=es"
const url7 = "https://static.wikia.nocookie.net/rickandmorty/images/4/47/Micheal.png/revision/latest?cb=20200706163119"
const url8 = "https://img2.freepng.es/20180702/blu/kisspng-rick-sanchez-pickle-rick-morty-smith-pickled-cucum-rick-and-morty-5b3a21f0d8a952.2759486215305364328875.jpg"
const url9 = "https://static.wikia.nocookie.net/rick-y-morty-espanol/images/f/f1/Jerry_Smith.png/revision/latest?cb=20170401194639&path-prefix=es"

const carta1= document.getElementById("carta1");
const carta2= document.getElementById("carta2");
const carta3= document.getElementById("carta3");
const carta4= document.getElementById("carta4");
const carta5= document.getElementById("carta5");
const carta6= document.getElementById("carta6");
const carta7= document.getElementById("carta7");
const carta8= document.getElementById("carta8");
const carta9= document.getElementById("carta9");
const carta10= document.getElementById("carta10");
const carta11= document.getElementById("carta11");
const carta12= document.getElementById("carta12");
const carta13= document.getElementById("carta13");
const carta14= document.getElementById("carta14");
const carta15= document.getElementById("carta15");
const carta16= document.getElementById("carta16");
const carta17= document.getElementById("carta17");
const carta18= document.getElementById("carta18");

const urls=[url1,url2,url3,url4,url5,url6,url7,url8,url9];
const cartas=[carta1,carta2,carta3,carta4,carta5,carta6,carta7,carta8,carta9,  carta10,carta11,carta12,carta13,carta14,carta15,carta16,carta17,carta18];

const puntos1=document.getElementById('puntos1');
const puntos2=document.getElementById('puntos2');
const turnoH1=document.getElementById('turno');
let intervaloCarga=1500;
let intervaloVoltear=350;
let turno=1;
let jugador=1;



const revolverCartas=(urls, cartas)=>{

    const numerosAleatorios=[];
    const cartasRevueltas=[];
    let cartasConUrl=[];
    let destapeAnterior;
    
    

    //funcion que me de un numero del 1 al x que no se repita

    const numeroAleatorio=(numerMaximo)=>{
        //Generar numero aleatorio
        return Math.floor(Math.random() * numerMaximo);
    }

    const buscarArreglo=(arreglo,dato)=>{
        for(let i=0;i<arreglo.length;i++){
            if(arreglo[i]==dato)
                return true;
        }
        return false;
        
    }

    const generarNumeros=(numerMaximo)=>{
        let i=0;
        let seEncuentra;
        let numero;
        do {
            numero=numeroAleatorio(numerMaximo);
            seEncuentra=buscarArreglo(numerosAleatorios,numero);
            if(!seEncuentra){
                numerosAleatorios[i]=numero;
                i++;
            }
                
            
        }while(i!=numerMaximo);  
        
    }

    const ponerUrlACartas=(urls, numerosAleatorios)=>{
        let url;
        let j=0;
        

      
  
      
        for(let i=0;i<urls.length;i++){
            url = urls[i];
            (cartas[numerosAleatorios[j]]).style.backgroundImage= `url(${url})`;
            (cartasConUrl[numerosAleatorios[j]])= `url(${url})`;
            j++;
            (cartas[numerosAleatorios[j]]).style.backgroundImage= `url(${url})`;
            (cartasConUrl[numerosAleatorios[j]])= `url(${url})`;
            j++;

          
        
    
        }
        
        
    }

    generarNumeros((urls.length*2));
    ponerUrlACartas(urls, numerosAleatorios);
    return  cartasConUrl;

}
const ocultarContenido=(cartas)=>{ 
    for(let i=0;i<cartas.length;i++){
        cartas[i].style.color="red";
    } 
}
const mostrarContenido=(cartas)=>{
    for(let i=0;i<cartas.length;i++){
        cartas[i].style.color="transparent";
    } 
}   
const ocultarFondo=(cartas)=>{
    
    setTimeout(function() {
        ocultarContenido(cartas);
        for(let i=0;i<cartas.length;i++){
            cartas[i].style.backgroundImage="none";
        }
      }, intervaloCarga);
      
      
}
const voltearCarta=(cartas,cartasConUrl)=>{
    if(cartas.style.backgroundImage!="none"){ 
        cartas.style.backgroundImage="none";
        cartas.style.color="red";
    }else{
        cartas.style.backgroundImage=cartasConUrl;
        cartas.style.color="transparent"; 
    }
}
const voltearCartaAutomatica=(cartas,intervaloVoltear)=>{
      setTimeout(function() {                
        cartas.style.backgroundImage="none";
        cartas.style.color="red";
        }, intervaloVoltear);

}

const saberTurno =(turno ,nJugador)=>{
 
    if((turno==2)){
        turno=0;

        
            if(nJugador==1){
                nJugador=2;
            }        
            else{
                nJugador=1;
            }
        
    }
    
    return [nJugador,turno];
    
}

const gameOver=(cartas,cartasBloqueadas)=>{
    console.log(cartas.length+" "+cartasBloqueadas.length)
    if (cartasBloqueadas.length==cartas.length)
        return alert("Fin del juego");
}
const jugar=(cartas)=>{

    const cartasConUrl= revolverCartas(urls,cartas);
    let contadorJ1=0;
    let contadorJ2=0;
    let turnoSiguiente;
    let jugadorAnterior;
    let memoria;
    let cartasBloqueadas=[];


   
    for (let i=0;i<cartas.length;i++){
  
        cartas[i].addEventListener("click",function(){
            
            
            
           

           turnoSiguiente= saberTurno(turno,jugador);
           jugador=turnoSiguiente[0]; 
           turno=turnoSiguiente[1];
           
           turnoH1.textContent=`Turno de Jugador: ${jugador}`;

           
                turno++;
           
           
        
            

            voltearCarta(cartas[i],cartasConUrl[i]);
            if(turno%2!=0){
                
                if ((cartas[memoria].style.backgroundImage)!=(cartas[i].style.backgroundImage)){
                    voltearCartaAutomatica(cartas[i],intervaloVoltear);
                    voltearCartaAutomatica(cartas[memoria],intervaloVoltear+50);
                }else{
                    if(memoria!=i){
                        turnoH1.textContent=`Turno de Jugador: ${jugadorAnterior}`;
                        jugador=jugadorAnterior;
                        
                        if(jugador==1){
                            contadorJ1++;
                            cartasBloqueadas.push(memoria)
                            cartasBloqueadas.push(i)
                            console.log("se añadio "+i +" al arreglo");
                        }
                            
                        else{
                            contadorJ2++;
                            cartasBloqueadas.push(memoria)
                            cartasBloqueadas.push(i)
                            console.log("se añadio "+i +" al arreglo");
                        }

                   
                        puntos1.textContent=`J1: ${contadorJ1}`; 
                        puntos2.textContent=`J2: ${contadorJ2}`;
                    }
      
                    
                }
            }else{
                
                memoria=i;
            }
            

        
                      
            jugadorAnterior=jugador;
            gameOver(cartas,cartasBloqueadas);
            
    
        });
        
    }
}


ocultarFondo(cartas);
mostrarContenido(cartas);
jugar(cartas);










