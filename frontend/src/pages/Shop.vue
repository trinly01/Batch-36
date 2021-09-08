<template>
  <div>
    <q-toolbar class="bg-secondary text-white">
      <!-- <q-btn flat round dense icon="menu" class="q-mr-sm" /> -->
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
      </q-avatar>

      <q-toolbar-title @click="$router.push('/shop')">VueShop</q-toolbar-title>

      <q-input dark dense standout v-model="$global.search" input-class="text-right" class="q-ml-md">
        <template v-slot:append>
          <q-icon v-if="$global.search === ''" name="search" />
          <q-icon v-else name="clear" class="cursor-pointer" @click="$global.search = ''" />
        </template>
      </q-input>
      <q-btn flat round dense icon="shopping_cart" @click="isCartOpen = !isCartOpen" >
        <q-badge rounded color="red" floating>{{ $global.cart.length }}</q-badge>
      </q-btn>
    </q-toolbar>

    <router-view />

    <q-dialog v-model="isCartOpen">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <!-- <q-header class="bg-primary">
          <q-toolbar>
            <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
            <q-toolbar-title>Header</q-toolbar-title>
            <q-btn flat @click="drawerR = !drawerR" round dense icon="menu" />
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header> -->

        <q-page-container>
          <q-page padding>
            <cart />
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>

  </div>
</template>

<script>

import cart from 'components/cart.vue'
export default {
  components: { cart },
  data: () => ({
    isCartOpen: false
  })
}
</script>
