const fs = require('fs')


// Class

class ProductAssestsManager {

  constructor(path) {
    this.path = path
  }

  createFile = async () => {
    await writeFile(this.path, this.products)
  }

}

// Functions

const writeFile = (path, products) =>
  fs.promises.writeFile(path, JSON.stringify({ products: products }));



// Code
// Creo instancia de la clase product manager

const ProductAssests = new ProductAssestsManager('./src/data-base.json')



module.exports = ProductAssests;