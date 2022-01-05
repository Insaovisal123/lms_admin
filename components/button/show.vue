<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn 
        color="success" 
        x-small
        fab
        v-bind="attrs" 
        v-on="on" 
        @click.stop="show()">
        <v-icon :small="small">mdi-eye</v-icon>
      </v-btn>
    </template>
    <span>Show</span>
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
      required: true,
    },
    small: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    show() {
      this.$router.push(this.path + `/${this.id}`)
    },
  },
}
</script>
