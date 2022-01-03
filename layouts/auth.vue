<template>
  <div class="h-100 d-flex justify-content-center">
    <v-card
      class="my-auto border-0 shadow-sm rounded auth-form"
    >
      <Nuxt />
    </v-card>
  </div>
</template>

<style lang="scss">
  html, body {
    height: 100%;

    #__nuxt {
      height: 100%;

      #__layout {
        height: 100%;

        .auth-form {
          width: 360px;
        }
      }
    }
  }
</style>
