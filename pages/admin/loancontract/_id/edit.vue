<template>
  <div>
    <p>
      <v-card>
        <v-card-actions>
          <back-btn />
          <list-btn path="/admin/loancontract" />
          <v-spacer />
          <delete-btn :id="loancontract.id" path="loancontract" />
          <!-- <reload-btn :id="loancontract.id" path="loancontracts" @reloaded="reloaded" /> -->
        </v-card-actions>
      </v-card>
    </p>
    <p>
      <v-card>
        <v-card-title>edit</v-card-title>
        <loancontract-form :loancontract="loancontract" @save="save" />
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
import loancontractForm from '@/components/form/loancontract'

export default {
  components: {
    backBtn,
    listBtn,
    deleteBtn,
    reloadBtn,
    loancontractForm,
  },
  // async fetch({ store }) {
  //   if (store.state.posts.list.length === 0) {
  //     await store.dispatch('posts/fetchList')
  //   }
  // },
  data() {
    return {
      loancontract: {
        id: -1,
      },
    }
  },
  computed: {
    ...mapGetters({
      getById: 'loancontracts/getById',
    }),
  },
  // mounted() {
  //   this.post = Object.assign({}, this.getById(this.$route.params.id))
  // },
  async mounted() {
    if (this.$store.state.loancontracts.list.length === 0) {
      await this.fetchList()
    }
    this.loancontract = Object.assign({}, this.getById(this.$route.params.id))
  },
  methods: {
    ...mapActions('loancontracts', ['fetchList']),
    reloaded(item) {
      this.loancontract = item
    },
    async save() {
      await this.$store.dispatch('loancontracts/update', this.loancontract)
      this.$router.push(`/admin/loancontract`)
    },
  },
}
</script>
