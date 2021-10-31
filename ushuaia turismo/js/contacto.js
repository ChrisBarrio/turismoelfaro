function valida_envia(){
    //Datos obligatorios 
    if (document.fvalida.nombre.value.length==0){
           alert("Tiene que escribir su nombre")
           document.fvalida.nombre.focus()
           return 0;
    }
    if (document.fvalida.apellido.value.length==0){
        alert("Tiene que escribir su apellido")
        document.fvalida.nombre.focus()
        return 0;
    }
    if (document.fvalida.nacionalidad.value.length==0){
        alert("Tiene que escribir su nacionalidad")
        document.fvalida.nombre.focus()
        return 0;
    }
    if (document.fvalida.texto.value.length==0){
        alert("Debe escribir su consulta")
        document.fvalida.texto.focus()
        return 0;
    }
    if (document.fvalida.email.value.length==0){
        alert("Debe escribir su consulta")
        document.fvalida.email.focus()
        return 0;
    }
    

    
   
    //el formulario se envia y deja mensaje
    alert("Muchas gracias por contactarnos, en el plazo de las próximas 24 hs hábiles nos pondremos en contacto.");
    document.fvalida.submit();
}