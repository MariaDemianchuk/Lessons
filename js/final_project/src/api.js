import axios from "axios";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default {
  getNews() {
    let today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + (dd - 1);
    console.log(today);
    return axios.get(
      `https://api.goperigon.com/v1/all?apiKey=e6bd63f9-8cc9-40f7-bfdd-7659399522be&from=${today}&sourceGroup=top100&showNumResults=true&showReprints=false&excludeLabel=Non-news&excludeLabel=Opinion&excludeLabel=Paid News&excludeLabel=Roundup&excludeLabel=Press Release&sortBy=date&q=films actor film movie`
    );
  },
  getUpcoming() {
    return axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=1901d4ddedf283037c131abf45be39d0&page=1"
    );
  },
  getPopular() {
    return axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=1901d4ddedf283037c131abf45be39d0&page=1"
    );
  },
  getSearch(page) {
    return axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=1901d4ddedf283037c131abf45be39d0&query=harry&page=${page}`
    );
  },
};
