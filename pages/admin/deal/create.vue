<template>
  <div>
    <p>
      <v-card>
        <v-card-actions>
          <back-btn />
          <list-btn path="/admin/deal" />
          <v-spacer />
        </v-card-actions>
      </v-card>
    </p>
    <p>
      <v-card>
        <v-card-title>Create</v-card-title>
        <deal-form :deal="deal" @save="create" />
      </v-card>
    </p>
  </div>
</template>

<script>
import backBtn from '@/components/button/back'
import listBtn from '@/components/button/list'
import dealForm from '@/components/form/deal'

export default {
  components: {
    backBtn,
    listBtn,
    dealForm,
  },
  data() {
    return {
      deal: {
        title: '',
        dealId: '',
        completed: false,
      },
    }
  },
  methods: {
    async create() {
      await this.$store.dispatch('deals/create', this.deal)
      this.$router.push('/admin/deal')
    },
  },
}
</script>
