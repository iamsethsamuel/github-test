import { config } from "dotenv"
import { types } from "github-apiv4"
import fetch from "isomorphic-fetch";
import { mutation } from "./mutations"
config()

const accessCode = process.env.GITHUB_KEY;
fetch('https://api.github.com/graphql', {
  method: 'POST', "headers": {
    'Content-Type': 'application/json',
    'Authorization': `bearer ${accessCode}`,
    "Accept": "application/vnd.github.update-refs-preview+json " + "application/vnd.github.hawkgirl-preview+json " +
      "application/vnd.github.starfox-preview+json " + "application/vnd.github.merge-info-preview+json " +
      "application/vnd.github.corsair-preview+json " + "application/vnd.github.flash-preview+json " +
      "application/vnd.github.bane-preview+json " + "application/vnd.github.package-deletes-preview+json " +
      "application/vnd.github.slothette-preview+json " + "application/vnd.github.stone-crop-preview+json"
  },
  body: JSON.stringify({ query: mutation.addPullRequestReview.mutation }),
}).then(res => res.json().then(res => {
  if (res.data) {
    if(res.errors)console.log(res.errors)
    const data: types.AddPullRequestReview = res.data
    console.log(data.addPullRequestReview)  

  } else {
    console.log("An error occurred", res)
  }
}))
  .catch(err => console.log(err));
