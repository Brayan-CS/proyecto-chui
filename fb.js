var rootRef = firebase.database().ref();

const formu = document.getElementById('contactForm').addEventListener('submit', guardarForm);


function guardarForm(e){

    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("tel").value;
    let mensaje = document.getElementById("mensaje").value;
    let data ={

            nombre: nombre,
            apellido: apellido,
            correo: correo,
            telefono: telefono,
            mensaje: mensaje
    };
    saveContactForm(data); // Enviamos la información obtenida por el usuario a la función que se encargara de guardar la información en Firebase
    document.getElementById('contactForm').reset(); // borramos todos los campos. 
    }

    function saveContactForm(data) {
        rootRef.push(data) // Hacemos referencia al método database de el SDK y hacemos referencia el nombre del objeto que contendrá nuestros registros y empujamos los nuevos envios de datos
          .then(function(){
            alert('mensaje guardado'); // Si la petición es correcta y almaceno los datos mostramos un mensaje al usuario.
          })
          .catch(function(){
            alert('mensaje No guardado'); // En caso de ocurrir un error le mostramos al usuario que ocurrió un error.
          });
      };