$(document).ready(function(){
  //detect a click event on the link
  $(".nav-item, .navbar-brand").click(function(e){
    e.preventDefault();
  //  find the href value  
    var thishref = $(this).attr("href");
    console.log(thishref);
  //select the element that has that href id
   
    var pagevalue = $(thishref).offset().top;
    console.log("the offset is" + pagevalue);
  //use jquery animate to move the page down to that section slowly
    $("html, body").animate({
      scrollTop:pagevalue-70
    }, 500);
  });
  
});
