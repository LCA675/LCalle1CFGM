function precioPizza() {
    document.getElementById("precio").value =
    document.getElementById("pizza").options[document.getElementById("pizza").selectedIndex].value;
}
