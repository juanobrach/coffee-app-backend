const express = require('express');
const router = express.Router();
const products = require('../services/products')


router.get('/',  (req, res) => {

    products.getProducts().then( data => {
      const items = data.items;
      const products = items.map(  item =>{
        let product = item.fields;
        product.id = item.sys.id;
        return product;

      });
      res.json( products )
    })
 

});

module.exports = router;
