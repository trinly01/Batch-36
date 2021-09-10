<template>
  <div class="row q-pa-md q-gutter-md">
    <item v-for="item in items.filter(i => i.title.toLowerCase().includes($global.search.toLowerCase()))"
    :key="'item' + item._id" :item="item" />
  </div>
</template>

<script>
import Item from 'components/Item.vue'

export default {
  beforeUnmount () {
    this.itemsService.destroy()
  },
  async mounted () {
    // fetch Data
    // const result = await this.$shopAPI.get('products')
    // console.log('products', result)
    // this.items = result.data

    this.itemsService = this.$dbCon.wingsService('products').init()

    this.itemsService.on('dataChange', items => {
      this.items = items
    })

    this.$dbCon.on('login', () => {
      console.log('login ulit')
      this.itemsService.reset()
      this.itemsService.init()
    })

    this.$dbCon.on('logout', () => {
      this.items = []
    })
  },
  data: () => ({
    items: []
  }),
  components: {
    Item
  }
}
</script>
