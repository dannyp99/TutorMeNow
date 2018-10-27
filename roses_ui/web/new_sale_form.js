let NewSaleForm = {
  element: document.querySelector('#new_sale'),
  customer_selection:   document.querySelector('#new_sale [name=customer_id]'),
  product_selection:    document.querySelector('#new_sale [name=product_id]'),
  new_customer_name:    document.querySelector('#new_sale [name=new_customer_name]'),
  new_customer_address: document.querySelector('#new_sale [name=new_customer_address]'),
  price: document.querySelector('#new_sale [name=price]'),
  total: document.querySelector('#new_sale [name=total]'),
  count: document.querySelector('#new_sale [name=count]'),
  update_customers: function(){
    this.data.customers.forEach((customer) => {
      this.add_customer(customer)
    })
  },
  update_products: function(){
    this.product_selection.innerHTML = '<option value="">Select Product</option>'
    this.data.products.forEach((product) => {
      let product_option = document.createElement('option')
      product_option.setAttribute('value', product.id)
      product_option.innerText = `${product.flavor} ${product.type}, ${product.weight} g`
      this.product_selection.appendChild(product_option)
    })
  },
  add_customer: function(customer){
    let customer_option = document.createElement('option')
    customer_option.setAttribute('value', customer.id)
    customer_option.innerText = `${customer.name}, ${customer.address}`
    this.customer_selection.appendChild(customer_option)
  },
  record_sale: async function(){
    let customer_id
    if(this.customer_selection.value === 'new'){
      let new_customer = await this.create_customer({
        name: this.new_customer_name.value,
        address: this.new_customer_address.value
      })
      customer_id = new_customer.id

      this.data.customers.push(new_customer)
      this.add_customer(new_customer)

      this.new_customer_name.value = ''
      this.new_customer_address.value = ''

      this.customer_selection.value = new_customer.id.toString()
      this.customer_selection.dispatchEvent(new Event('change'))

    } else {
      customer_id = Number(this.customer_selection.value)
    }

    return await this.submit_sale({
      customer_id: customer_id,
      product_id: Number(this.product_selection.value),
      count: Number(this.count.value)

    })
  },
  toggle_new_customer_form: function(){
    if(this.customer_selection.value === 'new'){
      this.new_customer_name.style.visibility    = 'visible'
      this.new_customer_address.style.visibility = 'visible'
    } else {
      this.new_customer_name.style.visibility    = 'hidden'
      this.new_customer_address.style.visibility = 'hidden'
    }
  },
  update_price: function(){
    this.selected_product = this.data.products.find((product) => product.id.toString() === this.product_selection.value)
    if(this.selected_product){
      let count = Number(this.count.value)
      this.price.innerText = this.selected_product.price.toString()
      this.total.innerText = (this.selected_product.price * count).toString()
    } else {
      this.price.innerText = "0"
      this.total.innerText = "0"
      this.count.innerText = "1"
    }
  },

  show: function(){
    this.element.classList.remove('hidden')
  },

  hide: function(){
    this.element.classList.add('hidden')
  }
}

NewSaleForm.element.addEventListener('submit', (event) => {
  event.preventDefault()
  event.stopPropagation()
  NewSaleForm.record_sale()
})

NewSaleForm.product_selection.addEventListener('change', (event) => {
  NewSaleForm.update_price()
})

NewSaleForm.customer_selection.addEventListener('change', (event) => {
  NewSaleForm.toggle_new_customer_form()
})

NewSaleForm.count.addEventListener('input', (event) => {
  NewSaleForm.update_price()
})

export default NewSaleForm
