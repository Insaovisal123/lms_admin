<template>
  <div>
    <p>
      <v-card>
        <v-card-actions>
          <back-btn />
          <list-btn path="/admin/deal" />
          <v-spacer />
          <edit-btn :id="deal.id" path="/admin/deal" />
          <delete-btn :id="deal.id" path="deal" />
          <reload-btn :id="deal.id" path="deals" @reloaded="reloaded" />
        </v-card-actions>
      </v-card>
    </p>
    <p>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-card
            class="mx-auto pb-2"
            max-width="400"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>deal ID: {{deal.id}}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              Status: <span class="orange--text">{{deal.status}}</span>
            </v-card-subtitle>
            <v-card-subtitle class="pb-0">
              Stage: <span class="black--text">{{deal.stage}}</span>
            </v-card-subtitle>
            <v-card-subtitle class="pb-0">
              Transaction Type: <span class="black--text">{{deal.transaction_type}}</span>
            </v-card-subtitle>
            <v-card-subtitle class="pb-0">
              Amount: <span class="black--text">{{deal.amount}}</span>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import backBtn from '@/components/button/back'
import listBtn from '@/components/button/list'
import editBtn from '@/components/button/edit'
import deleteBtn from '@/components/button/delete'
import reloadBtn from '@/components/button/reload'

export default {
  components: {
    backBtn,
    listBtn,
    editBtn,
    deleteBtn,
    reloadBtn,
  },
  data() {
    return {
      deal: {
        id: -1,
      },
      dealId: this.$route.params.id,
    }
  },
  computed: {
    ...mapGetters('deals', ['getById']),
  },
  async mounted() {
    if (this.$store.state.deals.list.length === 0) {
      await this.fetchList()
    }
    this.deal = this.getById(this.$route.params.id)
  },
  methods: {
    ...mapActions('deals', ['fetchList']),
    reloaded(item) {
      this.deal = item
    },
  },
}
</script>
