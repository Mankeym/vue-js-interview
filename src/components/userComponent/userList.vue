<template>
  <v-list three-line>
    <template v-for="(item, index) in users.users">
      <v-divider
          v-if="item.divider"
          :key="index"
          :inset="item.inset"
      ></v-divider>

      <v-list-item
          v-else
          :key="item.title"
      >
        <user-detail :img="item.avatar" :country="item.country" />
        <v-list-item-content>
          <v-list-item-title v-html="item.title"></v-list-item-title>
          <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
import UserDetail from "@/components/userComponent/userDetail";
export default {
  name: "userList",
  components: {UserDetail},
  props: ['users']
}
</script>

<style scoped>

</style>
