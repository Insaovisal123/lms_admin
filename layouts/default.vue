<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
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
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
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
export default {
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
          to: '/admin/lead',
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
          to: '/admin/deal',
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
}
</script>
