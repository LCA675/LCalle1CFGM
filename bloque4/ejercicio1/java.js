function aviso(control) {
    if (control.value.length<7 || control.value.length>20) {
        alert("Su contraseña debe de tener mínimo 7 caracteres y como máximo 20")
    }
}