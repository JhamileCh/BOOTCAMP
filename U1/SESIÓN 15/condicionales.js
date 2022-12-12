var respuesta = prompt("¿Cómo te sientes el día de hoy?")

switch(respuesta){

    case 'feliz':
    alert("sigue estando feliz");
    break;

    case 'triste':
        alert("No estes triste, todo se soluciona");
        break; //* para romper este caso, break en españos es romper

    case 'molesto':
        alert("Trata de tranquilizarte");
        break;

    case 'enamorado':
        alert("Vive la vida y valora a esa persona")
        break;

        default:
            alert("Tu estado de animo es complicado")
}