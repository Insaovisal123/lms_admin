<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on" @click.stop="back()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </template>
    <span>Back</span>
  </v-tooltip>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1)
    },
  },
}
</script>
