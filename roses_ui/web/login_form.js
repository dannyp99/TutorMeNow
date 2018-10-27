let LoginForm = {
  element: document.getElementById('login'),
  api_url_field: document.querySelector('#login [name=api_url]'),
  on_login: null, // to be set by another object that sets up what LoginForm does after login.
  hide: function(){
    this.element.classList.add('hidden')
    // let hidden_ui_elements = document.querySelectorAll('.requires_login')
    // // there are cleaner ways to go over an array in JS, but this isn't an Array, it's an HTMLElementCollection.
    // for(let i=0; i<hidden_ui_elements.length; i++){ hidden_ui_elements[i].classList.remove('hidden') }
  }
}

LoginForm.element.addEventListener('submit', (event) => {
  event.preventDefault()
  LoginForm.hide()
  LoginForm.on_login()
})

export default LoginForm
