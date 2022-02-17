<template>
    <div class="container mx-auto mt-9">
        <a :href="movieDetails.homepage" class="flex flex-col justify-center rounded-lg border shadow-md md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" :src="posterBasePath + movieDetails.poster_path" alt="Poster Image">
            <div class="flex flex-col p-4 leading-normal">
                <div class="flex">
                    <div class="w-9/12">
                        <h3 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{{ movieDetails.original_title}}</h3>
                        <p class="my-3 font-normal text-gray-700 dark:text-gray-400">
                            {{ movieDetails.overview}}
                        </p>
                    </div>
                    <div class="ml-auto font-bold text-gray-700 rounded-full bg-yellow-400 flex items-center justify-center" style="height: 100px; width: 100px; font-size: 40px;">{{ movieDetails.vote_average}}</div>
                </div>
            </div>
        </a>

        <h2 class="my-9 text-center text-3xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Related Movies</h2>
        <hr />
        <ul class="flex flex-wrap justify-between my-9">
            <li class="w-1/4 m-3" v-for="movie in relatedMovies.slice(0,9)" :key="movie.id">
                <a href="javascript:void(0)">
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
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
import { fetchMovieDetails, fetchRelatedMovies } from '../../api/movie'
import { getPosterBaseUrl } from '../../utils/poster'
export default {
  name: 'MovieDetails',
  data() {
      return {
        movieDetails: null,
        posterBasePath: '',
        relatedMovies: []
      }
  }, 
  methods: {
      async fetchMovieDetails() {
          let res = await fetchMovieDetails({
            'movie_id': this.$route.params.movie_id
          })
          this.movieDetails = res
          console.log(res);
      },
      async fetchRelatedMovies() {
          let res = await fetchRelatedMovies({
            'movie_id': this.$route.params.movie_id
          })
          this.relatedMovies = res.results
      }
  }, 
  mounted() {
      this.posterBasePath = getPosterBaseUrl()
      this.fetchMovieDetails()
      this.fetchRelatedMovies()
  }
}
</script>