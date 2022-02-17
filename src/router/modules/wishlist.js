import Layout from '@/layout'
import WishList from '../../views/WishList'

const wishListRouter = {
  path: '/wishlist',
  component: Layout,
  children: [
    {
        path: '/',
        name: 'WishList',
        component: WishList
    }
  ]
}
export default wishListRouter
