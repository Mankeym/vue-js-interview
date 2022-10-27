<template>
  <div class="overlay" v-show="loading">
    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <v-col cols="12">
        <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>

      <v-col
          cols="12"
          md="4"
      >
        <filter-users :filtersSettings="filtersSettings" :data="this.users" :handler="filtered" @update="setFilters" />

      </v-col>

      <v-col
          cols="12"
          md="4"
      >
        <v-card
            max-width="450"
            class="mx-auto"
        >
          <user-list :users="getUsers" />
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import FilterUsers from "@/components/filter";
import UserList from "@/components/userComponent/userList";
export default {
  name: 'ContentBlock',
  components: {UserList, FilterUsers},
  mounted() {
    this.$store.dispatch('getUsers')
  },
  computed: {
    ...mapGetters({
      users: 'users',
      filters:'userFilters',
    }),
    getUsers(){
      return this.$store.state.usersStore.users
    },
    getFilteredUsers(){
      return this.$store.state.usersStore.filteredUsers
    }
  },
  methods: {
    ...mapMutations({
      setFilters: 'mutationUserFilters'
    }),
    sortByCountry(items, country) {
      return country ? items.users.filter(item => item.country === country) : items
    },
    sortByScore(items, score) {
      return score ? items.filter(item => {
        return eval(`${item.score} ${score}`)
      }) : items
    },
    filtered(){
      const country = this.filters.countries
      const score = this.filters.scores
      console.log(country,score)
      this.loading = true
      setTimeout(() => {
        this.$store.dispatch('getUsers', this.sortByScore(this.sortByCountry(this.getFilteredUsers, country), score))
        this.loading = false
      }, 1000)
    }
  },
  data: () => ({
    loading: false,
    filtersSettings: [
      {
        id: 'countries',
        label: 'Filter by country',
        model: null,
        items: [
          'russia',
          'usa'
        ],
      },
      {
        id: 'scores',
        label: 'Filter by score',
        model: null,
        items: [
          '> 20',
          '< 10'
        ]
      }
    ],
  }),
}
</script>
<style>
.overlay{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255, 1);
  z-index: 9999
}
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: black;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
