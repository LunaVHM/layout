function validateForm( ) {

    var name=document.getElementById("name").value;
    var password=document.getElementById("password").value;
     if (  name== "1" &&  password== "2" ) {
       //alert("usuario y contrasena validos")
       window.open('home.html');
     }   else {
       alert("hubo un problema con el usuario y la contraseña. Alguno es incorrecto, porfavor intente de nuevo.");
     }

 };