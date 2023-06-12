import { GraphQLClient } from 'graphql-request'
const hygraph = new GraphQLClient(process.env.HYGRAPH_CONTENT_API)
const getPost = async (params) => {
    const { post } = await hygraph.request(
        `query PostPageQuery($slug: String!) {
            post (where: { slug: $slug }) {
                id
                title
                subtitle
                content {
                    html
                }
                author {
                    id
                    name
                }
                createdAt
                tags
            }
        }`,
        {
            slug: params.slug,
        }
    );
    return post
}

export default getPost