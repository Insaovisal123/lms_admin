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
            name='salutation'
          >
            <v-select
              v-model="contact.salutation"
              label='Salutation'
              :items="salutation"
              :error-messages="errors"
              data-vv-name="select"
            ></v-select>
          </ValidationProvider>
          </v-col>

          <v-col
            cols="12"
            md="6">
            <ValidationProvider
              v-slot="{ errors }"
              name='first name'
              rules="required|regex:^[a-zA-Z0-9\s]*$"
            >
              <v-text-field
                v-model="contact.first_name"
                label='First Name'
                :error-messages="errors"
              ></v-text-field>
            </ValidationProvider>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <ValidationProvider
              v-slot="{ errors }"
              name='last name'
              rules="required"
            >
              <v-text-field
                v-model="contact.last_name"
                label='Last Name'
                :error-messages="errors"
              ></v-text-field>
            </ValidationProvider>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
          <ValidationProvider
            v-slot="{ errors }"
            name='gender'
          >
            <v-select
              v-model="contact.gender"
              label='Gender'
              :items="gender"
              :error-messages="errors"
              data-vv-name="select"
            ></v-select>
          </ValidationProvider>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="contact.date_of_birth"
                  label="Date of Birth"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  prepend-icon="mdi-calendar"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="contact.date_of_birth"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="menu = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <ValidationProvider
              v-slot="{ errors }"
              name='mobile phone'
              rules="required"
            >
              <v-text-field
                v-model="contact.mobile_phone"
                label='Mobile Phone'
                prepend-icon="mdi-phone-classic"
                :error-messages="errors"
              ></v-text-field>
            </ValidationProvider>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <ValidationProvider
              v-slot="{ errors }"
              name='nationality'
            >
              <v-select
                v-model="contact.nationality"
                label='Nationality'
                :items="nationality"
                :error-messages="errors"
                data-vv-name="select"
              ></v-select>
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
                v-model="contact.email"
                label='Email'
                prepend-icon="mdi-email"
                :error-messages="errors"
              ></v-text-field>
            </ValidationProvider>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <ValidationProvider
              v-slot="{ errors }"
              name='identity card number'
            >
              <v-text-field
                v-model="contact.identity_card_number"
                label='Identity Card Number'
                :error-messages="errors"
              ></v-text-field>
            </ValidationProvider>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <ValidationProvider
              v-slot="{ errors }"
              name='Address'
            >
              <v-text-field
                v-model="contact.address"
                label='Address'
                :error-messages="errors"
              ></v-text-field>
            </ValidationProvider>
          </v-col>

        </v-row>
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
    contact: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    gender: [
      '-',
      'Male',
      'Female',
      'Other'
    ],
    salutation: [
      '-',
      'Mr',
      'Ms',
      'Dr'
    ],
    nationality: [
      '-',
      'Cambodian',
      'Chinese',
      'Indonesian',
      'Malaysian',
      'Singaporean',
      'Vietnamese'
    ],
  }),
  methods: {
    save() {
      this.$emit('save')
    },
  },
}
</script>
