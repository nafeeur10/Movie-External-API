import Layout from '@/layout'
import GenreMovieList from '../../views/genres/MovieBasedOnGenres'

const movieGenresRouter = {
  path: '/movies/:genre_id',
  component: Layout,
  children: [
    {
        path: '/',
        name: 'GenreMovieList',
        component: GenreMovieList
    }
  ]
}
export default movieGenresRouter
