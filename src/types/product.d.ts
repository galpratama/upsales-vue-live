import type Category from './category'

declare interface Product {
  id?: number
  name?: string
  sku?: string
  quantity?: number
  price?: number
  category_id?: number | null
  category?: Category | null
}

export default Product
