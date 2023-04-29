# Nuxt Movie

Nuxt Movie is a movie application developed using Nuxt3, SASS, and SwiperJS technologies. This project is prepared as a sample project for those who want to learn Nuxt3 framework.

## Installation

1. Clone the project folder: `git clone https://github.com/USERNAME/Nuxt-Movie.git`
2. Set your API key in the `nuxt.config.ts` file:
```js
export default defineNuxtConfig({
   ssr: false,
   css: ["@/styles/style.scss"],
   modules: ["nuxt-icon", "nuxt-swiper"],
   runtimeConfig: {
      public: {
         API_KEY: <<the_movie_db_api_key>>,
      },
   },
   app: {
      head: {
         charset: "utf-8",
         viewport: "width=device-width, initial-scale=1",
      },
   },
});
```
3. Install the required packages by running the following command in the project folder: `npm install`
4. To run the application, use the following command: `npm run dev`

## Usage

The application retrieves movie data using The Movie Database (TMDb) API and provides users with functionalities such as searching for movies, getting information about movies, viewing movie posters.

## Contributing

To contribute, please first open an issue and then submit a pull request.

## License

This project is licensed under the MIT License. For more information, see the `LICENSE` file.
