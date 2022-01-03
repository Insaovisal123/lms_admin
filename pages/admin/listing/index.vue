<template>
  <div>
    <p>
      <v-card>
        <v-card-actions>
          <back-btn />
          <v-spacer />
          <reload-btn path="listings" />
        </v-card-actions>
      </v-card>
    </p>
    <p>
      <v-card>
        <v-card-title>
          Property lists
          <v-spacer />
          <filter-btn @click="filter.visible = !filter.visible" />
        </v-card-title>
        <v-container v-if="filter.visible === true">
          <v-row>
            <v-spacer />
            <v-col>
              <v-text-field
                v-model="filter.search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-data-table
          class="table-cursor"
          :headers="headers"
          :items="listings"
          :items-per-page="10"
          :search="filter.search"
          @click:row="(item) => show(item.id)"
        >
          <template v-slot:[`item.userId`]="{ item }">
            <v-chip @click.stop="user(item.userId)">{{ item.userId }}</v-chip>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <delete-btn :id="item.id" path="listing" :item="item" small />
          </template>
        </v-data-table>
      </v-card>
    </p>
    <delete-confirm ref="deleteConfirm"></delete-confirm>
  </div>
</template>

<script>
import deleteConfirm from '@/components/deleteConfirm.vue'
import backBtn from '@/components/button/back'
import reloadBtn from '@/components/button/reload'
import deleteBtn from '@/components/button/delete'
import filterBtn from '@/components/button/filter'

export default {
  components: {
    deleteConfirm,
    backBtn,
    reloadBtn,
    deleteBtn,
    filterBtn,
  },
  async fetch({ store }) {
    if (store.state.listings.list.length === 0) {
      await store.dispatch('listings/fetchList')
    }
  },
  data() {
    return {
      filter: {
        visible: false,
        search: '',
      },
      headers: [
        {
          text: 'ID',
          align: 'left',
          value: 'id',
        },
        { text: 'Property Owner', value: 'property_owner' },
        { text: 'Type', value: 'type' },
        { text: 'Sale', value: 'is_sale' },
        { text: 'Rent', value: 'is_rent' },
        { text: 'Sale Price', value: 'sale_price' },
        { text: 'Rent Price', value: 'rent_price' },
        { text: 'Width', value: 'width' },
        { text: 'Length', value: 'length' },
         { text: 'Address', value: 'address' },
        { text: 'Actions', value: 'actions' },
      ],
    }
  },
  computed: {
    listings() {
      return this.$store.getters['listings/list']
    },
  },
  methods: {
    show(id) {
      this.$router.push(`/admin/listing/${id}`)
    },
    user(id) {
      this.$router.push(`admin/users/${id}`)
    },
  },
}
</script>

<style>
.table-cursor tbody tr:hover {
  cursor: pointer;
}
</style>
