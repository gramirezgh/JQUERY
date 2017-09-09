$(function () {
    $("#boton1").click(function () {
        colaEfectos();
    });
    function colaEfectos() {
        var miDiv = $("#miDiv1");
        miDiv.queue(function () {
            $(this).css({
                "background-color":"blue",
            });
            $("#mensajeFinal").html("Se cambio el color a fondo azul");
            $(this).dequeue();
        });
        miDiv.hide(1000);
        miDiv.show(1000);
        miDiv.fadeIn(3000);
        miDiv.fadeOut(8000);
        miDiv.show(1000);
    }
});