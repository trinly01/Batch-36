<template>
  <div class="row q-pa-md q-gutter-md">
    <item v-for="item in items.filter(i => i.title.toLowerCase().includes($global.search.toLowerCase()))"
    :key="'item' + item.id" :item="item" />
  </div>
</template>

<script>
import Item from 'components/Item.vue'

export default {
  async mounted () {
    // fetch Data
    const result = await this.$shopAPI.get('products')
    console.log('products', result)

    this.items = result.data
  },
  data: () => ({
    items: []
  }),
  components: {
    Item
  }
}
</script>
