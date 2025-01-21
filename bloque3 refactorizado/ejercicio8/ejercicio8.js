function mayoriaEdad() {
    const s=document.getElementById("si");
    const n=document.getElementById("no");
    if (s.checked) {
        alert("Es usted apto para entrar en el sitio web");
    }
    if (n.checked) {
        alert("Usted no es apto para entrar al sitio web, tiene que ser mayor de edad");
    }
}