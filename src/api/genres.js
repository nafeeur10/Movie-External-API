import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: 'genre/movie/list',
    method: 'get',
    params: query
  })
}

export function fetchMovieListBasedOnGenres(query) {
  return request({
    url: '/discover/movie',
    method: 'get',
    params: query
  })
}