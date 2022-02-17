<template>
    <a href="javascript:void(0)">
        <div class="bg-green-50 mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
            <div class="sm:flex sm:items-center">
                <img v-if="movie.poster_path" class="block mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" @click="goToMovieDetails(movie.id)" :src="posterBasePath + movie.poster_path" alt="">
                <div class="text-center sm:text-left sm:flex-grow">
                    <div class="mb-2">
                        <p class="text-xl leading-tight" @click="goToMovieDetails(movie.id)">{{ movie.original_title }}</p>
                    </div>

                    <img v-if="movie.poster_path" @click="addToWishList" class="border rounded-full w-10 h-10 p-2 bg-black" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAADfElEQVRIie2Wy2tcdRTHP+fc207mzoQ2mahJUxXRjVhEBEGFrn21YNKMVLSoC/8AIfVRCx3UUvOALLqrGyEIktsXsbVFpFStllisC134qEah1mJqW0gy40xy73GRZjLpvH7JwpVnNXPP7/v9nPPj3N/vwv/xH4XUS9iLuZaZ6cLdnsXr1fyphH/hFwnDqJGZZbPeNHfd40fWEYleT+fzF+TE/qITeGZb//2CtxvsSSC15MoVYIx59qbGBy9VavLZV7ot9t8EeQbIVKRmDY6j8k46HPiuLnhm26s7BfYBXoPGZoAdqUODRwHyvf09Jjq6rMjqiEzk9fTBgeEq8Gzfzl2Y7G0growY7OUbFu8B6iIyY1f68OC+Mjif7X/EYj3jagAw//v3BuDfuanunNQqWIgfDQ4NT/gLf/XtFUEv/kjpm5MChojg3XGfq1QN7y3gMZnu6b9VVf90Bc//8ROliXGweOGBCGsf2oJ/+72u8ChaG3WqIA+6QqNLP1P6ugIKYEbp3DHmL/7gCva0JA8onmSarwUrzlKcGIc4rpE0SueOY8VZJ7KK16Fids1lsSRS4K+pv8Bfg6wNnMCxcU1NOQ+Yi8Br766fy3SDOA14bHH0rabDocsYXzqBO5qAHcKML1qPDP+lCyXoHhy6lgbmktnoxPU82wM3prn1yLunRGyomUrbukBrnKaqaNttTamCDSTDoc/KYIDkptQbAqMNhZ6Prq8GaFsn4jUYPMBgLKm/7S5ryqa5XJzUyZfE+KCRgdbYbm22zcLB1N/Bc5XX6rKDQ8IwSnqTL5jxYT0Pr6Ma0mSwDgdXgmfldG5+WbFVxYVhlPImnzcYq+VSu+O64KNB5vr2m6E1wWW4BjsQxqtyiQBNty0ZpNuRRI2DQzgZ5Avb5cCBuZoN1CtVwlwpkCALHKsSVXSoNd9t+SRIBz31PnsagsvwfKEP+Hg5eGPF75vB8mmgpafl/dw/jbyb3kpyYn8x0Lk+ETu1+KzyBPMqJ9o4E2iyR8KRQjNfp+tQwpFCspjaKthpAGnNIIkASSSR1vbFZV8FXvCEhLkZF0/nrw75KJdPBrbF4HMAbd+wtOXG2fwcj7tCVwQGkNHh2WJLYSvIhNfRvfj+np9r0aduGR+cXpHXShYvxtXsa+v8y7+eBfWtc8PD68KRq6vxWVVMbe7tmtrc27Va/b8SmyAA6ob3SQAAAABJRU5ErkJggg=="/>
                </div>
            </div>
        </div>   
    </a>
</template>
<script>
import { getPosterBaseUrl } from '../utils/poster'
// import { mapActions } from 'vuex'
export default {
    props: ['movie'],
    data() {
      return {
        posterBasePath: ''
      }
  }, 
    methods: {
        // ...mapActions(['setWishList']),
        goToMovieDetails(movie_id) {
            this.$router.push({ path: `/movies/details/${movie_id}` })
            this.$router.go()
        },
        addToWishList() {
            let movieObjectToSetWishList = {
                'id' : this.movie.id,
                'original_title': this.movie.original_title,
                'poster_path': this.movie.poster_path
            }
            // store.getters.wishlist.list.push(JSON.stringify(movieObjectToSetWishList))
            localStorage.setItem("wishlist", JSON.stringify(movieObjectToSetWishList))
        }
    },
    mounted() {
      this.posterBasePath = getPosterBaseUrl()
  }
}
</script>