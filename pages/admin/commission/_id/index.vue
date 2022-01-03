<template>
  <div>
    <p>
      <v-card>
        <v-card-actions>
          <back-btn />
          <list-btn path="/admin/commission" />
          <v-spacer />
          <delete-btn :id="commission.id" path="commission" />
          <reload-btn :id="commission.id" path="commissions" @reloaded="reloaded" />
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
              <v-card-title>Commission ID: {{commission.id}}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              Commission: <span class="orange--text">{{commission.reffer_commission}}</span>
            </v-card-subtitle>
            <v-card-subtitle class="pb-0">
              Refferer ID: <span class="black--text">{{commission.reffer_id}}</span>
            </v-card-subtitle>
            <v-card-subtitle class="pb-0">
              Deal ID: <span class="black--text">{{commission.deal_id}}</span>
            </v-card-subtitle>
            <v-card-subtitle class="pb-0">
              Description: <span class="black--text">{{commission.description}}</span>
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
import deleteBtn from '@/components/button/delete'
import reloadBtn from '@/components/button/reload'

export default {
  components: {
    backBtn,
    listBtn,
    deleteBtn,
    reloadBtn,
  },
  data() {
    return {
      commission: {
        id: -1,
      },
      commissionId: this.$route.params.id,
    }
  },
  computed: {
    ...mapGetters('commissions', ['getById']),
  },
  async mounted() {
    if (this.$store.state.commissions.list.length === 0) {
      await this.fetchList()
    }
    this.commission = this.getById(this.$route.params.id)
  },
  methods: {
    ...mapActions('commissions', ['fetchList']),
    reloaded(item) {
      this.commission = item
    },
  },
}
</script>
