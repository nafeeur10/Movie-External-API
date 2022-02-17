<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow-md">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="/" class="flex">
        <svg class="mr-3 h-10" viewBox="0 0 52 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z" fill="#76A9FA"/><path d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z" fill="#A4CAFE"/><path d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z" fill="#1C64F2"/></svg>
          <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">MovieNight</span>
      </a>
      <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <a href="/" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
          </li>
          <li>
            <a href="/movies" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Movies</a>
          </li>
          <li>
            <a href="/movies/12" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Genres</a>
          </li>
          <li>
            <a href="/wishlist" class="flex block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <img class="w-5 mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAADfElEQVRIie2Wy2tcdRTHP+fc207mzoQ2mahJUxXRjVhEBEGFrn21YNKMVLSoC/8AIfVRCx3UUvOALLqrGyEIktsXsbVFpFStllisC134qEah1mJqW0gy40xy73GRZjLpvH7JwpVnNXPP7/v9nPPj3N/vwv/xH4XUS9iLuZaZ6cLdnsXr1fyphH/hFwnDqJGZZbPeNHfd40fWEYleT+fzF+TE/qITeGZb//2CtxvsSSC15MoVYIx59qbGBy9VavLZV7ot9t8EeQbIVKRmDY6j8k46HPiuLnhm26s7BfYBXoPGZoAdqUODRwHyvf09Jjq6rMjqiEzk9fTBgeEq8Gzfzl2Y7G0growY7OUbFu8B6iIyY1f68OC+Mjif7X/EYj3jagAw//v3BuDfuanunNQqWIgfDQ4NT/gLf/XtFUEv/kjpm5MChojg3XGfq1QN7y3gMZnu6b9VVf90Bc//8ROliXGweOGBCGsf2oJ/+72u8ChaG3WqIA+6QqNLP1P6ugIKYEbp3DHmL/7gCva0JA8onmSarwUrzlKcGIc4rpE0SueOY8VZJ7KK16Fids1lsSRS4K+pv8Bfg6wNnMCxcU1NOQ+Yi8Br766fy3SDOA14bHH0rabDocsYXzqBO5qAHcKML1qPDP+lCyXoHhy6lgbmktnoxPU82wM3prn1yLunRGyomUrbukBrnKaqaNttTamCDSTDoc/KYIDkptQbAqMNhZ6Prq8GaFsn4jUYPMBgLKm/7S5ryqa5XJzUyZfE+KCRgdbYbm22zcLB1N/Bc5XX6rKDQ8IwSnqTL5jxYT0Pr6Ma0mSwDgdXgmfldG5+WbFVxYVhlPImnzcYq+VSu+O64KNB5vr2m6E1wWW4BjsQxqtyiQBNty0ZpNuRRI2DQzgZ5Avb5cCBuZoN1CtVwlwpkCALHKsSVXSoNd9t+SRIBz31PnsagsvwfKEP+Hg5eGPF75vB8mmgpafl/dw/jbyb3kpyYn8x0Lk+ETu1+KzyBPMqJ9o4E2iyR8KRQjNfp+tQwpFCspjaKthpAGnNIIkASSSR1vbFZV8FXvCEhLkZF0/nrw75KJdPBrbF4HMAbd+wtOXG2fwcj7tCVwQGkNHh2WJLYSvIhNfRvfj+np9r0aduGR+cXpHXShYvxtXsa+v8y7+eBfWtc8PD68KRq6vxWVVMbe7tmtrc27Va/b8SmyAA6ob3SQAAAABJRU5ErkJggg==" alt="">
              <span>Wishlist</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  components: {},
  data() {
    return {
    }
  },
}
</script>