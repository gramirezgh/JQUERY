$(function () {
    var base_datos = "<xml version='1.0'><persona><nombres>Pedro</nombres> <apellidos>Perez</apellidos></persona> </xml>";
    var $xml = $(base_datos);
    var $nombres = $xml.find('nombres');
    var $apellidos = $xml.find('apellidos');

    $('#nombres').html($nombres);
    $('#apellidos').html($apellidos);
});