const selectProducts = state => {
  const { entities: { products }, filter } = state
  if (filter === 'computers') {
    return products.filter(p => p.category === 'computers')
  }
  if (filter === 'tablets') {
    return products.filter(p => p.category === 'tablets')
  }
  if (filter === 'phones') {
    return products.filter(p => p.category === 'phones')
  }
  if (filter === 'TV & Home Cinema') {
    return products.filter(p => p.category === 'TV & Home Cinema')
  }
  if (filter === 'Wearable Tech') {
    return products.filter(p => p.category === 'Wearable Tech')
  }
  if (filter === 'drones & cameras') {
    return products.filter(p => p.category === 'drones & cameras')
  }
  if (filter === 'headphones') {
    return products.filter(p => p.category === 'headphones')
  }
  if (filter === 'speakers') {
    return products.filter(p => p.category === 'speakers')
  }
  if (filter === 'sale') {
    return products.filter(p => p.isSale)
  }
  if (filter === 'best sellers all') {
    return products.filter(p => p.stock < 25)
  }
  if (filter === 'most new') {
    return products.filter(p => p.stock > 15)
  }
  if (filter === 'low to high') {
    const sort = [...products].sort((a, b) => (a.priceSale || a.price) - (b.priceSale || b.price))
    return sort
  }
  if (filter === 'high to low') {
    const sort = [...products].sort((a, b) => (b.priceSale || b.price) - (a.priceSale || b.price))
    return sort
  }
  if (filter === 'AZ') {
    const sort = [...products].sort((a, b) => a.nameProduct.toLowerCase().localeCompare(b.nameProduct.toLowerCase()))
    return sort
  }
  if (filter === 'ZA') {
    const sort = [...products].sort((a, b) => b.nameProduct.toLowerCase().localeCompare(a.nameProduct.toLowerCase()))
    return sort
  }
  return products
}

export default selectProducts
