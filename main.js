function showmenu() {
    document.getElementById("om").classList.toggle("show");
  }


  const paquetes = [
    {tipo:'Turismo sostenible', ref:'ts.html'},
    {tipo:'Turismo ciudad', ref:'tc.html'},
    {tipo:'Turismo rural', ref:'tr.html'},

  ]

  const boton = document.querySelector('.bot-bus');
  const datos = document.querySelector('.search');
  const resultado = document.querySelector('.rb');
  const caja = document.querySelector('.resultado');
  const ventana = document.querySelector('.cont');

  //const ventana2 = document.querySelector('.cuadro-opciones');


  const filtrar = () => {

    caja.style.display= 'flex';
    caja.style.flexwrap = 'wrap'
    resultado.innerHTML='';
    //console.log(datos.value);
    const texto = datos.value.toLowerCase();
    for (let paquete of paquetes){
      let tipo = paquete.tipo.toLocaleLowerCase();
      if (tipo.indexOf(texto) !== -1){

         resultado.innerHTML += `<a href='${paquete.ref}'>${paquete.tipo}</a><br>`
         
        
      }
    }

      if (resultado.innerHTML === ''){

        resultado.innerHTML += `

          <li>Lo sentimos no hemos encontrado lo que buscabas</li>
          
          `

      }

      
     
        

  

  };

  const ocultar = () => {

    caja.style.display= 'none';

  }



  boton.addEventListener('click', filtrar);
  ventana.addEventListener('click', ocultar);
  
 

  