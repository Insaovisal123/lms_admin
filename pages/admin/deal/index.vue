<template>
  <div>
    <p>
      <v-card>
        <v-card-actions>
          <back-btn />
          <v-spacer />
          <create-btn path="/admin/deal" />
          <reload-btn path="deals" />
        </v-card-actions>
      </v-card>
    </p>
    <p>
      <v-card>
        <v-card-title>
          Loan Contract lists
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
          :items="deals"
          :items-per-page="10"
          :search="filter.search"
          @click:row="(item) => show(item.id)"
        >
          <template v-slot:[`item.userId`]="{ item }">
            <v-chip @click.stop="user(item.userId)">{{ item.userId }}</v-chip>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <edit-btn :id="item.id" path="deal" small />
            <delete-btn :id="item.id" path="deal" :item="item" small />
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
    if (store.state.deals.list.length === 0) {
      await store.dispatch('deals/fetchList')
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
        { text: 'Property ID', value: 'property_id' },
        { text: 'Financial Institution', value: 'financial_institution' },
        { text: 'Borrower', value: 'borrower_id' },
        { text: 'Loan Purpose', value: 'loan_purpose' },
        { text: 'Loan Type', value: 'loan_type' },
        { text: 'Request Amount', value: 'request_amount' },
        { text: 'Approved Amount', value: 'approved_amount' },
        { text: 'Disbursement Date', value: 'disbursement_date' },
        { text: 'First Collection Date', value: 'first_collection_date' },
        { text: 'Maturity Date', value: 'maturity_date' },
        { text: 'Actions', value: 'actions' },
      ],
    }
  },
  computed: {
    deals() {
      return this.$store.getters['deals/list']
    },
  },
  methods: {
    show(id) {
      this.$router.push(`/admin/deal/${id}`)
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
