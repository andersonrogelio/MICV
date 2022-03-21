let arregloProyectos = [{
    "enlace":"https://andersonrogelio.github.io/obligatorio_jap/",
    "name":"E-commerce(Jap)",
    "img":"img/proyectos/e-comerce 256px ancho.png",
    "img_sm":"img/proyectos/e-comerce 200px mobile.png",
    "img_mobile":"img/proyectos/e-comerce 128px mobile.png"},
    {
        "enlace":"https://andersonrogelio.github.io/Login_with_google/",
        "name":"Login with Google",
        "img":"img/proyectos/Login 256px.png",
        "img_sm":"img/proyectos/Login 200px.png",
        "img_mobile":"img/proyectos/Login 128px.png"}
]
function cargar_Proyectos() {
    let numproyect = document.getElementById("selectorpreoyectos").value;
    let html = "";
    if (numproyect >= 1) {
         html = `<a href="`+ arregloProyectos[numproyect-1].enlace +`" target="_blank"><img src="`+ arregloProyectos[numproyect-1].img +`" alt="`+ arregloProyectos[numproyect-1].name +`" class="mt-3 border border-3 border-dark d-none d-md-block h-100 w-auto mx-lg-auto"></a>
         <a href="`+ arregloProyectos[numproyect-1].enlace +`" target="_blank"><img src="`+ arregloProyectos[numproyect-1].img_sm +`" alt="`+ arregloProyectos[numproyect-1].name +`" class="mt-3 border border-3 border-dark d-none d-sm-block d-md-none h-100 w-auto mx-lg-auto"></a>
         <a href="`+ arregloProyectos[numproyect-1].enlace +`" target="_blank"><img src="`+ arregloProyectos[numproyect-1].img_mobile +`" alt="`+ arregloProyectos[numproyect-1].name +`" class="mt-3 border border-3 border-dark d-block d-sm-none h-100 w-auto mx-lg-auto"></a>`;
    }else{
        html = "";
    }
    document.getElementById("mostrarproyecto").innerHTML = html;
};
document.addEventListener("DOMContentLoaded",function(e){

    document.getElementById("english").addEventListener("click",function(e){
        window.location.href="English.html"
    });

    document.getElementById("spanish").addEventListener("click",function(e){
        window.location.href="Español.html"
    });
});