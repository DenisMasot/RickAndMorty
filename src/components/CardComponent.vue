<script lang="ts" setup>
  const props = defineProps({
    val: {
      type: Object,
      required: true,
    },
    goToDetails: {
      type: Function,
      required: true,
    }
  })
</script>

<template>
  <div @click="goToDetails(val.id)">
    {{ val.name }}
  </div>
</template>