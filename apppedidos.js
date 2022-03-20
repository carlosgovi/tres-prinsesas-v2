/////////menu desplegable////////////
const iconoMenu = document.querySelector('#icono-menu'),
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

    // Alternamos estilos para el menu y body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    // Alternamos su atributo 'src' para el ícono del menú
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == 'open-menu.png'){
        e.target.setAttribute('src','open-menu2.png');
    }else{
        e.target.setAttribute('src','open-menu.png');
    }
});



//////////////////////CREANDO TEMPLATE PARA AGREGAR AL DOM////////////
const listadinamica=document.querySelector("#listaDinamica");///donde va el elemento
const fragment=document.createDocumentFragment();//creo el fragment
const template=document.querySelector("#template");//identifico el template



let btn=document.querySelector("#btn");
btn.addEventListener("click",(e)=>{
    
    const clone = template.content.cloneNode(true);///clono el template
    //////////////////////GUARDAR DATOS DE LOS INPUTS/////////////////////////////////////////
    const inFecha=document.querySelector("#infecha").value;
    const inId=document.querySelector("#inid").value;
    const inProducto=document.querySelector("#inproducto").value;
    const inCantidad=document.querySelector("#incantidad").value;
    const inObservaciones=document.querySelector("#inobservaciones").value;
    
    const objeto={
        fechaDePedido: inFecha,
        idDePedido:inId,
        productoDePedido:inProducto,
        cantidadDePedido:inCantidad,
        observacionesDePedido:inObservaciones,
    };
    
    clone.querySelector("#fecha").textContent = `-${objeto.fechaDePedido}-`;
    clone.querySelector("#id").textContent = `-${objeto.idDePedido}-`;
    clone.querySelector("#producto").textContent = `-${objeto.productoDePedido}-`;
    clone.querySelector("#cantidad").textContent = `-${objeto.cantidadDePedido}-`;
    clone.querySelector("#observaciones").textContent = `-${objeto.observacionesDePedido}-`;
    
    fragment.appendChild(clone);
    listadinamica.appendChild(fragment);
    console.log(objeto);

})
/////////////////////////////////////////////////////////////////////////