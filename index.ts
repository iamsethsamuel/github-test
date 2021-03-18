import {queries, types} from "github-apiv4"
import fetch from "isomorphic-fetch";

const fields = "fullDescription id name shortDescription"
const accessCode = 'e589bd4b4ae70f25d2e8ca0c3ca0f1f4452a20a0'; 

const query = queries.SponsorsListing("",fields)

fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: { 
      'Content-Type': 'application/json',
      'Authorization': `bearer ${accessCode}`
  },
  body: JSON.stringify({ query: query}),
}).then(res => res.json().then(res => {
    if(res.data){
      const resSponsorsListing:types.SponsorsListing = res.data
      console.log(resSponsorsListing.sponsorsListing )
    
    }else{
      console.log("An error occurred",res) 
      console.log("Error data: ",res.data)
      console.log(query )

    }
  }))
  .catch(err => console.log(err));
