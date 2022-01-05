<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      permanent
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              {{ loggedInUser.first_name }} {{ loggedInUser.last_name }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ loggedInUser.email }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>

        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          :exact="item.exact"
        >
          <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-action v-bind="attrs" v-on="on">
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
            </template>
            <span>{{ item.title }}</span>
          </v-tooltip>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <!-- <v-btn block>
            Logout
          </v-btn> -->
          <v-btn
              block
              @click="logout"
            >
              Logout
            </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app
      color="blue darken-3"
      dark
    >
    <v-img
    class="mx-2"
    src="https://staging.z1mobile.com/assets/Z1app.png"
    max-height="40"
    max-width="40"
    contain
  ></v-img>

  <v-toolbar-title class="ml-2">
    LMS
  </v-toolbar-title>
      <v-app-bar-nav-icon
        @click.stop="
          if (drawer) {
            drawer = !miniVariant ? !miniVariant : miniVariant
            miniVariant = !miniVariant
          } else {
            drawer = !drawer
            miniVariant = false
          }
        "
      />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" inset app>
      <span>&copy; {{ new Date().getFullYear() }} {{ author }}</span>
      <v-spacer />
      <span>v{{ version }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  middleware: 'authenticated',
  data() {
    return {
      title: require('../package.json').appName,
      version: require('../package.json').version,
      author: require('../package.json').author,
      clipped: true,
      drawer: null,
      fixed: false,
      miniVariant: true,
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: "Dashboard",
          to: '/admin',
          exact: true,
        },
        {
          icon: 'mdi-account-arrow-right',
          title: "Contact",
          to: '/admin/contact',
          exact: false,
        },
        {
          icon: 'mdi-office-building-marker',
          title: "Property",
          to: '/admin/listing',
          exact: false,
        },
        {
          icon: 'mdi-handshake',
          title: "Loan Contract",
          to: '/admin/loancontract',
          exact: false,
        },
        {
          icon: 'mdi-account',
          title: "User",
          to: '/admin/user',
          exact: false,
        }
      ],
    }
  },
   computed: {
    ...mapGetters(['loggedInUser', 'isAuthenticated'])
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push(`/auth/login`)
    }
  }
}
</script>
