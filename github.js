$(document).ready(function(){

  $('h5').on('click', function() {
   $(this).next('.blog_links').slideToggle( {easing: "easeOutQuint"} );
  });

});




  // $('#blog_TOC').accordion({ collapsible: true,
  //                            active: false,
  //                            header: "h5",
  //                            heightStyle: "content",
  //                            animate: "easeOutQuint",
  //                            event: "click",
  //                            icons: false
  //                         });


  // $(".ui-accordion .ui-accordion-header").css(
  //   {
  //     "padding":"0.15em",
  //     "border-color":"cyan",
  //     "width":"5em",
  //     "background-color":"light-blue"
  //   });