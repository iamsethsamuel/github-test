import { config } from "dotenv"
import { queries, types, mutations } from "github-apiv4"
import fetch from "isomorphic-fetch";
config()

const accessCode = process.env.GITHUB_KEY;

// const mutation = mutations.UpdateRepository({repositoryId: "MDEwOlJlcG9zaXRvcnkxNDY1ODM0MDY=",template:true, description: "Just trying",  name:"GitHubv4-api mutation"},queries.Repository("name description"))
// const mutation = mutations.CreateRef({repositoryId: "MDEwOlJlcG9zaXRvcnkzNjcwNjY5OTY=", name:"GitHubv4-api mutation Ref",oid:"ref/mutation"},queries.Ref ("name"))
// const mutation = mutations.AcceptTopicSuggestion({repositoryId: "MDEwOlJlcG9zaXRvcnkzNjcwNjY5OTY=", name:"GitHubv4-api mutation Topic"},queries.Topic ("name"))  
// const mutation = mutations.AddAssigneesToAssignable({assigneeIds:["MDQ6VXNlcjIyODE3NDky","MDQ6VXNlcjIzMjgyMDU5"],assignableId:"MDExOlB1bGxSZXF1ZXN0NjIyMTYzMjY0"},queries.Assignable(queries.Assignees({first:10,fields:"login"})))
// const mutation = queries.RepositoryQuery("github-test","Sectur1" ,`id ${queries.Labels({first:50,fields:"id name "})} ${queries.PullRequests({first:10, fields:"id"})} ${queries.Projects({first:10,fields:"id name body"})}`) 
// const mutation = mutations.CreatePullRequest({baseRefName:"master", body:"Merge Mutation with Master", headRefName:"mutations", title:"Mutations", repositoryId:"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU="},queries.PullRequest("title body id"))
// const mutation = mutations.CreateRepository({name:"Template Repo", description:"For GitHubv4 tests", visibility:"PUBLIC"},queries.Repository("name id"))
// const mutation = mutations.AddComment({body:"Are you done with the mutations or are there more changes to come?", subjectId:"MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3"}, queries.Subject(queries.onPullRequest("id body ")))
// const mutation = mutations.AddLabelsToLabelable({labelIds: [`"MDU6TGFiZWwzMDA2NjgwNjM1"`],labelableId:"MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3"}, queries.Labelable(queries.onPullRequest("id body")))
// const mutation = mutations.AddProjectCard({projectColumnId:"PC_lALOAVwq1M4AvhR3zgDb4jI",note:"I have just created a card", },queries.ProjectColumn("name id"))
// const mutation = mutations.AddProjectColumn({name: "GitHubv4 Project Column",projectId:"MDc6UHJvamVjdDEyNDU3MDc5"}, queries.Project())
// const mutation = mutations.CreateProject({name: "GitHubv4", ownerId:"MDQ6VXNlcjIyODE3NDky",body:"This is the test project for Githubv4", repositoryIds:[`"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU="`]}, queries.Project("body url"))
// const mutation = queries.Viewer("id")
// const mutation = queries.Node("MDc6UHJvamVjdDEyNDc1NDI1",`${queries.onProject(`${queries.Columns({first:10,fields: "name"})}`)}`)
// const mutation = mutations.AddPullRequestReviewComment({body:"I will review this", pullRequestId: "MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3", }, queries.Comment("body"))
// const mutation = mutations.AddPullRequestReview({body:'I will review this', pullRequestId:'MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3',event:'REQUEST_CHANGES'},queries.PullRequestReview("body id"))
// const mutation = mutations.AddPullRequestReviewThread({body:"Use this thread", pullRequestId:"MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3",path:"/",line:1, startLine:1}, "thread{id}")
// const mutation = mutations.AddReaction({subjectId:"MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3", content:"ROCKET"},queries.Reaction("content"))
// const mutation = mutations.AddStar({starrableId:"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU"}, queries.Starrable(queries.onRepository("name")))
// const mutation = mutations.ApproveVerifiableDomain({domain: "/"}, queries.Domain("domain"))
// const mutation = mutations.ArchiveRepository({repositoryId:"MDEwOlJlcG9zaXRvcnkxNDY1ODM0MDY="}, queries.Repository("name"))
// const mutation = mutations.ChangeUserStatus({emoji: "😫", message: "I am tired. I need to rest", limitedAvailability: true}, queries.Status("emoji"))
// const mutation = mutations.ClearLabelsFromLabelable({labelableId:"MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3"},queries.Labelable(queries.onPullRequest("body id"+queries.Labels({first:10, fields:"name"}))))
//  const mutation = mutations.CloneProject({targetOwnerId: "MDQ6VXNlcjIyODE3NDky", sourceId:"MDc6UHJvamVjdDEyNDU3MTU5", name:"GitHubv4 Clone", includeWorkflows:false} ,queries.Project())
// const mutation = mutations.CloneTemplateRepository({ownerId:"MDQ6VXNlcjIyODE3NDky",description:"Cloned repository", name:"Template-Repo", repositoryId:"MDEwOlJlcG9zaXRvcnkzNjg1MTI3NDQ=",visibility:"PRIVATE"},queries.Repository("name"))
// const mutation = mutations.CreateIssue({body:"fix this",title: "Creating Issue with GitHubv4", repositoryId:"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU="},queries.Issue("title body id"))
// const mutation = mutations.CloseIssue({issueId:'MDU6SXNzdWU4OTQzMDYwNzY='}, queries.Issue("title body")) 
// const mutation = mutations.ClosePullRequest({pullRequestId:'MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3'}, queries.PullRequest("title body"))
// const mutation = mutations.ConvertProjectCardNoteToIssue({repositoryId:"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU=", projectCardId:"PC_lALOAVwq1M4AvlwhzgDa26Q", title:"Project Card Issue", body:"This is a project card"}, queries.ProjectCard("id note"))
// const mutation = mutations.ConvertPullRequestToDraft({pullRequestId:"MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3"},queries.PullRequest("body isDraft"));
// const mutation = mutations.CreateBranchProtectionRule({ repositoryId: "MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU=", requiredApprovingReviewCount: 1, requiresApprovingReviews:false,pattern:"query"},queries.BranchProtectionRule("requiredApprovingReviewCount requiresApprovingReviews"))
// const mutation = mutations.CreateCheckRun({ actions: [mutations.CheckRunAction({ description: "This is my first checkrun ", label: "firstCheck", identifier: "first1" }), ],  headSha:"aeea6d0409558f26631baa5f545e8af4be5b6145",name: "GitHubv4-Checkrun", conclusion: "SUCCESS", repositoryId: "MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU", status: "COMPLETED" },
// queries.CheckRun("conclusion title summary"))
// const mutation = mutations.CreateCheckSuite({repositoryId:"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU", headSha:"645b3148b8a056f6689dfa058b9637ac6a80c857"}, queries.CheckSuite("conclusion status")) 
// const mutation = mutations.CreateContentAttachment({body:"Hey, world",title:"Content Stay", contentReferenceId:"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU"},queries.ContentAttachment("body "))
// const mutation = mutations.CreateDeployment({repositoryId:"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU", environment:"NPM",refId:'master'}, queries.Deployment("environment payload id"))
// const mutation = mutations.CreateDeploymentStatus({deploymentId:"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU=", environment:"NPM",state:"SUCCESS"}, queries.DeploymentStatus("environment "))
// const mutation = mutations.CreateEnterprisCreateeOrganization({adminLogins:[`"Sectur1"`], enterpriseId:"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU", login: "Venmun", billingEmail:"seth@ipade-tech.com", profileName:"Ipade-Tech"}, queries.Organization("name"))
// const mutation = mutations.CreateIpAllowListEntry({allowListValue:"192.168.09.122",name: "Shammo", isActive:true, ownerId:"MDQ6VXNlcjIyODE3NDky"}, queries.IpAllowListEntry("name"))
// const mutation = mutations.CreateLabel({name:"Bugs To br ",color: "f3ffaa", description:"Bugs that can break", repositoryId:"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU= "}, queries.Label("description id"))
// const mutation = mutations.CreateTeamDiscussion({body:"Hey team", teamId:"MDEwOlJlcG9zaXRerccdNjgxMzc4NjU=", title:"Greating", private: false}, queries.TeamDiscussion("body"))
// const mutation = mutations.CreateTeamDiscussionComment({body:"Hey team", discussionId:"MDEwOlJlcG9zaXRerccdNjgxMzc4NjU=", }, queries.TeamDiscussionComment("body"))
// const mutation = mutations.DeclineTopicSuggestion({name: "Java", reason:"NOT_RELEVANT",repositoryId:"MDEwOlJlcG9zaXRerccdNjgxMzc4NjU="}, queries.Topic("name"))
// const mutation = mutations.DeleteBranchProtectionRule({branchProtectionRuleId:"MSidoi293k3klrk3lk34="})
// const mutation = mutations.DeleteDeployment({id:"MSidoi293k3klrk3lk34="})
// const mutation = mutations.DeleteIpAllowListEntry({ipAllowListEntryId:"FNdalaeio2323kk2kk4="},queries.IpAllowListEntry("name"))
// const mutation = mutations.DeleteIssue({issueId:"MDU6SXNzdWU4OTQzMDYwNzY="},queries.Repository("name"))
// const mutation = mutations.DeleteIssueComment({id:"MDU6SXNzdWU4OTQzMDYwNzY="})
// const mutation = mutations.DeleteLabel({id:"MDU6TGFiZWwzMDEzODYzODMy"})
// const mutation = mutations.DeletePackageVersion({packageVersionId:"MDU6TGFiZWwzMDEzODYzODMy"})
// const mutation = mutations.DeleteProject({projectId:"MDc6UHJvamVjdDEyNDc1NDI1",})
// const mutation = mutations.DeleteProjectCard({cardId:"PC_lALOAVwq1M4AvlwhzgDa26Q"})
// const mutation = mutations.DeleteProjectColumn({columnId:"PC_lALOAVwq1M4AvlwhzgDa26Q"})
// const mutation = mutations.DeletePullRequestReviewComment({id:"MDEyOklzc3VlQ29tbWVudDg0MjIzMjc4Mg=="}, queries.PullRequestReview("id body"))
// const mutation = mutations.DeleteRef({refId:"master"})
// const mutation = mutations.DeleteTeamDiscussion({id:"lALOAVwq1M4AvlwhzgDa26Q"})
// const mutation = mutations.DeleteTeamDiscussionComment({id:"lALOAVwq1M4AvlwhzgDa26Q"})
// const mutation = mutations.DeleteVerifiableDomain({id:"lALOAVwq1M4AvlwhzgDa26Q"})
// const mutation = mutations.DisablePullRequestAutoMerge({pullRequestId:"MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3"},queries.PullRequest("body"))
// const mutation = mutations.DismissPullRequestReview({pullRequestReviewId:"MDE3OlB1bGxSZXF1ZXN0UmV2aWV3NjYwOTczNTA4",message:"I will try"},queries.PullRequestReview("body id")) 
// const mutation = mutations.EnablePullRequestAutoMerge({pullRequestId:"MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3", commitBody:" Gitv4 commit body",commitHeadline:"Git Merge", authorEmail:"sethsamuel03@gmail.com", mergeMethod:"MERGE"},queries.PullRequest("body")) 
// const mutation = mutations.FollowUser({userId:"MDQ6VXNlcjEwMDIwMA=="}, queries.User("bio avatarUrl email"))
// const mutation = mutations.ImportProject({body:"Imported Project ", name:"IP", ownerName:"Seth", public: true, columnImports:[mutations.ProjectColumnImport({columnName: "Imported", position:10})]},queries.Project("name id"))
// const mutation = mutations.InviteEnterpriseAdmin({email:"sethsamuel03@gmail.com",enterpriseId:"EM_oi3oii3innolk4", invitee:"ryanflorence",role:"OWNER"},queries.Invitation("email")) 
// const mutation = mutations.LinkRepositoryToProject({projectId:"MDc6UHJvamVjdDEyNDU3MDc5",repositoryId:"MDEwOlJlcG9zaXRvcnkxNDY1ODM0MDY="}, queries.Project("name"))
// const mutation = mutations.LockLockable({lockReason:"OFF_TOPIC", lockableId:"MDU6SXNzdWU4OTQzMDYwNzY="},queries.onIssue("id body")) 
// const mutation = mutations.MarkFileAsViewed({pullRequestId:"MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3",path:"/index.js"},queries.PullRequest("additions"))
// const mutation = mutations.MarkPullRequestReadyForReview({pullRequestId: "MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3"},queries.PullRequest(" body"))
// const mutation = mutations.MergeBranch({repositoryId:"MDEwOlJlcG9zaXRvcnkxNDY1ODM0MDY=", head:"master", base:"master", authorEmail:"sethsamuel03@gmail.com", commitMessage:"Merged with head"},"additions")
// const mutation = mutations.MergePullRequest({pullRequestId:"MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3", mergeMethod:"MERGE", commitBody:"Merge with main"},queries.PullRequest("additions body")) 
// const mutation = mutations.MinimizeComment({classifier:"OUTDATED", subjectId:"MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3",},"isMinimized") 
// const mutation = mutations.MoveProjectCard({cardId:"PC_lALOAVwq1M4AvlwhzgDa26Q", columnId:"PC_lALOAVwq1M4AvlwhzgDa26Q", afterCardId: null,},queries.ProjectCard("note id"))
// const mutation = mutations.MoveProjectColumn({columnId:"PC_lALOAVwq1M4AvlwhzgDa26Q"})
// const mutation = mutations.PinIssue({issueId:"MDU6SXNzdWU4OTY4NDkyNzI="},queries.Issue("body")) 
// const mutation = mutations.RegenerateEnterpriseIdentityProviderRecoveryCodes({enterpriseId:"MDU6SXNzdWU4OTY4NDkyNzI="}, queries.IdentityProvider("id "))
// const mutation = mutations.RegenerateVerifiableDomainToken({id:"MDU6SXNzdWU4OTY4NDkyNzI="}) 
// const mutation = mutations.RemoveAssigneesFromAssignable({assigneeIds:[`"MDQ6VXNlcjIyODE3NDky"`,`"MDQ6VXNlcjIzMjgyMDU5"`],assignableId:"MDExOlB1bGxSZXF1ZXN0NjIyMTYzMjY0"},queries.Assignable(queries.Assignees({first:10,fields:"login"})))
// const mutation = mutations.RemoveEnterpriseAdmin({login:"Sectur1",enterpriseId:"MDQ6VXNlcjIyODE3NDky"},queries.Enterprise("id"))
// const mutation = mutations.RemoveEnterpriseIdentityProvider({enterpriseId:"MDQ6VXNlcjIyODE3NDky"},queries.IdentityProvider("id"))
// const mutation = mutations.RemoveEnterpriseOrganization({enterpriseId:"MDQ6VXNlcjIyODE3NDky", organizationId:"MDU6SXNzdWU4OTY4NDkyNzI"},queries.Organization("id"))
// const mutation = mutations.RemoveLabelsFromLabelable({labelableId:"MDU6SXNzdWU4OTY4NDkyNzI=", labelIds: [`"MDU6TGFiZWwzMDA2NjgwNjM1"`]},queries.Labelable(queries.onIssue("body id")))
// const mutation = mutations.RemoveOutsideCollaborator({userId:"MDQ6VXNlcjEwMDIwMA==", organizationId:"MDU6SXNzdWU4OTY4NDkyNzI"}, "login")
// const mutation = mutations.RemoveReaction({subjectId:"MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3",content:"ROCKET"},queries.Reaction(""))
// const mutation = mutations.RemoveStar({starrableId:"MDQ6VXNlcjIyODE3NDky"},queries.Starrable(queries.onRepository("name")))
// const mutation = mutations.ReopenIssue({issueId:"MDU6SXNzdWU4OTY4NDkyNzI",}, queries.Issue("body"))
// const mutation = mutations.ReopenPullRequest({pullRequestId:"MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3"}, queries.PullRequest("additions body"))
// const mutation = mutations.RequestReviews({ userIds: [`"MDQ6VXNlcjIyODE3NDky"`, `"MDQ6VXNlcjIzMjgyMDU5"`], pullRequestId: "MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3", union: true }, queries.PullRequest("additions body"))
// const mutation = mutations.RerequestCheckSuite({repositoryId:"MDEwOlJlcG9zaXRvcnkxNDY1ODM0MDY",checkSuiteId:"MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3"},queries.CheckSuite("conclusion"))
// const mutation = mutations.ResolveReviewThread({threadId:"MDEwOlJlcG9zaXRvcnkxNDY1ODM0MDY", }, "diffSide")  
// const mutation = mutations.SetEnterpriseIdentityProvider({digestMethod:"SHA256", issuer:"SSL","enterpriseId":"ET_llk3kk4llLkel2",signatureMethod:"RSA_SHA256", idpCertificate:"V_Cert", ssoUrl:"https://open.certs.com"}, queries.IdentityProvider("id")) 
// const mutation = mutations.SetOrganizationInteractionLimit({limit:"COLLABORATORS_ONLY",expiry:"ONE_DAY",organizationId:"MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3"},queries.Organization("name"))
// const mutation = mutations.SetUserInteractionLimit({expiry:"ONE_DAY",limit:"CONTRIBUTORS_ONLY",userId:"MDQ6VXNlcjIzMjgyMDU5"}, queries.User("login"))
// const mutation = mutations.SubmitPullRequestReview({body: "Done ",event:"COMMENT",pullRequestId:"MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3",pullRequestReviewId:"MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3"},queries.PullRequestReview("body"))
// const mutation = mutations.TransferIssue({repositoryId:"MDEwOlJlcG9zaXRvcnkxNDY1ODM0MDY",issueId:"MDU6SXNzdWU4OTY4NDkyNzI"}, queries.Issue("body"))
// const mutation = mutations.UnarchiveRepository({repositoryId:"MDEwOlJlcG9zaXRvcnkxNDY1ODM0MDY"},queries.Repository("description"))
// const mutation = mutations.UnfollowUser({userId:"MDQ6VXNlcjIyOTQ1OTI3"},queries.User("login bio location")) 
// const mutation = mutations.UnlinkRepositoryFromProject({projectId:"MDc6UHJvamVjdDEyNDc1NDI1", repositoryId:"MDEwOlJlcG9zaXRvcnkxNDY1ODM0MDY"},`${queries.Repository("description forkCount")} ${queries.Project("name")}`)
//  const mutation = mutations.UnlockLockable({lockableId:"MDU6SXNzdWU4OTQzMDYwNzY="},queries.onIssue("id body"))
//  const mutation = mutations.UnmarkFileAsViewed({pullRequestId:"MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3", path:"/index.js"},queries.PullRequest("additions body"))
// const mutation = mutations.UnminimizeComment({subjectId:"MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3"}, queries.onComment("body"))
// const mutation = mutations.UnmarkIssueAsDuplicate({canonicalId:"MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3", duplicateId:"MDU6SXNzdWU4OTQzMDYwNzY="}, queries.onIssue("body"))
// const mutation = mutations.UnminimizeComment({subjectId:"MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3"},queries.onComment("body"))
// const mutation = mutations.UnpinIssue({issueId:"MDU6SXNzdWU4OTQzMDYwNzY="},queries.Issue("body"))
// const mutation = mutations.UnresolveReviewThread({threadId:"MDExOlB1bGxSZXF1ZXN0NjQ1NzQ2NTA3"},"line") 
// const mutation = mutations.UpdateBranchProtectionRule({repositoryId:"MDEwOlJlcG9zaXRvcnkxNDY1ODM0MDY",pattern:"branch", allowsDeletions:true},queries.BranchProtectionRule("allowsDeletions"))
// const mutation = mutations.UpdateCheckRun({checkRunId: "MDU6SXNzdWU4OTQzMDYwNzY=",repositoryId:"MDEwOlJlcG9zaXRvcnkxNDY1ODM0MDY" },queries.CheckRun("conclusion"))
// const mutation = mutations.UpdateCheckSuitePreferences({repositoryId:"MDU6SXNzdWU4OTQzMDYwNzY=",autoTriggerPreferences:[mutations.CheckSuiteAutoTriggerPreference({appId:"AP_HF9kd99Knd=",setting: true})]},queries.Repository("name description"))
// const mutation = mutations.UpdateEnterpriseAdministratorRole({login:"Sectur1", enterpriseId:"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU",role:"BILLING_MANAGER"})
// const mutation = mutations.UpdateEnterpriseAllowPrivateRepositoryForkingSetting({enterpriseId:"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU",settingValue:"ENABLED"}) 
// const mutation = mutations.UpdateEnterpriseDefaultRepositoryPermissionSetting({enterpriseId:"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU",settingValue:"ADMIN"},queries.Enterprise("avatarUrl"))
// const mutation = mutations.UpdateEnterpriseMembersCanChangeRepositoryVisibilitySetting({enterpriseId:"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU",settingValue:"ENABLED"},queries.Enterprise("avatarUrl"))
// const mutation = mutations.UpdateEnterpriseMembersCanCreateRepositoriesSetting({enterpriseId:"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU",settingValue:"PRIVATE"},queries.Enterprise("avatarUrl"))
// const mutation = mutations.UpdateEnterpriseMembersCanDeleteIssuesSetting({enterpriseId:"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU",settingValue:"ENABLED"},queries.Enterprise("avatarUrl"))
// const mutation = mutations.UpdateEnterpriseMembersCanDeleteRepositoriesSetting({enterpriseId:"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU",settingValue:"ENABLED"},queries.Enterprise("avatarUrl"))
// const mutation = mutations.UpdateEnterpriseMembersCanInviteCollaboratorsSetting({enterpriseId:"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU",settingValue:"ENABLED"},queries.Enterprise("avatarUrl"))
// const mutation = mutations.UpdateEnterpriseMembersCanMakePurchasesSetting({enterpriseId:"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU",settingValue:"ENABLED"},queries.Enterprise("avatarUrl"))
// const mutation = mutations.UpdateEnterpriseProfile({description:"Enterprise",enterpriseId:"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU", name:"Venmun", location:"Home", websiteUrl:"www.venmun.com"},queries.Enterprise("avatarUrl"))
// const mutation = mutations.UpdateEnterpriseRepositoryProjectsSetting({enterpriseId:"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU",settingValue:"ENABLED"},queries.Enterprise("avatarUrl"))
// const mutation = mutations.UpdateIpAllowListEnabledSetting({ownerId:"MDU6SXNzdWU4OTY4NDkyNzI", settingValue:"ENABLED"}, queries.onOrganization("name"))
// const mutation = mutations.UpdateIpAllowListEntry({allowListValue:"Due", name:"IP Allow", ipAllowListEntryId:"192.168.0.1",isActive:true}, queries.IpAllowListEntry("createdAt")) 
// const mutation = mutations.UpdateIssueComment({id:"MDU6SXNzdWU4OTQzMDYwNzY=",body:"THis has been dated"}, queries.IssueComment("body")) 
// const mutation = mutations.UpdateIssue({id:"MDU6SXNzdWU4OTQzMDYwNzY=",body:"THis has been dated"}, queries.Issue("title body")) 
//  const mutation = mutations.UpdateLabel({id:"MDU6TGFiZWwzMDA2NjgwNjM1", name:"Bug"},queries.Label("name "))
// const mutation = mutations.UpdateNotificationRestrictionSetting({ownerId:"MDU6TGFiZWwzMDA2NjgwNjM1",settingValue:"ENABLED"},queries.onOrganization("id"))
// const mutation = mutations.UpdateProject({body:"My project", name:"New Project", projectId:"MDc6UHJvamVjdDEyNDU3MDc5"},queries.Project("name body"))
// const mutation = mutations.UpdateProjectCard({note:"You must work", projectCardId:"MDExOlByb2plY3RDYXJkNjE1NzY4NzQ="},queries.ProjectCard("note "))
// const mutation = mutations.UpdateProjectColumn({projectColumnId:"PC_lALOAVwq1M4AvhR3zgDb4jI", name:"Ipade GitHubv4 Project"},queries.ProjectColumn("name "))
// const mutation = mutations.UpdatePullRequestReview({body:"You need to update", pullRequestReviewId:"MDE3OlB1bGxSZXF1ZXN0UmV2aWV3NjYwOTczNTA4"}, queries.PullRequestReview("body"))

fetch('https://api.github.com/graphql', {
  method: 'POST', "headers": {
    'Content-Type': 'application/json',
    'Authorization': `bearer ${accessCode}`,
    "Accept": "application/vnd.github.update-refs-preview+json " +
      "application/vnd.github.hawkgirl-preview+json " +
      "application/vnd.github.starfox-preview+json " +
      "application/vnd.github.merge-info-preview+json " +
      "application/vnd.github.corsair-preview+json " +
      "application/vnd.github.flash-preview+json " +
      "application/vnd.github.bane-preview+json " +
      "application/vnd.github.package-deletes-preview+json " +
      "application/vnd.github.slothette-preview+json " +
      "application/vnd.github.stone-crop-preview+json"
  },
  body: JSON.stringify({ query: mutation }),
}).then(res => res.json().then(res => {
  if (res.data) {
    console.log(res.data)

  } else {
    console.log("An error occurred", res)
    console.log(mutation)
  }
}))
  .catch(err => console.log(err));
