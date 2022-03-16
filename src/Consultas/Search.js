const fetch = require("node-fetch");
var url = "http://localhost:4000/graphql";
const moduleSearch = {
  //*Only Read
  read: (data) => {
    console.log(data);
    let query = {
      query: `
        query MyQuery {
          allAllCities(filter: {name: {includes: "${data.wordSearch}"}}) {
            edges {
              node {
                name
                latitude
                longitude
                score
              }
            }
          }
        }
        `,
    };
    let http_message = {
      headers: {
        "content-type": "application/json",
        Authorization: "",
      },
      method: "POST",
      body: JSON.stringify(query),
    };
    let created_promise = fetch(url, http_message).then((res) => res.json());
    return created_promise;
  },
  //*Only Remove
  remove: (data) => {},
  //*Only Update
  update: (data) => {},
};
module.exports = moduleSearch;
