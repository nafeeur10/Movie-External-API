import Layout from '@/layout'
import MovieDetails from '../../views/movies/Details'

const movieDetailsRouter = {
  path: '/movies/details/:movie_id',
  component: Layout,
  children: [
    {
        path: '/',
        name: 'MovieDetails',
        component: MovieDetails
    }
  ]
}
export default movieDetailsRouter
