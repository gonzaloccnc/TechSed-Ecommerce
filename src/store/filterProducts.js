const selectProducts = state => {
  const { products, filter } = state
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
  if (filter === 'sale') {
    return products.filter(p => p.isSale).slice(0, 6)
  }
  if (filter === 'best sellers min') {
    return products.filter(p => p.stock < 25).slice(0, 6)
  }
  if (filter === 'best sellers all') {
    return products.filter(p => p.stock < 25)
  }
  return products
}

export default selectProducts
