<template>
  <div>
    <p>
      <v-card>
        <v-card-actions>
          <back-btn />
          <list-btn path="/admin/deal" />
          <v-spacer />
          <delete-btn :id="deal.id" path="deal" />
          <reload-btn :id="deal.id" path="deals" @reloaded="reloaded" />
        </v-card-actions>
      </v-card>
    </p>
    <p>
      <v-card>
        <v-card-title>edit</v-card-title>
        <deal-form :deal="deal" @save="save" />
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
import dealForm from '@/components/form/deal'

export default {
  components: {
    backBtn,
    listBtn,
    deleteBtn,
    reloadBtn,
    dealForm,
  },
  // async fetch({ store }) {
  //   if (store.state.posts.list.length === 0) {
  //     await store.dispatch('posts/fetchList')
  //   }
  // },
  data() {
    return {
      deal: {
        id: -1,
      },
    }
  },
  computed: {
    ...mapGetters({
      getById: 'deals/getById',
    }),
  },
  // mounted() {
  //   this.post = Object.assign({}, this.getById(this.$route.params.id))
  // },
  async mounted() {
    if (this.$store.state.deals.list.length === 0) {
      await this.fetchList()
    }
    this.deal = Object.assign({}, this.getById(this.$route.params.id))
  },
  methods: {
    ...mapActions('deals', ['fetchList']),
    reloaded(item) {
      this.deal = item
    },
    async save() {
      await this.$store.dispatch('deals/update', this.deal)
      this.$router.push(`/admin/deal/${this.deal.id}`)
    },
  },
}
</script>
