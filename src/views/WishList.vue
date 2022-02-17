<template>
    <div class="container mx-auto mt-9">
        <h2 class="my-9 text-center text-3xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">WishList Movies</h2>
        <hr />
        <movie-card :movie="movie"/>
    </div>
</template>
<script>
import MovieCard from '../components/MovieCard.vue'
export default {
    data() {
        return {
            movie: null
        }
    }, 
    components: {
        MovieCard
    },
    methods: {
        getWishList() {
            this.movie = JSON.parse(localStorage.getItem("wishlist"))
        }
    },
    mounted() {
      this.getWishList()
    }
}
</script>