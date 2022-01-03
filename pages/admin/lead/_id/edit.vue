<template>
  <div>
    <p>
      <v-card>
        <v-card-actions>
          <back-btn />
          <list-btn path="/admin/lead" />
          <v-spacer />
          <delete-btn :id="lead.id" path="lead" />
          <reload-btn :id="lead.id" path="leads" @reloaded="reloaded" />
        </v-card-actions>
      </v-card>
    </p>
    <p>
      <v-card>
        <v-card-title>edit</v-card-title>
        <lead-form :lead="lead" @save="save" />
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
import leadForm from '@/components/form/lead'

export default {
  components: {
    backBtn,
    listBtn,
    deleteBtn,
    reloadBtn,
    leadForm,
  },
  // async fetch({ store }) {
  //   if (store.state.posts.list.length === 0) {
  //     await store.dispatch('posts/fetchList')
  //   }
  // },
  data() {
    return {
      lead: {
        id: -1,
      },
    }
  },
  computed: {
    ...mapGetters({
      getById: 'leads/getById',
    }),
  },
  // mounted() {
  //   this.post = Object.assign({}, this.getById(this.$route.params.id))
  // },
  async mounted() {
    if (this.$store.state.leads.list.length === 0) {
      await this.fetchList()
    }
    this.lead = Object.assign({}, this.getById(this.$route.params.id))
  },
  methods: {
    ...mapActions('leads', ['fetchList']),
    reloaded(item) {
      this.lead = item
    },
    async save() {
      await this.$store.dispatch('leads/update', this.lead)
      this.$router.push(`/admin/lead/${this.lead.id}`)
    },
  },
}
</script>
