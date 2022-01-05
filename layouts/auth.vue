<template>
  <v-app id="login" class="secondary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <Nuxt />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    </v-app>
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
