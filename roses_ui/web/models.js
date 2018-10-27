let Models = {}

Models.Products = {
  fetch: async function(){
    let response = await fetch(`${Models.data.api_url}/products`, {'method': 'GET'})
    if(!response.ok){ throw new Error(`Received status code ${response.status} from server.`)}
    let products = await response.json()
    return products
  },
  save: async function(product){
    // If the product has an id, that means it's already present in the database (we assume)
    if(product.id){
      return this.update(product)
    } else {
      return this.create(product)
    }
  },
  create: async function(product){
    let response = await fetch(`${Models.data.api_url}/products`, {'method': 'POST', body: JSON.stringify(product),  headers: {'Content-Type': 'application/json'},})
    if(!response.ok){ throw new Error(`Received status code ${response.status} from server.`)}
    let updated_product_data = await response.json()
    product.id = updated_product_data.id
    return product
  },
  update: async function(product){
    let response = await fetch(`${Models.data.api_url}/products/${product.id}`, {'method': 'PUT', body: JSON.stringify(product),  headers: {'Content-Type': 'application/json'},})
    if(!response.ok){ throw new Error(`Received status code ${response.status} from server.`)}
  },
  delete: async function(product){
    let response = await fetch(`${Models.data.api_url}/products/${product.id}`, {'method': 'DELETE'})
    if(!response.ok){ throw new Error(`Received status code ${response.status} from server.`)}
  }
}

Models.Customers = {
  create: async function(new_customer_data){
    let response = await fetch(`${Models.data.api_url}/customers`, {'method': 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(new_customer_data)})
    if(!response.ok){ throw new Error(`Received status code ${response.status} from server.`)}
    let new_customer = await response.json()
    new_customer.name = new_customer.name || new_customer_data.name
    new_customer.address = new_customer.address || new_customer_data.address
    return new_customer
  },

  fetch: async function(){
    let response = await fetch(`${Models.data.api_url}/customers`, {'method': 'GET'})
    if(!response.ok){ throw new Error(`Received status code ${response.status} from server.`)}
    let customers = await response.json()
    return customers
  }
}

Models.Sales = {
  submit: async function(sale_data){
    let response = await fetch(`${Models.data.api_url}/sales`, {'method': 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(sale_data)})
    if(!response.ok){ throw new Error(`Received status code ${response.status} from server.`)}
    return response
  }
}

export default Models
