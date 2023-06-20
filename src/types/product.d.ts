import type Category from './category'
import type ProductPhoto from './productPhoto'

declare interface Product {
  id?: number
  name?: string
  sku?: string
  quantity?: number
  price?: number
  status?: string
  category_id?: number | null
  category?: Category | null
  photos?: ProductPhoto[]
}

export default Product
