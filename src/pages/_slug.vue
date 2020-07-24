<template>
  <div>
    <nuxt-link to="/">← home</nuxt-link>
    <h1>{{ page.title }}</h1>
    <div v-html="page.body" />
  </div>
</template>

<script>
import query from './_slug.data.graphql'

export default {
  async asyncData({ error, params, $graphqlRequest }) {
    const data = await $graphqlRequest({ query, variables: params })
    if (!data.page) {
      return error({
        statusCode: 404,
        message: `Page ("${params.slug}") not found`
      })
    }
    return data
  }
}
</script>
