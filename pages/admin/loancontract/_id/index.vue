<template>
  <div>
    <p>
      <v-card>
        <v-card-actions>
          <back-btn />
          <list-btn path="/admin/loancontract" />
          <v-spacer />
          <edit-btn :id="loancontract.id" path="/admin/loancontract" />
          <delete-btn :id="loancontract.id" path="loancontract" />
          <!-- <reload-btn :id="loancontract.id" path="loancontracts" @reloaded="reloaded" /> -->
        </v-card-actions>
      </v-card>
    </p>
    <p>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-card
            class="mx-auto pb-2"
            max-width="500"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://picsum.photos/350/165?random"
            >
              <v-card-title>Loan Contract ID: {{loancontract.id}}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              Property: <span class="black--text">{{loancontract.property_id}}</span>
            </v-card-subtitle>

            <v-card-subtitle class="pb-0">
              Financial Institution: <span class="black--text">{{loancontract.financial_institution}}</span>
            </v-card-subtitle>

            <v-card-subtitle class="pb-0">
              Borrower: <span class="black--text">{{loancontract.borrower_id}}</span>
            </v-card-subtitle>

            <v-card-subtitle class="pb-0">
              Loan Purpose: <span class="black--text">{{loancontract.loan_purpose}}</span>
            </v-card-subtitle>

             <v-card-subtitle class="pb-0">
              Loan Type: <span class="black--text">{{loancontract.loan_type}}</span>
            </v-card-subtitle>

             <v-card-subtitle class="pb-0">
              Request Amount: <span class="black--text">${{loancontract.request_amount}}</span>
            </v-card-subtitle>

            <v-card-subtitle class="pb-0">
              Approved Amount: <span class="black--text">${{loancontract.approved_amount}}</span>
            </v-card-subtitle>

            <v-card-subtitle class="pb-0">
              Disbursement Date: <span class="black--text">{{loancontract.disbursement_date}}</span>
            </v-card-subtitle>

            <v-card-subtitle class="pb-0">
              First Collection Date: <span class="black--text">{{loancontract.first_collection_date}}</span>
            </v-card-subtitle>

            <v-card-subtitle class="pb-0">
              Maturity Date: <span class="black--text">{{loancontract.maturity_date}}</span>
            </v-card-subtitle>

            <v-card-subtitle class="pb-0">
              Status: <span class="black--text">{{loancontract.status}}</span>
            </v-card-subtitle>

          </v-card>
        </v-col>
      </v-row>
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import backBtn from '@/components/button/back'
import listBtn from '@/components/button/list'
import editBtn from '@/components/button/edit'
import deleteBtn from '@/components/button/delete'
import reloadBtn from '@/components/button/reload'

export default {
  components: {
    backBtn,
    listBtn,
    editBtn,
    deleteBtn,
    reloadBtn,
  },
  data() {
    return {
      loancontract: {
        id: -1,
      },
      loancontractId: this.$route.params.id,
    }
  },
  computed: {
    ...mapGetters('loancontracts', ['getById']),
  },
  async mounted() {
    if (this.$store.state.loancontracts.list.length === 0) {
      await this.fetchList()
    }
    this.loancontract = this.getById(this.$route.params.id)
  },
  methods: {
    ...mapActions('loancontracts', ['fetchList']),
    reloaded(item) {
      this.loancontract = item
    },
  },
}
</script>
