<template>
  <div>
    <p>
      <v-card>
        <v-card-actions>
          <back-btn />
          <list-btn path="/admin/user" />
          <v-spacer />
          <edit-btn :id="user.id" path="/admin/user" />
          <delete-btn :id="user.id" path="user" />
          <!-- <reload-btn :id="user.id" path="users" @reloaded="reloaded" /> -->
        </v-card-actions>
      </v-card>
    </p>
    <p>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-card
            class="mx-auto pb-2"
            max-width="400"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>User ID: {{user.id}}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import backBtn from '@/components/button/back'
import listBtn from '@/components/button/list'
import editBtn from '@/components/button/edit'
import deleteBtn from '@/components/button/delete'
import reloadBtn from '@/components/button/reload'

export default {
  components: {
    backBtn,
    listBtn,
    editBtn,
    deleteBtn,
    reloadBtn,
  },
  data() {
    return {
      user: {
        id: -1,
      },
      userId: this.$route.params.id,
    }
  },
  computed: {
    ...mapGetters('users', ['getById']),
  },
  async mounted() {
    if (this.$store.state.users.list.length === 0) {
      await this.fetchList()
    }
    this.user = this.getById(this.$route.params.id)
  },
  methods: {
    ...mapActions('users', ['fetchList']),
    reloaded(item) {
      this.user = item
    },
  },
}
</script>
