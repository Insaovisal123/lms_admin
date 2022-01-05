<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="6" lg="3">
        <material-stats-card
            color="info"
            icon="mdi-account-arrow-right"
            title="Contacts"
            value="245"
            sub-icon="mdi-currency-usd"
            sub-text="123,000"
          />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <material-stats-card
            color="green"
            icon="mdi-handshake"
            title="Loan Contracts"
            value="125"
            sub-icon="mdi-currency-usd"
            sub-text="45,000"
          />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <material-stats-card
            color="red"
            icon="mdi-office-building-marker"
            title="Properties"
            value="97"
            sub-icon="mdi-currency-usd"
            sub-text="175,000"
          />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <material-stats-card
            color="orange"
            icon="mdi-account"
            title="Users"
            value="40"
            sub-icon="mdi-account"
            sub-text="12 Public User"
          />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  computed: {
    ...mapGetters(['loggedInUser'])
  },
}
</script>