/*https://andersonrogelio.github.io/obligatorio_jap/*/
let arregloProyectos = [{
    "enlace":"https://andersonrogelio.github.io/obligatorio_jap/",
    "name":"E-commerce(Jap)",
    "img":"img/proyectos/e-comerce 256px ancho.png"}
]
function cargar_Proyectos() {
    let numproyect = document.getElementById("selectorpreoyectos").value;
    let html = "";
    if (numproyect >= 1) {
         html = `<a href="`+ arregloProyectos[numproyect-1].enlace +`"><img src="`+ arregloProyectos[numproyect-1].img +`" alt="`+ arregloProyectos[numproyect-1].name +`" class="mt-3 border border-3 border-dark d-block h-100 w-auto mx-auto"></a>`;
    }else{
        html = "";
    }
    document.getElementById("mostrarproyecto").innerHTML = html;
};


document.addEventListener("DOMContentLoad",function(e){
console.log(arregloProyectos);
console.log(document.getElementById("selectorpreoyectos").value);
});