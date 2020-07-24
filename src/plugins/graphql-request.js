import fetch from 'isomorphic-unfetch'

const endpoint = process.env.isPreview
  ? 'https://graphql.datocms.com/preview'
  : 'https://graphql.datocms.com/'

const graphqlRequest = ({ query, variables }) => {
  return fetch(endpoint, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': process.env.DATO_API_TOKEN,
    },
    body: JSON.stringify({
      query,
      variables
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.errors) throw Error(JSON.stringify(response, null, 4))
      return response.data
    })
};

export default (context, inject) => {
  inject('graphqlRequest', graphqlRequest)
}
