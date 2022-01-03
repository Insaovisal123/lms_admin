<template>
  <div>
    <p>
      <v-card>
        <v-card-actions>
          <back-btn />
          <list-btn path="/admin/listing" />
          <v-spacer />
          <delete-btn :id="listing.id" path="listing" />
          <reload-btn :id="listing.id" path="listings" @reloaded="reloaded" />
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
              <v-card-title>Listing ID: {{listing.id}}</v-card-title>
            </v-img>
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
      listing: {
        id: -1,
      },
      listingId: this.$route.params.id,
    }
  },
  computed: {
    ...mapGetters('listings', ['getById']),
  },
  async mounted() {
    if (this.$store.state.listings.list.length === 0) {
      await this.fetchList()
    }
    this.listing = this.getById(this.$route.params.id)
  },
  methods: {
    ...mapActions('listings', ['fetchList']),
    reloaded(item) {
      this.listing = item
    },
  },
}
</script>
