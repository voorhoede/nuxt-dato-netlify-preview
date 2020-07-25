import fetch from 'isomorphic-unfetch'

export default ({ $config }, inject) => {
  const endpoint = $config.isPreview
    ? 'https://graphql.datocms.com/preview'
    : 'https://graphql.datocms.com/'

  const graphqlRequest = ({ query, variables }) => {
    return fetch(endpoint, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': $config.datoApiToken,
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

  inject('graphqlRequest', graphqlRequest)
}
