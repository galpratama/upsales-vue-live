import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignUpView from '@/views/Auth/SignUpView.vue'
import SignInView from '@/views/Auth/SignInView.vue'
import AddProductView from '@/views/Auth/AddProductView.vue'
import AddProductPhotoView from '@/views/Auth/AddProductPhotoView.vue'
import DashboardLayout from '@/components/Dashboard/Layout/DashboardLayout.vue'
import DashboardView from '@/views/Dashboard/DashboardView.vue'
import ProductIndexView from '@/views/Dashboard/Product/ProductIndexView.vue'
import ProductAddView from '@/views/Dashboard/Product/ProductAddView.vue'
import TransactionIndexView from '@/views/Dashboard/Transaction/TransactionIndexView.vue'
import TransactionAddView from '@/views/Dashboard/Transaction/TransactionAddView.vue'
import TransactionDetailView from '@/views/Dashboard/Transaction/TransactionDetailView.vue'
import TransactionQRCodeView from '@/views/Dashboard/Transaction/TransactionQRCodeView.vue'
import type { NavigationGuard } from 'vue-router'

const requireAuth: NavigationGuard = (to, from, next) => {
  localStorage.getItem('access_token') ? next() : next('/signin')
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView
    },
    {
      path: '/add-product',
      name: 'add-product',
      component: AddProductView,
      beforeEnter: requireAuth
    },
    {
      path: '/add-product-photo/:id',
      name: 'add-product-photo',
      component: AddProductPhotoView,
      beforeEnter: requireAuth
    },
    {
      path: '/dashboard',
      component: DashboardLayout,
      beforeEnter: requireAuth,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: DashboardView,
          meta: {
            isDashboard: true,
            activeMenu: 'dashboard'
          }
        },
        {
          path: 'products',
          name: 'dashboard-product-index',
          component: ProductIndexView,
          meta: {
            activeMenu: 'product'
          }
        },
        {
          path: 'products/add',
          name: 'dashboard-product-add',
          component: ProductAddView,
          meta: {
            activeMenu: 'product'
          }
        },
        {
          path: 'transactions',
          name: 'dashboard-transaction-index',
          component: TransactionIndexView,
          meta: {
            activeMenu: 'transaction'
          }
        },
        {
          path: 'transactions/add',
          name: 'dashboard-transaction-add',
          component: TransactionAddView,
          meta: {
            activeMenu: 'transaction'
          }
        },
        {
          path: 'transactions/:id',
          name: 'dashboard-transaction-detail',
          component: TransactionDetailView,
          meta: {
            activeMenu: 'transaction'
          }
        }
      ]
    },
    {
      path: '/dashboard/transactions/:id/pay',
      name: 'dashboard-transaction-pay',
      component: TransactionQRCodeView
    }
  ]
})

export default router
