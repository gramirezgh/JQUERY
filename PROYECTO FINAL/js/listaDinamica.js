// //JSON de estudiantes
// var estudiantes = [
//     {codigo:"020",nombre:"Andres Copa",nota:4,asistencia:6,genero:"M"},
//     {codigo:"019",nombre:"Arturo Mendez",nota:1,asistencia:6,genero:"M"},
//     {codigo:"018",nombre:"Liliana Carvajal",nota:9,asistencia:8,genero:"F"},
//     {codigo:"001",nombre:"Jhoel Martinez",nota:10,asistencia:9,genero:"M"}
// ];
// //cargar los eventos a traves de WINDOWS ONLOAD
// window.onload = cargarEventos;
// //Funcion que realiza la carga de eventos  a traves de addEventListener
// function cargarEventos(){
//     document.getElementById("mostrar-tabla").addEventListener("click",mostrarTabla,false);
//     document.getElementById("nuevo-estudiante").addEventListener("submit",nuevoEstudiante,false);
//     document.getElementById("nota-promedio").addEventListener("click",notaPromedio,false);
//     document.getElementById("nota-mayor-menor").addEventListener("click",notaMayorMenor,false);
//     document.getElementById("promedio-asistencia").addEventListener("click",promedioAsistencia,false);
//     document.getElementById("mostrar-genero").addEventListener("click",mostrarGenero,false);
// }
// //funcion que muestra la tabla Estudiantes mediante una iteracion y posterior extraccion de JSON estudiantes
// function mostrarTabla(){
//     var cuerpoTabla = document.getElementById("estudiantes-tabla");
//     var tablaLlena="";
//
//     for(var i=0;i<estudiantes.length;i++){
//         tablaLlena += "<td><td>"+estudiantes[i].codigo+"</td><td>"+estudiantes[i].nombre+
//                       "</td><td>"+estudiantes[i].nota+"</td><td>"+estudiantes[i].asistencia+
//                       "</td><td>"+estudiantes[i].genero+"</td></tr>";
//     }
//     cuerpoTabla.innerHTML=tablaLlena;
// }
// //Funcion que añade un estudiante nuevo a la tabla Estudiantes
// function nuevoEstudiante(event) {
//     event.preventDefault();
//
//     var obtenerValueCodigo = document.getElementById("codigo").value;
//     var obtenerValueNombre = document.getElementById("nombre").value;
//     var obtenerValueNota = document.getElementById("nota").value;
//     var obtenerValueAsistencia = document.getElementById("asistencia").value;
//     var obtenerValueGenero = document.getElementById("genero").value;
//
//     var nuevoEstudiante = {codigo:obtenerValueCodigo, nombre:obtenerValueNombre,
//                             nota:obtenerValueNota, asistencia:obtenerValueAsistencia,
//                             genero:obtenerValueGenero};
//     estudiantes.push(nuevoEstudiante);
// }
// //Funcion que permite calcular el promedio de notas
// function promedio(json){
//     var p = 0;
//     var q = 0;
//     var r = 0;
//     var i;
//     for (var i = 0; i < json.length; i++) {
//         p = json[i].nota;
//         j = i+1;
//         q = (q+p);
//         r = Math.round(q/j);
//     }
//     alert("El promedio de notas es : "+r);
// }
// //Funcion que carga a la funcion promedio
// function notaPromedio(){
//     promedio(estudiantes);
// }
// //Funcion que halla la nota mayor y menor de la Tabla estudiantes
// function mayorMenor(json){
//     var min = null;
//     var max = null;
//     for (var i = 0, len = estudiantes.length; i < len; i++) {
//         var elem = estudiantes[i].nota;
//         if (min === null || min > elem) min = elem;
//         if (max === null || max < elem) max = elem;
//     }
//     alert( "La menor nota es = " + min + ", La mayor nota es = " + max );
// }
// //Funcion que carga la funcion mayorMenor
// function notaMayorMenor(){
//     mayorMenor(estudiantes);
// }
// //Funcion que calcula el promedio de asistencia en la Tabla Estudiantes
// function obtenerPromedioAsistencia(json){
//     var p = 0;
//     var q = 0;
//     var s = 0;
//     var i;
//     for (var i = 0; i < json.length; i++) {
//         p = json[i].asistencia;
//         j = i+1;
//         q = (q+p);
//         s = Math.round(q/j);
//     }
//     alert("El promedio de asistencia es : "+s);
// }
// //Funcion que carga a la funcion obtenerPromedioAsistencia
// function promedioAsistencia(){
//     obtenerPromedioAsistencia(estudiantes);
// }
// //Funcion que permite calcular la cantiudad de Hombres y Mujeres en la Tabla Estudiantes
// function obtenerGenero(json){
//     var f = 0;
//     var m = 0;
//     for (var i = 0; i < json.length; i++) {
//         if (json[i].genero=="F" || json[i].genero=="f") {
//             f = f+1;
//         }
//         else{
//             m = m+1;
//         }
//     }
//     alert("La cantidad de mujeres es : "+f+" y la cantidad de hombres es : "+m);
// }
// //Funcion que carga la funcion obtenerGenero
// function mostrarGenero(){
//     obtenerGenero(estudiantes);
// }
//
// /////INTENTOS EN LA FUNCION MAYOR MENOR
// // function mayorMenor(json){
// //     // var i = 0;
// //     // var k = [];
// //     var min = null;
// //     var max = null;
// //     for (var i = 0, len = estudiantes.length; i < len; i++) {
// //         // if((json[i].nota > json[j].nota)&&(i==j))
// //         // {
// //         //     // alert("La nota mayor es : "+json[i].nota+" y el nombre del alumno es : "+json[i].nombre);
// //         //     //  document.getElementById("c").innerHTML=("Nombre : "+json[i].nombre+"<br> Nota :"+json[i].nota);
// //         //     // var listaDeNotas = [estudiantes[i].nota];
// //         //     // i++;
// //         // }
// //         // var maxArray = Function.prototype.apply.bind(Math.max, null);
// //         // var maxArray = estudiantes[j].nota;
// //         // var b = estudiantes[j].nota;
// //         // var c = estudiantes[j].nota;
// //         // var d = estudiantes[j].nota;
// //         //  console.log(maxArray);
// //         // listaNotas = k.push(estudiantes[j].nota);
// //
// //         // var listaUno = document.getElementById("lista-de-notas").innerHTML = estudiantes[j].nota;
// //         //  var maximo = Math.max(estudiantes[0].nota,estudiantes[1].nota,estudiantes[2].nota,estudiantes[3].nota,estudiantes[4].nota);
// //         // var maximo = Math.max(estudiantes.nota);
// //         // alert(maximo);
// //         // listaUno.innerHTML = estudiantes[j].nota;
// //
// //
// //         // var listaNumeros = document.write("Posición " + j + " del array: " + estudiantes[j].nota)
// //         // document.write("<br>")
// //         // document.getElementById("lista-de-notas").innerHTML = listaNumeros;
// //         // alert(listaNumeros);
// //
// //         // return Math.min.apply(Math,json.nota);
// //         var elem = estudiantes[i].nota;
// //         if (min === null || min > elem) min = elem;
// //         if (max === null || max < elem) max = elem;
// //     }
// //     alert( "min = " + min + ", max = " + max );
// //     // document.getElementById("lista-de-notas").innerHTML = maxArray;
// // }
// $(function () {

