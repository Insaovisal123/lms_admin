<template>
  <div>
    <p>
      <v-card>
        <v-card-actions>
          <back-btn />
          <list-btn path="/admin/contact" />
          <v-spacer />
          <edit-btn :id="contact.id" path="/admin/contact" />
          <delete-btn :id="contact.id" path="contact" />
          <reload-btn :id="contact.id" path="contacts" @reloaded="reloaded" />
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
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Contact ID: {{contact.id}}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              Salutation: <span class="black--text">{{contact.salutation}}</span>
            </v-card-subtitle>

            <v-card-subtitle class="pb-0">
              First Name: <span class="black--text">{{contact.first_name}}</span>
            </v-card-subtitle>
            
            <v-card-subtitle class="pb-0">
              Last Name: <span class="black--text">{{contact.last_name}}</span>
            </v-card-subtitle>
            
            <v-card-subtitle class="pb-0">
              Gender: <span class="black--text">{{contact.gender}}</span>
            </v-card-subtitle>
            
            <v-card-subtitle class="pb-0">
              Date of Birth: <span class="black--text">{{contact.date_of_birth}}</span>
            </v-card-subtitle>
            
            <v-card-subtitle class="pb-0">
              Nationality: <span class="black--text">{{contact.nationality}}</span>
            </v-card-subtitle>
            
            <v-card-subtitle class="pb-0">
              Mobile phone: <span class="black--text">{{contact.mobile_phone}}</span>
            </v-card-subtitle>
            
            <v-card-subtitle class="pb-0">
              Email: <span class="black--text">{{contact.email}}</span>
            </v-card-subtitle>
            
            <v-card-subtitle class="pb-0">
              Identity Card Number: <span class="black--text">{{contact.identity_card_number}}</span>
            </v-card-subtitle>
            
            <v-card-subtitle class="pb-0">
              Address: <span class="black--text">{{contact.address}}</span>
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
      contact: {
        id: -1,
      },
      contactId: this.$route.params.id,
    }
  },
  computed: {
    ...mapGetters('contacts', ['getById']),
  },
  async mounted() {
    if (this.$store.state.contacts.list.length === 0) {
      await this.fetchList()
    }
    this.contact = this.getById(this.$route.params.id)
  },
  methods: {
    ...mapActions('contacts', ['fetchList']),
    reloaded(item) {
      this.contact = item
    },
  },
}
</script>
