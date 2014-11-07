$(document).ready(function(){

  $('#blog_TOC').accordion({ collapsible: true,
                             active: false,
                             header: "h5",
                             heightStyle: "content",
                             animate: "easeInOutCubic",
                             event: "click",
                             icons: false
                            });
  $(".ui-accordion .ui-accordion-header").css({ "padding":"0.15em", "border-color":"cyan", "width":"5em", "background-color":"light-blue" });

});