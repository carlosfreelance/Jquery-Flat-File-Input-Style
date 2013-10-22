Jquery flat file input styles
Dar estilo a un botón input file para seleccionar un archivo no es tan sencillo como puede ser hacerlo con cualquier otro tipo de botón. La razón es que los navegadores no lo permiten, así que cualquier intento de cambiar la fuente, el color, etc. no funcionará.

Colores inspirados en http://flatuicolors.com/

Demo

http://htmlpreview.github.io/?https://github.com/carlosfreelance/Jquery-Flat-File-Input-Style/blob/master/index.html

¿Cómo usarlo?
En la cabecera del fichero HTML hay que indicar dónde se encuentra la librería jQuery, el plugin y la hoja de estilos. Por ejemplo:

<script src="jquery.js" type="text/javascript"></script> 
<script src="js/flatfileinput.js" type="text/javascript"></script>
<link href="css/flatfileinput.css" rel="stylesheet">
Incluir dentro del body el input file

<input type="file" class="file" name="file" />
Una vez incluidas las librerías en la cabecera del fichero HTML, para que el plugin actúe hay que hacer la siguiente llamada:

$(selector).flatfileinput()
Personalización

$(selector).flatfileinput({
width : '250px',	// Ancho del boton por defecto 200px	
height	 :	'50px',	 // alto del boton por defecto 50px
style : 'simple_flat_button',	// Estilo del boton por defecto simple_flat_button (simple_flat_button, simple_flat_round)
color : 'turquoise',	// Color por defecto turquoise	
text	 : 'Choose file',	// Texto del boton
cursor : 'pointer',	
// cursor del boton se puede usar los predeterminados en las propiedades css fontsize	: '22px',	
// Tamaño del texto predeterminado 22px textcolor : '#fff',	
// Color del texto predeterminado #fff (Blanco) })
Colores y estilos Disponibles
Estilos del Boton

simple_flat_button, simple_flat_round

Colores Predeterminados

'turquoise','green-sea','emerland','nephritis','peter-river','belize-hole','amethyst','wisteria','wet-asphalt','midnight-blue','sun-flower','orange','carrot','pumpkin','alizarin','pomegranate','clouds','silver','concrete','asbestos'

Ver referencias en el demo en la parte superior