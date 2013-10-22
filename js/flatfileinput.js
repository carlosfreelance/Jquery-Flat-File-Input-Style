/*
 * jQuery flat file input syle 1.0
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2013, Carlos Luis Lizano Medina
 * https://www.facebook.com/carlosfreeance
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

(function ( $ ) {
 
    $.fn.flatfileinput = function( options ) {
 
        // This is the easiest way to have default options.
        var settings = $.extend({
           width   : '200px',
			height	  :	'50px',
			style : 'simple_flat_button',
			color : 'turquoise',
			text		: 'Choose file',
			cursor : 'pointer',
			fontsize	: '22px',
			textcolor : '#fff',
        }, options );
 		 
		 
		 return this.each(function() {
			 var wrapper = $("<div>")
			 						.attr('class', settings.style + " " + settings.color)
									.css({
										'width'   : settings.width,
										'height'   : settings.height,
										'text-align'	: 'center',							
										'font-size'	: settings.fontsize,
										'color'		: settings.textcolor,
										'cursor'	: 'pointer',
										'vertical-align':'middle'
									})
									
			var wrapper_text = $("<span>")
									.text(settings.text)
									.css({
										'width'   : 'inherit',
										'height'   : 'inherit',
										'text-align'	: 'center',							
										'display'	: 'table-cell',
										'cursor'	: 'pointer',
										'vertical-align':'middle'
									})
			 
		   // Greenify the collection based on the settings variable.
			$(this).css({
										'filter'  : 'alpha(opacity=0)',
										'opacity' : '0',
										'width'   : 'inherit',
										'height'   : 'inherit',
										'position' : 'absolute',
										'display'	: 'block',
										'border'	: '0',
										'cursor'	: settings.cursor,
											})
			.wrap(wrapper);
			
			$("." + settings.color).append(wrapper_text)
			
    });
		 
       
												
 
    };
 
}( jQuery ));