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
              name='property'
              rules="required"
            >
              <v-text-field
                v-model="loancontract.property_id"
                label='Property'
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
              name='financial institution'
              rules="required"
            >
              <v-text-field
                v-model="loancontract.financial_institution"
                label='Financial Institution'
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
              name='borrower'
              rules="required"
            >
              <v-text-field
                v-model="loancontract.borrower_id"
                label='Borrower'
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
              name='loan purpose'
            >
              <v-text-field
                v-model="loancontract.loan_purpose"
                label='Loan Purpose'
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
            name='loan type'
            rules="required"
          >
            <v-select
              v-model="loancontract.loan_type"
              label='Loan Type'
              :items="loan_type"
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
              name='request amount'
              rules="required|regex:^[0-9\s]*$"
            >
              <v-text-field
                v-model="loancontract.request_amount"
                label='Request Amount'
                :error-messages="errors"
                prefix="$"
              ></v-text-field>
            </ValidationProvider>
          </v-col>

           <v-col
            cols="12"
            md="6"
          >
            <ValidationProvider
              v-slot="{ errors }"
              name='approved amount'
              rules="required|regex:^[0-9\s]*$"
            >
              <v-text-field
                v-model="loancontract.approved_amount"
                label='Approved Amount'
                :error-messages="errors"
                prefix="$"
              ></v-text-field>
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
                  v-model="loancontract.disbursement_date"
                  label="Disbursement Date"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  prepend-icon="mdi-calendar"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="loancontract.disbursement_date"
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
            <v-menu
              ref="menu"
              v-model="menu1"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="loancontract.first_collection_date"
                  label="First Collection Date"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  prepend-icon="mdi-calendar"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="loancontract.first_collection_date"
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
            <v-menu
              ref="menu"
              v-model="menu2"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="loancontract.maturity_date"
                  label="Maturity Date"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  prepend-icon="mdi-calendar"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="loancontract.maturity_date"
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
            name='status'
          >
            <v-select
              v-model="loancontract.status"
              label='Status'
              :items="status"
              :error-messages="errors"
              data-vv-name="select"
            ></v-select>
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
    loancontract: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    menu1: false,
    menu2: false,
    loan_type: [
      'Personal',
      'Business'
    ],
    status: [
      'Active',
      'In Progress',
      'Closed'
    ],
  }),
  methods: {
    save() {
      this.$emit('save')
    },
  },
}
</script>
