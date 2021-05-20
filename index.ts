import {queries, types, mutations} from "github-apiv4"
import fetch from "isomorphic-fetch";

const accessCode = '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'; 
const user = queries.User("bio")
const onUser = queries.onUser(user)
const fields = `
  ... on App { id }
  ... on Organization {id description url}
` 
// const mutation = mutations.UpdateRepository({repositoryId: "MDEwOlJlcG9zaXRvcnkzNjcwNjY5OTY=", description: "Just trying",  name:"GitHubv4-api mutation"},queries.Repository("name description"))
// const mutation = mutations.CreateRef({repositoryId: "MDEwOlJlcG9zaXRvcnkzNjcwNjY5OTY=", name:"GitHubv4-api mutation Ref",oid:"ref/mutation"},queries.Ref ("name"))
// const mutation = mutations.AcceptTopicSuggestion({repositoryId: "MDEwOlJlcG9zaXRvcnkzNjcwNjY5OTY=", name:"GitHubv4-api mutation Topic"},queries.Topic ("name"))  
// const mutation = mutations.AddAssigneesToAssignable({assigneeIds:["MDQ6VXNlcjIyODE3NDky","MDQ6VXNlcjIzMjgyMDU5"],assignableId:"MDExOlB1bGxSZXF1ZXN0NjIyMTYzMjY0"},queries.Assignable(queries.Assignees({first:10,fields:"login"})))
const mutation = queries.RepositoryQuery("github-apiv4","ioedeveloper" ,`id ${queries.PullRequests({first:50,fields:"id body viewerDidAuthor",states:"OPEN"})}`) 
fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: { 
      'Content-Type': 'application/json',
      'Authorization': `bearer ${accessCode}` 
  },
  body: JSON.stringify({ query: mutation}),
}).then(res => res.json().then(res => {
    if(res.data){ 
      // console.log(res.data.addAssigneesToAssignable)
      console.log(res.data.repository.pullRequests)
    
    }else{
      console.log("An error occurred",res) 
      console.log(mutation)
    }
  }))
  .catch(err => console.log(err));
