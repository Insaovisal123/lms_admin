<template>
  <div>
    <p>
      <v-card>
        <v-card-actions>
          <back-btn />
          <list-btn path="/admin/contact" />
          <v-spacer />
          <delete-btn :id="contact.id" path="contact" />
          <!-- <reload-btn :id="contact.id" path="contacts" @reloaded="reloaded" /> -->
        </v-card-actions>
      </v-card>
    </p>
    <p>
      <v-card>
        <v-card-title>edit</v-card-title>
        <contact-form :contact="contact" @save="save" />
      </v-card>
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import backBtn from '@/components/button/back'
import listBtn from '@/components/button/list'
import deleteBtn from '@/components/button/delete'
import reloadBtn from '@/components/button/reload'
import contactForm from '@/components/form/contact'

export default {
  components: {
    backBtn,
    listBtn,
    deleteBtn,
    reloadBtn,
    contactForm,
  },
  // async fetch({ store }) {
  //   if (store.state.posts.list.length === 0) {
  //     await store.dispatch('posts/fetchList')
  //   }
  // },
  data() {
    return {
      contact: {
        id: -1,
      },
    }
  },
  computed: {
    ...mapGetters({
      getById: 'contacts/getById',
    }),
  },
  // mounted() {
  //   this.post = Object.assign({}, this.getById(this.$route.params.id))
  // },
  async mounted() {
    if (this.$store.state.contacts.list.length === 0) {
      await this.fetchList()
    }
    this.contact = Object.assign({}, this.getById(this.$route.params.id))
  },
  methods: {
    ...mapActions('contacts', ['fetchList']),
    reloaded(item) {
      this.contact = item
    },
    async save() {
      await this.$store.dispatch('contacts/update', this.contact)
      this.$router.push(`/admin/contact/${this.contact.id}`)
    },
  },
}
</script>
