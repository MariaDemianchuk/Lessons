import axios from "axios";

axios.defaults.baseURL = "https://api.goperigon.com/v1/all";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default {
  getNews() {
    return axios.get(
      "?apiKey=e6bd63f9-8cc9-40f7-bfdd-7659399522be&from=2022-09-22&sourceGroup=top100&showNumResults=true&showReprints=false&excludeLabel=Non-news&excludeLabel=Opinion&excludeLabel=Paid News&excludeLabel=Roundup&excludeLabel=Press Release&sortBy=date&q=films actor film movie"
    );
  },
};
