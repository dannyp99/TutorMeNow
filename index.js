
$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    var name    = document.getElementById('name')
    var scid = document.getElementById('scid')
    var prof = document.getElementById('prof')
    var email = document.getElementById('email')

    if (!name.value) {
      alertify.error("Please check your entries");
      return false;
    if (!scid.value) {
      alertify.error("Please check your entries");
      return false;
    } else {
      e.preventDefault();
      $(this).get(0).reset();
      var unique = uuid();
      alertify.success("Request Sent");
    
    }
      console.log(var unique)
      
      
      
  });
});
