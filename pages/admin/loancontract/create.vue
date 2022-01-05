<template>
  <div>
    <p>
      <v-card>
        <v-card-actions>
          <back-btn />
          <list-btn path="/admin/loancontract" />
          <v-spacer />
        </v-card-actions>
      </v-card>
    </p>
    <p>
      <v-card>
        <v-card-title>Create</v-card-title>
        <loancontract-form :loancontract="loancontract" @save="create" />
      </v-card>
    </p>
  </div>
</template>

<script>
import backBtn from '@/components/button/back'
import listBtn from '@/components/button/list'
import loancontractForm from '@/components/form/loancontract'

export default {
  components: {
    backBtn,
    listBtn,
    loancontractForm,
  },
  data() {
    return {
      loancontract: {
        title: '',
        loancontractId: '',
        completed: false,
      },
    }
  },
  methods: {
    async create() {
      await this.$store.dispatch('loancontracts/create', this.loancontract)
      this.$router.push('/admin/loancontract')
    },
  },
}
</script>
