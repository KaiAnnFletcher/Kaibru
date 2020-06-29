import axios from "axios";
// import sampleData from "./sampleData.json";
// import cheerio from "cheerio";

export default {
    scrapeAll: function() {
        return axios.get("/api/website_1/scrape")
        //             .then(function (response){
        //             console.log(response)
        // })
        //             .catch(function(error) {
        //                 console.log(error);
        //             });
    },

    scrapeBySearch: function(searchString){
        var parsedString = searchString.replace(/ /g, "%20");
        return axios.get("/api/website_1/search/" + parsedString)
                    // .then(function(response) {
                    //     console.log(response)
                    // })
                    // .catch(function(error) {
                    //     console.log(error)
                    // });
    },

    bookmark: function(entryData){
        return axios.post("api/users/bookmark", entryData);
    },

    getBookmarks: function(){
        return axios.get("api/users/allBookmarks");
    },

    checkToken: function () {
        return axios.get("/api/users/checkToken");
    }

};