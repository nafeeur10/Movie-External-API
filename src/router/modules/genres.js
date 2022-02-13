import Layout from '@/layout'
import Genres from '../../views/genres'

const genresRouter = {
  path: '/',
  component: Layout,
  name: 'Layout',
  redirect: '/movies',
  children: [
    {
        path: 'movies',
        name: 'Genres',
        component: Genres

    }
  ]
}
export default genresRouter
