class ProductView {
  constructor(product){
    this.element = document.createElement('div')
    this.element.classList.add('product')
    this.element.classList.add('box')
    this.element.innerHTML = `
      <input type="text"   name="type"   placeholder="Type"/>
      <input type="text"   name="flavor" placeholder="Flavor"/>
      <input type="number" name="weight" placeholder="Weight"/><label> g </label>
      <label>$</label> <input type="number" name="price"  placeholder="0.00"/>
      <button class="save">  <i class="fas fa-check"></i> Save</button>
      <button class="remove"><i class="far fa-trash-alt"></i></button>
    `
    this.type_field   = this.element.querySelector("[name=type]")
    this.flavor_field = this.element.querySelector("[name=flavor]")
    this.weight_field = this.element.querySelector("[name=weight]")
    this.price_field  = this.element.querySelector("[name=price]")
    this.save_button = this.element.querySelector(".save")
    this.remove_button = this.element.querySelector(".remove")

    this.type_field.value = product.type
    this.type_field.addEventListener("input", (event) => product.type = this.type_field.value)

    this.flavor_field.value = product.flavor
    this.flavor_field.addEventListener("input", (event) => product.flavor = this.flavor_field.value)

    this.weight_field.value = product.weight
    this.weight_field.addEventListener("input", (event) => product.weight = Number(this.weight_field.value))

    this.price_field.value = product.price
    this.price_field.addEventListener("input", (event) => product.price = Number(this.price_field.value))

    this.save_button.addEventListener("click",   (event) => this.save(product)  )
    this.remove_button.addEventListener("click", (event) => this.delete(product))
  }
}

let ProductsList = {
  element: document.querySelector('#products_list'),
  views: {},
  update_products: function(){
    this.data.products.forEach((product) => {
      let existing_view = this.views[product.id]
      if(!existing_view){ this.add_product_view(product) }
    })
  },
  init: function(){
    this.add_product_button = this.element.querySelector("#add_product")
    this.add_product_button.addEventListener("click", (event) => this.add_product())
  },
  add_product_view: function(product){
    let product_view = new ProductView(product)
    product_view.save   = (product) => { this.save(product)                              }
    product_view.delete = (product) => { this.remove_product_view(product_view, product) }
    this.element.appendChild(product_view.element)
  },

  remove_product_view: function(product_view, product_to_remove){
    this.element.removeChild(product_view.element)
    this.data.products = this.data.products.filter((product) => product !== product_to_remove)
    this.delete(product_to_remove)
  },
  
  add_product: function(){
    let new_product = {type: "", flavor: "", price: 0, weight: 0}
    this.data.products.push(new_product)
    this.add_product_view(new_product)
  },

  show: function(){
    this.element.classList.remove('hidden')
  },

  hide: function(){
    this.element.classList.add('hidden')
  }
}

ProductsList.init()

export default ProductsList
