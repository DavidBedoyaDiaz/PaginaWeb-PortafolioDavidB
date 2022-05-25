// const carta = document.querySelector("#carta");

// function generarTarjeta() {
//   fetch("Estudiante.json")
//     .then((Response) => Response.json())
//     .then((data) => {
//       data.forEach((estudiante) => {
//         const nom = document.createElement("h1");
//         nom.innerHTML = `
//         <div class="nombre">${estudiante.nombre} </div>
//         `;
//         carta.appendChild(nom);
//       });
//     });
// }

// function generarTarjeta(){
//     var contenido1 = document.querySelector("#carta");
//     fetch("Estudiante.json")
//     .then(res => res.json())
//     .then(data =>{
//         data.forEach(element => {
//             console.log(element);
//         });
//         var correo = "<h1>nombre: " + data.nombre + "</h1>"
//         contenido1.innerHTML = correo;
//     });
// }

const datos = document.querySelector("#carta");

function generarTarjeta() {
  let i = 0;
  let cont = "";
  fetch("Estudiante.json")
    .then((res) => res.json())
    .then((est) => {
      var Estudiantes = Object.values(est.estudiantes);

      for (i = 0; i < Estudiantes.length; i++) {
        console.log(Estudiantes);

        var nombre = `<div class="divNombre" > <h1 class="nombre">${Estudiantes[i].nombre}</h1>  <img class="foto" src="img/FotoPortafolio.jpg"> </div>`;
        var github = ` <div class="divLink">
        <img src="/img/IconoGitHub.jpg"> <a href="${Estudiantes[i].github}" class="git">Mi github</a> </div>`;
        var neocities = `<div class="divLink">
         <img src="/img/IconoPaginaWeb.jpg"> <a  href="mailto:${Estudiantes[i].neocities} class="neocities">Mi neocities</a> </div>`;
        var correo = `<div class="divLink">
        <img src="/img/IconoCorreo.jpg"> <a href="mailto:${Estudiantes[i].correo}?subject=Contacto_PaginaWeb" class="correo">Mi correo</a> </div>`;
        var linkedin = `<div class="divLink1">
        <img src="/img/IconoLinkdin.jpg"> <a href="${Estudiantes[i].linkedin}" class="linkedin">Mi linkedin</a> </div>`;

        var actividad1 = `<div class="actividades">
        <a href="${Estudiantes[i].actividad1}" class="actividad1">Actividad 1: Finalizado: ${Estudiantes[i].porcentaje}</a> </div>`;
        var actividad2 = `<div class="actividades">
        <a href="${Estudiantes[i].actividad2}" class="actividad2">Actividad 2: Finalizado: ${Estudiantes[i].porcentaje}</a> </div>`;
        var actividad3 = `<div class="actividades">
        <a href="${Estudiantes[i].actividad3}" class="actividad3">Actividad 3: Finalizado: ${Estudiantes[i].porcentaje}</a> </div>`;
        var actividad4 = `<div class="actividades">
        <a href="${Estudiantes[i].actividad3}" class="actividad4">Actividad 4: Finalizado: ${Estudiantes[i].porcentaje}</a> </div>`;
        var html = `<div class="estados">
        <p class="html">Html ${Estudiantes[i].html} </p>`;
        var css = `<p class="css">Css ${Estudiantes[i].css} </p>`;
        var js = `<p class="js">JavaScript ${Estudiantes[i].js} </p>`;
        var ui = `<p class="ui">UI ${Estudiantes[i].ui} </p>`;
        var ux = `<p class="ux">UX ${Estudiantes[i].ux} </p> </div> `;

        cont += nombre + github + neocities + correo + linkedin + actividad1 + actividad2 + 
        actividad3 + actividad4  + html + css + js + ui + ux;
      }
      datos.innerHTML = cont;
    });
}

//est.forEach(x => {
//     const nom = document.createElement("tr");
//     nom.innerHTML += `<td> ${x.estudiantes['1']}</td>
//     ` ;
//     cheve.appendChild(nom);
// });

// const datos = [
//   {
//     nombre: "David Bedoya Díaz",
//     github: "https://github.com/DavidBedoyaDiaz",
//     neocities: "https://davidbedoya.neocities.org",
//     correo: "davidbediaz@gmail.com",
//     linkedin: "https://www.linkedin.com/in/david-bedoya-451313223/",
//     actividad1: "https://davidbedoya.neocities.org/HojaDeVida.html",
//     actividad2: "https://davidbedoya.neocities.org/FlashCards.html",
//     actividad3: "https://davidbedoya.neocities.org/Catalogo.html",
//     actividad4: "https://davidbedoya.neocities.org/EjerciciosJS.html",
//     porcentaje: "100%",
//     html: "100%",
//     css: "100%",
//     jss: "100%",
//     ui: "100%",
//     ux: "100%",
//   },
// ];

// function plantilla(datos) {
//   return `<div class="encabezado">
//     <div><h1 class="nombre">${datos.nombre}</h1><p class="precio">Precio: ${datos.precio}</p>
//     <p class="cantidad">Cantidad: ${datos.cantidad}</p><p class="descripcion">${datos.descripcion}</p>
//     <button class="btn">Comprar</button>
//     </div></div>`;
// }
// const p1 = (document.getElementById(
//   "app"
// ).innerHTML = `<h1>Productos Disponibles(${
//   datosproductos.length
// }) </h1> ${datosproductos.map(plantilla).join("")} <p class="precio">Son ${
//   datosproductos.length
// }
//     productos que se han actualizado recientemente en el catalogo.</p><p class="cantidad">Verifique las actualizaciones periodicamente!!!</p><br>`);
