import {GraphQLClient} from 'graphql-request'
const hygraph = new GraphQLClient(process.env.HYGRAPH_CONTENT_API)
const getAuthor = async () => {
  const { authors } = await hygraph.request(
    `{
      authors {
        id
        name
        biography
        createdAt
      }
    }`
  )
  return authors
}

export default getAuthor