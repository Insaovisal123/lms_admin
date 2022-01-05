<template>
  <ValidationObserver v-slot="{ invalid }">
    <v-card-text>
      <v-form>
        <v-row>
          
          <v-col
            cols="12"
            md="6"
          >
          <v-checkbox
            v-model="deal.is_sale"
            :label="`For sale`"
          ></v-checkbox>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
          <v-checkbox
            v-model="deal.is_rent"
            :label="`For rent`"
          ></v-checkbox>
          </v-col>
           
          <v-col
            cols="12"
            md="6"
          >
            <ValidationProvider
              v-slot="{ errors }"
              name='property owner'
              rules="required"
            >
              <v-text-field
                v-model="deal.property_owner"
                label='Property Owner'
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
            name='type'
            rules="required"
          >
            <v-select
              v-model="deal.type"
              label='Type'
              :items="record_type"
              :error-messages="errors"
              data-vv-name="select"
              required
            ></v-select>
          </ValidationProvider>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <ValidationProvider
              v-slot="{ errors }"
              name='sale_price'
              type="number"
            >
              <v-text-field
                v-model="deal.sale_price"
                label='Sale price'
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
              name='rent_price'
              type="number"
            >
              <v-text-field
                v-model="deal.rent_price"
                label='Rent price'
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
              name='width'
              type="number"
            >
              <v-text-field
                v-model="deal.width"
                label='Width'
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
              name='length'
              type="number"
            >
              <v-text-field
                v-model="deal.length"
                label='Length'
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
              name='area'
              rules="required|regex:^[0-9\s]*$"
            >
              <v-text-field
                v-model="deal.area"
                label='Area'
                :error-messages="errors"

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
              v-model="deal.address"
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
    deal: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    property_owner: [
      '1',
      '2',
      '3',
      '4'
    ],
    record_type: [
      'Land',
      'Building',
      'Land and Building'
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
