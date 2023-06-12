import {GraphQLClient} from 'graphql-request'
const hygraph = new GraphQLClient(process.env.HYGRAPH_CONTENT_API)
const getPosts = async () => {
  const { posts } = await hygraph.request(
    `{
        posts {
          id
          title
          subtitle
          slug
          content{
            html
          }
          author {
            id
            name
            biography
          }
          createdAt
        }
      }`
  )
  return posts
}

export default getPosts