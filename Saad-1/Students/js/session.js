var session    = document.getElementById('Session')


function redirect()
{
   if(session.value){

    window.location.href="time.html";
   }
}


$(document).ready(function() {

  $('#contact-form').submit(function(e) {

    var session    = document.getElementById('Session')

      if(!session.value){

       alertify.error("Please enter your Session I.D");

      return false;
      }
     
      else{

      e.preventDefault();

   	  alertify.success("Request Sent");
        
      $(this).get(0).reset();
      }
      
  });
});
