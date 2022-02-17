<template>
<div class="container mx-auto">
    <h2 class="my-9 text-center text-3xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{{ genre_name }} Movies</h2>
    <hr />
    <ul class="flex flex-wrap justify-center mt-9">
        <li v-for="movie in genreMovieList.slice(0, slicingAmount)" :key="movie.id" class="w-1/4 m-3">
            <movie-card :movie="movie"/>
        </li>
    </ul>
    </div>
</template>

<script>

import { fetchMovieListBasedOnGenres } from '../../api/genres'
import MovieCard from '../../components/MovieCard.vue'

export default {
  name: 'GenreMovieList',
  props: ['genre_id', 'genre_name'],
  data() {
      return {
        genreMovieList: [],
        selectedGenre: null,
        slicingAmount: 5
      }
  },
  components: {
      MovieCard
  },
  methods: {
      async fetchMovieListBasedOnGenres() {
          let res = await fetchMovieListBasedOnGenres({
            'with_genres': (!isNaN(this.$route.params.genre_id)) ? this.$route.params.genre_id : this.genre_id
          })
          this.genreMovieList = res.results
      },
      setSlicingNumber() {
          if(!isNaN(this.$route.params.genre_id)) {
              this.slicingAmount = 10
          }
      }
  }, 
  mounted() {
      this.setSlicingNumber()
      this.fetchMovieListBasedOnGenres()
  }
}
</script>