<template>
  <v-img class="user__image" @click="isActive" width="100px" :src="img"></v-img>
  <p class="user__text" v-html="country" v-show="active"></p>
</template>

<script>
export default {
  name: "userDetail",
  props: ['img', 'country'],
  data() {
    return {
      active: false
    }
  },
  methods: {
    isActive(){
      this.active = !this.active
    }
  }
}
</script>

<style scoped>
.user__image{
  border-radius: 100px;
  cursor: pointer;
}
.user__text{
  text-transform: uppercase;
  text-align: center;
  width: 100px;
}
</style>
