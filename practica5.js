var registro = "<tr><th>Nombre huésped</th><th>Mail responsable</th><th>Servicios</th><th>Género</th><th>Fecha de nacimiento</th><th>Color menos favorito</th><th>Entusiasmo</th></tr>";
var estilo=0;

function registrar() {
  var alertas = "Te falta poner:";/* Validación de que todos los campos del formulario han sido llenados */
  if (document.getElementById("nombre").value == '') 
    alertas = "<br>" + alertas + "nombre";
  if (document.getElementById("mai").value == '') 
    alertas = "<br>" + alertas + "mail";
  if(document.querySelectorAll("input[name=servicio]:checked").length == 0 )
    alertas = "<br>" + alertas + "servicios";
  if(document.querySelector("input[name=gen]:checked") == null )
    alertas = "<br>" + alertas + "genero";
  if(document.getElementById("fecha").value == '' )
    alertas = "<br>" + alertas + "fecha";
  if(alert.length>15) alert(alert);
    if (estilo%2 == 0) {
      registro = registro + "<tr class=\"renglon1\">";
    } else {
      registro = registro + "<tr class=\"renglon2\">";
    }
    x = document.getElementById("nombre").value;
    registro = registro + "<td>" + x + "</td>";
    x = document.getElementById("mai").value;
    registro = registro + "<td>" + x + "</td>";
    registro = registro  + "<td>"
    var iterable = document.querySelectorAll('input[name=servicio]:checked');
    for (var iterador of iterable) {
        registro += iterador.value + "<br>";
    }
    registro = registro  + "</td>"
    x = document.querySelector('input[name=gen]:checked');
    registro = registro  + "<td>" +x.value + "</td>";
    x = document.getElementById("fecha").value;
    registro = registro  + "<td>" + x + "</td>";
    x = document.getElementById("colorcito").value;
    registro = registro  + "<td> <div style=\"background-color:"+ x + "\">|</div></td>";
    x = document.getElementById("contento").value;
    registro = registro  + "<td>" + x + "</td>";
    registro = registro + "</tr>";
    document.getElementById("asilooo").innerHTML = registro;
    document.getElementById("nombre").value = "";
    document.getElementById("mai").value = "";
    document.getElementByName("servicio").checked = false;
    document.getElementByName("gen").checked = false;
    document.getElementById("fecha").value = "";
    document.getElementById("colorcito").value = "";
    document.getElementById("contento").value = 100;
    estilo = estilo + 1;
}

