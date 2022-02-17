import request from '@/utils/request'

export function fetchMovieDetails(query) {
  return request({
    url: 'movie/' + query.movie_id,
    method: 'get',
    params: query
  })
}

export function fetchRelatedMovies(query) {
  return request({
    url: 'movie/' + query.movie_id + '/similar',
    method: 'get',
    params: query
  })
}