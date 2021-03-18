// "use strict";
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// var github_apiv4_1 = require("../../github-apiv4");
// var isomorphic_fetch_1 = __importDefault(require("isomorphic-fetch"));
// var accessCode = 'e589bd4b4ae70f25d2e8ca0c3ca0f1f4452a20a0';
// isomorphic_fetch_1.default('https://api.github.com/graphql', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': "bearer " + accessCode
//     },
//     body: JSON.stringify({ query: github_apiv4_1.queries.Viewer(github_apiv4_1.queries.User("bio")) }),
// })
//     .then(function (res) { return res.json().then(function (res) {
//     if (res.data) {
//         console.log(res.data);
//     }
//     else {
//         console.log("An error occurred", res.error);
//         console.log("Error data: ", res.data);
//     }
// }); })
//     .catch(function (err) { return console.log(err); });
