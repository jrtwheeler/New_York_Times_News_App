import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const KEY = "&api-key=gp9ZIIUpPzaatGjPYFCTwNtzwrpAOyAB";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getArticle: function (q_one) {
     var search = axios.get(BASEURL + "?q=" + q_one + KEY);
     console.log(search)
     return search
  },
  startArticle: function () {
     var search = axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election" + KEY);
     console.log(search)
     return search
  }
}
