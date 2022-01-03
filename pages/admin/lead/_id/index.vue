<template>
  <div>
    <p>
      <v-card>
        <v-card-actions>
          <back-btn />
          <list-btn path="/admin/lead" />
          <v-spacer />
          <edit-btn :id="lead.id" path="/admin/lead" />
          <delete-btn :id="lead.id" path="lead" />
          <reload-btn :id="lead.id" path="leads" @reloaded="reloaded" />
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
              <v-card-title>Lead ID: {{lead.id}}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              Salutation: <span class="orange--text">{{lead.status}}</span>
            </v-card-subtitle>

            <v-card-subtitle class="pb-0">
              First Name: <span class="black--text">{{lead.amount}}</span>
            </v-card-subtitle>
            
            <v-card-subtitle class="pb-0">
              Last Name: <span class="black--text">{{lead.amount}}</span>
            </v-card-subtitle>
            
            <v-card-subtitle class="pb-0">
              Gender: <span class="black--text">{{lead.type}}</span>
            </v-card-subtitle>
            
            <v-card-subtitle class="pb-0">
              Date of Birth: <span class="black--text">{{lead.amount}}</span>
            </v-card-subtitle>
            
            <v-card-subtitle class="pb-0">
              Nationality: <span class="black--text">{{lead.amount}}</span>
            </v-card-subtitle>
            
            <v-card-subtitle class="pb-0">
              Mobile phone: <span class="black--text">{{lead.amount}}</span>
            </v-card-subtitle>
            
            <v-card-subtitle class="pb-0">
              Email: <span class="black--text">{{lead.amount}}</span>
            </v-card-subtitle>
            
            <v-card-subtitle class="pb-0">
              Identity Card Number: <span class="black--text">{{lead.amount}}</span>
            </v-card-subtitle>
            
            <v-card-subtitle class="pb-0">
              Address: <span class="black--text">{{lead.amount}}</span>
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
      lead: {
        id: -1,
      },
      leadId: this.$route.params.id,
    }
  },
  computed: {
    ...mapGetters('leads', ['getById']),
  },
  async mounted() {
    if (this.$store.state.leads.list.length === 0) {
      await this.fetchList()
    }
    this.lead = this.getById(this.$route.params.id)
  },
  methods: {
    ...mapActions('leads', ['fetchList']),
    reloaded(item) {
      this.lead = item
    },
  },
}
</script>
