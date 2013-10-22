/*
 * jQuery flat file input syle 1.0
 * https://github.com/carlosfreelance/Jquery-Flat-File-Input-Style
 *
 * Copyright 2013, Carlos Luis Lizano Medina
 * https://www.facebook.com/carlosfreeance
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*
 * jQuery flat file input syle 1.0
 * https://github.com/carlosfreelance/Jquery-Flat-File-Input-Style
 *
 * Copyright 2013, Carlos Luis Lizano Medina
 * https://www.facebook.com/carlosfreeance
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

(function($) {
  $.fn.flatfileinput = function(b) {
    var c = $.extend({
      width: "200px",
      height: "50px",
      style: "simple_flat_button",
      color: "turquoise",
      text: "Choose file",
      cursor: "pointer",
      fontsize: "22px",
      textcolor: "#fff"
    }, b);
    return this.each(function() {
      var e = $("<div>").attr("class", c.style + " " + c.color).css({
        width: c.width,
        height: c.height,
        "text-align": "center",
        "font-size": c.fontsize,
        color: c.textcolor,
        cursor: "pointer",
        "vertical-align": "middle"
      });
      var d = $("<span>").text(c.text).css({
        width: "inherit",
        height: "inherit",
        "text-align": "center",
        display: "table-cell",
        cursor: "pointer",
        "vertical-align": "middle"
      });
      $(this).css({
        filter: "alpha(opacity=0)",
        opacity: "0",
        width: "inherit",
        height: "inherit",
        position: "absolute",
        display: "block",
        border: "0",
        cursor: c.cursor
      }).wrap(e);
      $("." + c.color).append(d)
    })
  }
}(jQuery));