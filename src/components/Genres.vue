<template>
    <ul>
        <li v-for="genre in genresList" :key="genre.id">
            {{ genre.name }}
        </li>
    </ul>
</template>

<script>
export default {
  name: 'Genres',
  data() {
      return {
        genresList: []
      }
  }, 
  methods: {
      getGenresList() {
          this.$http.get(process.env.VUE_APP_BASE_MOVIE_URL + 'genre/movie/list',{
              params: { api_key: process.env.VUE_APP_API_KEY}
          }).then((response) => {
              this.genresList = response.data.genres
          })
      }
  }, 
  mounted() {
      this.getGenresList()
  }
}
</script>