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
              v-model="deal.status"
              label='Status'
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
            md="6"
          >
          <ValidationProvider
            v-slot="{ errors }"
            name='stage'
            rules="required"
          >
            <v-select
              v-model="deal.stage"
              label='Stage'
              :items="stage"
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
            name='transaction_type'
            rules="required"
          >
            <v-select
              v-model="deal.transaction_type"
              label='Transaction Type'
              :items="transaction_type"
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
              name='first_name'
              rules="required|regex:^[a-zA-Z0-9\s]*$"
            >
              <v-text-field
                v-model="deal.first_name"
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
                v-model="deal.last_name"
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
              name='phone'
              rules="required"
            >
              <v-text-field
                v-model="deal.phone"
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
              name='email'
              rules="required|email"
            >
              <v-text-field
                v-model="deal.email"
                label='Email'
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
                v-model="deal.amount"
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
                v-model="deal.description"
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
            v-model="deal.status"
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
    deal: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    status: [
      'New',
      'In Progress',
      'Close Converted',
      'Close not Converted'
    ],
    stage: [
      'Qualification',
      'Required Analysis',
      'Propose Listing',
      'Nigociation',
      'Deal Close',
      'Deal Fail',
    ],
    transaction_type: [
      'Buy',
      'Sell',
    ]
  }),
  methods: {
    save() {
      this.$emit('save')
    },
  },
}
</script>
