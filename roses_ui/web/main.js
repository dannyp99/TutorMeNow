import LoginForm    from "./login_form.js"
import Models       from "./models.js"
import NewSaleForm  from "./new_sale_form.js"
import ProductsList from "./products_list.js"

let data = {
  products:  [],
  customers: [],
  api_url: null
}

LoginForm.data = data
Models.data = data
NewSaleForm.data = data
ProductsList.data = data

let report_error = function(message, error){
  alert(`${message}: ${error.message}`)
  throw error
}

LoginForm.on_login = async function(){
  // start in New Sale mode
  switch_to_new_sale()
  try {
    data.api_url   = this.api_url_field.value
    data.products  = await Models.Products.fetch()
    data.customers = await Models.Customers.fetch()
    NewSaleForm.update_products()
    NewSaleForm.update_customers()
    ProductsList.update_products()
  } catch (error) {
    report_error("Error connecting to server", error)
  }
}

NewSaleForm.submit_sale = async function(sale_details){
  try {
    return await Models.Sales.submit(sale_details)
  } catch(error) {
    report_error("Error recording sale", error)
  }
}

NewSaleForm.create_customer = async function(customer_details){
  try {
    return await Models.Customers.create(customer_details)
  } catch(error) {
    report_error("Error recording sale", error)
  }
}

ProductsList.save = async function(product){
  await Models.Products.save(product)
  NewSaleForm.update_products()
}

ProductsList.delete = async function(product){
  await Models.Products.delete(product)
  NewSaleForm.update_products()
}

let switch_to_products = function(){
  ProductsList.show()
  NewSaleForm.hide()
  product_list_button.classList.add('hidden')
  new_sale_button.classList.remove('hidden')
}

let switch_to_new_sale = function(){
  ProductsList.hide()
  NewSaleForm.show()
  product_list_button.classList.remove('hidden')
  new_sale_button.classList.add('hidden')
}

let product_list_button = document.getElementById('products_button')
let new_sale_button = document.getElementById('new_sale_button')

product_list_button.addEventListener('click', switch_to_products)
new_sale_button.addEventListener('click', switch_to_new_sale)
