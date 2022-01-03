<template>
  <div>
    <p>
      <v-card>
        <v-card-actions>
          <back-btn />
          <list-btn path="/admin/lead" />
          <v-spacer />
        </v-card-actions>
      </v-card>
    </p>
    <p>
      <v-card>
        <v-card-title>Create</v-card-title>
        <lead-form :lead="lead" @save="create" />
      </v-card>
    </p>
  </div>
</template>

<script>
import backBtn from '@/components/button/back'
import listBtn from '@/components/button/list'
import leadForm from '@/components/form/property'

export default {
  components: {
    backBtn,
    listBtn,
    leadForm,
  },
  data() {
    return {
      lead: {
        title: '',
        leadId: '',
        completed: false,
      },
    }
  },
  methods: {
    async create() {
      await this.$store.dispatch('leads/create', this.lead)
      this.$router.push('/admin/lead')
    },
  },
}
</script>
