<template>
  <div>
    <q-toolbar class="bg-secondary text-white">
      <!-- <q-btn flat round dense icon="menu" class="q-mr-sm" /> -->
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
      </q-avatar>

      <q-toolbar-title @click="$router.push('/shop')">VueShop</q-toolbar-title>

      <div class="row q-gutter-md">
        <q-input dark dense standout v-model="$global.search" input-class="text-right" class="q-ml-md">
          <template v-slot:append>
            <q-icon v-if="$global.search === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="$global.search = ''" />
          </template>
        </q-input>
        <q-btn v-if="$global.user"
          @click="$dbCon.logout()"
          round flat icon="person"
        />
        <q-btn v-else round flat icon="login"
          @click="$dbCon.authenticate({
            email: 'pogi@mail.com',
            password: 'Trin',
            strategy: 'local'
          })"
        />
        <q-btn flat round dense icon="shopping_cart" @click="isCartOpen = !isCartOpen" >
          <q-badge rounded color="red" floating>{{ $global.cart.length }}</q-badge>
        </q-btn>
      </div>
    </q-toolbar>

    <router-view />

    <cart :isOpen="isCartOpen" />

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
