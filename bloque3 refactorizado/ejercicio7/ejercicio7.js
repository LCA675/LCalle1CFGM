function deportes() {
    let futbol=document.getElementById("futbol");
    let basket=document.getElementById("basket");
    let tenis=document.getElementById("tenis");
    let resultadofinal= "";
    if (futbol.checked){
        resultadofinal+=" Fútbol";
    } 
    if (basket.checked){
        resultadofinal+=" Básket";
    } if (tenis.checked) {
        resultadofinal+=" Tenis";
    }
    document.write("Los deportes elegidos son: "+resultadofinal)
}