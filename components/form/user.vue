<template>
  <ValidationObserver v-slot="{ invalid }">
    <v-card-text>
      <v-form>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <ValidationProvider
              v-slot="{ errors }"
              name='first_name'
              rules="required|regex:^[a-zA-Z0-9\s]*$"
            >
              <v-text-field
                v-model="user.first_name"
                label='First Name'
                :error-messages="errors"
                outlined
              ></v-text-field>
            </ValidationProvider>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <ValidationProvider
              v-slot="{ errors }"
              name='last_name'
              rules="required"
            >
              <v-text-field
                v-model="user.last_name"
                label='Last Name'
                :error-messages="errors"
                outlined
              ></v-text-field>
            </ValidationProvider>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <ValidationProvider
              v-slot="{ errors }"
              name='email'
              rules="required|email"
            >
              <v-text-field
                v-model="user.email"
                label='Email'
                :error-messages="errors"
                outlined
              ></v-text-field>
            </ValidationProvider>
          </v-col>
          <v-col
            cols="12"
            sm="6"
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
                hint="At least 8 characters"
                @click:append="show_pass = !show_pass"
                outlined
              ></v-text-field>
            </ValidationProvider>
          </v-col>
        </v-row>

        <!-- <ValidationProvider
          v-slot="{ errors }"
          name='status'
          rules="required|regex:^[a-zA-Z0-9\s]*$"
        >
          <v-text-field
            v-model="user.status"
            label='Status'
            :error-messages="errors"
          ></v-text-field>
        </ValidationProvider> -->
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" :disabled="invalid" @click="save()">Save</v-btn>
    </v-card-actions>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    show_pass: false,
  }),
  methods: {
    save() {
      this.$emit('save')
    },
  },
}
</script>
