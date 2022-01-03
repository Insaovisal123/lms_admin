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
            name='status'
            rules="required"
          >
            <v-select
              v-model="lead.status"
              label='Salutation'
              :items="salutation"
              :error-messages="errors"
              data-vv-name="select"
              required
              outlined
            ></v-select>
          </ValidationProvider>
          </v-col>

          <v-col
            cols="12"
            md="6">
            <ValidationProvider
              v-slot="{ errors }"
              name='first_name'
              rules="required|regex:^[a-zA-Z0-9\s]*$"
            >
              <v-text-field
                v-model="lead.first_name"
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
                v-model="lead.last_name"
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
            name='status'
            rules="required"
          >
            <v-select
              v-model="lead.status"
              label='Gender'
              :items="status"
              :error-messages="errors"
              data-vv-name="select"
              required
              outlined
            ></v-select>
          </ValidationProvider>
          </v-col>

          <v-col
            cols="12"
            md="6">
            <ValidationProvider
              v-slot="{ errors }"
              name='first_name'
            >
              <v-text-field
                v-model="lead.first_name"
                label='Date of Birth'
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
              name='phone'
              rules="required"
            >
              <v-text-field
                v-model="lead.phone"
                label='Phone'
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
              name='amount'
              rules="required|regex:^[0-9\s]*$"
            >
              <v-text-field
                v-model="lead.amount"
                label='Amount'
                :error-messages="errors"
                prefix="$"
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
              name='description'
              rules="required"
            >
              <v-text-field
                v-model="lead.description"
                label='Description'
                :error-messages="errors"
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
            v-model="lead.status"
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
    lead: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    status: [
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
  }),
  methods: {
    save() {
      this.$emit('save')
    },
  },
}
</script>
