dineroCof = prompt ("Cunato dinero tienes cofla");
dinerorRob = prompt ("Cunato dinero tienes roberto");
dineroPed = prompt ("Cunato dinero tienes pedro");

dineroCof = parseInt(dineroCof);

if(dineroCof >= 0.6 && dineroCof < 1){
    alert ("Compra un helado de fresa");
    alert ("y te sobran" + (dineroCof-0.6))
}

else if (dineroCof >= 1 && dineroCof <1.6) {
    alert ("Compra helado blanco");
    alert ("y te sobran" + (dineroCof-1))

}

else if (dineroCof >= 1.6 && dineroCof <1.7) {
    alert ("Compra helado verde");
    alert ("y te sobran" + (dineroCof-1.6))

}

else if (dineroCof >= 1.7 && dineroCof <1.8) {
    alert ("Compra helado rojo");
    alert ("y te sobran" + (dineroCof-1.7))

}

else if (dineroCof >= 1.8 && dineroCof <2.9) {
    alert ("Compra helado blanco");
    alert ("y te sobran" + (dineroCof-1.8))

}

else if (dineroCof >=2.9) {
    alert ("helado azul");
    alert ("y te sobran" + (dineroCof-2.9))
} else {
    alert ( "no te alcanza");
}