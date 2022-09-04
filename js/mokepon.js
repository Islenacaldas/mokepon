const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar =document.getElementById('boton-reiniciar')
sectionReiniciar.style.display='none'
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let mokepones=[]
let ataqueJugador=[]
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonTierra 
let botonFuego 
let botonAgua 
let botones=[]
let vidasJugador=3
let vidasEnemigo=3

class Mokepon {
    constructor(nombre, foto, vida) { 
        this.nombre=nombre
        this.foto=foto
        this.vida=vida
        this.ataques=[]
    }
}

let Hipodoge=new Mokepon('Hipodoge', './asets/mokepons_mokepon_hipodoge_attack.png', 5)

let Capipepo = new Mokepon('Capipepo', './asets/mokepons_mokepon_capipepo_attack.jpg', 5)

let Ratigueya = new Mokepon('Ratigueya', './asets/mokepons_mokepon_ratigueya_attack.png', 5)

Hipodoge.ataques.push( 
    {nombre: '💧', id: 'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌱',id: 'boton-tierra'},
)
Capipepo.ataques.push( 
    {nombre:'🌱',id: 'boton-tierra'},
    {nombre:'🌱',id: 'boton-tierra'},
    {nombre:'🌱',id: 'boton-tierra'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
)
Ratigueya.ataques.push( 
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre: '💧',id:'boton-agua'},
)

mokepones.push(Hipodoge, Capipepo, Ratigueya)

function iniciarJuego(){

sectionSeleccionarAtaque.style.display = 'none'
mokepones.forEach((Mokepon) => {
    opcionDeMokepones = `
    <input type="radio" name="mascota" id=${Mokepon.nombre}/>
    <label class="tarjeta-de-mokepon" for=${Mokepon.nombre}>
        <p>${Mokepon.nombre}</p>
        <img src=${Mokepon.foto} alt=${Mokepon.nombre}>
    </label>
    `
    contenedorTarjetas.innerHTML += opcionDeMokepones
    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById('Capipepo')
    inputRatigueya = document.getElementById('Ratigueya')

})
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)
    
}


function seleccionarMascotaJugador(){
   
    sectionSeleccionarMascota.style.display='none'

    sectionSeleccionarAtaque.style.display='flex'

    if(inputHipodoge.checked){spanMascotaJugador.innerHTML=inputHipodoge.id
        mascotaJugador=inputHipodoge.id}else if(inputCapipepo.checked){spanMascotaJugador.innerHTML=inputCapipepo.id
        mascotaJugador=inputCapipepo.id}else if(inputRatigueya.checked){spanMascotaJugador.innerHTML=inputRatigueya.id
        mascotaJugador=inputRatigueya.id}else{alert('Selecciona una mascota')}
    
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()

}
    function extraerAtaques(mascotaJugador){
        let ataques
        for(let i = 0; i< mokepones.length; i++)
        if (mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
        mostrarAtaques(ataques)
    }
function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon =` 
        <button id=${ataque.id} "boton-fuego" class="boton-de-ataque BAtaque">${ataque.nombre}</button> 
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
     botonFuego = docment.getElementById('boton-fuego')
     botonAgua = docment.getElementById('boton-agua')
     botonTierra = docment.getElementById('boton-tierra')
    botones= document.querySelectorAll('.BAtaque')


     botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)

}
function secuenciaAtaque(){
    botones.forEach((boton) =>{
        boton.addEventListener('click',(e) => {
            if (e.target.textContent === '🔥'){
                 ataqueJugador.push('FUEGO')
                 console.log(ataqueJugador)
                 boton.style.background = '#112f58'
                }else if (e.target.textContent === '💧'){
                    ataqueJugador.push('AGUA')
                    console.log(ataqueJugador)
                    boton.style.background = '#112f58'
                }else {(e.target.textContent === '🌱')
                    ataqueJugador.push('TIERRA')
                    console.log(ataqueJugador)
                    boton.style.background = '#112f58'}
        ataqueAleatorioEnemigo()
                })
    })
}
    function seleccionarMascotaEnemigo(){

        let mascotaAleatoria = aleatorio(0, mokepones.length -1)
        
        spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre

        ataquesMokeponEnemigo = mokepones[mascotaAleatoria].nombre

        secuenciaAtaque()
        }


    function ataqueAleatorioEnemigo(){
        let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)

        if (ataqueAleatorio== 0 ||  ataqueAleatorio == 1){
            ataqueEnemigo.push('FUEGO')
        }else if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
            ataqueEnemigo.push('AGUA')
        }else {
            ataqueEnemigo.push('TIERRA')
        }
        console.log(ataqueEnemigo)
        iniciarPelea()
    }
    
    function iniciarPelea(){
        if (ataqueJugador.length === 5 ){
            combate()
        }
    }

        function combate(){
for (let = 0; index<ataqueJugador.length; index++){
    console.log(ataqueJugador[index])
}            

            if (ataqueJugador== ataqueEnemigo){
                crearMensaje(" EMPATE")
            }else if( ataqueJugador== 'FUEGO' && ataqueEnemigo== 'TIERRA'){
                crearMensaje(" GANASTE")  
                vidasEnemigo--
                spanVidasEnemigo.innerHTML = vidasEnemigo     
            }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
                crearMensaje(" GANASTE")
                vidasEnemigo--
                spanVidasEnemigo.innerHTML = vidasEnemigo   
            }else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
                crearMensaje(" GANASTE")
                vidasEnemigo--
                spanVidasEnemigo.innerHTML = vidasEnemigo   
            }else {
                crearMensaje(" PERDISTE")
                vidasJugador--
                spanVidasJugador.innerHTML = vidasJugador
              
            }
            revisarVidas () 
        }
    function revisarVidas(){
        if (vidasEnemigo == 0){
           crearMensajeFinal("felicitaciones! ganaste 🎉😊💕")   
        }else if (vidasJugador == 0){
            crearMensajeFinal("lo siento, perdiste 😢")
        }
    }
    
    function crearMensaje(resultado){

            

            
            let nuevoAtaqueDelJugador = document.createElement('p')
            let nuevoAtaqueDelEnemigo = document.createElement('p')
    
            sectionMensajes.innerHTML = resultado
            nuevoAtaqueDelJugador.innerHTML=ataqueJugador
            nuevoAtaqueDelEnemigo.innerHTML=ataqueEnemigo
          
            ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
            ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    }
    function crearMensajeFinal (resultadoFinal){
       

        sectionMensajes.innerHTML = resultadoFinal
        
       
        botonFuego.disabled=true
        
        botonAgua.disabled=true
       
        botonTierra.disabled = true

       
        sectionReiniciar.style.display= 'block'
    }

    function reiniciarJuego(){
        location.reload()
    }

    function aleatorio(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

      

window.addEventListener('load', iniciarJuego)
