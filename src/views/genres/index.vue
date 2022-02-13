<template>
<div class="container mx-auto">
    <h2 class="my-9 text-center text-3xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Movie Genres</h2>
    <hr />
    <ul class="flex flex-wrap justify-center mt-9">
        <li v-for="genre in genresList.slice(0, 8)" :key="genre.id" class="w-1/4 m-3">
            <div class="bg-green-50 mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
                <div class="sm:flex sm:items-center px-6 py-4">
                    <img class="block rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://img.icons8.com/color/48/000000/movie-projector.png" alt="">
                    <div class="text-center sm:text-left sm:flex-grow">
                        <div class="mb-2">
                            <p class="text-xl leading-tight">{{ genre.name }}</p>
                        </div>
                    </div>
                </div>
            </div>   
        </li>
    </ul>
    </div>
</template>

<script>
import { fetchList } from '../../api/genres'
export default {
  name: 'Genres',
  data() {
      return {
        genresList: []
      }
  }, 
  methods: {
      async fetchGenresList() {
          let res = await fetchList()
          this.genresList = res.genres
      }
  }, 
  mounted() {
      this.fetchGenresList()
  }
}
</script>