const client = require('./contentful').client

const getProducts =  (query)=>{
  query = query || {}
  query.content_type = 'product'
  return client.getEntries(query)
}

function getProduct (slug, query) {
  query = query || {}
  query['content_type'] = 'product'
  query['fields.slug'] = slug
  return client.getEntries(query)
}


module.exports = {
  getProducts,
  getProduct
};