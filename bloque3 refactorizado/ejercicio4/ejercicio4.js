function a1 () {
    let nom= document.getElementById("nombre").value;
    let apelli= document.getElementById("apellido").value;
    alert ("Su nombre y apellido son "+nom+" "+apelli)
    let suma= nom +" " +apelli;
    document.getElementById("resultado").value = suma;        }