let pc1 = {
    nombre : "Saber",
    procesador : "I5",
    memoria : "12gb",
    almacenamiento : "1tb",
    
};

let nombre = pc1 ["nombre"];
let procesador = pc1 ["procesador"];
let memoria = pc1 ["memoria"];
let almacenamiento = pc1 ["almacenamiento"];

frase = `El nombre de mi pc es <b>${nombre} </b> `

document.write(frase);