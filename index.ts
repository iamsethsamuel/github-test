import {queries, types} from "github-apiv4"
import fetch from "isomorphic-fetch";

const accessCode = 'e589bd4b4ae70f25d2e8ca0c3ca0f1f4452a20a0'; 
const user = queries.User("bio")
const onUser = queries.onUser(user)
const fields = `
  ... on App { id }
  ... on Organization {id description url}
` 
const query = queries.Search("facebook",10,fields,"USER")

fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: { 
      'Content-Type': 'application/json',
      'Authorization': `bearer ${accessCode}`
  },
  body: JSON.stringify({ query: query}),
}).then(res => res.json().then(res => {
    if(res.data){
      const response:types.Search = res.data
      console.log(response.search.nodes )
    
    }else{
      console.log("An error occurred",res) 
      console.log(query)
    }
  }))
  .catch(err => console.log(err));
