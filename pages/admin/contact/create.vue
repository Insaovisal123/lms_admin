<template>
  <div>
    <p>
      <v-card>
        <v-card-actions>
          <back-btn />
          <list-btn path="/admin/contact" />
          <v-spacer />
        </v-card-actions>
      </v-card>
    </p>
    <p>
      <v-card>
        <v-card-title>Create</v-card-title>
        <contact-form :contact="contact" @save="create" />
      </v-card>
    </p>
  </div>
</template>

<script>
import backBtn from '@/components/button/back'
import listBtn from '@/components/button/list'
import contactForm from '@/components/form/contact'

export default {
  components: {
    backBtn,
    listBtn,
    contactForm,
  },
  data() {
    return {
      contact: {
        title: '',
        contactId: '',
        completed: false,
      },
    }
  },
  methods: {
    async create() {
      await this.$store.dispatch('contacts/create', this.contact)
      this.$router.push('/admin/contact')
    },
  },
}
</script>
