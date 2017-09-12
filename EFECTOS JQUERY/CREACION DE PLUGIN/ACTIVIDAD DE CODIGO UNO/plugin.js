jQuery.fn.plugin_hide = function () {
    this.each(function () {
        elemento = $(this);
        elemento.hide(1000);
    });
};

$(document).ready(function () {
    $("#eliminar").click(function () {
        $("#parrafo").plugin_hide();
    });
});