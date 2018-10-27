$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    var name    = document.getElementById('name')
    var scid = document.getElementById('scid')
    var loc   = document.getElementById('location')
    var subject = document.getElementById('subject')
    var prof = document.getElementById('prof')
    var email = document.getElementById('email')

    if (!name.value || !scid.value|| !loc.value || !subject.value || !prof.value || !email.value) {
      alertify.error("Please check your entries");
      return false;
    } else {
      e.preventDefault();
      $(this).get(0).reset();
      alertify.success("Request Sent");
    }
  });
});



