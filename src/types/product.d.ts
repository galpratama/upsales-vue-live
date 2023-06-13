declare interface Product {
  id?: number
  name?: string
  sku?: string
  quantity?: number
  price?: number
  category_id?: number | null
}

export default Product
