<template>
  <div>
    <p>
      <v-card>
        <v-card-actions>
          <back-btn />
          <v-spacer />
          <create-btn path="/admin/lead" />
          <reload-btn path="leads" />
        </v-card-actions>
      </v-card>
    </p>
    <p>
      <v-card>
        <v-card-title>
          Contact lists
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
          :items="leads"
          :items-per-page="10"
          :search="filter.search"
          @click:row="(item) => show(item.id)"
        >
          <template v-slot:[`item.userId`]="{ item }">
            <v-chip @click.stop="user(item.userId)">{{ item.userId }}</v-chip>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <edit-btn :id="item.id" path="lead" small />
            <delete-btn :id="item.id" path="lead" :item="item" small />
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
import createBtn from '@/components/button/create'
import reloadBtn from '@/components/button/reload'
import editBtn from '@/components/button/edit'
import deleteBtn from '@/components/button/delete'
import filterBtn from '@/components/button/filter'

export default {
  components: {
    deleteConfirm,
    backBtn,
    createBtn,
    reloadBtn,
    editBtn,
    deleteBtn,
    filterBtn,
  },
  async fetch({ store }) {
    if (store.state.leads.list.length === 0) {
      await store.dispatch('leads/fetchList')
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
        { text: 'Salutation', value: 'salutation' },
        { text: 'First Name', value: 'first_name' },
        { text: 'Last Name', value: 'last_name' },
        { text: 'Gender', value: 'gender' },
        { text: 'Date of Birth', value: 'date_of_birth' },
        { text: 'Nationality', value: 'nationality' },
        { text: 'Identity Card Number', value: 'identity_card_number' },
        { text: 'Address', value: 'address' },
        { text: 'Actions', value: 'actions' },
      ],
    }
  },
  computed: {
    leads() {
      return this.$store.getters['leads/list']
    },
  },
  methods: {
    show(id) {
      this.$router.push(`/admin/lead/${id}`)
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
