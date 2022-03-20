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
///////////////////MENU DESPLEGABLE USER........////////////////////
/////////menu desplegable////////////
const iconoUser = document.querySelector('#icono-user'),
      user = document.querySelector('#user');

iconoUser.addEventListener('click', (e) => {

    // Alternamos estilos para el menu y body
    user.classList.toggle('activeuser');
    document.body.classList.toggle('opacity');

    // Alternamos su atributo 'src' para el ícono del menú
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == 'open-user.png'){
        e.target.setAttribute('src','open-user2.png');
    }else{
        e.target.setAttribute('src','open-user.png');
    }
});


//////////////////////CREANDO TEMPLATE PARA AGREGAR AL DOM////////////
const listadinamica=document.querySelector("#listaDinamica");///donde va el elemento
const fragment=document.createDocumentFragment();//creo el fragment
const template=document.querySelector("#template");//identifico el template
 const objetos={};
const contador=[];


let btn=document.querySelector("#btn");
btn.addEventListener("click",(e)=>{
    
    const clone = template.content.cloneNode(true);///clono el template
    //////////////////////GUARDAR DATOS DE LOS INPUTS/////////////////////////////////////////
    const inFecha=document.querySelector("#infecha").value;
    const inId=document.querySelector("#inid").value;
    const inProducto=document.querySelector("#inproducto").value;
    const inCantidad=document.querySelector("#incantidad").value;
    const inObservaciones=document.querySelector("#inobservaciones").value;
    contador.push(objetos);
    

    const pedidos={
        fechaDePedido: inFecha,
        idDePedido:inId,
        productoDePedido:inProducto,
        cantidadDePedido:inCantidad,
        observacionesDePedido:inObservaciones,
    };
    objetos[pedidos.length]=pedidos;
    
    clone.querySelector("#fecha").textContent = `-${pedidos.fechaDePedido}-`;
    clone.querySelector("#id").textContent = `-${pedidos.idDePedido}-`;
    clone.querySelector("#producto").textContent = `-${pedidos.productoDePedido}-`;
    clone.querySelector("#cantidad").textContent = `-${pedidos.cantidadDePedido}-`;
    clone.querySelector("#observaciones").textContent = `-${pedidos.observacionesDePedido}-`;
    
    fragment.appendChild(clone);
    listadinamica.appendChild(fragment);
    ///////////////////pruebas en localStorage///////////////////
   // let mispedidos=localStorage.getItem('mispedidos');
   // localStorage.setItem("mispedidos",JSON.stringify(mispedidos+contador));
    
   // console.log( JSON.parse( localStorage.getItem('mispedidos')));
    console.log(contador)

     
})
////////////////////////////////INICIO DE SESSION/////////////////////////////////////////
   const formulario=document.querySelector(".session");
   const usuario=document.querySelector("#usuario").value;
   const password=document.querySelector("#password").value;

   const regUsuario= /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
   const regPassword=/^[a-zA-Z0-9 ]*$/;
   
   formulario.addEventListener("submit",(e)=>{
       e.preventDefault();
       /////validaciones por js///
        if (!regUsuario.test(usuario)) {
            console.log("formulario (usuario) con error");
            
        }
        if (!regPassword.test(password)) {
            console.log("formulario (password) con error");
            
            
        }
        //////datos traidos del formulario//
        const inputs = new FormData(formulario);
        for ( let item of inputs){
            
            console.log(item);
        }
        console.log("formulario procesado");

        
       
   });
   
   