import axios from "axios";

axios.defaults.baseURL = "https://api.goperigon.com/v1/all";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default {
  getNews() {
    return axios.get(
      "?apiKey=5986a3c0-b2d8-407a-949a-9d58f8cae46d&from=2022-09-12&showNumResults=true&showReprints=false&sortBy=relevance&language=uk&q=вантажівка логістика автотранспорт тент зерновоз бензин дизельне дизель"
    );
  },
};
