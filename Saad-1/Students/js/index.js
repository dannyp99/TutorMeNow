
$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    var sesid    = document.getElementById('sesid')
    if (!sesid.value) {
      alertify.error("Please enter a valid session i.d");
      return false;
    } else {
      e.preventDefault();
      $(this).get(0).reset();
      var unique = uuid();
      alertify.success("Request Sent");
    
    }

      
      
      
  });
});
