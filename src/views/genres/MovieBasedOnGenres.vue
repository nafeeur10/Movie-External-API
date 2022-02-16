<template>
<div class="container mx-auto">
    <h2 class="my-9 text-center text-3xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Genre Movies</h2>
    <hr />
    <ul class="flex flex-wrap justify-center mt-9">
        <li v-for="movie in genreMovieList.slice(0, 10)" :key="movie.id" class="w-1/4 m-3">
            <div class="bg-green-50 mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
                <div class="sm:flex sm:items-center">
                    <img class="block mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" :src="posterBasePath + movie.poster_path" alt="">
                    <div class="text-center sm:text-left sm:flex-grow">
                        <div class="mb-2">
                            <p class="text-xl leading-tight">{{ movie.original_title }}</p>
                        </div>
                    </div>
                </div>
            </div>   
        </li>
    </ul>
    </div>
</template>

<script>
import { fetchMovieListBasedOnGenres } from '../../api/genres'
import { getPosterBaseUrl } from '../../utils/poster'
export default {
  name: 'GenreMovieList',
  props: ['genre_id'],
  data() {
      return {
        genreMovieList: [],
        selectedGenre: null,
        posterBasePath: ''
      }
  }, 
  methods: {
      async fetchMovieListBasedOnGenres() {
          let res = await fetchMovieListBasedOnGenres({'with_genres': this.genre_id})
          this.genreMovieList = res.results
          console.log(this.genreMovieList);
      }
  }, 
  mounted() {
      this.posterBasePath = getPosterBaseUrl()
      this.fetchMovieListBasedOnGenres()
  }
}
</script>