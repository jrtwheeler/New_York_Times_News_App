import axios from "axios";
const KEY = "gp9ZIIUpPzaatGjPYFCTwNtzwrpAOyAB";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
  searchTermOutput +
  "&begin_date-" +
  startYearOutput +
  "&api-key=" +
  KEY;

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  get: function () {
    return axios.get(BASEURL);
  }
};