// var jsonData={};
// jsonData.characters = [];
    function editarEstudiante(id) {
        var estudiante;
        for(var i=0; i<localStorage.length; i++)
        {
            var clave = localStorage.key(i);
            if(clave == id) {
                estudiante = $.parseJSON(localStorage.getItem(clave));
                $("#codigo").val(estudiante.codigo);
                $("#nombre").val(estudiante.nombre);
                $("#nota").val(estudiante.nota);
                $("#asistencia").val(estudiante.asistencia);
                $("#genero").val(estudiante.genero);

            }
        }
    }

    function listarEstudiante() {
        var tabla="";
        var parrafo1=$("#p1");

        tabla += '<table border="1">';
        tabla += '<tr>';
        tabla += '<th>CODIGO</th>';
        tabla += '<th>NOMBRE</th>';
        tabla += '<th>NOTA</th>';
        tabla += '<th>ASISTENCIA</th>';
        tabla += '<th>GENERO</th>';
        tabla += '</tr>';

        for(var i=0; i<localStorage.length;i++)
        {
            var clave = localStorage.key(i);
            var estudiante = $.parseJSON(localStorage.getItem(clave));

            tabla += '<tr>';
            tabla += '<td>'+estudiante.codigo+'</td>';
            tabla += '<td>'+estudiante.nombre+'</td>';
            tabla += '<td>'+estudiante.nota+'</td>';
            tabla += '<td>'+estudiante.asistencia+'</td>';
            tabla += '<td>'+estudiante.genero+'</td>';
            tabla += '<td><button onclick="editarEstudiante(\''+estudiante.codigo+'\');">Editar</button></td>';
            tabla += '<td><button onclick="eliminarEstudiante(\''+estudiante.codigo+'\');">Eliminar</button></td>';
            tabla += '</tr>';

            // localStorage.setItem("jsonData", estudiante);
            // localStorage.setItem("jsonData", JSON.stringify(estudiante));
            // var jsonDataa = JSON.parse(localStorage.getItem("jsonData"));
            // console.log(jsonDataa);
            $("#mostrar-genero").click(function () {
                for(var j=0; localStorage.length;j++){
                    var nota = localStorage.key(j);
                    console.log(nota);
                }

            });


        }
        tabla += '</table>';
        $(parrafo1).html(tabla);


    }

    function eliminarEstudiante(id) {
        localStorage.removeItem(id);
        listarEstudiante();
    }

    $(document).ready(function () {
        var contador;
        if(localStorage.length>0){
            contador=localStorage.length+1;
        }else{
            contador =1;
        }

        $("#codigo").val(contador);

        $("#boton1").click(function () {
            var codigo=$("#codigo").val();
            var nombre=$("#nombre").val();
            var nota=$("#nota").val();
            var asistencia=$("#asistencia").val();
            var genero=$("#genero").val();

            var estudiante={
                codigo:codigo,
                nombre:nombre,
                nota:nota,
                asistencia:asistencia,
                genero:genero
            };
            localStorage.setItem(codigo, JSON.stringify(estudiante));
            contador = localStorage.length+1;

            // localStorage.setItem("jsonData", jsonData);
            // localStorage.setItem("jsonData", JSON.stringify(jsonData));
            // var jsonDataa = JSON.parse(localStorage.getItem("jsonData"));
            // console.log(jsonDataa);

            listarEstudiante();
            reestablecer();
        });

        $("#boton2").click(function () {
            reestablecer(9);
        });

        function reestablecer() {
            $("#codigo").val(contador);
            $("#nombre").val("");
            $("#nota").val("");
            $("#asistencia").val();
            $("#genero").val();
        }
        listarEstudiante();
        $("genero").val();

        $("#boton3").click(function () {
            localStorage.clear();
        });

        //Funcion que permite calcular la cantiudad de Hombres y Mujeres en la Tabla Estudiantes
        function obtenerGenero(){
            // for(var i=0; i<localStorage.length;i++)
            // {
            //     var clave = localStorage.key(i);
            //     var estudiante = $.parseJSON(localStorage.getItem(clave));
            //     var estudianteGenero = {};
            //     // var clave = localStorage.key(i);
            //     localStorage.setItem("estudianteGenero", estudianteGenero);
            //     localStorage.setItem("estudianteGenero",JSON.stringify(estudiante));
            //     // var estudianteGenero = $.parseJSON(localStorage.getItem(clave));
            //     var estGen = JSON.parse(localStorage.getItem("estudianteGenero"));
            //    console.log(estGen);
            //     // localStorage.setItem("jsonData", estudiante);
            //     // localStorage.setItem("jsonData", JSON.stringify(estudiante));
            //     // var jsonDataa = JSON.parse(localStorage.getItem("jsonData"));
            //     // console.log(jsonDataa);
            //     console.log(estudianteGenero.genero);
            //
            //    localStorage.nota = document.getElementById("nota").value;
            //     // if((localStorage[0])===3){
            //     //     alert("nota es 3");
            //     // }
            //
            //     console.log(localStorage.nota)

            // }


        }
        //
        // $("#mostrar-genero").click(function () {
        //
        //     var nota=$("#nota").val();
        //     var nota={
        //         nota:nota
        //     };
        //     localStorage.setItem("notata", JSON.stringify(nota));
        //     var notata= JSON.parse(localStorage.getItem("notata"));
        //     console.log(notata);
        // });

    });
// });
