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
              label='Property Owner'
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
            md="6"
          >
          <ValidationProvider
            v-slot="{ errors }"
            name='status'
            rules="required"
          >
            <v-select
              v-model="lead.status"
              label='Type'
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
            md="6"
          >
          <v-checkbox
            v-model="checkbox1"
            :label="`For sale`"
          ></v-checkbox>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
          <v-checkbox
            v-model="checkbox2"
            :label="`For rent`"
          ></v-checkbox>
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
                label='Sale Price'
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
              name='amount'
              rules="required|regex:^[0-9\s]*$"
            >
              <v-text-field
                v-model="lead.amount"
                label='Rent Price'
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
              name='amount'
              rules="required|regex:^[0-9\s]*$"
            >
              <v-text-field
                v-model="lead.amount"
                label='Width'
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
                label='Length'
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
                label='Area'
                :error-messages="errors"
                outlined
              ></v-text-field>
            </ValidationProvider>
          </v-col>
          <v-col
            cols="12"
            md="12"
          >
            <v-textarea
              name="input-7-1"
              label="Address"
              prepend-icon="mdi-map-marker"
            ></v-textarea>
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
    lead: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    property_owner: [
      '-',
      'Male',
      'Female',
      'Other'
    ],
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
    checkbox1: true,
    checkbox2: false,
  }),
  methods: {
    save() {
      this.$emit('save')
    },
  },
}
</script>
