import request from '@/utils/request'

export function fetchList(query) {
    return request({
      url: 'genre/movie/list',
      method: 'get',
      params: query
    })
  }