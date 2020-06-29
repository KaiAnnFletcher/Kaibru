require("../../controllers/website_1controller");
require("./website_1");
var Items_1 = require( "../../models");

//After scraping the main page, the following function is to save to the database

saveToDatabase =  function(thumbnailResult, detailsResult, linkResult) {
    //prepare the data
    
     Items_1.Items_1.findCreateFind({
        attributes: ["thumbnail", "results", "link"],
        where:
        {
         resultThumbnail: thumbnailResult,
         resultDetails: detailsResult,
         resultLink: linkResult
        }    
    })

//     function saveToDatabase(values, resultDetails) {
//         return Items_1.Items_1
//             .findAll({ where: resultDetails })
//             .then(function(obj) {
//                 // update
//                 if(obj)
//                     return obj.update(values);
//                 // insert
//                 return Items_1.Items_1.create(values);
//             })
//     }
//    saveToDatabase()
   

    // Items_1.Items_1.findOrCreate({where:
    //     {resultThumbnail: thumbnailResult, resultDetails: detailsResult, 
    //     upsert:true, new:true}
    // })
    //console.log(dataToStore)
    //insert data to the database
    // dataToStore.save().
    //     then(() => {
    //         console.log("Data successfully saved");
    //     }).catch(err => {
    //         console.log("Error: ", err);
    //     });

}

module.exports = saveToDatabase;