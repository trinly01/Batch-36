<template>
  <q-dialog :modelValue="isOpen">
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
          <q-list>
            <q-item v-for="item in $global.cart" :key="'cart'+item.id">
              <q-item-section top style="width: 150px;">
                <q-img fit="contain" style="max-width: 150px; height: 64px;" :src="item.image" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{item.title}}</q-item-label>
                <q-item-label caption class="row q-gutter-md">
                  <q-btn size="xs" round icon="remove" @click="item.quantity--" />
                  <div>{{item.quantity}}</div>
                  <q-btn size="xs" round icon="add" @click="item.quantity++" />
                </q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-btn size="sm" color="negative" round icon="delete" @click="$global.cart = $global.cart.filter(i => i.id !== item.id )" />
              </q-item-section>
            </q-item>
          </q-list>
          {{ total }}
        </q-page>
      </q-page-container>
    </q-layout>
  </q-dialog>
</template>

<script>
export default {
  props: ['isOpen'],
  computed: {
    total () {
      return this.$sumBy(this.$global.cart, i => i.price * i.quantity)
    }
  }
}
</script>
