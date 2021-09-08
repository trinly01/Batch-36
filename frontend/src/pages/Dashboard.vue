<template>
  <div>
    <q-btn icon="print" @click="print"/>
    <pie-chart :donut="true" :data="dd"></pie-chart>
    <bar-chart :data="dd"></bar-chart>

    <scatter-chart :data="[[174.0, 80.0], [176.5, 82.3]]" xtitle="Size" ytitle="Population"></scatter-chart>

  </div>
</template>

<script>
export default {
  async mounted () {
    const items = (await this.$shopAPI.get('products')).data
    const categories = (await this.$shopAPI.get('products/categories')).data
    console.log(categories, categories)
    this.dd = categories.map(category => {
      console.log(category, items.filter(i => i.category === category).length)
      return [
        category,
        items.filter(i => i.category === category).length
      ]
    })
    console.log(this.dd)
  },
  data () {
    return {
      dd: []
    }
  },
  methods: {
    print () {
      const dd = {
        content: [
          {
            table: {
              body: [
                ['category', 'Count'],
                ...this.dd
              ]
            }
          }
        ]
      }
      this.$pdfMake.createPdf(dd).print()
    }
  }
}
</script>
