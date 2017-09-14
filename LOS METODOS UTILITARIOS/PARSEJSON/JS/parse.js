$(function () {
   var datos = '[{"Marca":"Ford"},{"Marca":"Chevrolet"},{"Marca":"Ferrari"},{"Marca":"Audi"}]';
   var cadena = '';
   var base_datos = $.parseJSON(datos);
   $.each(base_datos, function () {
      cadena += "<li>" + this['Marca'] + "<br>";
      });
   $('span').html(cadena);
});