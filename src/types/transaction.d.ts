import type Product from './product'
import type User from './user'

declare interface Transaction {
  id?: number
  order_id?: string
  price_per_item?: number
  quantity?: number
  vat?: number
  total?: number
  payment_method?: string
  payment_url?: string
  status?: string
  user?: User
  product?: Product
  created_at?: string
}

export default Transaction
