<template>
  <q-card @click="$router.push('/shop/item/'+item.id)" v-ripple class="my-card" style="width: 250px; cursor: pointer;">
    <q-img :src="item.image" fit="contain" style="height: 150px;" />

    <q-card-section>
      <q-btn
        fab
        color="primary"
        icon="place"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%);"
      />

      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">
          {{ item.title }}
        </div>
      </div>

      <q-rating :modelValue="item.rating.rate" :max="5" size="16px" />
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">
        {{ formatCurrency(item.price) }}
      </div>
    </q-card-section>

    <!-- <q-separator />

    <q-card-actions>
      <q-btn flat round icon="event" />
      <q-space />
      <q-btn flat color="primary" icon="shopping_cart">
        Adutukart
      </q-btn>
    </q-card-actions> -->
  </q-card>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    formatCurrency: (number) => new Intl.NumberFormat('tl-PH', { style: 'currency', currency: 'PHP' }).format(number)
  }
}
</script>
