<template>
  <div>
    <p>
      <v-card>
        <v-card-actions>
          <back-btn />
          <v-spacer />
          <reload-btn path="commissions" />
        </v-card-actions>
      </v-card>
    </p>
    <p>
      <v-card>
        <v-card-title>
          Commission lists
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
          :items="commissions"
          :items-per-page="10"
          :search="filter.search"
          @click:row="(item) => show(item.id)"
        >
          <template v-slot:[`item.userId`]="{ item }">
            <v-chip @click.stop="user(item.userId)">{{ item.userId }}</v-chip>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <delete-btn :id="item.id" path="commission" :item="item" small />
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
    if (store.state.commissions.list.length === 0) {
      await store.dispatch('commissions/fetchList')
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
        { text: 'Refferer ID', value: 'referrer_id' },
        { text: 'Refferer Commission', value: 'referrer_commission' },
        { text: 'Deal ID', value: 'deal_id' },
        { text: 'Created At', value: 'created_at' },
        { text: 'Updated At', value: 'created_at' },
        { text: 'Actions', value: 'actions' },
      ],
    }
  },
  computed: {
    commissions() {
      return this.$store.getters['commissions/list']
    },
  },
  methods: {
    show(id) {
      this.$router.push(`/admin/commission/${id}`)
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
