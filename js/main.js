/* ============================================================
   SIGG — Finca Las Mercedes
   Lógica principal del sitio
   ============================================================ */

// Espera a que el HTML esté cargado antes de tocar la página.
document.addEventListener("DOMContentLoaded", function () {

    /* ---------- Año actual en el pie ----------
       Así no hay que editar el año a mano cada enero. */
    const anio = document.getElementById("anio");
    if (anio) {
        anio.textContent = new Date().getFullYear();
    }

    /* ---------- Aviso en los módulos que aún no existen ----------
       Mientras las páginas de cada módulo no estén construidas,
       el enlace no lleva a ninguna parte. En vez de dejar que la
       página salte al inicio, avisamos de que está en construcción.

       Cuando crees la página de un módulo, cambia su href="#" por
       la ruta real (por ejemplo href="modulos/hato.html") y quita
       el aria-disabled="true" del HTML. */
    const enlaces = document.querySelectorAll('.modulo__enlace[aria-disabled="true"]');

    enlaces.forEach(function (enlace) {
        enlace.addEventListener("click", function (evento) {
            evento.preventDefault();

            const nombre = enlace.querySelector(".modulo__nombre").textContent;
            alert("El módulo «" + nombre + "» todavía está en construcción.");
        });
    });

    /* ---------- Formulario de contacto ----------
       Como aún no hay backend, evitamos que el formulario
       intente enviarse a "#" y en su lugar mostramos un
       mensaje de confirmación al usuario. */
    const formularioContacto = document.querySelector(".formulario-contacto");

    if (formularioContacto) {
        formularioContacto.addEventListener("submit", function (evento) {
            evento.preventDefault();
            alert("Gracias por escribirnos. Pronto te responderemos.");
            formularioContacto.reset();
        });
    }

});