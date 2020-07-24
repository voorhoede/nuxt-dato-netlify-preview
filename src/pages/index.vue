<template>
  <div>
    <h1>{{ page.title }}</h1>
    <ul>
      <li v-for="link in links" :key="link.slug">
        <nuxt-link :to="`/${link.slug}`">
          {{ link.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import query from './index.data.graphql'

export default {
  asyncData({ $graphqlRequest }) {
    return $graphqlRequest({ query })
  }
}
</script>
