
import { gql } from '@apollo/client'


export const ADD_COMMENT = gql`
  mutation MyMutation($post_id: ID!, $username: String!, $text: String!) {
    insertComment(post_id: $post_id, username: $username, text: $text) {
      created_at
      id
      post_id
      text
      username
    }
  }
`;

export const ADD_VOTE = gql`
  mutation MyMutation($post_id: ID!, $username: String!, $upvote: Boolean!) {
    insertVote(post_id: $post_id, username: $username, upvote: $upvote) {
      created_at
      id
      post_id
      upvote
      username
    }
  }
`

export const ADD_POST = gql`
  mutation MyMutation(
    $body: String!
    $image: String!
    $subreddit_id: ID!
    $tittle: String!  
    $username: String!
  ) {
    insertPost(
      body: $body
      image: $image
      subreddit_id: $subreddit_id
      tittle: $tittle  
      username: $username
    ) {
      body 
      id
      image
      subreddit_id
      tittle
      username
    }
  }
`

export const ADD_SUBREDDIT = gql`
  mutation AddSubreddit($topic: String!, $created_at: DateTime!) {
    insertSubreddit(topic: $topic, created_at: $created_at) {
      id
      topic
      created_at
    }
  }
`

