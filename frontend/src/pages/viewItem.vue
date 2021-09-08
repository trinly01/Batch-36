<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col">
        <q-img
          :src="item.image"
          style="max-width: 400px; height: 200px;"
          :fit="'contain'"
        />
      </div>
      <div>
        <q-card v-ripple class="my-card" style="width: 250px; cursor: pointer;">

          <q-card-section>
            <!-- <q-btn
              fab
              color="primary"
              icon="place"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%);"
            /> -->

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                {{ item.title }}
              </div>
            </div>

            <!-- <q-rating :modelValue="item.rating.rate" :max="5" size="16px" /> -->
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              {{ $formatCurrency(item.price) }}
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <!-- <q-btn flat round icon="event" /> -->
            <q-space />
            <q-btn flat color="secondary">
              Buy now
            </q-btn>
            <q-btn color="secondary" icon="shopping_cart" @click="item.quantity = item.quantity = 1, item.quantity, $global.cart.push(item)">
              Adutukart
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async mounted () {
    // fetch Data
    await this.fetchItem()
  },
  data: () => ({
    item: {}
  }),
  watch: {
    '$route.params.id': async function () {
      await this.fetchItem()
    }
  },
  methods: {
    async fetchItem () {
      const result = await this.$shopAPI.get('products/' + this.$route.params.id)
      console.log('products', result)
      this.item = result.data
    }
  }
}
</script>
