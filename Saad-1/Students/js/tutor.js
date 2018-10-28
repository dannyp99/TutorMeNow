
$(document).ready(function() {

  $('#contact-form').submit(function(e) {

    var name    = document.getElementById('name')

    var scid = document.getElementById('scid')

    var math = document.getElementById('math')
    var science = document.getElementById('science')
    var arts = document.getElementById('arts')


    var email = document.getElementById('email')

       var smail  = String(email.value);


   

    if(!name.value){

       alertify.error("Please enter your Name");

      return false;

    }

    else if(!scid.value){

      alertify.error("Please enter your School I.D.");

      return false;

    }

    else if(!email.value){

      alertify.error("Please choose a Tutoring Location");

      return false;

    }

    
    else if (!math.checked && !science.checked && !arts.checked)
    {
      alertify.error("Please check off a subject");
      return false;

    }

    

    else if(!smail.includes("qmail")){

      alertify.error("Enter your QC Student email");

      return false;

    }else{

      e.preventDefault();

    $(this).get(0).reset();

     

      alertify.success("Tutor Created");

   }

  });

});
