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

(function(a) {
  a.fn.flatfileinput = function(d) {
    var e = a.extend({
      width: "200px",
      height: "50px",
      style: "simple_flat_button",
      color: "turquoise",
      text: "Choose file",
      cursor: "pointer",
      fontsize: "22px",
      textcolor: "#fff"
    }, d);
    return this.each(function() {
      var b = a("<div>").attr("class", e.style + " " + e.color).css({
        width: e.width,
        height: e.height,
        "text-align": "center",
        "font-size": e.fontsize,
        color: e.textcolor,
        cursor: "pointer",
        "vertical-align": "middle"
      });
      var c = a("<span>").text(e.text).css({
        width: "inherit",
        height: "inherit",
        "text-align": "center",
        display: "table-cell",
        cursor: "pointer",
        "vertical-align": "middle"
      });
      a(this).css({
        filter: "alpha(opacity=0)",
        opacity: "0",
        width: "inherit",
        height: "inherit",
        position: "absolute",
        display: "block",
        border: "0",
        cursor: e.cursor
      }).wrap(b);
      a("." + e.color).append(c)
    })
  }
}(jQuery));