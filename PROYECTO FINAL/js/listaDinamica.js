
////Funcion para Editar Estudiantes
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
//////Funcion para Listar Estudiantes
    function listarEstudiante() {
        var tabla="";
        var parrafo1=$("#p1");
        tabla += '<center>';
        tabla += '<h1>TABLA DE ESTUDIANTES</h1><br><br>';
        tabla += '<table border="1">';
        tabla += '<tr>';
        tabla += '<th>CODIGO</th>';
        tabla += '<th>NOMBRE</th>';
        tabla += '<th>NOTA</th>';
        tabla += '<th>ASISTENCIA</th>';
        tabla += '<th>GENERO</th>';
        tabla += '</tr>';
        tabla += '</center>';
        for(var i=0; i<localStorage.length;i++)
        {
         ///Obteniendo valores de localStorage
            var clave = localStorage.key(i);
            var estudiante = $.parseJSON(localStorage.getItem(clave));
         ///Añadiendo valores a la Tabla Estudiante
            tabla += '<tr>';
            tabla += '<td>'+estudiante.codigo+'</td>';
            tabla += '<td>'+estudiante.nombre+'</td>';
            tabla += '<td>'+estudiante.nota+'</td>';
            tabla += '<td>'+estudiante.asistencia+'</td>';
            tabla += '<td>'+estudiante.genero+'</td>';
            tabla += '<td><button onclick="editarEstudiante(\''+estudiante.codigo+'\');">Editar</button></td>';
            tabla += '<td><button onclick="eliminarEstudiante(\''+estudiante.codigo+'\');">Eliminar</button></td>';
            tabla += '</tr>';
         }
        tabla += '</table>';
        $(parrafo1).html(tabla);

        ///Funcion para Obtener la Nota Promedio de la Lista de Estudiantes
        $("#nota-promedio").click(function () {
                var uno = 0;
                var dos = 0;
                var total = 0;
            for(var i=0; i<localStorage.length;i++){
                ///Obteniendo valores de LocalStorage
                var clave = localStorage.key(i);
                var estudiante = $.parseJSON(localStorage.getItem(clave));
                var estudianteNota = parseInt(estudiante.nota);
                j=i+1;
                uno = estudianteNota;
                dos = parseInt(uno+dos);
                total = Math.round(dos/j);
            }
            alert("La nota promedio es : "+total);
          });
        ///Funcion para obtener la Mayor y Menor Nota de la Lista de Estudiantes
        $("#nota-mayor-menor").click(function () {
            var min = null;
            var max = null;
            for (var i = 0, len = localStorage.length; i < len; i++) {
                var clave = localStorage.key(i);
                var estudiante = $.parseJSON(localStorage.getItem(clave));
                var elem = estudiante.nota;
                if (min === null || min > elem) min = elem;
                if (max === null || max < elem) max = elem;
            }
            alert( "La menor nota es = " + min + ", La mayor nota es = " + max );
        });

        ///Funcion para obtener el Promedio de Asistencia de la Lista de Estudiantes
        $("#promedio-asistencia").click(function () {
            var uno = 0;
            var dos = 0;
            var total = 0;
            for(var i=0; i<localStorage.length;i++){
                var clave = localStorage.key(i);
                var estudiante = $.parseJSON(localStorage.getItem(clave));
                var estudianteAsistencia = parseInt(estudiante.asistencia);
                j=i+1;
                uno = estudianteAsistencia;
                dos = parseInt(uno+dos);
                total = Math.round(dos/j);
            }
            if(total<5){
                alert("La clase tiene baja asistencia, el promedio es : "+total+" en Asistencia General");
            }else if(total>5 && total<8){
                alert("La clase es regularmente Asistida, el promedio es : "+total+" en Asistencia General");
            }else if(total ===10){
                alert("La clase es altamente asistida, el promedio es : "+total+" en Asistencia General");
            }
        });
        ///Funcion para mostrar la Cantidad de Mujeres y Varones en la Lista de Estudiantes
        $("#mostrar-genero").click(function () {
            var f = 0;
            var m = 0;
            var total =0;
            for (var i = 0; i < localStorage.length; i++) {
                var clave = localStorage.key(i);
                var estudiante = $.parseJSON(localStorage.getItem(clave));
                if (estudiante.genero==="F" || estudiante.genero==="f") {
                    f = f+1;
                }
                else{
                    m = m+1;
                }
                total=f+m;
            }
            alert("La cantidad de mujeres es : "+f+" y la cantidad de hombres es : "+m+" el total de alumnos en el aula es : "+total);
        });
    }

    ///Funcion para Eliminar Estudiante de la Lista de Estudiantes
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
        ///Procedimiento para Guardar un Nuevo Estudiante
        $("#boton1").click(function () {
            var codigo=$("#codigo").val();
            var nombre=$("#nombre").val();
            var nota=$("#nota").val();
            var asistencia=$("#asistencia").val();
            var genero=$("#genero").val();
            ///Creando el objeto Estudiante
            var estudiante={
                codigo:codigo,
                nombre:nombre,
                nota:nota,
                asistencia:asistencia,
                genero:genero
            };

            localStorage.setItem(codigo, JSON.stringify(estudiante));
            contador = localStorage.length+1;

            listarEstudiante();
            reestablecer();
        });

        ///Procedimiento para Reestablecer el Formulario Estudiante
        $("#boton2").click(function () {
            reestablecer(9);
        });
        ///Funcion que funciona para reestablecer el Formulario Estudiante
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

    });

