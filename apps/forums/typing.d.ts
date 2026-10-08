type Comments = {
    created_at:string
    id:number
    post_id:number
    text:string
    username:string
}
type Vote = {
    created_at:string
    id:number
    post_id:number
    text:string
    username:string
    upvote:boolean
}
type subreddit = {
    id:number
    Id:number
    topic:string
    created_at:string  

}
 
type Post = {
    body:string
    created_at:string
    id:number
    image:string
    subreddit_id:number
    tittle:string
    username:string
    votes:Vote[]
    comments:Comments[]
    subreddit:subreddit[]

}