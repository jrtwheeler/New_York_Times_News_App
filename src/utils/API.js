import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const KEY = "&api-key=gp9ZIIUpPzaatGjPYFCTwNtzwrpAOyAB";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getArticle: function (q_one, q_two) {
    return axios.get(BASEURL + q_one + "&begin_date-" + q_two + KEY);
  }
};
