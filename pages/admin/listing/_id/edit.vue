<template>
  <div>
    <p>
      <v-card>
        <v-card-actions>
          <back-btn />
          <list-btn path="/admin/listing" />
          <v-spacer />
          <delete-btn :id="deal.id" path="listing" />
          <!-- <reload-btn :id="deal.id" path="listings" @reloaded="reloaded" /> -->
        </v-card-actions>
      </v-card>
    </p>
    <p>
      <v-card>
        <v-card-title>edit</v-card-title>
        <property-form :deal="deal" @save="save" />
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
import propertyForm from '@/components/form/property'

export default {
  components: {
    backBtn,
    listBtn,
    deleteBtn,
    reloadBtn,
    propertyForm,
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
      getById: 'listings/getById',
    }),
  },
  // mounted() {
  //   this.post = Object.assign({}, this.getById(this.$route.params.id))
  // },
  async mounted() {
    if (this.$store.state.listings.list.length === 0) {
      await this.fetchList()
    }
    this.deal = Object.assign({}, this.getById(this.$route.params.id))
  },
  methods: {
    ...mapActions('listings', ['fetchList']),
    reloaded(item) {
      this.deal = item
    },
    async save() {
      await this.$store.dispatch('listings/update', this.deal)
      this.$router.push(`/admin/listing`)
    },
  },
}
</script>
