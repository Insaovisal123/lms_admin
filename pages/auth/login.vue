<template>
<ValidationObserver v-slot="{ invalid }">
<v-card class="elevation-1 pa-3">
  <v-card-text>
    <div class="layout column align-center">
      <img src="https://staging.z1mobile.com/assets/Z1app.png" alt="ZILLION HOLDING" width="180" height="180">
      <h1 class="flex my-4">Login</h1>
    </div>
    <v-form>
      <!-- <v-text-field
        append-icon="mdi-account"
        name="login"
        label="Login"
        type="text"
        v-model="user.email"
      /> -->
      <v-col
        cols="12"
        md="12"
      >
        <ValidationProvider
          v-slot="{ errors }"
          name='email'
          rules="required|email"
        >
          <v-text-field
            v-model="user.email"
            append-icon="mdi-account"
            label='Email'
            :error-messages="errors"
            outlined
          ></v-text-field>
        </ValidationProvider>
      </v-col>
      <v-col
        cols="12"
        sm="12"
      >
      <ValidationProvider
          v-slot="{ errors }"
          name='password'
          rules="required"
        >
          <v-text-field
            v-model="user.password"
            label='Password'
            :append-icon="show_pass ? 'mdi-eye' : 'mdi-eye-off'"
            :error-messages="errors"
            :type="show_pass ? 'text' : 'password'"
            @click:append="show_pass = !show_pass"
            outlined
          ></v-text-field>
        </ValidationProvider>
      </v-col>
    </v-form>
  </v-card-text>
  <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn block color="primary" :disabled="invalid" @click="login" :loading="loading">Login</v-btn>
  </v-card-actions>
</v-card>
</ValidationObserver>
</template>

<script>
import Noty from 'noty';
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  layout: 'auth',
  middleware: 'guest',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      form: {
        disabled: true,
      },
      confimation: '',
      loading: false,
      show_pass: false,
      error: false,
      showResult: false,
      result: '',
      user:{
        email: '',
        password: '',
      },
      rules: {
        required: value => !!value || 'Required.'
      }
    };
  },
  methods: {
    async login() {
    console.log(this.$auth);

      await this.$auth.loginWith('local', { data: this.user })
        .then(({ status }) => {
          if (status === 200) {
            new Noty({
              text: `Login success!`,
              type: 'success',
              timeout: 2000
            }).show();
          }
        })
        .catch(err => {
          let message = 'Error!';
          if (err.response.data && err.response.data.detail) {
            message = err.response.data.detail.message;
          }

          new Noty({
            text: message,
            type: 'error',
            timeout: 2000
          }).show();
        });
    },
  }
}
</script>

<style scoped lang="css">
  #login {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
</style>
