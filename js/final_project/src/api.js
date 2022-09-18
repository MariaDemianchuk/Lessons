import axios from "axios";

axios.defaults.baseURL = "https://api.goperigon.com/v1/all";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default {
  getNews() {
    return axios.get(
      "?apiKey=e6bd63f9-8cc9-40f7-bfdd-7659399522be&from=2022-09-12&showReprints=false&language=uk&q=вантажівка транспортна логістика автотранспорт тент зерновоз паливо бензин дизельне дизель пальне"
    );
  },
};
