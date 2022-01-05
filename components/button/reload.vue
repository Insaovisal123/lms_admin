<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <!-- <v-btn 
        color="blue"
        x-small
        dark
        v-bind="attrs" v-on="on" @click.stop="reload()">
        <v-icon>mdi-reload</v-icon>
      </v-btn> -->
      <v-btn
        color="primary"
        dark
        v-bind="attrs" 
        v-on="on" 
        @click.stop="reload()"
      >
      <v-icon>mdi-reload</v-icon>
      </v-btn>
    </template>
    <span>Reload</span>
  </v-tooltip>
</template>

<script>

export default {
  props: {
    path: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: false,
      default: null,
    },
  },
  methods: {
    async reload() {
      await this.$store.dispatch(`${this.path}/fetchList`)
    },
  },
}
</script>
