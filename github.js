$(document).ready(function(){

  var i = 0;

  $('h5').on('click', function() {
   $(this).next('.blog_links').slideToggle( {easing: "easeOutQuint"} );
  });

$('.tree-button').on('click', function() {
        i++;
        if (i > 2){ i = 1; };
        $('.bg-img').css('background-image',  'url(stylesheets/images/' + i + 'treesBG.jpg)');
       //if (i === 13){ i = 1; };
    });

});

//   $('.blog_links a').on('click', function(){
//     this.preventDefault();
//     var theLink = this.href
//    var tryIt = $.ajax({
//       url: 'blog_posts/'+theLink,
//       context: document.body,
//       data: response
//     })
//   });
// tryIt.done(function(response){
//   $('.content_area').html(response)
// });


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