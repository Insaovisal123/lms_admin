<template>

</template>

<script>
import axios from 'axios';
import Noty from 'noty';
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { Fragment } from 'vue-fragment';

export default {
  layout: 'auth',
  // middleware: 'guest',
  components: {
    Fragment,
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      form: {
        disabled: true,
      },
      confimation: ''
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate()
        .then(async success => {
          if (!success) {
            new Noty({
              text: 'Invild data!',
              type: 'error',
              timeout: 2000
            }).show();
            return false;
          }

          await axios.post(`${process.env.API_URL}/register`, this.form)
            .then(val => {
              const { data: { success: suc } } = val;
              if (suc) {
                new Noty({
                  text: 'Success register',
                  type: suc ? 'success' : 'error',
                  timeout: 2000
                }).show();
              }

              this.form = {};
              this.confimation = '';
            })
            .catch(err => console.log(err));

          this.$nextTick(() => this.$refs.form.reset());
        });
    }
  },
  mounted() {
    console.log(this.$auth);
    console.log(process.env.API_URL);
  }
}
</script>
