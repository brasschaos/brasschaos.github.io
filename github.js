$(document).ready(function(){
  $('h5').on('click', function() {
   $(this).next('.blog_links').slideToggle( {easing: "easeOutQuint"} );
  });

$('.tree-button').on('click', function() {
  $('.bg-img').css("background-image", 'url("stylesheets/images/2treesBG.jpg")');
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