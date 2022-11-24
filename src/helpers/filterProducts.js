const selectProducts = state => {
  const { entities: { products }, filter } = state

  let sort = null

  switch (filter.sort) {
    case 'Most new':
      sort = p => p.stock > 15
      break
    case 'Low to high':
      sort = (a, b) => (a.priceSale || a.price) - (b.priceSale || b.price)
      break
    case 'High to low':
      sort = (a, b) => (b.priceSale || b.price) - (a.priceSale || b.price)
      break
    case 'A-Z':
      sort = (a, b) => a.nameProduct.toLowerCase().localeCompare(b.nameProduct.toLowerCase())
      break
    case 'Z-A':
      sort = (a, b) => b.nameProduct.toLowerCase().localeCompare(a.nameProduct.toLowerCase())
      break
  }

  if (filter.type !== 'all') {
    let filterProducts = null

    filterProducts = products.filter(p => p.category === filter.type)

    if (filter.type === 'best sellers all') {
      filterProducts = products.filter(p => p.stock < 25)
    }

    if (filter.type === 'sale') {
      filterProducts = products.filter(p => p.isSale)
    }

    if (filter.sort !== null) {
      filterProducts = [...filterProducts].sort(sort)
    }

    if (filter.high !== null) {
      filterProducts = [...filterProducts].filter(p => (p.priceSale || p.price) > filter.low && (p.priceSale || p.price) < filter.high)
    }

    return filterProducts
  }

  let filterProducts = [...products]

  if (filter.sort !== null) {
    filterProducts = [...filterProducts].sort(sort)
  }

  if (filter.high !== null) {
    filterProducts = [...filterProducts].filter(p => (p.priceSale || p.price) > filter.low && (p.priceSale || p.price) < filter.high)
  }

  return filterProducts
}

export default selectProducts
