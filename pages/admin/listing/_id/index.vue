<template>
  <div>
    <p>
      <v-card>
        <v-card-actions>
          <back-btn />
          <list-btn path="/admin/listing" />
          <v-spacer />
          <delete-btn :id="listing.id" path="listing" />
          <!-- <reload-btn :id="listing.id" path="listings" @reloaded="reloaded" /> -->
        </v-card-actions>
      </v-card>
    </p>
    <p>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-card
            class="mx-auto pb-2"
            max-width="500"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://picsum.photos/350/165?random"
            >
              <v-card-title>Listing ID: {{listing.id}}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              Property ID: <span class="black--text">{{listing.property_owner}}</span>
            </v-card-subtitle>

            <v-card-subtitle class="pb-0">
              Property Type: <span class="black--text">{{listing.type}}</span>
            </v-card-subtitle>

            <v-card-subtitle  v-if='listing.is_sale == "True"' class="pb-0"> 
              Sale: <span class="black--text"> Yes </span>
            </v-card-subtitle>
            <v-card-subtitle  v-else class="pb-0"> 
              Sale: <span class="black--text"> No </span>
            </v-card-subtitle>

            <v-card-subtitle v-if='listing.is_rent == "True"' class="pb-0">
              Rent: <span class="black--text"> Yes  </span>
            </v-card-subtitle>
             <v-card-subtitle v-else class="pb-0">
              Rent: <span class="black--text"> No  </span>
            </v-card-subtitle>

            <v-card-subtitle class="pb-0">
              Sale Pirce <span class="black--text">${{listing.sale_price}}</span>
            </v-card-subtitle>

            <v-card-subtitle class="pb-0">
              Rent Price: <span class="black--text">${{listing.rent_price}}</span>
            </v-card-subtitle>

            <v-card-subtitle class="pb-0">
              Width <span class="black--text">{{listing.width}}m²</span>
            </v-card-subtitle>

            <v-card-subtitle class="pb-0">
              Length: <span class="black--text">{{listing.length}}m²</span>
            </v-card-subtitle>

            <v-card-subtitle class="pb-0">
              Area: <span class="black--text">{{listing.area}}</span>
            </v-card-subtitle>

            <v-card-subtitle class="pb-0">
              Address: <span class="black--text">{{listing.address}}</span>
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
    console.log(this.listing)
  },
  methods: {
    ...mapActions('listings', ['fetchList']),
    reloaded(item) {
      this.listing = item
    },
  },
}
</script>
