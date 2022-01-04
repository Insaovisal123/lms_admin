<template>
  <div>
    <p>
      <v-card>
        <v-card-actions>
          <back-btn />
          <list-btn path="/admin/listing" />
          <v-spacer />
        </v-card-actions>
      </v-card>
    </p>
    <p>
      <v-card>
        <v-card-title>Create</v-card-title>
        <property-form :deal="deal" @save="create" />
      </v-card>
    </p>
  </div>
</template>

<script>
import backBtn from '@/components/button/back'
import listBtn from '@/components/button/list'
import propertyForm from '@/components/form/property'

export default {
  components: {
    backBtn,
    listBtn,
    propertyForm,
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
      await this.$store.dispatch('listings/create', this.deal)
      this.$router.push('/admin/listing')
    },
  },
}
</script>
