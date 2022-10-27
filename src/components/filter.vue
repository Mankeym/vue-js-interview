<template>
  <div>
    <v-select
        v-for="(filter) in filtersSettings"
        v-model="filter.model"
        :key="filter.id"
        :items="filter.items"
        :label="filter.label"
        @update:modelValue="updateData"
    />
  </div>
</template>

<script>
export default {
  name: "filter-users",
  props:['filtersSettings', 'data', 'handler'],
  methods: {
    updateData() {
      const result = {}
      console.log(this.data.users)
      this.filtersSettings.forEach((item) => {
        result[item.id] = item.model
      })
      this.$emit('update', result)
      this.handler()
    }
  }
}
</script>

<style scoped>

</style>
