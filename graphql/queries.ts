import { gql } from '@apollo/client'

export const GET_ALL_POSTS = gql`
  query myQuery {
    getPostList {
      id
      body
      image
      title
      created_at
      subreddit_id
      username
      comments {
        id
        text
        post_id
        username
        created_at
      }
      subreddit {
        id
        topic
        created_at
      }
      votes {
        id
        upvote
        post_id
        username
        created_at
      }
    }
  }
`

export const GET_ALL_POSTS_BY_TOPIC = gql`
  query myQuery($topic: String!) {
    getPostListByTopic(topic: $topic) {
      id
      body
      image
      title
      username
      created_at
      subreddit_id
      comments {
        id
        text
        post_id
        username
        created_at
      }
      subreddit {
        id
        topic
        created_at
      }
      votes {
        id
        upvote
        post_id
        username
        created_at
      }
    }
  }
`

export const GET_POST_BY_POST_ID = gql`
  query myQuery($post_id: ID!) {
    getPostListByPostId(post_id: $post_id) {
      id
      body
      image
      title
      created_at
      subreddit_id
      username
      comments {
        id
        text
        post_id
        username
        created_at
      }
      subreddit {
        id
        topic
        created_at
      }
      votes {
        id
        upvote
        post_id
        username
        created_at
      }
    }
  }
`

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query myQuery($topic: String!) {
    getSubredditListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`

export const GET_ALL_VOTES_BY_POST_ID = gql`
  query myQuery($post_id: ID!) {
    getVotesByPostId(post_id: $post_id) {
      created_at
      id
      post_id
      upvote
      username
    }
  }
`

export const GET_SUBREDDITS_WITH_LIMIT = gql`
  query myQuery($limit: Int!) {
    getSubredditListLimit(limit: $limit) {
      id
      topic
      created_at
    }
  }
`
