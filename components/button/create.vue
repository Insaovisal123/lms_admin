<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="mx-2"
        color="green"
        dark
        v-bind="attrs" 
        v-on="on" 
        @click.stop="create()"
      >
        Create
      </v-btn>
    </template>
    <span>Create</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  methods: {
    create() {
      this.$router.push(
        this.path + `/create`
      )
    },
  },
}
</script>
